import { atom } from 'jotai';

import { IPagination } from '@/interfaces/common';

export const createPaginationAtom = ({ page, limit }: IPagination) => {
    return atom<IPagination>({
        page: page,
        limit: limit,
    });
};
