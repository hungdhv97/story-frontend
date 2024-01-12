import useSWR from 'swr';

import { getData } from '@/data/server';

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
