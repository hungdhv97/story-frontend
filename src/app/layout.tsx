'use client';

import { useAtom } from 'jotai/index';
import { Inter as FontSans } from 'next/font/google';
import React, { useEffect } from 'react';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';
import { useGetGenreList, useGetTopStoryList } from '@/hooks/client';

import { Footer } from '@/components/Layout/Footer/Footer';
import { Header } from '@/components/Layout/Header/Header';

import { Providers } from '@/app/providers';
import { genreListResponseAtom } from '@/atoms/genreListResponseAtom';
import { topStoryListResponseAtom } from '@/atoms/topStoryListResponseAtom';
import { IRootLayoutProps } from '@/interfaces/components/props';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['700'],
});

export default function RootLayout({ children }: IRootLayoutProps) {
    const [, setGenreListResponse] = useAtom(genreListResponseAtom);
    const [, setTopStoryListResponse] = useAtom(topStoryListResponseAtom);

    const { data: genreList } = useGetGenreList();
    const { data: topStoryList } = useGetTopStoryList();

    useEffect(() => {
        if (genreList) {
            setGenreListResponse(genreList);
        }
    }, [genreList, setGenreListResponse]);

    useEffect(() => {
        if (topStoryList) {
            setTopStoryListResponse(topStoryList);
        }
    }, [topStoryList, setTopStoryListResponse]);

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
