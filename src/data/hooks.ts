import { SetStateAction, WritableAtom } from 'jotai/index';
import useSWR from 'swr';

import { usePagination } from '@/hooks/usePagination';

import { getData } from '@/data/server';

import { IPagination } from '@/interfaces/common';
import {
    IAuthorResponse,
    IChapterResponse,
    IChapterShortInfoPaginationResponse,
    IChapterShortInfoResponse,
    IGenreResponse,
    IStoryPaginationResponse,
    IStoryResponse,
    ITopStoryListResponse,
} from '@/interfaces/services/responses';

export const useGetGenreList = () => {
    return useSWR<IGenreResponse[]>(
        'http://18.141.25.103:8000/api/genres/',
        getData,
    );
};

export const useGetGenre = (genreSlug: string) => {
    return useSWR<IGenreResponse>(
        `http://18.141.25.103:8000/api/genres/${genreSlug}/`,
        getData,
    );
};

export const useGetAuthor = (authorId: number) => {
    return useSWR<IAuthorResponse>(
        `http://18.141.25.103:8000/api/authors/${authorId}/`,
        getData,
    );
};

export const useGetChapter = (chapterId: string) => {
    return useSWR<IChapterResponse>(
        `http://18.141.25.103:8000/api/chapters/${chapterId}/`,
        getData,
    );
};

interface IUseGetChapterShortInfoPaginationParams {
    paginationAtom: WritableAtom<
        IPagination,
        [SetStateAction<IPagination>],
        void
    >;
    storySlug: string;
}

export const useGetChapterShortInfoPagination = ({
    paginationAtom,
    storySlug,
}: IUseGetChapterShortInfoPaginationParams) => {
    const { pagination } = usePagination(paginationAtom);
    return useSWR<IChapterShortInfoPaginationResponse>(
        `http://18.141.25.103:8000/api/stories/${storySlug}/chapters/short-info/?limit=${pagination.limit}&page=${pagination.page}`,
        getData,
    );
};

export const useGetChapterShortInfoList = (storySlug: string) => {
    return useSWR<IChapterShortInfoResponse[]>(
        `http://18.141.25.103:8000/api/stories/${storySlug}/chapters/short-info/`,
        getData,
    );
};

export const useGetStory = (storySlug: string) => {
    return useSWR<IStoryResponse>(
        `http://18.141.25.103:8000/api/stories/${storySlug}/`,
        getData,
    );
};

export const useGetTopStoryList = () => {
    return useSWR<ITopStoryListResponse>(
        'http://18.141.25.103:8000/api/top/stories/',
        getData,
    );
};

interface IUseGetStoryListParams {
    authorId?: number;
    genreSlug?: string;
    isHot?: boolean;
    isNew?: boolean;
    status?: string;
}

export const useGetStoryList = ({
    authorId,
    genreSlug,
    isHot,
    isNew,
    status,
}: IUseGetStoryListParams) => {
    let url = `http://18.141.25.103:8000/api/stories/?`;

    if (authorId) url += `author_id=${authorId}&`;
    if (genreSlug) url += `genre_id=${genreSlug}&`;
    if (isHot !== undefined) url += `is_hot=${isHot}&`;
    if (isNew !== undefined) url += `is_new=${isNew}&`;
    if (status) url += `status=${status}&`;

    url = url.replace(/&$|\?$/, '');

    return useSWR<IStoryResponse[]>(url, getData);
};

interface IUseGetStoryPaginationParams {
    paginationAtom: WritableAtom<
        IPagination,
        [SetStateAction<IPagination>],
        void
    >;
    authorId?: number;
    genreSlug?: string;
    isHot?: boolean;
    isNew?: boolean;
    status?: string;
}

export const useGetStoryPagination = ({
    paginationAtom,
    authorId,
    genreSlug,
    isHot,
    isNew,
    status,
}: IUseGetStoryPaginationParams) => {
    const { pagination } = usePagination(paginationAtom);
    let url = `http://18.141.25.103:8000/api/stories/?limit=${pagination.limit}&page=${pagination.page}&`;

    if (authorId) url += `author_id=${authorId}&`;
    if (genreSlug) url += `genre_id=${genreSlug}&`;
    if (isHot !== undefined) url += `is_hot=${isHot}&`;
    if (isNew !== undefined) url += `is_new=${isNew}&`;
    if (status) url += `status=${status}&`;

    url = url.replace(/&$|\?$/, '');

    return useSWR<IStoryPaginationResponse>(url, getData);
};
