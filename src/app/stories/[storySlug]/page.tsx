'use client';

import { useGetStoryByStorySlug } from '@/data/hooks';

import Breadcrumb from '@/components/story/breadcrumb';

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
            <div>Thông tin truyện</div>
        </div>
    );
}
