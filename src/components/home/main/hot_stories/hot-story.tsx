import Status from '@/components/home/main/hot_stories/status';

import { IHotStoryProps } from '@/interfaces/components/props';

export default function HotStory(story: IHotStoryProps) {
    return (
        <div className="flex flex-col items-center justify-end space-y-2">
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
                        color="red"
                    />
                )}
                {story.is_new && (
                    <Status
                        label="New"
                        link="/filter/stories/new"
                        color="green"
                    />
                )}
                {story.full && (
                    <Status
                        label="Full"
                        link="/filter/stories/full"
                        color="blue"
                    />
                )}
            </div>
        </div>
    );
}
