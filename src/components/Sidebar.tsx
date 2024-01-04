import Link from 'next/link';

export default function SidebarPage() {
    const navItems = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
    ];

    return (
        <aside className="w-64" aria-label="Sidebar">
            <div className="py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                <ul className="space-y-2">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link href={item.path}
                                  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
}