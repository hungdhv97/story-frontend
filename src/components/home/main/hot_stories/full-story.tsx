import Status from '@/components/home/main/hot_stories/status';

import { IFullStoryProps } from '@/interfaces/components/props';

export default function FullStory(story: IFullStoryProps) {
    return (
        <div className="flex flex-col items-center justify-end space-y-2 p-2">
            <h2 className="text-center font-semibold w-50">{story.title}</h2>
            <img
                src={story.cover_photo}
                alt={story.title}
                className="object-cover shadow-md rounded-md"
            />
            <div className="flex">
                {story.full && (
                    <Status
                        label={`Full ${story.totalChapter} chapters`}
                        link="/filter/stories/full"
                        className="bg-blue-500 hover:bg-blue-700"
                    />
                )}
            </div>
        </div>
    );
}
