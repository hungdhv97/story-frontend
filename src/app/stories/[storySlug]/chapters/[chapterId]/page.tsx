'use client';

import { useEffect } from 'react';

import { saveChapterHistory } from '@/lib/storage';

import { useGetChapterById, useGetStoryByStorySlug } from '@/data/hooks';

import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';

export default function ChapterPage({
    params,
}: {
    params: { chapterId: string; storySlug: string };
}) {
    const { data: chapter } = useGetChapterById(params.chapterId);
    const { data: story } = useGetStoryByStorySlug(params.storySlug);

    useEffect(() => {
        if (chapter) {
            saveChapterHistory(chapter);
        }
    }, [chapter]);

    if (!chapter) return <div>Chapter loading...</div>;
    if (!story) return <div>Story loading...</div>;

    const paths = [
        { title: 'Home', href: '/' },
        { title: `${story.title}`, href: `/stories/${story.slug}` },
        {
            title: `${chapter.title}`,
            href: `/stories/${story.slug}/chapters/${chapter.id}`,
        },
    ];
    return (
        <div className="container">
            <Breadcrumb paths={paths} />
        </div>
    );
}
