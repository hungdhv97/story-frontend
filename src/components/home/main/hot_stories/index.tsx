import Link from 'next/link';

import { useGetHotStories } from '@/data/hooks';

import { H1 } from '@/components/common/custom';
import HotStory from '@/components/home/main/hot_stories/hot-story';

import { IStory } from '@/interfaces/services/responses';

export function HotStories() {
    const { data: stories, isLoading, error } = useGetHotStories();

    if (isLoading) return <div>Loading....</div>;
    if (error) return <div>Error....</div>;
    return (
        <div>
            <H1 href="/filter/stories/hot">Truyện Hot</H1>
            <div className="grid gap-8 grid-cols-5">
                {stories.results.map((story: IStory) => (
                    <div
                        key={story.id}
                        className="min-h-[300px] rounded-2xl bg-secondary border border-teal-100 hover:border-teal-900 shadow-md"
                    >
                        <Link href={`/stories/${story.slug}`}>
                            <HotStory
                                title={story.title}
                                cover_photo={story.cover_photo}
                                full={story.status === 'completed'}
                                is_hot={story.is_hot}
                                is_new={story.is_new}
                            />
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
