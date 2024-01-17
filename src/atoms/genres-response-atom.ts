import { atom } from 'jotai';

import { IGenreResponse } from '@/interfaces/services/responses';

export const genresResponseAtom = atom<IGenreResponse[]>([]);
