import clsx from 'clsx';
import Link from 'next/link';

interface IPath {
    href: string;
    title: string;
}

interface IBreadcrumbProps {
    paths: IPath[];
}

export function Breadcrumb({ paths }: IBreadcrumbProps) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="flex divide-x divide-indigo-400 leading-none text-indigo-600">
                {paths.map((path, index) => (
                    <Link
                        key={index}
                        className={clsx({
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
