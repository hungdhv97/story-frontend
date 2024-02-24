import Link from 'next/link';
import * as React from 'react';

import { useGetGenreList } from '@/hooks/client';

import { H1 } from '@/components/Common/Custom/Custom';

import { IGenreResponse } from '@/interfaces/services/responses';

export function GenreList() {
    const { data: genres, isLoading } = useGetGenreList();
    if (isLoading) return <div>Loading....</div>;
    return (
        <div>
            <H1>Thể Loại Truyện</H1>
            <div className="grid grid-cols-2 gap-2 p-2">
                {genres?.map((genre: IGenreResponse) => (
                    <Link
                        className="hover:text-blue-700 dark:hover:text-blue-400"
                        key={genre.id}
                        href={`/filter/genres/${genre.slug}`}
                    >
                        {genre.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
