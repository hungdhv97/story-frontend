import type { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
    title: 'About page',
    description: 'About page description',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <section>{children}</section>
    );
}
