import { useGetHotStories } from '@/data/hooks';
import HotStory from '@/components/home/main/hot_stories/hot-story';
import { IStory } from '@/interfaces/services/responses';

export function HotStories() {
    const { data: stories, isLoading, error } = useGetHotStories();

    if (isLoading) return <div>Loading....</div>;
    if (error) return <div>Error....</div>;
    return (
        <div>
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                Truyện Hot
            </h1>
            <div className="container">
                <div className="flex flex-wrap -mx-2">
                    {stories.results.map((story: IStory) => (
                        <div
                            key={story.id}
                            className="p-2 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                        >
                            <HotStory
                                id={story.id}
                                slug={story.slug}
                                title={story.title}
                                cover_photo={story.cover_photo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
