import Link from 'next/link';

import { useGetChapterShortInfoPagination } from '@/hooks/client';

import { CustomPagination } from '@/components/Common/CustomPagination/CustomPagination';

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
            <div>Danh Sách Chương</div>
            <div className="grid grid-flow-col grid-rows-5">
                {chapterShortInfoPagination.results.map(
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
            <CustomPagination
                totalPages={
                    chapterShortInfoPagination.meta.pagination.total_pages
                }
                paginationAtom={chapterPaginationAtom}
            />
        </div>
    );
}
