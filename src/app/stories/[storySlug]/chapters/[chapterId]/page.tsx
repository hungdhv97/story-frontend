'use client';

import { useAtom } from 'jotai/index';
import { useEffect } from 'react';

import { saveChapterHistory } from '@/lib/storage';

import {
    useGetChapter,
    useGetChaptersShortInfoByStorySlug,
    useGetStory,
} from '@/data/hooks';

import { ChapterSwitcher } from '@/components/ChapterPage/ChapterSwitcher/ChapterSwitcher';
import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';

import { chaptersShortInfoResponseAtom } from '@/atoms/chaptersShortInfoResponseAtom';
import { selectedChapterAtom } from '@/atoms/selectedChapterAtom';
import { selectedStorySlugAtom } from '@/atoms/selectedStoryAtom';

export default function ChapterPage({
    params,
}: {
    params: { chapterId: string; storySlug: string };
}) {
    const { data: chapter } = useGetChapter(params.chapterId);
    const { data: story } = useGetStory(params.storySlug);
    const { data: chapterStoryInfoList } = useGetChaptersShortInfoByStorySlug(
        params.storySlug,
    );
    const [, setChapterShortInfoListResponse] = useAtom(
        chaptersShortInfoResponseAtom,
    );
    const [, setSelectedChapter] = useAtom(selectedChapterAtom);
    const [, setSelectedStorySlug] = useAtom(selectedStorySlugAtom);
    useEffect(() => {
        if (chapter) {
            saveChapterHistory(chapter);
        }
    }, [chapter]);
    useEffect(() => {
        if (chapterStoryInfoList) {
            setChapterShortInfoListResponse(chapterStoryInfoList);
        }
    }, [chapterStoryInfoList, setChapterShortInfoListResponse]);
    useEffect(() => {
        setSelectedChapter(params.chapterId);
        setSelectedStorySlug(params.storySlug);
    }, []);
    if (!chapter) return <div>Chapter loading...</div>;
    if (!story) return <div>Story loading...</div>;
    if (!chapterStoryInfoList)
        return <div>Chapter short info list loading...</div>;

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
                <ChapterSwitcher />
                <div>{chapter.content}</div>
            </div>
        </div>
    );
}
