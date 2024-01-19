import Link from 'next/link';

import { useGetStoriesWithSameAuthor } from '@/data/hooks';

import { IStoryResponse } from '@/interfaces/services/responses';

interface IStoryWithSameAuthorListProps {
    story: IStoryResponse;
}

export function StoryWithSameAuthorList({
    story,
}: IStoryWithSameAuthorListProps) {
    const { data: storiesWithSameAuthor } = useGetStoriesWithSameAuthor(
        story.author.id,
    );
    if (storiesWithSameAuthor) {
        if (storiesWithSameAuthor.length > 1) {
            return (
                <div>
                    <div>Truyện Cùng Tác Giả</div>
                    <div>
                        {storiesWithSameAuthor
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
