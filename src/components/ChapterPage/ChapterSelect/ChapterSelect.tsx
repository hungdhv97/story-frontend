'use client';

import { useAtom } from 'jotai/index';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import { useGetChapterShortInfoList } from '@/hooks/client';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { selectedChapterIdAtom } from '@/atoms/selectedChapterIdAtom';
import { selectedStorySlugAtom } from '@/atoms/selectedStoryAtom';
import { IChapterShortInfoResponse } from '@/interfaces/services/responses';

export function ChapterSelect() {
    const [selectedChapterId] = useAtom(selectedChapterIdAtom);
    const [selectedStorySlug] = useAtom(selectedStorySlugAtom);

    const { data: chapterStoryInfoList } =
        useGetChapterShortInfoList(selectedStorySlug);

    const router = useRouter();

    const handleSelectionChange = (chapterId: string) => {
        router.push(`/stories/${selectedStorySlug}/chapters/${chapterId}`);
    };

    if (chapterStoryInfoList) {
        return (
            <Select
                value={selectedChapterId}
                onValueChange={handleSelectionChange}
            >
                <SelectTrigger className="w-[300px]">
                    <SelectValue placeholder={selectedChapterId} />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        {chapterStoryInfoList.map(
                            (chapterShortInfo: IChapterShortInfoResponse) => (
                                <SelectItem
                                    key={chapterShortInfo.id}
                                    value={chapterShortInfo.id.toString()}
                                >
                                    {chapterShortInfo.title}
                                </SelectItem>
                            ),
                        )}
                    </SelectGroup>
                </SelectContent>
            </Select>
        );
    }
}
