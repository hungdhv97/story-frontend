import { useAtom } from 'jotai/index';
import React, { useEffect, useState } from 'react';

import { useSearchStoryList } from '@/hooks/client';

import { Input } from '@/components/ui/input';

import { searchTextAtom } from '@/atoms';

export function SearchInput() {
    const [query, setQuery] = useAtom(searchTextAtom);
    const [debouncedQuery, setDebouncedQuery] = useState(query);
    const { data: results } = useSearchStoryList(debouncedQuery);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedQuery(query);
        }, 300);

        return () => {
            clearTimeout(timerId);
        };
    }, [query]);

    return (
        <div className="sticky top-0 z-10">
            <Input
                type="text"
                value={query}
                onChange={handleInputChange}
                className="border p-2 w-full"
                placeholder="Search..."
            />
            <div className="mt-2 absolute w-full z-0">
                {results?.map((result) => (
                    <div key={result.id} className="bg-white border-b p-2">
                        {result.title}
                    </div>
                ))}
            </div>
        </div>
    );
}
