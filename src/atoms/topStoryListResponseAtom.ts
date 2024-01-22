import { atom } from 'jotai';

import { ITopStoryListResponse } from '@/interfaces/services/responses';

export const topStoryListResponseAtom = atom<ITopStoryListResponse>({
    week: [],
    month: [],
    all: [],
});
