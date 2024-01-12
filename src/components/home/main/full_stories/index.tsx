import { H1 } from '@/components/common/custom';
import { UpdatedStoriesTable } from '@/components/home/main/updated_stories/updated_stories_table';

export function FullStories() {
    return (
        <div>
            <H1 href="/filter/stories/full">Truyện Full</H1>
            <div className="flex">
                <div className="w-2/3">
                    <UpdatedStoriesTable />
                </div>
                <div className="w-1/3">
                    <div className="flex flex-col">
                        <div className="h-1/2">Truyện Đang Đọc</div>
                        <div className="h-1/2">Thể Loại Truyện</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
