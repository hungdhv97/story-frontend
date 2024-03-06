import Link from 'next/link';

import { useGetChapterShortInfoPagination } from '@/hooks/client';

import { StoryListPagination } from '@/components/Common/StoryListPagination/StoryListPagination';

import { chapterPaginationAtom } from '@/atoms';
import {
    IChapterShortInfoResponse,
    IStoryResponse,
} from '@/interfaces/services/responses';

interface IChapterPaginationProps {
    story: IStoryResponse;
}

export function ChapterList({ story }: IChapterPaginationProps) {
    const { data: chapterShortInfoPagination } =
        useGetChapterShortInfoPagination({
            paginationAtom: chapterPaginationAtom,
            storySlug: story.slug,
        });

    if (!chapterShortInfoPagination) return <div>Loading...</div>;

    return (
        <div>
            <div className="py-3 text-3xl font-bold">Danh Sách Chương</div>
            <div className="grid grid-flow-col grid-cols-2 grid-rows-5">
                {chapterShortInfoPagination.results.map(
                    (chapterShortInfo: IChapterShortInfoResponse) => (
                        <div key={chapterShortInfo.id}>
                            <Link
                                className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400"
                                href={`/stories/${story.slug}/chapters/${chapterShortInfo.id}`}
                            >
                                {chapterShortInfo.title}
                            </Link>
                        </div>
                    ),
                )}
            </div>
            <StoryListPagination
                totalPages={
                    chapterShortInfoPagination.meta.pagination.total_pages
                }
                paginationAtom={chapterPaginationAtom}
            />
        </div>
    );
}
