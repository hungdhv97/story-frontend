import useSWR from 'swr';

import { getData } from '@/data/server';

export const useGetGenres = () => {
    return useSWR('http://18.141.25.103:8000/api/genres/', getData);
};

export const useGetHotStories = () => {
    return useSWR('http://18.141.25.103:8000/api/stories/?is_hot=true&limit=10', getData);
};