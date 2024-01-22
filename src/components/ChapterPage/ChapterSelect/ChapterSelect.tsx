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

import { chaptersShortInfoResponseAtom } from '@/atoms/chaptersShortInfoResponseAtom';
import { selectedChapterAtom } from '@/atoms/selectedChapterAtom';
import { selectedStorySlugAtom } from '@/atoms/selectedStoryAtom';
import { IChapterShortInfoResponse } from '@/interfaces/services/responses';

export function ChapterSelect() {
    const [chapterShortInfoListResponse] = useAtom(
        chaptersShortInfoResponseAtom,
    );
    const [selectedChapter, setSelectedChapter] = useAtom(selectedChapterAtom);
    const [selectedStorySlug] = useAtom(selectedStorySlugAtom);
    const router = useRouter();

    const handleSelectionChange = (chapterId: string) => {
        setSelectedChapter(chapterId);
        router.push(`/stories/${selectedStorySlug}/chapters/${chapterId}`);
    };
    return (
        <Select
            defaultValue={selectedChapter}
            onValueChange={handleSelectionChange}
        >
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={selectedChapter} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {chapterShortInfoListResponse.map(
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
