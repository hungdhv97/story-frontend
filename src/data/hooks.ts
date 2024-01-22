import useSWR from 'swr';

import { getData } from '@/data/server';

import {
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

export const useGetChapterById = (chapterId: string) => {
    return useSWR<IChapterResponse>(
        `http://18.141.25.103:8000/api/chapters/${chapterId}/`,
        getData,
    );
};

interface IUseGetChapterShortInfoPaginationParams {
    param: number;
    page: number;
    storySlug: string;
}

export const useGetChapterShortInfoPagination = ({
    param,
    page,
    storySlug,
}: IUseGetChapterShortInfoPaginationParams) => {
    return useSWR<IChapterShortInfoPaginationResponse>(
        `http://18.141.25.103:8000/api/stories/${storySlug}/chapters/short-info/?limit=${param}&page=${page}`,
        getData,
    );
};

export const useGetChaptersShortInfoByStorySlug = (storySlug: string) => {
    return useSWR<IChapterShortInfoResponse[]>(
        `http://18.141.25.103:8000/api/stories/${storySlug}/chapters/short-info/`,
        getData,
    );
};

export const useGetStoryByStorySlug = (storySlug: string) => {
    return useSWR<IStoryResponse>(
        `http://18.141.25.103:8000/api/stories/${storySlug}/`,
        getData,
    );
};

export const useGetStoriesWithSameAuthor = (authorId: number) => {
    return useSWR<IStoryResponse[]>(
        `http://18.141.25.103:8000/api/stories/?author_id=${authorId}`,
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
    genreId?: number;
    isHot?: boolean;
    isNew?: boolean;
    status?: string;
}

export const useGetStoryList = ({
    authorId,
    genreId,
    isHot,
    isNew,
    status,
}: IUseGetStoryListParams) => {
    let url = `http://18.141.25.103:8000/api/stories/?`;

    if (authorId) url += `author_id=${authorId}&`;
    if (genreId) url += `genre_id=${genreId}&`;
    if (isHot !== undefined) url += `is_hot=${isHot}&`;
    if (isNew !== undefined) url += `is_new=${isNew}&`;
    if (status) url += `status=${status}&`;

    url = url.replace(/&$|\?$/, '');

    return useSWR(url, getData);
};

interface IUseGetStoryPaginationParams {
    limit: number;
    page: number;
    authorId?: number;
    genreId?: number;
    isHot?: boolean;
    isNew?: boolean;
    status?: string;
}

export const useGetStoryPagination = ({
    limit,
    page,
    authorId,
    genreId,
    isHot,
    isNew,
    status,
}: IUseGetStoryPaginationParams) => {
    let url = `http://18.141.25.103:8000/api/stories/?limit=${limit}&page=${page}&`;

    if (authorId) url += `author_id=${authorId}&`;
    if (genreId) url += `genre_id=${genreId}&`;
    if (isHot !== undefined) url += `is_hot=${isHot}&`;
    if (isNew !== undefined) url += `is_new=${isNew}&`;
    if (status) url += `status=${status}&`;

    url = url.replace(/&$|\?$/, '');

    return useSWR<IStoryPaginationResponse>(url, getData);
};
