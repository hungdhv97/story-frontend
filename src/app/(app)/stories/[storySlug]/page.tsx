'use client';

import { useGetStory } from '@/hooks/client';

import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';
import { ChapterList } from '@/components/StoryPage/ChapterList/ChapterList';
import { StoryInformation } from '@/components/StoryPage/StoryInformation/StoryInformation';
import { StoryWithSameAuthorList } from '@/components/StoryPage/StoryWithSameAuthorList/StoryWithSameAuthorList';
import { TopStoryList } from '@/components/StoryPage/TopStoryList/TopStoryList';

export default function StoryPage({
    params,
}: {
    params: { storySlug: string };
}) {
    const { data: story, isLoading } = useGetStory(params.storySlug);

    if (isLoading) return <div>Loading...</div>;
    if (!story) return <div>Story not found.</div>;

    const paths = [
        { title: 'Home', href: '/' },
        { title: `${story.title}`, href: `/stories/${story.slug}` },
    ];
    return (
        <div className="container">
            <Breadcrumb paths={paths} />
            <div className="flex space-x-4">
                <div className="basis-2/3">
                    <StoryInformation story={story} />
                    <ChapterList story={story} />
                </div>
                <div className="basis-1/3">
                    <StoryWithSameAuthorList story={story} />
                    <TopStoryList />
                </div>
            </div>
        </div>
    );
}
