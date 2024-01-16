'use client';

import { useAtom } from 'jotai';
import React, { useEffect } from 'react';

import {
    useGetFullStories,
    useGetGenres,
    useGetHotStories,
    useGetUpdatedStories,
} from '@/data/hooks';

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

    const { data: genres } = useGetGenres();
    const { data: hotStories } = useGetHotStories();
    const { data: updatedStories } = useGetUpdatedStories();
    const { data: fullStories } = useGetFullStories();

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

    return (
        <div className="flex flex-col min-h-screen">
            <MainContent />
        </div>
    );
}
