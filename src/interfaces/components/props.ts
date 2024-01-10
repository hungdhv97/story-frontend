import { ReactNode } from 'react';

import { IRouter } from '@/interfaces/common';

export interface IRootLayoutProps {
    children: ReactNode;
}

export interface IHomeNavigationMenuProps {
    listFilterStories: IRouter[];
    listFilterGenres: IRouter[];
    listFilterChapters: IRouter[];
}

