'use client';

import { useAtom } from 'jotai/index';
import { useEffect } from 'react';

import { saveChapterHistory } from '@/lib/storage';
import { useGetChapter, useGetStory } from '@/hooks/client';

import { ChapterNavigation } from '@/components/ChapterPage/ChapterNavigation/ChapterNavigation';
import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';

import { selectedChapterIdAtom, selectedStorySlugAtom } from '@/atoms';

export default function ChapterPage({
    params,
}: {
    params: { chapterId: string; storySlug: string };
}) {
    const { data: chapter } = useGetChapter(params.chapterId);
    const { data: story } = useGetStory(params.storySlug);

    const [, setSelectedChapterId] = useAtom(selectedChapterIdAtom);
    const [, setSelectedStorySlug] = useAtom(selectedStorySlugAtom);

    useEffect(() => {
        if (chapter) {
            saveChapterHistory(chapter);
        }
    }, [chapter]);

    useEffect(() => {
        setSelectedChapterId(params.chapterId);
        setSelectedStorySlug(params.storySlug);
    }, []);

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
            <div className="container flex flex-col">
                <div className="text-center">{chapter.title}</div>
                <ChapterNavigation />
                <div>{chapter.content}</div>
            </div>
        </div>
    );
}