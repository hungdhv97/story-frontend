import Status from '@/components/home/main/hot-stories/status';

import { IHotStoryProps } from '@/interfaces/components/props';

export default function HotStory(story: IHotStoryProps) {
    return (
        <div className="flex flex-col items-center justify-end space-y-2 p-2">
            <h2 className="text-center font-semibold w-50">{story.title}</h2>
            <img
                src={story.cover_photo}
                alt={story.title}
                className="object-cover shadow-md rounded-md"
            />
            <div className="flex">
                {story.is_hot && (
                    <Status
                        label="Hot"
                        link="/filter/stories/hot"
                        className="bg-red-500 hover:bg-red-700"
                    />
                )}
                {story.is_new && (
                    <Status
                        label="New"
                        link="/filter/stories/new"
                        className="bg-green-500 hover:bg-green-700"
                    />
                )}
                {story.full && (
                    <Status
                        label="Full"
                        link="/filter/stories/full"
                        className="bg-blue-500 hover:bg-blue-700"
                    />
                )}
            </div>
        </div>
    );
}
