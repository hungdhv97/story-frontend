import Image from 'next/image';
import Link from 'next/link';

import { getTitle } from '@/lib/helper';

import { IStoryResponse } from '@/interfaces/services/responses';

export function HotStory({ story }: { story: IStoryResponse }) {
    return (
        <div className="block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            <div className="group relative w-full">
                <div className="group-hover:opacity-80">
                    <Image
                        src={story.cover_photo}
                        alt={story.title}
                        className="w-full rounded-lg"
                        placeholder="blur"
                        sizes="100vw"
                        width={200}
                        height={200}
                    />
                    <div className="absolute bottom-0 flex h-14 w-full items-center rounded-b-lg bg-neutral-700/50 backdrop-blur dark:bg-neutral-50/50">
                        <div className="px-4 text-lg font-bold leading-none tracking-tighter text-neutral-50 dark:text-neutral-800">
                            {getTitle(story.title)}
                        </div>
                        {story.status == 'completed' && (
                            <div className="absolute -right-5 -top-6 skew-y-6 overflow-visible bg-green-500 px-1 py-0.5 text-white shadow-lg">
                                Đã hoàn thành
                            </div>
                        )}
                    </div>
                </div>
                <Link
                    href={`/stories/${story.slug}`}
                    className="absolute inset-0 z-10 size-full"
                />
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <div className="z-5 absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 transform bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
                </div>
            </div>
        </div>
    );
}
