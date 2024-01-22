import Link from 'next/link';

import { useGetStoryList } from '@/data/hooks';

import { H1 } from '@/components/Common/Custom/Custom';
import { FullStory } from '@/components/HomePage/FullStoryList/FullStory/FullStory';
import { FullStoryListSkeleton } from '@/components/HomePage/FullStoryList/FullStoryListSkeleton/FullStoryListSkeleton';

import { IStoryResponse } from '@/interfaces/services/responses';

export function FullStoryList() {
    const { data: fullStoryList } = useGetStoryList({
        status: 'completed',
    });
    return (
        <div>
            <H1 href="/filter/stories/full">Truyện Full</H1>
            {!fullStoryList ? (
                <FullStoryListSkeleton />
            ) : (
                <div className="grid gap-8 grid-cols-4">
                    {fullStoryList.slice(0, 8).map((story: IStoryResponse) => (
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
