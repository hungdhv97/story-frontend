import { Facebook, Github } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function Footer() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4 border-t dark:bg-slate-700 bg-slate-300">
                <p>© {new Date().getFullYear()} [Story Name]</p>
                <p className="my-2">
                    [Story Name] là website đọc truyện tranh miễn phí
                </p>
                <div className="flex space-x-4">
                    <Link
                        href="https://github.com/hungdhv97/story-frontend"
                        passHref
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline">
                            <Github className="w-5 h-5" /> GitHub
                        </Button>
                    </Link>
                    <Link
                        href="https://facebook.com/hungdhv97"
                        passHref
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="outline">
                            <Facebook className="w-5 h-5" /> Facebook
                        </Button>
                    </Link>
                </div>
                <p className="my-2">@ [Story Host]</p>
            </div>
        </div>
    );
}
