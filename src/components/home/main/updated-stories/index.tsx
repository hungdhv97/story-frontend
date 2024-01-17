import { useEffect, useState } from 'react';

import { H1 } from '@/components/common/custom';
import Genres from '@/components/home/main/updated-stories/genres';
import { ReadingChaptersTable } from '@/components/home/main/updated-stories/reading-chapters-table';
import { UpdatedStoriesTable } from '@/components/home/main/updated-stories/updated-stories-table';

import { IReadingChapter } from '@/interfaces/common';

export function UpdatedStories() {
    const [history, setHistory] = useState<IReadingChapter[]>([]);
    useEffect(() => {
        const chapterHistory = localStorage.getItem('chapterHistory');
        if (chapterHistory) {
            setHistory(JSON.parse(chapterHistory));
        }
    }, []);

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
