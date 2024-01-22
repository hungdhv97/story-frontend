import { useEffect, useState } from 'react';

import { H1 } from '@/components/Common/Custom/Custom';
import { GenreList } from '@/components/HomePage/UpdatedStoryList/GenreList/GenreList';
import { ReadingChapterTable } from '@/components/HomePage/UpdatedStoryList/ReadingChapterTable/ReadingChapterTable';
import { UpdatedStoryTable } from '@/components/HomePage/UpdatedStoryList/UpdatedStoryTable/UpdatedStoryTable';

import { IReadingChapter } from '@/interfaces/common';

export function UpdatedStoryList() {
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
                <div className="w-2/3">
                    <UpdatedStoryTable />
                </div>
                <div className="flex flex-col w-1/3">
                    {history && (
                        <div>
                            <ReadingChapterTable readingChapters={history} />
                        </div>
                    )}
                    <div className="grow">
                        <GenreList />
                    </div>
                </div>
            </div>
        </div>
    );
}
