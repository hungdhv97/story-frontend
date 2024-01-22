'use client';

import { useAtom } from 'jotai';

import { TopStoryTabList } from '@/components/StoryPage/TopStoryList/TopStoryTabList/TopStoryTabList';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { topStoryListResponseAtom } from '@/atoms/topStoryListResponseAtom';

export function TopStoryList() {
    const [topStoriesResponse] = useAtom(topStoryListResponseAtom);
    return (
        <div>
            <div>Truyện Đang Hot</div>
            <Tabs defaultValue="week" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="week">Tháng</TabsTrigger>
                    <TabsTrigger value="month">Tuần</TabsTrigger>
                    <TabsTrigger value="all">Năm</TabsTrigger>
                </TabsList>
                <TabsContent value="week">
                    <TopStoryTabList stories={topStoriesResponse.week} />
                </TabsContent>
                <TabsContent value="month">
                    <TopStoryTabList stories={topStoriesResponse.month} />
                </TabsContent>
                <TabsContent value="all">
                    <TopStoryTabList stories={topStoriesResponse.all} />
                </TabsContent>
            </Tabs>
        </div>
    );
}
