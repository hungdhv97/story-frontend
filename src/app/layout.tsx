import { Inter as FontSans } from 'next/font/google';
import { ReactNode } from 'react';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import { Providers } from '@/app/providers';


const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['700'],
});

interface RootLayoutProps {
    children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
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
            {children}
        </Providers>
        </body>
        </html>
    );
}
