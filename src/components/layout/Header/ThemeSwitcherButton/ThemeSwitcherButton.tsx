import { LoaderIcon, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export function ThemeSwitcherButton() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

    useEffect(() => {
        setTheme(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode, setTheme]);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <Button variant="outline" size="icon" onClick={toggleTheme}>
                {mounted ? (
                    isDarkMode ? (
                        <Sun className="h-[1.2rem] w-[1.2rem]" />
                    ) : (
                        <Moon className="h-[1.2rem] w-[1.2rem]" />
                    )
                ) : (
                    <LoaderIcon className="animate-spin" />
                )}
            </Button>
        </div>
    );
}
