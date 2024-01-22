'use client';

import { useGetStoryList } from '@/data/hooks';

import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';
import { FilterTable } from '@/components/FilterPage/FilterTable/FilterTable';
import { GenreList } from '@/components/HomePage/UpdatedStoryList/GenreList/GenreList';
import { TopStoryList } from '@/components/StoryPage/TopStoryList/TopStoryList';

export default function FullStoryListPage() {
    const { data: fullStoryList } = useGetStoryList({ status: 'completed' });

    const paths = [
        { title: 'Home', href: '/' },
        { title: 'Truyện Full', href: '/filter/stories/full' },
    ];

    if (fullStoryList) {
        return (
            <div className="container">
                <Breadcrumb paths={paths} />
                <div className="flex flex-row">
                    <div className="w-2/3">
                        <div>Truyện Full</div>
                        <FilterTable storyList={fullStoryList} />
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
