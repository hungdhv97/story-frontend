import { useAtom } from 'jotai';
import Link from 'next/link';

import Status from '@/components/home/main/hot_stories/status';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { updatedStoriesResponseAtom } from '@/atoms/updated-stories-response-atom';
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
                    <TableHead>Tiêu Đề</TableHead>
                    <TableHead className="w-1/4">Thể Loại</TableHead>
                    <TableHead className="w-1/6">Chương Cuối</TableHead>
                    <TableHead className="w-1/6">Cập Nhật</TableHead>
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
                            {story.is_hot && (
                                <Status
                                    label="Hot"
                                    link="/filter/stories/hot"
                                    className="px-1 mx-1 border-2 hover:font-bold text-red-500 hover:text-red-500 border-red-500 hover:border-red-500 rounded-none h-1/2"
                                />
                            )}
                            {story.is_new && (
                                <Status
                                    label="New"
                                    link="/filter/stories/new"
                                    className="px-1 mx-1 border-2 hover:font-bold text-green-500 hover:text-green-500 border-green-500 hover:border-green-500 rounded-none h-1/2"
                                />
                            )}
                            {story.status === 'completed' && (
                                <Status
                                    label="Full"
                                    link="/filter/stories/full"
                                    className="px-1 mx-1 border-2 hover:font-bold text-blue-500 hover:text-blue-500 border-blue-500 hover:border-blue-500 rounded-none h-1/2"
                                />
                            )}
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
