import { useAtom } from 'jotai/index';
import React from 'react';

import { useSearchStoryList } from '@/hooks/client';

import { Input } from '@/components/ui/input';

import { searchTextAtom } from '@/atoms';

export function SearchInput() {
    const [searchText, setSearchText] = useAtom(searchTextAtom);
    const { data: searchStoryList } = useSearchStoryList(searchText);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    return (
        <div className="sticky top-0 z-10">
            <Input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                className="border p-2 w-full"
                placeholder="Search..."
            />
            <div className="mt-2 absolute w-full z-0">
                {searchStoryList?.map((story) => (
                    <div key={story.id} className="bg-white border-b p-2">
                        <div className="text-green-500">{story.title}</div>
                        <div className="text-red-500">{story.author.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
