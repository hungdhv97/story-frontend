import Link from 'next/link';

import { IHotStoryProps } from '@/interfaces/components/props';

export default function HotStory(story: IHotStoryProps) {
    return (
        <Link href={`stories/${story.slug}`} className="h-auto">
            <div className="flex flex-col items-center m-2 ">
                <h2 className="text-center font-semibold w-20">
                    {story.title}
                </h2>
                <img
                    src={story.cover_photo}
                    alt={story.title}
                    className="h-100 object-cover shadow-md rounded-md"
                />
            </div>
        </Link>
    );
}
