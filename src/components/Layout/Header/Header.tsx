'use client';

import Link from 'next/link';

import { useGetGenreList } from '@/hooks/client';

import { MainNavigationMenu } from '@/components/Layout/Header/MainNavigationMenu/MainNavigationMenu';
import { SearchInput } from '@/components/Layout/Header/SearchInput/SearchInput';
import { ThemeSwitcherButton } from '@/components/Layout/Header/ThemeSwitcherButton/ThemeSwitcherButton';

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
        <header className="sticky top-0 z-20 h-24 w-full bg-slate-300 dark:bg-slate-700">
            <div className="mx-auto flex h-full w-full items-center justify-between px-[10px] md:max-w-[644px] lg:max-w-[1200px] lg:space-x-0">
                <Link
                    href="/"
                    className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                >
                    <img
                        src="logo.jpg"
                        alt=""
                        className="h-16 rounded-full shadow-lg shadow-cyan-500/50"
                    />
                </Link>
                <MainNavigationMenu
                    storyRouters={storyRouters}
                    genreRouters={genreRouters}
                    chapterRouters={chapterRouters}
                />
                <div className="relative flex space-x-2">
                    <ThemeSwitcherButton />
                    <SearchInput />
                </div>
            </div>
        </header>
    );
}
