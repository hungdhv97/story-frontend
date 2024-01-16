import Link from 'next/link';
import * as React from 'react';

import { useGetGenres } from '@/data/hooks';

import { IGenreResponse } from '@/interfaces/services/responses';

export default function Genres() {
    const { data: genres, isLoading, error } = useGetGenres();
    if (isLoading) return <div>Loading....</div>;
    return (
        <div>
            <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Thể Loại Truyện
            </h2>
            <div className="grid gap-2 grid-cols-2 p-2 font-serif">
                {genres.map((genre: IGenreResponse) => (
                    <Link
                        className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
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
