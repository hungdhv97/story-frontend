'use client';

import { useAtom } from 'jotai/index';
import { useEffect } from 'react';

import { useGetStoryPagination, useGetTopStoryList } from '@/hooks/client';
import { useStoryListFilterConfig } from '@/hooks/custom';

import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';
import { CustomPagination } from '@/components/Common/CustomPagination/CustomPagination';
import { FilterTable } from '@/components/FilterPage/FilterTable/FilterTable';
import { GenreList } from '@/components/HomePage/UpdatedStoryList/GenreList/GenreList';
import { TopStoryList } from '@/components/StoryPage/TopStoryList/TopStoryList';

import { storyPaginationAtom, topStoryListResponseAtom } from '@/atoms';

export default function FilterStoryPage({
    params,
}: {
    params: { collection: string; slug: string };
}) {
    const [, setTopStoryListResponse] = useAtom(topStoryListResponseAtom);
    const { data: topStoryList } = useGetTopStoryList();
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

    useEffect(() => {
        if (topStoryList) {
            setTopStoryListResponse(topStoryList);
        }
    }, [topStoryList, setTopStoryListResponse]);

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