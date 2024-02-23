import { ReactNode } from 'react';

import { IRouter } from '@/interfaces/common';

export interface IRootLayoutProps {
    children: ReactNode;
}

export interface IMainNavigationMenuProps {
    storyRouters: IRouter[];
    genreRouters: IRouter[];
    chapterRouters: IRouter[];
}
