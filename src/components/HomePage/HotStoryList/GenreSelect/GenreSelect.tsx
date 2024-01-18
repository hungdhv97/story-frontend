import { useAtom } from 'jotai/index';
import * as React from 'react';

import { useGetGenres } from '@/data/hooks';

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

import { selectedGenreAtom } from '@/atoms/selectedGenreAtom';
import { IGenreResponse } from '@/interfaces/services/responses';

export function GenreSelect() {
    const { data: genres, isLoading } = useGetGenres();
    const [, setSelectedGenre] = useAtom(selectedGenreAtom);
    if (isLoading) return <div>Loading....</div>;

    return (
        <Select onValueChange={(e) => setSelectedGenre(e)}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tất cả" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem key="tat-ca" value="all">
                        Tất cả
                    </SelectItem>
                    {genres?.map((genre: IGenreResponse) => (
                        <SelectItem key={genre.id} value={genre.slug}>
                            {genre.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
