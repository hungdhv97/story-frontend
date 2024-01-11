import { IHotStoryProps } from '@/interfaces/components/props';

export default function HotStory(story: IHotStoryProps) {
    return (
        <div className="flex flex-col items-center">
            <img
                src={story.cover_photo}
                alt={story.title}
                className="w-full h-auto"
            />
            <h2 className="font-semibold">{story.title}</h2>
        </div>
    );
}
