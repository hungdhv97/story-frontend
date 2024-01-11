import useSWR from 'swr';

import { getData } from '@/data/server';

export const useGetGenres = () => {
    return useSWR('http://18.141.25.103:8000/api/genres/', getData);
};