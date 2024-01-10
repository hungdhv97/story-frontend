'use client';

import React, { Suspense } from 'react';

import Footer from '@/components/home/footer';
import Header from '@/components/home/header';

export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Suspense fallback={<p>Loading header...</p>}>
                <Header />
            </Suspense>
            <main className="flex flex-1">
            </main>
            <Suspense fallback={<p>Loading footer...</p>}>
                <Footer />
            </Suspense>
        </div>
    );
};

