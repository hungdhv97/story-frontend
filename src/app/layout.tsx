import type { Metadata } from 'next';
import React from 'react';

import '@/styles/globals.css';

import { lusitana } from '@/fonts';


export const metadata: Metadata = {
    title: 'Home page',
    description: 'Website description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={lusitana.className}>{children}</body>
        </html>
    );
}
