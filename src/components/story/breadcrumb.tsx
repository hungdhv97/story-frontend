import clsx from 'clsx';
import Link from 'next/link';

interface IPath {
    href: string;
    title: string;
}

interface IBreadcrumbProps {
    paths: IPath[];
}

export default function Breadcrumb({ paths }: IBreadcrumbProps) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex leading-none text-indigo-600 divide-x divide-indigo-400">
                {paths.map((path, index) => (
                    <Link
                        key={index}
                        className={clsx('text-sm', {
                            'pr-4': index === 0,
                            'px-4': index != 0,
                        })}
                        href={path.href}
                    >
                        {path.title}
                    </Link>
                ))}
            </ol>
        </nav>
    );
}
