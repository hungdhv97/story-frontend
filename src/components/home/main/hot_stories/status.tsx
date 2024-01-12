import Link from 'next/link';

import { Button } from '@/components/ui/button';

export interface IStatusProps {
    label: string;
    link: string;
    className: string;
}

export default function Status({ label, link, className }: IStatusProps) {
    return (
        <Link href={link}>
            <Button variant="outline" className={className}>
                {label}
            </Button>
        </Link>
    );
}
