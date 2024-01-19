import { IStoryResponse } from '@/interfaces/services/responses';

interface IStoryWithSameAuthorListProps {
    story: IStoryResponse;
}

export function StoryWithSameAuthorList({
    story,
}: IStoryWithSameAuthorListProps) {
    return (
        <div>
            <div>Truyện Cùng Tác Giả</div>
        </div>
    );
}
