'use client';

import { useGetStoryByStorySlug } from '@/data/hooks';

import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';
import { ChapterPagination } from '@/components/StoryPage/ChapterPagination/ChapterPagination';
import { HottestStoryList } from '@/components/StoryPage/HottestStoryList/HottestStoryList';
import { StoryInformation } from '@/components/StoryPage/StoryInformation/StoryInformation';
import { StoryWithSameAuthorList } from '@/components/StoryPage/StoryWithSameAuthorList/StoryWithSameAuthorList';

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
                    <ChapterPagination story={story} />
                </div>
                <div className="basis-1/3">
                    <StoryWithSameAuthorList story={story} />
                    <HottestStoryList story={story} />
                </div>
            </div>
        </div>
    );
}
