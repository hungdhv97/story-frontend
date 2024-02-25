import { clsx } from 'clsx';
import Link from 'next/link';

import { convertNumberToStringWithDot } from '@/lib/helper';

import { ITopStoryResponse } from '@/interfaces/services/responses';

interface ITopStoryTabListProps {
    stories: ITopStoryResponse[];
}

export function TopStoryTabList({ stories }: ITopStoryTabListProps) {
    return (
        <div className="flex flex-col">
            {stories.map((story, index) => (
                <div key={story.id}>
                    <div className="flex h-12 flex-row items-center space-x-1">
                        <div
                            className={clsx(
                                'flex size-10 items-center justify-center rounded-full',
                                {
                                    'bg-red-500': index == 0,
                                    'bg-green-500': index == 1,
                                    'bg-cyan-500': index == 2,
                                },
                                {
                                    'border border-foreground bg-foreground text-background':
                                        index > 2,
                                },
                            )}
                        >
                            {index + 1}
                        </div>
                        <Link
                            href={`/stories/${story.slug}`}
                            className="w-[270px] leading-none text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400"
                        >
                            {story.title}
                        </Link>
                        <div>
                            {convertNumberToStringWithDot(story.total_reads)}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
