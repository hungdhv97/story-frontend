'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

import { IMainNavigationMenuProps } from '@/interfaces/components/props';

function onNavChange() {
    setTimeout(() => {
        const triggers = document.querySelectorAll(
            '.submenu-trigger[data-state="open"]',
        );
        if (triggers.length === 0) return;

        const firstTrigger = triggers[0] as HTMLElement;
        const viewports = document.getElementsByClassName('submenu-viewport');

        if (viewports.length > 0) {
            const viewport = viewports[0] as HTMLElement;
            viewport.style.left = `${firstTrigger.offsetLeft}px`;
        }
    });
}

export function MainNavigationMenu({
    storyRouters,
    genreRouters,
    chapterRouters,
}: IMainNavigationMenuProps) {
    return (
        <NavigationMenu onValueChange={onNavChange}>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="submenu-trigger">
                        Danh sách
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[270px] grid-cols-1 gap-2 p-2">
                            {storyRouters.map((router) => (
                                <ListItem
                                    key={router.title}
                                    title={router.title}
                                    href={router.href}
                                ></ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="submenu-trigger">
                        Thể loại
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[500px] grid-cols-2 gap-2 p-2">
                            {genreRouters.map((router) => (
                                <ListItem
                                    key={router.title}
                                    title={router.title}
                                    href={router.href}
                                ></ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className="submenu-trigger">
                        Tổng số chương
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[250px] grid-cols-1 gap-2 p-2">
                            {chapterRouters.map((router) => (
                                <ListItem
                                    key={router.title}
                                    title={router.title}
                                    href={router.href}
                                ></ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
                        className,
                    )}
                    {...props}
                >
                    <div className="leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
