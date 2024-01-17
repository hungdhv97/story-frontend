import { useAtom } from 'jotai';
import Link from 'next/link';

import { useGetFullStories } from '@/data/hooks';

import { H1 } from '@/components/common/custom';
import { FullStoriesSkeleton } from '@/components/home/main/full-stories/full-stories-skeleton';
import FullStory from '@/components/home/main/hot-stories/full-story';

import { fullStoriesResponseAtom } from '@/atoms/full-stories-response-atom';
import { IStoryResponse } from '@/interfaces/services/responses';

export function FullStories() {
    const { isLoading } = useGetFullStories();
    const [fullStoriesResponse] = useAtom(fullStoriesResponseAtom);
    return (
        <div>
            <H1 href="/filter/stories/full">Truyện Full</H1>
            {isLoading ? (
                <FullStoriesSkeleton />
            ) : (
                <div className="grid gap-8 grid-cols-4">
                    {fullStoriesResponse
                        .slice(0, 8)
                        .map((story: IStoryResponse) => (
                            <div
                                key={story.id}
                                className="min-h-[200px] rounded-2xl bg-secondary border border-teal-100 hover:border-teal-900 shadow-md"
                            >
                                <Link href={`/stories/${story.slug}`}>
                                    <FullStory
                                        title={story.title}
                                        cover_photo={story.cover_photo}
                                        full={story.status === 'completed'}
                                        totalChapter={story.total_chapters}
                                    />
                                </Link>
                            </div>
                        ))}
                </div>
            )}
        </div>
    );
}
