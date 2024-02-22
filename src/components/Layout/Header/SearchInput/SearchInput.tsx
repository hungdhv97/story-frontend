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
            <div className="absolute z-50 mt-2 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto">
                <div className="origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover p-2 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]">
                    {searchStoryList?.map((story) => (
                        <Link
                            key={story.id}
                            href={`/stories/${story.slug}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                            <div className="text-green-500">{story.title}</div>
                            <div className="text-red-500">
                                {story.author.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
