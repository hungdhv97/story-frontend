import { ReactNode } from 'react';

import { IRouter } from '@/interfaces/common';

export interface IRootLayoutProps {
    children: ReactNode;
}

export interface IHomeNavigationMenuProps {
    storyRouters: IRouter[];
    genreRouters: IRouter[];
    chapterRouters: IRouter[];
}

export interface IHotStoryProps {
    cover_photo: string;
    title: string;
}
