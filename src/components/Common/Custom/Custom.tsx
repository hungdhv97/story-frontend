import clsx from 'clsx';
import Link from 'next/link';
import React, { FC, ReactNode } from 'react';

interface IH1Props {
    href: string;
    children: ReactNode;
    className?: string;
}

const H1: FC<IH1Props> = ({ href, children, className }) => (
    <Link href={href} passHref>
        <h1
            className={clsx(
                'my-2 scroll-m-20 py-4 text-4xl font-extrabold tracking-tight hover:text-blue-500 lg:text-5xl',
                className,
            )}
        >
            {children}
        </h1>
    </Link>
);

export { H1 };
