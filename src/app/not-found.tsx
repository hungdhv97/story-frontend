import Link from 'next/link';
import React from 'react';

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-800">404</h1>
                <p className="text-2xl font-light text-gray-600">Page not found</p>
                <p className="mt-4 mb-4 text-gray-700">The page you are looking for could not be found.</p>
                <Link href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 shadow-lg">
                    Go back home
                </Link>
            </div>
        </div>
    );
};

