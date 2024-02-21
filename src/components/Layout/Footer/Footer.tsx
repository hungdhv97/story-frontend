import { Facebook, Github } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center p-4 border-t dark:bg-slate-700 bg-slate-300">
                <span className="font-black text-3xl font-sans tracking-widest">
                    TruyenHH
                </span>
                <p className="my-2">
                    TruyenHH là website đọc truyện tranh miễn phí
                </p>
                <div className="flex space-x-4">
                    <Link
                        href="https://github.com/hungdhv97/story-frontend"
                        passHref
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Github className="size-14 border-[3px] p-2 rounded-full border-foreground hover:opacity-60" />
                    </Link>
                    <Link
                        href="https://facebook.com/hungdhv97"
                        passHref
                        className="flex items-center gap-2"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Facebook className="size-14 border-[3px] p-2 rounded-full border-foreground hover:opacity-60" />
                    </Link>
                </div>
                <p className="my-2">Copyright © 2024 HH Contributors</p>
            </div>
        </div>
    );
}
