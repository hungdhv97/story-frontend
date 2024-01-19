import { atom } from 'jotai';

import { ITopStoriesResponse } from '@/interfaces/services/responses';

export const topStoriesResponseAtom = atom<ITopStoriesResponse>({
    week: [],
    month: [],
    all: [],
});
