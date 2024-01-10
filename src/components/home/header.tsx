import { BookOpenText } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { HomeNavigationMenu } from '@/components/home/main-nav';
import { Search } from '@/components/home/search';
import ThemeSwitcher from '@/components/home/theme-switcher';
import { Button } from '@/components/ui/button';

import { chapterRouters, storyRouters } from '@/constants';
import { IGenre } from '@/interfaces/services/responses';
import { fetchGenres } from '@/services';


export default function Header() {
    const [genreRouters, setGenreRouters] = useState([]);

    useEffect(() => {
        fetchGenres()
            .then(genres => {
                setGenreRouters(genres.map(({ id, name, slug }: IGenre) => ({
                    id,
                    title: name,
                    href: `/${slug}`,
                })));
            });
    }, []);

    return (
        <header className="border-b dark:bg-slate-700 bg-slate-300">
            <div className="flex h-16 items-center px-4">
                <Link href="/" className="mr-6 ml-2">
                    <Button variant="outline">
                        <BookOpenText /><span className="ml-2">[Story Name]</span>
                    </Button>
                </Link>
                <HomeNavigationMenu
                    storyRouters={storyRouters}
                    genreRouters={genreRouters}
                    chapterRouters={chapterRouters}
                />
                <div className="ml-auto flex items-center space-x-4">
                    <ThemeSwitcher />
                    <Search />
                </div>
            </div>
        </header>
    );
}
