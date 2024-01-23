'use client';

import { useGetAuthor, useGetGenre, useGetStoryPagination } from '@/data/hooks';

import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';
import { CustomPagination } from '@/components/Common/CustomPagination/CustomPagination';
import { FilterTable } from '@/components/FilterPage/FilterTable/FilterTable';
import { GenreList } from '@/components/HomePage/UpdatedStoryList/GenreList/GenreList';
import { TopStoryList } from '@/components/StoryPage/TopStoryList/TopStoryList';

import { storyPaginationAtom } from '@/atoms/storyPaginationAtom';

interface IStoryListFilterConfig {
    queryParams: {
        authorId?: number;
        genreSlug?: string;
        isHot?: boolean;
        isNew?: boolean;
        status?: string;
    };
    paths: {
        title: string;
        href: string;
    }[];
}

const useStoryListFilterConfig: (
    collection: string,
    slug: string,
) => IStoryListFilterConfig = (collection, slug) => {
    const { data: genre } = useGetGenre(slug);
    const { data: author } = useGetAuthor(parseInt(slug));

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

export default function FilterStoryPage({
    params,
}: {
    params: { collection: string; slug: string };
}) {
    const storyListFilterConfig = useStoryListFilterConfig(
        params.collection,
        params.slug,
    );

    const { data: storyPagination } = useGetStoryPagination({
        paginationAtom: storyPaginationAtom,
        ...storyListFilterConfig.queryParams,
    });

    const paths = [
        { title: 'Home', href: '/' },
        ...storyListFilterConfig.paths,
    ];

    if (storyPagination) {
        return (
            <div className="container">
                <Breadcrumb paths={paths} />
                <div className="flex flex-row">
                    <div className="w-2/3">
                        <div>{storyListFilterConfig.paths[0].title}</div>
                        <FilterTable storyList={storyPagination.results} />
                        <CustomPagination
                            totalPages={
                                storyPagination.meta.pagination.total_pages
                            }
                            paginationAtom={storyPaginationAtom}
                        />
                    </div>
                    <div className="w-1/3 fex flex-col">
                        <GenreList />
                        <TopStoryList />
                    </div>
                </div>
            </div>
        );
    }
}
