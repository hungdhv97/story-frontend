'use client';

import { useAtom } from 'jotai';
import React from 'react';

import Footer from '@/components/home/footer';
import Header from '@/components/home/header';
import MainContent from '@/components/home/main';

import { fullStoriesResponseAtom } from '@/atoms/fullStoriesResponseAtom';
import { genresResponseAtom } from '@/atoms/genresResponseAtom';
import { hotStoriesResponseAtom } from '@/atoms/hotStoriesResponseAtom';
import { updatedStoriesResponseAtom } from '@/atoms/updatedStoriesResponseAtom';

export default function HomePage() {
    const [, setGenresResponse] = useAtom(genresResponseAtom);
    const [, setHotStoriesResponse] = useAtom(hotStoriesResponseAtom);
    const [, setFullStoriesResponse] = useAtom(fullStoriesResponseAtom);
    const [, setUpdatedStoriesResponse] = useAtom(updatedStoriesResponseAtom);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}
