import { useAtom } from 'jotai/index';
import Link from 'next/link';
import React, { useState } from 'react';

import { useSearchStoryList } from '@/hooks/client';

import { Input } from '@/components/ui/input';

import { searchTextAtom } from '@/atoms';

export function SearchInput() {
    const [searchText, setSearchText] = useAtom(searchTextAtom);
    const { data: searchStoryList } = useSearchStoryList(searchText);
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(e.target.value);
    };

    return (
        <div className="relative w-[400px]">
            <Input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                className="w-full border pl-4"
                placeholder="Tìm truyện..."
            />
            {isFocused && searchStoryList && (
                <div className="absolute z-50 mt-1.5 w-full rounded-md border bg-popover p-2 text-popover-foreground shadow-lg ">
                    {searchStoryList.length > 0 ? (
                        searchStoryList.map((story) => (
                            <Link
                                key={story.id}
                                href={`/stories/${story.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                                <div className="flex h-20 flex-row space-x-4">
                                    <img
                                        src={story.cover_photo}
                                        alt={story.title}
                                        className="rounded-md object-cover shadow-md"
                                    />
                                    <div className="flex flex-1 flex-col items-start justify-between">
                                        <div className="text-lg font-bold leading-none">
                                            {story.title}
                                        </div>
                                        <div className="text-base">
                                            {story.author.name}
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))
                    ) : (
                        <div className="p-3">Không tìm thấy kết quả ...</div>
                    )}
                </div>
            )}
        </div>
    );
}
