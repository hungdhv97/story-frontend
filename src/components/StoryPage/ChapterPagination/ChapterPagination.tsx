import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect } from 'react';

import { useGetChaptersShortInfoByStorySlug } from '@/data/hooks';

import { chaptersShortInfoResponseAtom } from '@/atoms/chaptersShortInfoResponseAtom';
import {
    IChapterShortInfo,
    IStoryResponse,
} from '@/interfaces/services/responses';

interface IChapterPaginationProps {
    story: IStoryResponse;
}

export function ChapterPagination({ story }: IChapterPaginationProps) {
    const { data: chaptersShortInfo, isLoading } =
        useGetChaptersShortInfoByStorySlug(story.slug);
    const [chaptersShortInfoResponse, setChaptersShortInfoResponse] = useAtom(
        chaptersShortInfoResponseAtom,
    );
    useEffect(() => {
        if (chaptersShortInfo) {
            setChaptersShortInfoResponse(chaptersShortInfo);
        }
    }, [chaptersShortInfo, setChaptersShortInfoResponse]);
    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <div>Danh Sách Chương</div>
            {chaptersShortInfoResponse.map(
                (chapterShortInfo: IChapterShortInfo) => (
                    <div key={chapterShortInfo.id}>
                        <Link
                            href={`/stories/${story.slug}/chapters/${chapterShortInfo.id}`}
                        >
                            {chapterShortInfo.title}
                        </Link>
                    </div>
                ),
            )}
        </div>
    );
}
