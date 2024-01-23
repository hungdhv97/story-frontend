import { atom } from 'jotai/index';

import { IPagination } from '@/interfaces/common';
import {
    IGenreResponse,
    ITopStoryListResponse,
} from '@/interfaces/services/responses';

export const createPaginationAtom = ({ page, limit }: IPagination) => {
    return atom<IPagination>({
        page: page,
        limit: limit,
    });
};
export const chapterPaginationAtom = createPaginationAtom({
    page: 1,
    limit: 10,
});
export const genreListResponseAtom = atom<IGenreResponse[]>([]);
export const selectedChapterIdAtom = atom<string>('');
export const selectedGenreAtom = atom('all');
export const selectedStorySlugAtom = atom<string>('');
export const storyPaginationAtom = createPaginationAtom({
    page: 1,
    limit: 5,
});
export const topStoryListResponseAtom = atom<ITopStoryListResponse>({
    week: [],
    month: [],
    all: [],
});
