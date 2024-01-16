import { useAtom } from 'jotai';
import Link from 'next/link';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { updatedStoriesResponseAtom } from '@/atoms/updatedStoriesResponseAtom';
import {
    IGenreResponse,
    IStoryResponse,
} from '@/interfaces/services/responses';

export function UpdatedStoriesTable() {
    const [updatedStoriesResponse] = useAtom(updatedStoriesResponseAtom);
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-1/4">Tiêu Đề</TableHead>
                    <TableHead className="w-1/4">Thể Loại</TableHead>
                    <TableHead className="w-1/4">Chương Cuối</TableHead>
                    <TableHead className="w-1/4">Cập Nhật</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody className="font-serif">
                {updatedStoriesResponse.map((story: IStoryResponse) => (
                    <TableRow key={story.id}>
                        <TableCell>
                            <Link
                                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                href={`/stories/${story.slug}`}
                                passHref
                            >
                                {story.title}
                            </Link>
                        </TableCell>
                        <TableCell>
                            {story.genres.map(
                                (genre: IGenreResponse, index: number) => (
                                    <span key={genre.id}>
                                        {index > 0 && ', '}
                                        <Link
                                            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                            href={`/genres/${genre.slug}`}
                                            passHref
                                        >
                                            {genre.name}
                                        </Link>
                                    </span>
                                ),
                            )}
                        </TableCell>
                        <TableCell>
                            <Link
                                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                href={`stories/${story.slug}/chapters/${story.latest_chapter.id}`}
                            >
                                {story.latest_chapter.title}
                            </Link>
                        </TableCell>
                        <TableCell>
                            {story.latest_chapter.published_date}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}
