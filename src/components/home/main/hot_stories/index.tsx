import Link from 'next/link';

import { useGetHotStories } from '@/data/hooks';

import H1 from '@/components/common/custom';
import HotStory from '@/components/home/main/hot_stories/hot-story';

import { IStory } from '@/interfaces/services/responses';

export function HotStories() {
    const { data: stories, isLoading, error } = useGetHotStories();

    if (isLoading) return <div>Loading....</div>;
    if (error) return <div>Error....</div>;
    return (
        <div>
            <H1 href="/filter/stories/hot">Truyện Hot</H1>
            <div className="container">
                <div className="flex flex-wrap">
                    {stories.results.map((story: IStory) => (
                        <Link
                            key={story.id}
                            className="m-4 p-2 rounded-2xl bg-secondary border border-teal-100 hover:border-teal-900 shadow-md w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5"
                            href={`/stories/${story.slug}`}
                        >
                            <HotStory
                                title={story.title}
                                cover_photo={story.cover_photo}
                                full={story.status === 'completed'}
                                is_hot={story.is_hot}
                                is_new={story.is_new}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
