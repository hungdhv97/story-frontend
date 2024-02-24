import { H1 } from '@/components/Common/Custom/Custom';

import { IStoryResponse } from '@/interfaces/services/responses';

interface IStoryInformationProps {
    story: IStoryResponse;
}

export function StoryInformation({ story }: IStoryInformationProps) {
    return (
        <div>
            <H1>Thông Tin Truyện</H1>
            <div className="flex">
                <div
                    className="basis-1/3 bg-contain bg-top bg-no-repeat"
                    style={{
                        backgroundImage: `url(${story.cover_photo})`,
                    }}
                />
                <div className="basis-2/3">
                    <div>{story.title}</div>
                    <div>{story.avg_rating}</div>
                    <div>
                        {story.genres.map((genre) => genre.name).join(', ')}
                    </div>
                    <div>{story.source}</div>
                    <div>{story.description}</div>
                    <div>{story.author.name}</div>
                    <div>{story.total_chapters}</div>
                    <div>{story.total_reads}</div>
                    <div>{story.status}</div>
                </div>
            </div>
        </div>
    );
}
