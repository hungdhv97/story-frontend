import useSWR from 'swr';

import { getData } from '@/data/server';

import { IStoryResponse } from '@/interfaces/services/responses';

export const useGetGenres = () => {
    return useSWR('http://18.141.25.103:8000/api/genres/', getData);
};

export const useGetHotStories = () => {
    return useSWR(
        'http://18.141.25.103:8000/api/stories/?is_hot=true',
        getData,
    );
};

export const useGetUpdatedStories = () => {
    return useSWR(
        'http://18.141.25.103:8000/api/stories/?is_new=true',
        getData,
    );
};

export const useGetFullStories = () => {
    return useSWR(
        'http://18.141.25.103:8000/api/stories/?status=completed',
        getData,
    );
};

export const useGetChapterById = (chapterId: string) => {
    return useSWR(
        `http://18.141.25.103:8000/api/chapters/${chapterId}/`,
        getData,
    );
};

export const useGetChaptersByStorySlug = (storySlug: string) => {
    return useSWR(
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
