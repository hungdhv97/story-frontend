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
        <div className="relative w-[400px]">
            <Input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                className="w-full border pl-4"
                placeholder="Tìm truyện..."
            />
            <div className="absolute z-50 mt-2 w-full">
                {searchStoryList?.map((story) => (
                    <div key={story.id} className="border-b bg-white p-4">
                        <div className="text-green-500">{story.title}</div>
                        <div className="text-red-500">{story.author.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
