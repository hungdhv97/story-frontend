'use client';

import React from 'react';

import Footer from '@/components/home/footer';
import Header from '@/components/home/header';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
            </main>
            <Footer />
        </div>
    );
};

