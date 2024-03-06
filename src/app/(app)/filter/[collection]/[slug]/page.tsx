'use client';

import { useAtom } from 'jotai/index';
import { useEffect } from 'react';

import { useGetStoryPagination, useGetTopStoryList } from '@/hooks/client';
import { useStoryListFilterConfig } from '@/hooks/custom';

import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';
import { H1 } from '@/components/Common/Custom/Custom';
import { StoryListPagination } from '@/components/Common/StoryListPagination/StoryListPagination';
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
                <div className="flex flex-row space-x-3">
                    <div className="w-2/3">
                        <H1>{storyListFilterConfig.paths[0].title}</H1>
                        <FilterTable storyList={storyPagination.results} />
                        <StoryListPagination
                            totalPages={
                                storyPagination.meta.pagination.total_pages
                            }
                            paginationAtom={storyPaginationAtom}
                        />
                    </div>
                    <div className="flex w-1/3 flex-col">
                        <GenreList />
                        <TopStoryList />
                    </div>
                </div>
            </div>
        );
    }
}
