'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useGetGenreList } from '@/hooks/client';

import { MainNavigationMenu } from '@/components/Layout/Header/MainNavigationMenu/MainNavigationMenu';
import { SearchInput } from '@/components/Layout/Header/SearchInput/SearchInput';
import { ThemeSwitcherButton } from '@/components/Layout/Header/ThemeSwitcherButton/ThemeSwitcherButton';

import Logo from '@/../public/images/logo.jpg';
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
        <header className="h-24 bg-slate-300 dark:bg-slate-700">
            <div className="container flex h-full justify-between">
                <div className="flex items-center space-x-8">
                    <Link
                        href="/"
                        className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
                    >
                        <Image
                            src={Logo}
                            alt="Logo"
                            placeholder="blur"
                            width={150}
                            height={50}
                            className="rounded-full drop-shadow-xl"
                        />
                    </Link>
                    <MainNavigationMenu
                        storyRouters={storyRouters}
                        genreRouters={genreRouters}
                        chapterRouters={chapterRouters}
                    />
                </div>
                <div className="flex items-center space-x-4">
                    <SearchInput />
                    <ThemeSwitcherButton />
                </div>
            </div>
        </header>
    );
}
