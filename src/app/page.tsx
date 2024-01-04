import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';


export default function HomePage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Sidebar />
                <section className="flex-1 p-4">
                </section>
            </main>
            <Footer />
        </div>
    );
};

