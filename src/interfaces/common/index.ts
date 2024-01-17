import { IStoryShortInfo } from '@/interfaces/services/responses';

export interface IRouter {
    title: string;
    href: string;
}

export interface IReadingChapter {
    id: number;
    story: IStoryShortInfo;
    title: string;
    accessedAt: string;
}
