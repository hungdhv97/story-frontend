'use client';

import { useGetStoryPagination } from '@/data/hooks';

import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';
import { CustomPagination } from '@/components/Common/CustomPagination/CustomPagination';
import { FilterTable } from '@/components/FilterPage/FilterTable/FilterTable';
import { GenreList } from '@/components/HomePage/UpdatedStoryList/GenreList/GenreList';
import { TopStoryList } from '@/components/StoryPage/TopStoryList/TopStoryList';

import { storyPaginationAtom } from '@/atoms/storyPaginationAtom';
import { storyListFilterConfig } from '@/constants';

type Collection = 'stories';
type Slug = 'full' | 'hot' | 'updated' | 'new';

export default function FilterStoryPage({
    params,
}: {
    params: { collection: Collection; slug: Slug };
}) {
    const { data: storyPagination } = useGetStoryPagination({
        paginationAtom: storyPaginationAtom,
        ...storyListFilterConfig[params.collection][params.slug].queryParams,
    });

    const paths = [
        { title: 'Home', href: '/' },
        storyListFilterConfig[params.collection][params.slug].path,
    ];

    if (storyPagination) {
        return (
            <div className="container">
                <Breadcrumb paths={paths} />
                <div className="flex flex-row">
                    <div className="w-2/3">
                        <div>
                            {
                                storyListFilterConfig[params.collection][
                                    params.slug
                                ].path.title
                            }
                        </div>
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
