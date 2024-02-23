import React from 'react';

import '@/styles/globals.css';

import { Footer } from '@/components/Layout/Footer/Footer';
import { Header } from '@/components/Layout/Header/Header';

import { IRootLayoutProps } from '@/interfaces/components/props';

export default function AppLayout({ children }: IRootLayoutProps) {
    return (
        <section className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
        </section>
    );
}
