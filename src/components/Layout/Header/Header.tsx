import { BookOpenText, Menu } from 'lucide-react';
import Link from 'next/link';

import { useGetGenreList } from '@/data/hooks';

import { MainNavigationMenu } from '@/components/Layout/Header/MainNavigationMenu/MainNavigationMenu';
import { SearchInput } from '@/components/Layout/Header/SearchInput/SearchInput';
import { ThemeSwitcherButton } from '@/components/Layout/Header/ThemeSwitcherButton/ThemeSwitcherButton';
import { Button } from '@/components/ui/button';

import { chapterRouters, storyRouters } from '@/constants';
import { IGenreResponse } from '@/interfaces/services/responses';

export function Header() {
    const { data: genres } = useGetGenreList();

    const genreRouters = genres
        ? genres?.map(({ id, name, slug }: IGenreResponse) => ({
              id,
              title: name,
              href: `/filter/genres/${slug}`,
          }))
        : [];

    return (
        <header className="border-b dark:bg-slate-700 bg-slate-300 h-[6.25rem]">
            <div className="mx-auto flex h-full w-full items-center px-[10px] justify-between lg:space-x-0 md:max-w-[644px] lg:max-w-[1200px]">
                <div className="flex items-center space-x-4">
                    <Menu
                        className="lg:hidden cursor-pointer"
                        onClick={() => {}}
                    />
                    <Link href="/" className="mr-6 ml-2">
                        <Button variant="outline">
                            <BookOpenText />
                            <span className="ml-2">[Story Name]</span>
                        </Button>
                    </Link>
                </div>
                <MainNavigationMenu
                    storyRouters={storyRouters}
                    genreRouters={genreRouters}
                    chapterRouters={chapterRouters}
                />
                <div className="flex space-x-2">
                    <ThemeSwitcherButton />
                    <SearchInput />
                </div>
            </div>
        </header>
    );
}
