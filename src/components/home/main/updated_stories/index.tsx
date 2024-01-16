import { H1 } from '@/components/common/custom';
import Genres from '@/components/home/main/updated_stories/genres';
import { ReadingChaptersTable } from '@/components/home/main/updated_stories/reading_chapters_table';
import { UpdatedStoriesTable } from '@/components/home/main/updated_stories/updated_stories_table';

import { IReadingChapter } from '@/interfaces/common';

export function UpdatedStories() {
    const history: IReadingChapter[] = JSON.parse(
        localStorage.getItem('chapterHistory') || '[]',
    );

    return (
        <div>
            <H1 href="/filter/stories/updated">Truyện Cập Nhật Chương Mới</H1>
            <div className="flex items-stretch">
                <div className="w-2/3 ">
                    <UpdatedStoriesTable />
                </div>
                <div className="flex flex-col w-1/3">
                    {history && (
                        <div>
                            <ReadingChaptersTable readingChapters={history} />
                        </div>
                    )}
                    <div className="grow">
                        <Genres />
                    </div>
                </div>
            </div>
        </div>
    );
}
