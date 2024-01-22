import { SetStateAction, useAtom, WritableAtom } from 'jotai';

import { IPagination } from '@/interfaces/common';

export const usePagination = (
    paginationAtom: WritableAtom<
        IPagination,
        [SetStateAction<IPagination>],
        void
    >,
) => {
    const [pagination, setPagination] = useAtom(paginationAtom);

    const nextPage = () => {
        setPagination({ ...pagination, page: pagination.page + 1 });
    };

    const prevPage = () => {
        setPagination({
            ...pagination,
            page: Math.max(1, pagination.page - 1),
        });
    };

    const goToPage = (pageNumber: number) => {
        setPagination({
            ...pagination,
            page: pageNumber,
        });
    };

    return { pagination, nextPage, prevPage, goToPage };
};
