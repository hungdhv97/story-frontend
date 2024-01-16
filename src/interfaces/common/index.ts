import { IStoryDetail } from '@/interfaces/services/responses';

export interface IRouter {
    title: string;
    href: string;
}

export interface IReadingChapter {
    id: number;
    story: IStoryDetail;
    title: string;
    accessedAt: string;
}
