import { Inter as FontSans } from 'next/font/google';

import '@/styles/globals.css';

import { cn } from '@/lib/utils';

import { Providers } from '@/app/providers';
import { IRootLayoutProps } from '@/interfaces/components/props';

const fontSans = FontSans({
    subsets: ['latin'],
    variable: '--font-sans',
    weight: ['700'],
});

export default function RootLayout({ children }: IRootLayoutProps) {
    return (
        <html
            lang="en"
            suppressHydrationWarning
        >
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
