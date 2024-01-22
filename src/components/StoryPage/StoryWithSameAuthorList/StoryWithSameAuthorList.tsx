import Link from 'next/link';

import { useGetStoryList } from '@/data/hooks';

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
                <div>
                    <div>Truyện Cùng Tác Giả</div>
                    <div>
                        {storyWithSameAuthorList
                            .filter(
                                (storyWithSameAuthor) =>
                                    storyWithSameAuthor.id != story.id,
                            )
                            .map((storyWithSameAuthor: IStoryResponse) => (
                                <div key={storyWithSameAuthor.id}>
                                    <Link
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
