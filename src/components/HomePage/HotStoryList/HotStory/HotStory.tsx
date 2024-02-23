import Link from 'next/link';

import { IStoryResponse } from '@/interfaces/services/responses';

export function HotStory({ story }: { story: IStoryResponse }) {
    return (
        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
            <div className="group relative w-full overflow-hidden bg-cover bg-no-repeat">
                <img
                    src={story.cover_photo}
                    alt={story.title}
                    className="w-full rounded-lg object-cover group-hover:opacity-90"
                />
                <div className="absolute bottom-0 w-full rounded-b-lg bg-neutral-700/50 p-4 backdrop-blur dark:bg-neutral-50/50">
                    <div className="text-lg font-bold leading-none tracking-tighter text-neutral-50 dark:text-neutral-800">
                        {story.title}
                    </div>
                    {story.status == 'completed' && (
                        <div className="absolute -right-5 -top-6 skew-y-6 overflow-visible bg-green-500 px-1 py-0.5 text-white shadow-lg">
                            Đã hoàn thành
                        </div>
                    )}
                </div>
                <Link
                    href={`/stories/${story.slug}`}
                    className="absolute inset-0 z-10 size-full"
                />
                <div className="z-5 group-hover:animate-shine absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40" />
            </div>
        </div>
    );
}
