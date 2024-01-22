import { useAtom } from 'jotai/index';
import * as React from 'react';

import { useGetGenreList } from '@/data/hooks';

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
    const { data: genreList } = useGetGenreList();
    const [, setSelectedGenre] = useAtom(selectedGenreAtom);
    if (genreList) {
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
                        {genreList?.map((genre: IGenreResponse) => (
                            <SelectItem key={genre.id} value={genre.slug}>
                                {genre.name}
                            </SelectItem>
                        ))}
                    </SelectGroup>
                </SelectContent>
            </Select>
        );
    }
}
