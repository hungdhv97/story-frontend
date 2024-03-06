'use client';

import { useAtom } from 'jotai/index';
import { useEffect } from 'react';

import { saveChapterHistory } from '@/lib/storage';
import {
    useGetChapter,
    useGetChapterShortInfoList,
    useGetStory,
} from '@/hooks/client';

import { ChapterListPagination } from '@/components/ChapterPage/ChapterListPagination/ChapterListPagination';
import { Breadcrumb } from '@/components/Common/Breadcrumb/Breadcrumb';
import { H2 } from '@/components/Common/Custom/Custom';

import { selectedChapterIdAtom, selectedStorySlugAtom } from '@/atoms';

export default function ChapterPage({
    params,
}: {
    params: { chapterId: string; storySlug: string };
}) {
    const { data: chapter } = useGetChapter(parseInt(params.chapterId));
    const { data: story } = useGetStory(params.storySlug);
    const { data: chapterStoryInfoList } = useGetChapterShortInfoList(
        params.storySlug,
    );

    const [, setSelectedChapterId] = useAtom(selectedChapterIdAtom);
    const [, setSelectedStorySlug] = useAtom(selectedStorySlugAtom);

    useEffect(() => {
        if (chapter) {
            saveChapterHistory(chapter);
        }
    }, [chapter]);

    useEffect(() => {
        setSelectedChapterId(parseInt(params.chapterId));
        setSelectedStorySlug(params.storySlug);
    }, [
        params.chapterId,
        params.storySlug,
        setSelectedChapterId,
        setSelectedStorySlug,
    ]);

    if (chapter && story) {
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
                    <H2 className="text-center">{chapter.title}</H2>
                    {chapterStoryInfoList && (
                        <ChapterListPagination
                            chapterStoryInfoList={chapterStoryInfoList}
                        />
                    )}
                    <div className="text-justify text-2xl">
                        {chapter.content
                            .split('\n')
                            .map((line, index, array) => (
                                <span key={index}>
                                    {line}
                                    {index < array.length - 1 && (
                                        <div className="my-3" />
                                    )}
                                </span>
                            ))}
                    </div>
                    {chapterStoryInfoList && (
                        <ChapterListPagination
                            chapterStoryInfoList={chapterStoryInfoList}
                        />
                    )}
                </div>
            </div>
        );
    }
}
