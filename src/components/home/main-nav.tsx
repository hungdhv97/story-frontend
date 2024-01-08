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

const listFilterGenres: { title: string; href: string; }[] = [
    {
        title: 'Tiên Hiệp',
        href: '/genres/tien-hiep',
    },
    {
        title: 'Tiên Hiệp',
        href: '/genres/tien-hiep',
    },
    {
        title: 'Tiên Hiệp',
        href: '/genres/tien-hiep',
    },
    {
        title: 'Tiên Hiệp',
        href: '/genres/tien-hiep',
    },
    {
        title: 'Tiên Hiệp',
        href: '/genres/tien-hiep',
    },
    {
        title: 'Tiên Hiệp',
        href: '/genres/tien-hiep',
    },
    {
        title: 'Tiên Hiệp',
        href: '/genres/tien-hiep',
    },
    {
        title: 'Tiên Hiệp',
        href: '/genres/tien-hiep',
    },
];

const listFilterStories: { title: string; href: string; }[] = [
    {
        title: 'Truyện Hot',
        href: '/hot-stories',
    },
    {
        title: 'Truyện Full',
        href: '/full-stories',
    },
    {
        title: 'Truyện mới cập nhật',
        href: '/updated-stories',
    },
];

const listFilterChapters: { title: string; href: string; }[] = [
    {
        title: 'Dưới 100',
        href: '/top-stories/lower-100',
    },
    {
        title: 'Từ 100 đến 500',
        href: '/top-stories/100-to-500',
    },
    {
        title: 'Từ 500 đến 1000',
        href: '/top-stories/500-to-1000',
    },
    {
        title: 'Trên 1000',
        href: '/top-stories/more-than-1000',
    },
];


export function HomeNavigationMenu() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Danh sách</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {listFilterStories.map((item) => (
                                <ListItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                >
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Thể loại</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {listFilterGenres.map((item) => (
                                <ListItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
                                >
                                </ListItem>
                            ))}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Phân loại theo chương</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                            {listFilterChapters.map((item) => (
                                <ListItem
                                    key={item.title}
                                    title={item.title}
                                    href={item.href}
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
