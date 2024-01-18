import { atom } from 'jotai';

import { IChapterShortInfo } from '@/interfaces/services/responses';

export const chaptersShortInfoResponseAtom = atom<IChapterShortInfo[]>([]);
