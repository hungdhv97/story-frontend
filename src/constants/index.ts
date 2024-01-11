import { IRouter } from '@/interfaces/common';

export const storyRouters: IRouter[] = [
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
export const chapterRouters: IRouter[] = [
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
