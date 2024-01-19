import { atom } from 'jotai';

import { IStoryResponse } from '@/interfaces/services/responses';

export const hotStoriesResponseAtom = atom<IStoryResponse[]>([]);