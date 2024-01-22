'use client';

import { useAtom } from 'jotai/index';
import { Inter as FontSans } from 'next/font/google';
import React, { useEffect } from 'react';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import {
    useGetFullStories,
    useGetGenreList,
    useGetTopStories,
} from '@/data/hooks';

import { Footer } from '@/components/Layout/Footer/Footer';
import { Header } from '@/components/Layout/Header/Header';

import { Providers } from '@/app/providers';
import { fullStoriesResponseAtom } from '@/atoms/fullStoriesResponseAtom';
import { genreListResponseAtom } from '@/atoms/genreListResponseAtom';
import { topStoriesResponseAtom } from '@/atoms/topStoriesResponseAtom';
import { IRootLayoutProps } from '@/interfaces/components/props';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['700'],
});

export default function RootLayout({ children }: IRootLayoutProps) {
    const [, setGenreListResponse] = useAtom(genreListResponseAtom);
    const [, setFullStoriesResponse] = useAtom(fullStoriesResponseAtom);
    const [, setTopStoriesResponse] = useAtom(topStoriesResponseAtom);

    const { data: genreList } = useGetGenreList();
    const { data: fullStories } = useGetFullStories();
    const { data: topStories } = useGetTopStories();

    useEffect(() => {
        if (genreList) {
            setGenreListResponse(genreList);
        }
    }, [genreList, setGenreListResponse]);

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
