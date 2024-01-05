import Link from 'next/link';

export default function HeaderPage() {
    return (
        <header className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-6">
                <h1 className="text-xl font-bold">YourSite</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/" className="hover:text-blue-200 transition duration-300">Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-200 transition duration-300">About</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}