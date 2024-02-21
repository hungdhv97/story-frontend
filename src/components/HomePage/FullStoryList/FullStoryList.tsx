import Link from 'next/link';

import { useGetStoryList } from '@/hooks/client';

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
                            className="relative min-h-[200px] rounded-2xl bg-secondary border border-teal-100 hover:border-teal-900 shadow-md"
                        >
                            <Link
                                href={`/stories/${story.slug}`}
                                className="absolute inset-0 z-0"
                            />
                            <FullStory story={story} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
