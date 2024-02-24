import { LoaderIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { calculateTimeDifference } from '@/lib/time';
import { useGetStoryList } from '@/hooks/client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import {
    IGenreResponse,
    IStoryResponse,
} from '@/interfaces/services/responses';

export function UpdatedStoryTable() {
    const { data: updatedStoryList } = useGetStoryList({ isNew: true });
    if (updatedStoryList) {
        return (
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tiêu Đề</TableHead>
                        <TableHead className="w-1/4">Thể Loại</TableHead>
                        <TableHead className="w-1/4">Chương Cuối</TableHead>
                        <TableHead className="w-1/5">Cập Nhật</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-lg tracking-tighter">
                    {updatedStoryList
                        .slice(0, 10)
                        .map((story: IStoryResponse) => (
                            <TableRow key={story.id}>
                                <TableCell>
                                    <Link
                                        className="hover:text-blue-700 dark:hover:text-blue-400"
                                        href={`/stories/${story.slug}`}
                                        passHref
                                    >
                                        {story.title}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {story.genres.map(
                                        (
                                            genre: IGenreResponse,
                                            index: number,
                                        ) => (
                                            <span key={genre.id}>
                                                {index > 0 && ', '}
                                                <Link
                                                    className="hover:text-blue-700 dark:hover:text-blue-400"
                                                    href={`/filter/genres/${genre.slug}`}
                                                    passHref
                                                >
                                                    {genre.name}
                                                </Link>
                                            </span>
                                        ),
                                    )}
                                </TableCell>
                                <TableCell>
                                    {story.latest_chapter ? (
                                        <Link
                                            className="hover:text-blue-700 dark:hover:text-blue-400"
                                            href={`/stories/${story.slug}/chapters/${story.latest_chapter.id}`}
                                        >
                                            {story.latest_chapter.title}
                                        </Link>
                                    ) : (
                                        <LoaderIcon className="animate-spin" />
                                    )}
                                </TableCell>
                                <TableCell>
                                    {story.latest_chapter ? (
                                        calculateTimeDifference(
                                            story.latest_chapter.published_date,
                                        )
                                    ) : (
                                        <LoaderIcon className="animate-spin" />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                </TableBody>
            </Table>
        );
    }
}
