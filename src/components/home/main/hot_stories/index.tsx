import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useGetHotStories } from '@/data/hooks';

import { H1 } from '@/components/common/custom';
import HotStory from '@/components/home/main/hot_stories/hot-story';
import { SelectGenre } from '@/components/home/main/hot_stories/select-genre';

import { IStory } from '@/interfaces/services/responses';

export function HotStories() {
    const { data: stories, isLoading, error } = useGetHotStories();
    const [FilterStories, setFilterStories] = useState([]);
    useEffect(() => {
        if (stories) setFilterStories(stories.results);
    }, [stories]);
    if (isLoading) return <div>Loading....</div>;
    if (error) return <div>Error....</div>;

    function handleSelectGenre(e: string) {
        if (e === 'all') {
            setFilterStories(stories.results);
            return;
        }
        const newFilterStories = stories.results.filter((story: IStory) => {
            for (const genre of story.genres) {
                if (genre.slug === e) return true;
            }
            return false;
        });
        setFilterStories(newFilterStories);
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <H1 href="/filter/stories/hot">Truyện Hot</H1>
                <SelectGenre handleSelectGenre={handleSelectGenre} />
            </div>
            <div className="grid gap-8 grid-cols-5">
                {FilterStories.map((story: IStory) => (
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
