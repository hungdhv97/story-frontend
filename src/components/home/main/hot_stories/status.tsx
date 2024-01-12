import Link from 'next/link';

import { Button } from '@/components/ui/button';

export interface IStatusProps {
    label: string;
    link: string;
    color: string;
}

export default function Status({ label, link, color }: IStatusProps) {
    return (
        <Link href={link}>
            <Button
                variant="outline"
                className={`bg-${color}-500 hover:bg-${color}-700`}
            >
                {label}
            </Button>
        </Link>
    );
}
