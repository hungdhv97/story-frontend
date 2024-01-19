'use client';

import { useAtom } from 'jotai/index';
import { Inter as FontSans } from 'next/font/google';
import React, { useEffect } from 'react';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import {
    useGetFullStories,
    useGetGenres,
    useGetHotStories,
    useGetTopStories,
    useGetUpdatedStories,
} from '@/data/hooks';

import { Footer } from '@/components/Layout/Footer/Footer';
import { Header } from '@/components/Layout/Header/Header';

import { Providers } from '@/app/providers';
import { fullStoriesResponseAtom } from '@/atoms/fullStoriesResponseAtom';
import { genresResponseAtom } from '@/atoms/genresResponseAtom';
import { hotStoriesResponseAtom } from '@/atoms/hotStoriesResponseAtom';
import { topStoriesResponseAtom } from '@/atoms/topStoriesResponseAtom';
import { updatedStoriesResponseAtom } from '@/atoms/updatedStoriesResponseAtom';
import { IRootLayoutProps } from '@/interfaces/components/props';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['700'],
});

export default function RootLayout({ children }: IRootLayoutProps) {
    const [, setGenresResponse] = useAtom(genresResponseAtom);
    const [, setHotStoriesResponse] = useAtom(hotStoriesResponseAtom);
    const [, setFullStoriesResponse] = useAtom(fullStoriesResponseAtom);
    const [, setUpdatedStoriesResponse] = useAtom(updatedStoriesResponseAtom);
    const [, setTopStoriesResponse] = useAtom(topStoriesResponseAtom);

    const { data: genres } = useGetGenres();
    const { data: hotStories } = useGetHotStories();
    const { data: updatedStories } = useGetUpdatedStories();
    const { data: fullStories } = useGetFullStories();
    const { data: topStories } = useGetTopStories();

    useEffect(() => {
        if (genres) {
            setGenresResponse(genres);
        }
    }, [genres, setGenresResponse]);

    useEffect(() => {
        if (hotStories) {
            setHotStoriesResponse(hotStories);
        }
    }, [hotStories, setHotStoriesResponse]);

    useEffect(() => {
        if (updatedStories) {
            setUpdatedStoriesResponse(updatedStories);
        }
    }, [updatedStories, setUpdatedStoriesResponse]);

    useEffect(() => {
        if (fullStories) {
            setFullStoriesResponse(fullStories);
        }
    }, [fullStories, setFullStoriesResponse]);
    useEffect(() => {
        if (topStories) {
            setTopStoriesResponse(topStories);
        }
    }, [topStories, setTopStoriesResponse]);
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
