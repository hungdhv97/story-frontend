import { IStoryResponse } from '@/interfaces/services/responses';

interface IHottestStorryListProps {
    story: IStoryResponse;
}

export function HottestStoryList({ story }: IHottestStorryListProps) {
    return (
        <div>
            <div>Truyện Đang Hot</div>
        </div>
    );
}
