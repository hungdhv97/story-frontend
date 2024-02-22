import { StatusButton } from '@/components/HomePage/HotStoryList/StatusButton/StatusButton';

import { IHotStoryProps } from '@/interfaces/components/props';

export function HotStory(story: IHotStoryProps) {
    return (
        <div className="flex flex-col items-center justify-end space-y-2 p-2">
            <img
                src={story.cover_photo}
                alt={story.title}
                className="rounded-md object-cover shadow-md"
            />
            <h2 className="w-50 text-center font-semibold">{story.title}</h2>
            <div className="flex">
                {story.is_hot && (
                    <StatusButton
                        label="Hot"
                        link="/filter/stories/hot"
                        className="z-10 bg-red-500 hover:bg-red-700"
                    />
                )}
                {story.is_new && (
                    <StatusButton
                        label="New"
                        link="/filter/stories/new"
                        className="z-10 bg-green-500 hover:bg-green-700"
                    />
                )}
                {story.full && (
                    <StatusButton
                        label="Full"
                        link="/filter/stories/full"
                        className="z-10 bg-blue-500 hover:bg-blue-700"
                    />
                )}
            </div>
        </div>
    );
}
