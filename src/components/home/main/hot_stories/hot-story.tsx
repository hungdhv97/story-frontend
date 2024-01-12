import Link from 'next/link';

import { Button } from '@/components/ui/button';

import { IHotStoryProps } from '@/interfaces/components/props';

export default function HotStory(story: IHotStoryProps) {
    return (
        <div className="flex flex-col items-center justify-end space-y-2">
            <h2 className="text-center font-semibold w-50">{story.title}</h2>
            <img
                src={story.cover_photo}
                alt={story.title}
                className="h-100 object-cover shadow-md rounded-md"
            />
            <div className="flex">
                {story.is_hot && (
                    <Link href="/filter/stories/hot">
                        <Button
                            variant="outline"
                            className="bg-red-500 hover:bg-red-700"
                        >
                            Hot
                        </Button>
                    </Link>
                )}
                {story.is_new && (
                    <Link href="/filter/stories/new">
                        <Button
                            variant="outline"
                            className="bg-green-500 hover:bg-green-700"
                        >
                            New
                        </Button>
                    </Link>
                )}
                {story.full && (
                    <Link href="/filter/stories/full">
                        <Button
                            variant="outline"
                            className="bg-blue-500 hover:bg-blue-700"
                        >
                            Full
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
}
