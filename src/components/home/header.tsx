import { BookOpenText } from 'lucide-react';
import Link from 'next/link';

import ChangeTheme from '@/components/home/change-theme';
import { HomeNavigationMenu } from '@/components/home/main-nav';
import { Search } from '@/components/home/search';
import { Button } from '@/components/ui/button';

export default function Header() {
    return (
        <header className="border-b dark:bg-slate-700 bg-slate-300">
            <div className="flex h-16 items-center px-4">
                <Link href="/" className="mr-6 ml-2">
                    <Button variant="outline">
                        <BookOpenText /><span className="ml-2">[Story Name]</span>
                    </Button>
                </Link>
                <HomeNavigationMenu />
                <div className="ml-auto flex items-center space-x-4">
                    <ChangeTheme />
                    <Search />
                </div>
            </div>
        </header>
    );
}
