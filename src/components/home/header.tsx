import { BookOpenText } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { HomeNavigationMenu } from '@/components/home/main-nav';
import { Search } from '@/components/home/search';
import ThemeSwitcher from '@/components/home/theme-switcher';
import { Button } from '@/components/ui/button';


const listFilterStories: { title: string; href: string; }[] = [
    {
        title: 'Truyện Hot',
        href: '/hot-stories',
    },
    {
        title: 'Truyện Full',
        href: '/full-stories',
    },
    {
        title: 'Truyện mới cập nhật',
        href: '/updated-stories',
    },
];

const listFilterChapters: { title: string; href: string; }[] = [
    {
        title: 'Dưới 100',
        href: '/top-stories/lower-100',
    },
    {
        title: 'Từ 100 đến 500',
        href: '/top-stories/100-to-500',
    },
    {
        title: 'Từ 500 đến 1000',
        href: '/top-stories/500-to-1000',
    },
    {
        title: 'Trên 1000',
        href: '/top-stories/more-than-1000',
    },
];

async function fetchGenres() {
    const res = await fetch('http://localhost:8000/api/genres/');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

interface Genre {
    id: number;
    name: string;
    slug: string;
}

export default function Header() {
    const [listFilterGenres, setListFilterGenres] = useState([]);

    useEffect(() => {
        const fetchAndSetGenres = async () => {
            try {
                const genres = await fetchGenres();
                setListFilterGenres(genres.map((genre: Genre) => ({
                    id: genre.id,
                    title: genre.name,
                    href: '/' + genre.slug,
                })));
            } catch (error) {
                console.error('Failed to fetch genres', error);
            }
        };

        fetchAndSetGenres();
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
                    listFilterStories={listFilterStories}
                    listFilterGenres={listFilterGenres}
                    listFilterChapters={listFilterChapters}
                />
                <div className="ml-auto flex items-center space-x-4">
                    <ThemeSwitcher />
                    <Search />
                </div>
            </div>
        </header>
    );
}
