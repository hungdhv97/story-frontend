import { IRouter } from '@/interfaces/common';

export const storyRouters: IRouter[] = [
    {
        title: 'Truyện Hot',
        href: '/filter/stories/hot',
    },
    {
        title: 'Truyện Full',
        href: '/filter/stories/completed',
    },
    {
        title: 'Truyện mới cập nhật',
        href: '/filter/stories/new',
    },
];
export const chapterRouters: IRouter[] = [
    {
        title: 'Dưới 100',
        href: '/filter/chapters/lower-100',
    },
    {
        title: 'Từ 100 đến 500',
        href: '/filter/chapters/from-100-to-500',
    },
    {
        title: 'Từ 500 đến 1000',
        href: '/filter/chapters/from-500-to-1000',
    },
    {
        title: 'Trên 1000',
        href: '/filter/chapters/more-than-1000',
    },
];
