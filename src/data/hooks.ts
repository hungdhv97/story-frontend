import useSWR from 'swr';

import { getData } from '@/data/server';

import {
    IChapterResponse,
    IChapterShortInfo,
    IGenreResponse,
    IStoryListPaginationResponse,
    IStoryResponse,
    ITopStoriesResponse,
} from '@/interfaces/services/responses';

export const useGetGenres = () => {
    return useSWR<IGenreResponse[]>(
        'http://18.141.25.103:8000/api/genres/',
        getData,
    );
};

export const useGetHotStories = () => {
    return useSWR<IStoryResponse[]>(
        'http://18.141.25.103:8000/api/stories/?is_hot=true',
        getData,
    );
};

export const useGetUpdatedStories = () => {
    return useSWR<IStoryResponse[]>(
        'http://18.141.25.103:8000/api/stories/?is_new=true',
        getData,
    );
};

export const useGetFullStories = () => {
    return useSWR<IStoryResponse[]>(
        'http://18.141.25.103:8000/api/stories/?status=completed',
        getData,
    );
};

export const useGetChapterById = (chapterId: string) => {
    return useSWR<IChapterResponse>(
        `http://18.141.25.103:8000/api/chapters/${chapterId}/`,
        getData,
    );
};

export const useGetChaptersShortInfoByStorySlug = (storySlug: string) => {
    return useSWR<IChapterShortInfo[]>(
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

export const useGetTopStories = () => {
    return useSWR<ITopStoriesResponse>(
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

interface IUseGetStoryListParams {
    limit: number;
    page: number;
    authorId?: number;
    genreId?: number;
    isHot?: boolean;
    isNew?: boolean;
    status?: string;
}

export const useGetStoryListPagination = ({
    limit,
    page,
    authorId,
    genreId,
    isHot,
    isNew,
    status,
}: IUseGetStoryListParams) => {
    let url = `http://18.141.25.103:8000/api/stories/?limit=${limit}&page=${page}&`;

    if (authorId) url += `author_id=${authorId}&`;
    if (genreId) url += `genre_id=${genreId}&`;
    if (isHot !== undefined) url += `is_hot=${isHot}&`;
    if (isNew !== undefined) url += `is_new=${isNew}&`;
    if (status) url += `status=${status}&`;

    url = url.replace(/&$|\?$/, '');

    return useSWR<IStoryListPaginationResponse>(url, getData);
};
