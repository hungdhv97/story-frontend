'use client';

import { useGetStoryByStorySlug } from '@/data/hooks';

import Breadcrumb from '@/components/common/breadcrumb';
import ChaptersPagination from '@/components/story/chapters-pagination';
import HottestStories from '@/components/story/hottest-stories';
import StoriesWithSameAuthor from '@/components/story/stories-with-same-author';
import StoryInformation from '@/components/story/story-information';

export default function StoryPage({
    params,
}: {
    params: { storySlug: string };
}) {
    const { data: story, isLoading } = useGetStoryByStorySlug(params.storySlug);

    if (isLoading) return <div>Loading...</div>;
    if (!story) return <div>Story not found.</div>;

    const paths = [
        { title: 'Home', href: '/' },
        { title: `${story.title}`, href: `/stories/${story.slug}` },
    ];
    return (
        <div className="container">
            <Breadcrumb paths={paths} />
            <div className="flex">
                <div className="basis-2/3">
                    <StoryInformation story={story} />
                    <ChaptersPagination />
                </div>
                <div className="basis-1/3">
                    <StoriesWithSameAuthor />
                    <HottestStories />
                </div>
            </div>
        </div>
    );
}
