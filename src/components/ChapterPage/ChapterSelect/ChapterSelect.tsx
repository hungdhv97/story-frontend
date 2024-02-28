'use client';

import { useAtom } from 'jotai/index';
import { useRouter } from 'next/navigation';
import * as React from 'react';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { selectedChapterIdAtom, selectedStorySlugAtom } from '@/atoms';
import { IChapterShortInfoResponse } from '@/interfaces/services/responses';

interface IChapterSelectProps {
    chapterStoryInfoList: IChapterShortInfoResponse[];
}

export function ChapterSelect({ chapterStoryInfoList }: IChapterSelectProps) {
    const [selectedChapterId] = useAtom(selectedChapterIdAtom);
    const [selectedStorySlug] = useAtom(selectedStorySlugAtom);
    const router = useRouter();

    const handleSelectionChange = (chapterId: string) => {
        router.push(`/stories/${selectedStorySlug}/chapters/${chapterId}`);
    };

    return (
        <Select
            value={selectedChapterId.toString()}
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
