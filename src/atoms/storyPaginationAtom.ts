import { createPaginationAtom } from '@/atoms/paginationAtom';

export const storyPaginationAtom = createPaginationAtom({
    page: 1,
    limit: 5,
});
