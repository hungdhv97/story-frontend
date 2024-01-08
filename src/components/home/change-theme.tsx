import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

export default function ChangeTheme() {
    const { theme, setTheme } = useTheme();
    const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

    useEffect(() => {
        setTheme(isDarkMode ? 'dark' : 'light');
    }, [isDarkMode, setTheme]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div>
            <Button variant="outline" size="icon" onClick={toggleTheme}>
                {isDarkMode ? (
                    <Sun className="h-[1.2rem] w-[1.2rem]" />
                ) : (
                    <Moon className="h-[1.2rem] w-[1.2rem]" />
                )}
                <span className="sr-only">Toggle theme</span>
            </Button>
        </div>
    );
}
