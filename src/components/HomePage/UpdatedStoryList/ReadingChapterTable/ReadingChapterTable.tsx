import Link from 'next/link';

import { calculateTimeDifference } from '@/lib/time';

import { H1 } from '@/components/Common/Custom/Custom';
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
            <H1>Truyện Đang Đọc</H1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Tiêu Đề</TableHead>
                        <TableHead className="w-1/3">Chương Đang Đọc</TableHead>
                        <TableHead className="w-2/7">Đọc Lần Cuối</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-lg tracking-tighter">
                    {readingChapters.map((readingChapter: IReadingChapter) => (
                        <TableRow key={readingChapter.id}>
                            <TableCell>
                                <Link
                                    className="hover:text-blue-700 dark:hover:text-blue-400"
                                    href={`/stories/${readingChapter.story.slug}`}
                                    passHref
                                >
                                    {readingChapter.story.title}
                                </Link>
                            </TableCell>
                            <TableCell>
                                <Link
                                    className="hover:text-blue-700 dark:hover:text-blue-400"
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
