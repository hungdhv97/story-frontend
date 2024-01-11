'use client';

import React from 'react';

import Footer from '@/components/home/footer';
import Header from '@/components/home/header';
import MainContent from '@/components/home/main';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen justify-between">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
};

