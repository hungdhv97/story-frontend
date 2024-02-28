import { SetStateAction, WritableAtom } from 'jotai/index';
import useSWR from 'swr';

import { getData } from '@/lib/server';
import { useDebounce, usePagination } from '@/hooks/custom';

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

const API_HOST = process.env.NEXT_PUBLIC_API_HOST;

export const useGetGenreList = () => {
    return useSWR<IGenreResponse[]>(`${API_HOST}/api/genres/`, getData);
};

export const useGetGenre = (genreSlug: string, shouldFetch: boolean) => {
    const url = shouldFetch ? `${API_HOST}/api/genres/${genreSlug}/` : null;
    return useSWR<IGenreResponse>(url, getData);
};

export const useGetAuthor = (authorId: number, shouldFetch: boolean) => {
    const url = shouldFetch ? `${API_HOST}/api/authors/${authorId}/` : null;
    return useSWR<IAuthorResponse>(url, getData);
};

export const useGetChapter = (chapterId: number) => {
    return useSWR<IChapterResponse>(
        `${API_HOST}/api/chapters/${chapterId}/`,
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
        `${API_HOST}/api/stories/${storySlug}/chapters/short-info/?limit=${pagination.limit}&page=${pagination.page}`,
        getData,
    );
};

export const useGetChapterShortInfoList = (storySlug: string) => {
    return useSWR<IChapterShortInfoResponse[]>(
        `${API_HOST}/api/stories/${storySlug}/chapters/short-info/`,
        getData,
    );
};

export const useGetStory = (storySlug: string) => {
    return useSWR<IStoryResponse>(
        `${API_HOST}/api/stories/${storySlug}/`,
        getData,
    );
};

export const useGetTopStoryList = () => {
    return useSWR<ITopStoryListResponse>(
        `${API_HOST}/api/top/stories/`,
        getData,
    );
};

interface IUseGetStoryListParams {
    authorId?: number;
    genreSlug?: string;
    isHot?: boolean;
    isNew?: boolean;
    status?: string;
    totalChaptersFrom?: number;
    totalChaptersTo?: number;
}

export const useGetStoryList = ({
    authorId,
    genreSlug,
    isHot,
    isNew,
    status,
    totalChaptersFrom,
    totalChaptersTo,
}: IUseGetStoryListParams) => {
    let url = `${API_HOST}/api/stories/?`;

    if (authorId) url += `author_id=${authorId}&`;
    if (genreSlug) url += `genre_slug=${genreSlug}&`;
    if (isHot !== undefined) url += `is_hot=${isHot}&`;
    if (isNew !== undefined) url += `is_new=${isNew}&`;
    if (status) url += `status=${status}&`;
    if (totalChaptersFrom) url += `total_chapters_from=${totalChaptersFrom}&`;
    if (totalChaptersTo) url += `total_chapters_to=${totalChaptersTo}&`;

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
    totalChaptersFrom?: number;
    totalChaptersTo?: number;
}

export const useGetStoryPagination = ({
    paginationAtom,
    authorId,
    genreSlug,
    isHot,
    isNew,
    status,
    totalChaptersFrom,
    totalChaptersTo,
}: IUseGetStoryPaginationParams) => {
    const { pagination } = usePagination(paginationAtom);
    let url = `${API_HOST}/api/stories/?limit=${pagination.limit}&page=${pagination.page}&`;

    if (authorId) url += `author_id=${authorId}&`;
    if (genreSlug) url += `genre_slug=${genreSlug}&`;
    if (isHot !== undefined) url += `is_hot=${isHot}&`;
    if (isNew !== undefined) url += `is_new=${isNew}&`;
    if (status) url += `status=${status}&`;
    if (totalChaptersFrom) url += `total_chapters_from=${totalChaptersFrom}&`;
    if (totalChaptersTo) url += `total_chapters_to=${totalChaptersTo}&`;

    url = url.replace(/&$|\?$/, '');

    return useSWR<IStoryPaginationResponse>(url, getData);
};

export const useSearchStoryList = (text: string) => {
    const debouncedText = useDebounce(text, 300);

    const url =
        debouncedText.trim() !== ''
            ? `${API_HOST}/api/search/?text=${debouncedText}`
            : null;

    return useSWR<IStoryResponse[]>(url, getData);
};
