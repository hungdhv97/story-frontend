import { useAtom } from 'jotai/index';
import Link from 'next/link';
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
            {searchStoryList && (
                <div className="absolute z-50 mt-1.5 w-full rounded-md border bg-popover p-2 text-popover-foreground shadow-lg ">
                    {searchStoryList.length > 0 ? (
                        searchStoryList.map((story) => (
                            <Link
                                key={story.id}
                                href={`/stories/${story.slug}`}
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                                <div className="text-green-500">
                                    {story.title}
                                </div>
                                <div className="text-red-500">
                                    {story.author.name}
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
