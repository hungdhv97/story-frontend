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
    full: boolean;
    is_new: boolean;
    is_hot: boolean;
}

export interface IFullStoryProps {
    cover_photo: string;
    title: string;
    full: boolean;
    totalChapter: number;
}
