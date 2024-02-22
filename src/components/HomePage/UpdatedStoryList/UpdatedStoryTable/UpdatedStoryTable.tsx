import { LoaderIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

import { calculateTimeDifference } from '@/lib/time';
import { useGetStoryList } from '@/hooks/client';

import { StatusButton } from '@/components/HomePage/HotStoryList/StatusButton/StatusButton';
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
                        <TableHead className="w-1/6">Chương Cuối</TableHead>
                        <TableHead className="w-1/6">Cập Nhật</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="font-serif">
                    {updatedStoryList.map((story: IStoryResponse) => (
                        <TableRow key={story.id}>
                            <TableCell>
                                <Link
                                    className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
                                    href={`/stories/${story.slug}`}
                                    passHref
                                >
                                    {story.title}
                                </Link>
                                {story.is_hot && (
                                    <StatusButton
                                        label="Hot"
                                        link="/filter/stories/hot"
                                        className="mx-1 h-1/2 rounded-none border-2 border-red-500 px-1 text-red-500 hover:border-red-500 hover:font-bold hover:text-red-500"
                                    />
                                )}
                                {story.is_new && (
                                    <StatusButton
                                        label="New"
                                        link="/filter/stories/new"
                                        className="mx-1 h-1/2 rounded-none border-2 border-green-500 px-1 text-green-500 hover:border-green-500 hover:font-bold hover:text-green-500"
                                    />
                                )}
                                {story.status === 'completed' && (
                                    <StatusButton
                                        label="Full"
                                        link="/filter/stories/full"
                                        className="mx-1 h-1/2 rounded-none border-2 border-blue-500 px-1 text-blue-500 hover:border-blue-500 hover:font-bold hover:text-blue-500"
                                    />
                                )}
                            </TableCell>
                            <TableCell>
                                {story.genres.map(
                                    (genre: IGenreResponse, index: number) => (
                                        <span key={genre.id}>
                                            {index > 0 && ', '}
                                            <Link
                                                className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
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
                                        className="text-blue-600 visited:text-purple-600 hover:text-blue-800"
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
