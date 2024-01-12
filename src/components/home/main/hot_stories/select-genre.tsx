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

import { IGenreResponse } from '@/interfaces/services/responses';

interface ISelectGenreProps {
    handleSelectGenre: (e: string) => unknown;
}

export function SelectGenre({ handleSelectGenre }: ISelectGenreProps) {
    const { data: genres, isLoading, error } = useGetGenres();
    if (isLoading) return <div>Loading....</div>;
    if (error) return <div>Error....</div>;

    return (
        <Select onValueChange={handleSelectGenre}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Tất cả" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectItem key="tat-ca" value="all">
                        Tất cả
                    </SelectItem>
                    {genres.map((genre: IGenreResponse) => (
                        <SelectItem key={genre.id} value={genre.slug}>
                            {genre.name}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    );
}
