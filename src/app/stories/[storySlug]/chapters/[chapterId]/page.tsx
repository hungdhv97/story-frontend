'use client';

import { useEffect } from 'react';

import { saveChapterHistory } from '@/lib/storage';

import { useGetChapterById } from '@/data/hooks';

export default function ChapterPage({
    params,
}: {
    params: { chapterId: string };
}) {
    const { data: chapter, isLoading } = useGetChapterById(params.chapterId);
    useEffect(() => {
        if (chapter) {
            saveChapterHistory(chapter);
        }
    }, [chapter]);
    if (isLoading) return <div>Loading...</div>;
    return <div>Detail Chapter Page {chapter.title}</div>;
}
