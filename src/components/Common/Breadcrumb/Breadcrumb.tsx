import clsx from 'clsx'; // Import clsx
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
        <nav
            aria-label="breadcrumb"
            className="my-3 w-full rounded-md bg-neutral-100 px-5 py-3 shadow-lg dark:bg-neutral-700"
        >
            <ol className="flex">
                {paths.map((path, index) => {
                    const isLast = index === paths.length - 1;
                    return (
                        <li key={index}>
                            <Link
                                href={path.href}
                                className={clsx(
                                    'hover:text-blue-600 dark:text-blue-300 dark:hover:text-blue-500',
                                    {
                                        'text-blue-700 dark:text-primary':
                                            isLast,
                                    },
                                )}
                            >
                                {path.title}
                            </Link>
                            {!isLast && (
                                <span className="mx-2 text-neutral-500 dark:text-neutral-300">
                                    /
                                </span>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}
