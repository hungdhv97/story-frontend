import clsx from 'clsx';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

interface IH1Props {
    href: string;
    children: ReactNode;
    className?: string;
}

const H1: FC<IH1Props> = ({ href, children, className }) => (
    <Link
        href={href}
        passHref
    >
        <h1
            className={clsx(
                'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-2 hover:underline',
                className,
            )}
        >
            {children}
        </h1>
    </Link>
);

export default H1;
