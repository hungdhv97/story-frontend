import { useAtom } from 'jotai/index';
import Link from 'next/link';
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
import { IChapterShortInfo } from '@/interfaces/services/responses';

export function ChapterSelect() {
    const [chapterShortInfoListResponse] = useAtom(
        chaptersShortInfoResponseAtom,
    );
    const [selectedChapter] = useAtom(selectedChapterAtom);
    const [selectedStorySlug] = useAtom(selectedStorySlugAtom);
    return (
        <Select defaultValue={selectedChapter}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder={selectedChapter} />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    {chapterShortInfoListResponse.map(
                        (chapterShortInfo: IChapterShortInfo) => (
                            <SelectItem
                                key={chapterShortInfo.id}
                                value={chapterShortInfo.id.toString()}
                            >
                                <Link
                                    href={`/stories/${selectedStorySlug}/chapters/${chapterShortInfo.id}`}
                                >
                                    {chapterShortInfo.title}
                                </Link>{' '}
                            </SelectItem>
                        ),
                    )}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
