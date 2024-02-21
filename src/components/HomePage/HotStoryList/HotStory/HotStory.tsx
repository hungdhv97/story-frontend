import { StatusButton } from '@/components/HomePage/HotStoryList/StatusButton/StatusButton';

import { IHotStoryProps } from '@/interfaces/components/props';

export function HotStory(story: IHotStoryProps) {
    return (
        <div className="flex flex-col items-center justify-end space-y-2 p-2">
            <img
                src={story.cover_photo}
                alt={story.title}
                className="object-cover shadow-md rounded-md"
            />
            <h2 className="text-center font-semibold w-50">{story.title}</h2>
            <div className="flex">
                {story.is_hot && (
                    <StatusButton
                        label="Hot"
                        link="/filter/stories/hot"
                        className="bg-red-500 hover:bg-red-700 z-10"
                    />
                )}
                {story.is_new && (
                    <StatusButton
                        label="New"
                        link="/filter/stories/new"
                        className="bg-green-500 hover:bg-green-700 z-10"
                    />
                )}
                {story.full && (
                    <StatusButton
                        label="Full"
                        link="/filter/stories/full"
                        className="bg-blue-500 hover:bg-blue-700 z-10"
                    />
                )}
            </div>
        </div>
    );
}
