import { BookOpenText, Menu } from 'lucide-react';
import Link from 'next/link';

import { useGetGenres } from '@/data/hooks';

import { HomeNavigationMenu } from '@/components/home/header/main-nav';
import { Search } from '@/components/home/header/search';
import ThemeSwitcher from '@/components/home/header/theme-switcher';
import { Button } from '@/components/ui/button';

import { chapterRouters, storyRouters } from '@/constants';
import { IGenre } from '@/interfaces/services/responses';

import MyProfile from './my-profile';

export default function Header() {
    const { data } = useGetGenres();

    const genreRouters = data
        ? data.map(({ id, name, slug }: IGenre) => ({
              id,
              title: name,
              href: `/${slug}`,
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
                    <Link href="/public" className="mr-6 ml-2">
                        <Button variant="outline">
                            <BookOpenText />
                            <span className="ml-2">[Story Name]</span>
                        </Button>
                    </Link>
                </div>

                <HomeNavigationMenu
                    storyRouters={storyRouters}
                    genreRouters={genreRouters}
                    chapterRouters={chapterRouters}
                />
                <div className="flex space-x-2">
                    <ThemeSwitcher />
                    <MyProfile />
                    <Search />
                </div>
            </div>
        </header>
    );
}
