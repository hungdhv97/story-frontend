import { atom } from 'jotai';

import { IChapterShortInfoResponse } from '@/interfaces/services/responses';

export const chaptersShortInfoResponseAtom = atom<IChapterShortInfoResponse[]>(
    [],
);
