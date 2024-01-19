import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

export function MainPagination({
    totalPages,
    currentPage,
    setCurrentPage,
}: IPaginationProps) {
    const [inputPage, setInputPage] = useState<number>(currentPage);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const page = parseInt(e.target.value, 10);
        setInputPage(page);
    };

    const goToPage = (page: number) => {
        const newPage = Math.max(1, Math.min(page, totalPages));
        setCurrentPage(newPage);
        setInputPage(newPage);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        goToPage(inputPage);
    };

    return (
        <div className="flex justify-center items-center gap-2">
            <Button onClick={() => goToPage(1)} disabled={currentPage === 1}>
                First
            </Button>
            <Button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
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
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </Button>
            <Button
                onClick={() => goToPage(totalPages)}
                disabled={currentPage === totalPages}
            >
                Last
            </Button>
        </div>
    );
}
