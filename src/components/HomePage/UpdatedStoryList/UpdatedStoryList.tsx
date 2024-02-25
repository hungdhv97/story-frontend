import Link from 'next/link';
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
        <div className="flex items-stretch">
            <div className="w-2/3">
                <Link href="/filter/stories/updated">
                    <H1 className="hover:text-cyan-900 dark:hover:text-cyan-400">
                        Truyện Cập Nhật Chương Mới
                    </H1>
                </Link>
                <UpdatedStoryTable />
            </div>
            <div className="flex w-1/3 flex-col">
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
    );
}
