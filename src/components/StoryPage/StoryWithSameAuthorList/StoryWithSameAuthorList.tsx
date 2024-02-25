import Link from 'next/link';

import { useGetStoryList } from '@/hooks/client';

import { IStoryResponse } from '@/interfaces/services/responses';

interface IStoryWithSameAuthorListProps {
    story: IStoryResponse;
}

export function StoryWithSameAuthorList({
    story,
}: IStoryWithSameAuthorListProps) {
    const { data: storyWithSameAuthorList } = useGetStoryList({
        authorId: story.author.id,
    });
    if (storyWithSameAuthorList) {
        if (storyWithSameAuthorList.length > 1) {
            return (
                <div className="mb-3">
                    <div className="mb-3 text-2xl font-bold">
                        Truyện Cùng Tác Giả
                    </div>
                    <div>
                        {storyWithSameAuthorList
                            .filter(
                                (storyWithSameAuthor) =>
                                    storyWithSameAuthor.id != story.id,
                            )
                            .map((storyWithSameAuthor: IStoryResponse) => (
                                <div key={storyWithSameAuthor.id}>
                                    <Link
                                        className="text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400"
                                        href={`/stories/${storyWithSameAuthor.slug}`}
                                    >
                                        {storyWithSameAuthor.title}
                                    </Link>
                                </div>
                            ))}
                    </div>
                </div>
            );
        }
    }
}
