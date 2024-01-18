import React, { ChangeEvent, FormEvent, useState } from 'react';

interface IPaginationProps {
    totalPages: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
}

const Pagination = ({
    totalPages,
    currentPage,
    setCurrentPage,
}: IPaginationProps) => {
    const [inputPage, setInputPage] = useState('');

    const setPage = (page: number) => {
        if (page < 1) {
            setCurrentPage(1);
        } else if (page > totalPages) {
            setCurrentPage(totalPages);
        } else {
            setCurrentPage(page);
        }
    };

    const pageNumbers = [];
    for (
        let i = Math.max(currentPage - 2, 1);
        i <= Math.min(currentPage + 2, totalPages);
        i++
    ) {
        pageNumbers.push(i);
    }

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputPage(e.target.value);
    };

    const handleInputSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const page = parseInt(inputPage);
        if (!isNaN(page)) {
            setPage(page);
        }
        setInputPage('');
    };

    return (
        <div>
            <button
                onClick={() => setPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>
            {pageNumbers.map((number) => (
                <button
                    key={number}
                    onClick={() => setPage(number)}
                    disabled={number === currentPage}
                >
                    {number}
                </button>
            ))}
            <button
                onClick={() => setPage(currentPage + 1)}
                disabled={currentPage === totalPages}
            >
                Next
            </button>
            <form onSubmit={handleInputSubmit}>
                <input
                    type="number"
                    value={inputPage}
                    onChange={handleInputChange}
                />
                <button type="submit">Go to Page</button>
            </form>
        </div>
    );
};

export default Pagination;
