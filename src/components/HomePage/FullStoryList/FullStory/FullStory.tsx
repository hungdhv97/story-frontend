import { StatusButton } from '@/components/HomePage/HotStoryList/StatusButton/StatusButton';

import { IStoryResponse } from '@/interfaces/services/responses';

export function FullStory({ story }: { story: IStoryResponse }) {
    return (
        <div className="flex flex-col items-center justify-end space-y-2 p-2">
            <img
                src={story.cover_photo}
                alt={story.title}
                className="rounded-md object-cover shadow-md"
            />
            <h2 className="w-50 text-center font-semibold">{story.title}</h2>
            <div className="flex">
                {story.status === 'completed' && (
                    <StatusButton
                        label={`Full ${story.total_chapters} chapters`}
                        link="/filter/stories/full"
                        className="z-10 bg-blue-500 hover:bg-blue-700"
                    />
                )}
            </div>
        </div>
    );
}
