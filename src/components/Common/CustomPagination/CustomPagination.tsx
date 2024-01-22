import React, { useState } from 'react';

import { usePagination } from '@/hooks/usePagination';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { chapterPaginationAtom } from '@/atoms/chapterPaginationAtom';

interface ICustomPaginationProps {
    totalPages: number;
}

export function CustomPagination({ totalPages }: ICustomPaginationProps) {
    const { pagination, nextPage, prevPage, goToPage } = usePagination(
        chapterPaginationAtom,
    );
    const [inputPage, setInputPage] = useState(pagination.page);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const page = parseInt(e.target.value, 10);
        setInputPage(page);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const newPage = Math.max(1, Math.min(inputPage, totalPages));
        setInputPage(newPage);
        goToPage(Math.max(1, Math.min(inputPage, totalPages)));
    };

    return (
        <div className="flex justify-center items-center gap-2">
            <Button
                onClick={() => goToPage(1)}
                disabled={pagination.page === 1}
            >
                First
            </Button>
            <Button onClick={prevPage} disabled={pagination.page === 1}>
                Previous
            </Button>
            <form onSubmit={handleSubmit} className="flex items-center">
                <Input
                    type="number"
                    value={inputPage}
                    onChange={handleInputChange}
                    className="text-center w-12 [&::-webkit-inner-spin-button]:appearance-none"
                />
                <span className="ml-2 whitespace-nowrap"> / {totalPages}</span>
            </form>
            <Button
                onClick={nextPage}
                disabled={pagination.page === totalPages}
            >
                Next
            </Button>
            <Button
                onClick={() => goToPage(totalPages)}
                disabled={pagination.page === totalPages}
            >
                Last
            </Button>
        </div>
    );
}
