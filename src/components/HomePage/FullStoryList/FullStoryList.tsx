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
            <Link href="/filter/stories/full">
                <H1 className="hover:text-cyan-900 dark:hover:text-cyan-400">
                    Truyện Full
                </H1>
            </Link>
            {fullStoryList ? (
                <div className="grid grid-cols-5 gap-8">
                    {fullStoryList.slice(0, 10).map((story: IStoryResponse) => (
                        <div key={story.id}>
                            <FullStory story={story} />
                        </div>
                    ))}
                </div>
            ) : (
                <FullStoryListSkeleton />
            )}
        </div>
    );
}
