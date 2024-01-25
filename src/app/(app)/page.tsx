'use client';

import { useAtom } from 'jotai/index';
import React, { useEffect } from 'react';

import { useGetGenreList, useGetTopStoryList } from '@/hooks/client';

import { FullStoryList } from '@/components/HomePage/FullStoryList/FullStoryList';
import { HotStoryList } from '@/components/HomePage/HotStoryList/HotStoryList';
import { UpdatedStoryList } from '@/components/HomePage/UpdatedStoryList/UpdatedStoryList';

import { genreListResponseAtom, topStoryListResponseAtom } from '@/atoms';

export default function HomePage() {
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
        <div className="flex flex-col min-h-screen">
            <div className="flex flex-col container px-30">
                <HotStoryList />
                <UpdatedStoryList />
                <FullStoryList />
            </div>
        </div>
    );
}
