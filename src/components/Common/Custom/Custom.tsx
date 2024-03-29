import clsx from 'clsx';
import React, { FC, ReactNode } from 'react';

interface IH1Props {
    children: ReactNode;
    className?: string;
}

const H1: FC<IH1Props> = ({ children, className }) => (
    <div
        className={clsx(
            'my-2 inline-block scroll-m-20 py-4 text-4xl font-extrabold tracking-tight lg:text-5xl',
            className,
        )}
    >
        {children}
    </div>
);

const H2: FC<IH1Props> = ({ children, className }) => (
    <div
        className={clsx(
            'my-2 inline-block scroll-m-20 py-1 text-2xl font-extrabold tracking-tight lg:text-3xl',
            className,
        )}
    >
        {children}
    </div>
);

export { H1, H2 };
