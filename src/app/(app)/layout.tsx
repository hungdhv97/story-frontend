import React from 'react';

import '@/styles/globals.css';

import { Footer } from '@/components/Layout/Footer/Footer';
import { Header } from '@/components/Layout/Header/Header';

import { IRootLayoutProps } from '@/interfaces/components/props';

export default function AppLayout({ children }: IRootLayoutProps) {
    return (
        <section className="relative min-h-screen">
            <Header />
            {children}
            <Footer />
        </section>
    );
}
