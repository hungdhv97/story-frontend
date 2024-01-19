import Link from 'next/link';

import { ITopStoryResponse } from '@/interfaces/services/responses';

interface ITopStoryTabListProps {
    stories: ITopStoryResponse[];
}

export function TopStoryTabList({ stories }: ITopStoryTabListProps) {
    return (
        <div>
            {stories.map((story) => (
                <div key={story.id}>
                    <Link href={`/stories/${story.slug}`}>
                        {story.title} {story.total_reads}
                    </Link>
                </div>
            ))}
        </div>
    );
}
