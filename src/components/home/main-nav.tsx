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

import { IHomeNavigationMenuProps } from '@/interfaces/components/props';


export function HomeNavigationMenu({
                                       storyRouters,
                                       genreRouters,
                                       chapterRouters,
                                   }: IHomeNavigationMenuProps) {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Danh sách</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 p-2 md:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                            {storyRouters.map((router) => (
                                <ListItem
                                    key={router.title}
                                    title={router.title}
                                    href={router.href}
                                >
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Thể loại</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[300px] gap-2 p-2 md:w-[300px] md:grid-cols-2 lg:w-[300px] ">
                            {genreRouters.map((router) => (
                                <ListItem
                                    key={router.title}
                                    title={router.title}
                                    href={router.href}
                                >
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Phân loại theo chương</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-2 p-2 md:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                            {chapterRouters.map((router) => (
                                <ListItem
                                    key={router.title}
                                    title={router.title}
                                    href={router.href}
                                >
                                </ListItem>
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
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
