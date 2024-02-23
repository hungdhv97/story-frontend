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
            <Link href="/filter/stories/full"><H1>Truyện Full</H1></Link>
            {!fullStoryList ? (
                <FullStoryListSkeleton />
            ) : (
                <div className="grid grid-cols-4 gap-8">
                    {fullStoryList.slice(0, 8).map((story: IStoryResponse) => (
                        <div
                            key={story.id}
                            className="relative min-h-[200px] rounded-2xl border border-teal-100 bg-secondary shadow-md hover:border-teal-900"
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
