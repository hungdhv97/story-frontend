import useSWR from 'swr';

import { getData } from '@/data/server';

export const useGetGenres = () => {
    return useSWR('http://localhost:8000/api/genres/', getData);
};