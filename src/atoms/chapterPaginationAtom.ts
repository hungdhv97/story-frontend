import { createPaginationAtom } from '@/atoms/paginationAtom';

export const chapterPaginationAtom = createPaginationAtom({
    page: 1,
    limit: 10,
});
