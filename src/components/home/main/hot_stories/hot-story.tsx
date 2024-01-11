import { IHotStoryProps } from '@/interfaces/components/props';

export default function HotStory(story: IHotStoryProps) {
    return (
        <div className="flex flex-col items-center justify-end">
            <h2 className="text-center font-semibold w-40">{story.title}</h2>
            <img
                src={story.cover_photo}
                alt={story.title}
                className="h-100 object-cover shadow-md rounded-md"
            />
        </div>
    );
}
