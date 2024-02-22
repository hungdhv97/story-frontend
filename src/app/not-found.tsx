import Link from 'next/link';
import React from 'react';

export default function NotFoundPage() {
    return (
        <div className="flex h-screen items-center justify-center bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-light text-gray-600">
                    Page not found
                </p>
                <p className="mb-4 mt-4 text-gray-700">
                    The page you are looking for could not be found.
                </p>
                <Link
                    href="/"
                    className="mt-6 rounded bg-blue-500 px-4 py-2 text-white shadow-lg hover:bg-blue-600"
                >
                    Go back home
                </Link>
            </div>
        </div>
    );
}
