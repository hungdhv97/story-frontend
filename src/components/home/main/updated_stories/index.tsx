import { H1 } from '@/components/common/custom';
import { UpdatedStoriesTable } from '@/components/home/main/updated_stories/updated_stories_table';

export function UpdatedStories() {
    return (
        <div>
            <H1 href="/filter/stories/updated">Truyện Cập Nhật Chương Mới</H1>
            <div className="flex items-stretch">
                <div className="w-2/3 ">
                    <UpdatedStoriesTable />
                </div>
                <div className="flex flex-col w-1/3">
                    <div className="grow">Truyện Đang Đọc</div>
                    <div className="grow">Thể Loại Truyện</div>
                </div>
            </div>
        </div>
    );
}
