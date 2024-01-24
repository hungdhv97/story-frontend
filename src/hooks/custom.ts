import { SetStateAction, useAtom, WritableAtom } from 'jotai/index';
import { useEffect, useState } from 'react';

import { useGetAuthor, useGetGenre } from '@/hooks/client';

import { IPagination } from '@/interfaces/common';

export const usePagination = (
    paginationAtom: WritableAtom<
        IPagination,
        [SetStateAction<IPagination>],
        void
    >,
) => {
    const [pagination, setPagination] = useAtom(paginationAtom);

    const nextPage = () => {
        setPagination({ ...pagination, page: pagination.page + 1 });
    };

    const prevPage = () => {
        setPagination({
            ...pagination,
            page: Math.max(1, pagination.page - 1),
        });
    };

    const goToPage = (pageNumber: number) => {
        setPagination({
            ...pagination,
            page: pageNumber,
        });
    };

    return { pagination, nextPage, prevPage, goToPage };
};

interface IStoryListFilterConfig {
    queryParams: {
        authorId?: number;
        genreSlug?: string;
        isHot?: boolean;
        isNew?: boolean;
        status?: string;
        totalChaptersFrom?: number;
        totalChaptersTo?: number;
    };
    paths: {
        title: string;
        href: string;
    }[];
}

export const useStoryListFilterConfig: (
    collection: string,
    slug: string,
) => IStoryListFilterConfig = (collection, slug) => {
    const { data: genre } = useGetGenre(slug);
    const { data: author } = useGetAuthor(
        isNaN(parseInt(slug, 10)) ? 1 : parseInt(slug, 10),
    );

    switch (collection) {
        case 'stories':
            switch (slug) {
                case 'full':
                    return {
                        queryParams: {
                            status: 'completed',
                        },
                        paths: [
                            {
                                title: 'Truyện Full',
                                href: '/filter/stories/full',
                            },
                        ],
                    };
                case 'hot':
                    return {
                        queryParams: {
                            isHot: true,
                        },
                        paths: [
                            {
                                title: 'Truyện Hot',
                                href: '/filter/stories/hot',
                            },
                        ],
                    };
                case 'updated':
                    return {
                        queryParams: {
                            isNew: true,
                        },
                        paths: [
                            {
                                title: 'Truyện Mới Cập Nhật',
                                href: '/filter/stories/updated',
                            },
                        ],
                    };
                case 'new':
                    return {
                        queryParams: {
                            isNew: true,
                        },
                        paths: [
                            {
                                title: 'Truyện Mới',
                                href: '/filter/stories/new',
                            },
                        ],
                    };
                case 'all':
                    return {
                        queryParams: {},
                        paths: [
                            {
                                title: 'Tất Cả Truyện',
                                href: '/filter/stories/all',
                            },
                        ],
                    };
            }
            break;
        case 'chapters':
            switch (slug) {
                case 'lower-100':
                    return {
                        queryParams: {
                            totalChaptersTo: 100,
                        },
                        paths: [
                            {
                                title: 'Truyện Dưới 100 Chương',
                                href: '/filter/chapters/lower-100',
                            },
                        ],
                    };
                case 'from-100-to-500':
                    return {
                        queryParams: {
                            totalChaptersFrom: 100,
                            totalChaptersTo: 500,
                        },
                        paths: [
                            {
                                title: 'Truyện Từ 100 Đến 500 Chương',
                                href: '/filter/chapters/from-100-to-500',
                            },
                        ],
                    };
                case 'from-500-to-1000':
                    return {
                        queryParams: {
                            totalChaptersFrom: 500,
                            totalChaptersTo: 1000,
                        },
                        paths: [
                            {
                                title: 'Truyện Từ 500 Đến 1000 Chương',
                                href: '/filter/chapters/from-500-to-1000',
                            },
                        ],
                    };
                case 'more-than-1000':
                    return {
                        queryParams: {
                            totalChaptersFrom: 1000,
                        },
                        paths: [
                            {
                                title: 'Truyện Trên 1000 Chương',
                                href: '/filter/chapters/more-than-1000',
                            },
                        ],
                    };
                case 'all':
                    return {
                        queryParams: {},
                        paths: [
                            {
                                title: 'Tất Cả Truyện',
                                href: '/filter/stories/all',
                            },
                        ],
                    };
            }
            break;
        case 'genres':
            if (genre) {
                return {
                    queryParams: { genreSlug: slug },
                    paths: [
                        {
                            title: genre.name,
                            href: `/filter/genres/${slug}`,
                        },
                    ],
                };
            }
            break;
        case 'authors':
            if (author) {
                return {
                    queryParams: { authorId: parseInt(slug) },
                    paths: [
                        {
                            title: author.name,
                            href: `/filter/authors/${slug}`,
                        },
                    ],
                };
            }
    }
    return {
        queryParams: {},
        paths: [
            {
                title: 'Tất Cả Truyện',
                href: '/filter/stories/all',
            },
        ],
    };
};

export function useDebounce(value: string, delay: number) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}
