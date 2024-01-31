import { clsx } from 'clsx';
import Link from 'next/link';

import { buttonVariants } from '@/components/ui/button';

export interface IStatusProps {
    label: string;
    link: string;
    className: string;
}

export function StatusButton({ label, link, className }: IStatusProps) {
    return (
        <Link
            href={link}
            className={clsx(className, buttonVariants({ variant: 'outline' }))}
        >
            {label}
        </Link>
    );
}
