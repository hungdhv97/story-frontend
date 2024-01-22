import { useAtom } from 'jotai';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useGetChaptersShortInfoByStorySlug } from '@/data/hooks';

import { MainPagination } from '@/components/Common/MainPagination/MainPagination';

import { chaptersShortInfoResponseAtom } from '@/atoms/chaptersShortInfoResponseAtom';
import {
    IChapterShortInfoResponse,
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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [chaptersPerPage] = useState<number>(10);
    useEffect(() => {
        if (chaptersShortInfo) {
            setChaptersShortInfoResponse(chaptersShortInfo);
        }
    }, [chaptersShortInfo, setChaptersShortInfoResponse]);

    const indexOfLastChapter = currentPage * chaptersPerPage;
    const indexOfFirstChapter = indexOfLastChapter - chaptersPerPage;
    const currentChapters = chaptersShortInfoResponse.slice(
        indexOfFirstChapter,
        indexOfLastChapter,
    );

    const totalPages = Math.ceil(
        chaptersShortInfoResponse.length / chaptersPerPage,
    );

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <div>Danh Sách Chương</div>
            <div className="grid grid-rows-5 grid-flow-col">
                {currentChapters.map(
                    (chapterShortInfo: IChapterShortInfoResponse) => (
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
            <MainPagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}
