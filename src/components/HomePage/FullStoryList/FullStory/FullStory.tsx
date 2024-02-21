import { StatusButton } from '@/components/HomePage/HotStoryList/StatusButton/StatusButton';

import { IStoryResponse } from '@/interfaces/services/responses';

export function FullStory({ story }: { story: IStoryResponse }) {
    return (
        <div className="flex flex-col items-center justify-end space-y-2 p-2">
            <img
                src={story.cover_photo}
                alt={story.title}
                className="object-cover shadow-md rounded-md"
            />
            <h2 className="text-center font-semibold w-50">{story.title}</h2>
            <div className="flex">
                {story.status === 'completed' && (
                    <StatusButton
                        label={`Full ${story.total_chapters} chapters`}
                        link="/filter/stories/full"
                        className="bg-blue-500 hover:bg-blue-700 z-10"
                    />
                )}
            </div>
        </div>
    );
}
