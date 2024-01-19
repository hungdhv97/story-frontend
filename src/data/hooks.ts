import useSWR from 'swr';

import { getData } from '@/data/server';

import {
    IChapterResponse,
    IChapterShortInfo,
    IGenreResponse,
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

export const useGetChaptersByStorySlug = (storySlug: string) => {
    return useSWR<IChapterResponse[]>(
        `http://18.141.25.103:8000/api/stories/${storySlug}/chapters/`,
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
