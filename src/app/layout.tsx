import { Inter as FontSans } from 'next/font/google';
import React from 'react';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import { Providers } from '@/components/Providers/Providers';

import { IRootLayoutProps } from '@/interfaces/components/props';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
});

export default function RootLayout({ children }: IRootLayoutProps) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head />
            <body
                className={cn(
                    'min-h-screen bg-background font-serif text-xl tracking-wide antialiased',
                    fontSans.variable,
                )}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
