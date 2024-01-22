'use client';

import { useGetStoryPagination } from '@/data/hooks';

import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';
import { CustomPagination } from '@/components/Common/CustomPagination/CustomPagination';
import { FilterTable } from '@/components/FilterPage/FilterTable/FilterTable';
import { GenreList } from '@/components/HomePage/UpdatedStoryList/GenreList/GenreList';
import { TopStoryList } from '@/components/StoryPage/TopStoryList/TopStoryList';

import { storyPaginationAtom } from '@/atoms/storyPaginationAtom';

export default function FullStoryListPage() {
    const { data: fullStoryPagination } = useGetStoryPagination({
        paginationAtom: storyPaginationAtom,
        status: 'completed',
    });

    const paths = [
        { title: 'Home', href: '/' },
        { title: 'Truyện Full', href: '/filter/stories/full' },
    ];

    if (fullStoryPagination) {
        return (
            <div className="container">
                <Breadcrumb paths={paths} />
                <div className="flex flex-row">
                    <div className="w-2/3">
                        <div>Truyện Full</div>
                        <FilterTable storyList={fullStoryPagination.results} />
                        <CustomPagination
                            totalPages={
                                fullStoryPagination.meta.pagination.total_pages
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
