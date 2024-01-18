import Link from 'next/link';

import { calculateTimeDifference } from '@/lib/time';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { IReadingChapter } from '@/interfaces/common';

export function ReadingChapterTable({
    readingChapters,
}: {
    readingChapters: IReadingChapter[];
}) {
    return (
        <div>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Truyện Đang Đọc
            </h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tiêu Đề</TableHead>
                        <TableHead className="w-1/6">Chương Đang Đọc</TableHead>
                        <TableHead className="w-1/6">Đọc Lần Cuối</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="font-serif">
                    {readingChapters.map((readingChapter: IReadingChapter) => (
                        <TableRow key={readingChapter.id}>
                            <TableCell>
                                <Link
                                    className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                    href={`/stories/${readingChapter.story.slug}`}
                                    passHref
                                >
                                    {readingChapter.story.title}
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Link
                                    className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                    href={`stories/${readingChapter.story.slug}/chapters/${readingChapter.id}`}
                                >
                                    {readingChapter.title}
                                </Link>
                            </TableCell>
                            <TableCell>
                                {calculateTimeDifference(
                                    readingChapter.accessedAt,
                                )}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}
