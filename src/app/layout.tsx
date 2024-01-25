import { Inter as FontSans } from 'next/font/google';
import React from 'react';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import { Footer } from '@/components/Layout/Footer/Footer';
import { Header } from '@/components/Layout/Header/Header';
import { Providers } from '@/components/Providers/Providers';

import { IRootLayoutProps } from '@/interfaces/components/props';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['700'],
});

export default function RootLayout({ children }: IRootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    'min-h-screen bg-background font-sans antialiased',
                    fontSans.variable,
                )}
            >
                <Providers>
                    <Header />
                    {children}
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
