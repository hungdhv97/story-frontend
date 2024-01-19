'use client';

import React from 'react';

import { FullStoryList } from '@/components/HomePage/FullStoryList/FullStoryList';
import { HotStoryList } from '@/components/HomePage/HotStoryList/HotStoryList';
import { UpdatedStoryList } from '@/components/HomePage/UpdatedStoryList/UpdatedStoryList';

export default function HomePage() {
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
