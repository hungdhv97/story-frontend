import { IReadingChapter } from '@/interfaces/common';
import { IChapterResponse } from '@/interfaces/services/responses';

export const saveChapterHistory = (chapter: IChapterResponse) => {
    const history: IReadingChapter[] = JSON.parse(
        localStorage.getItem('chapterHistory') || '[]',
    );

    const isChapterInHistory = history.some(
        (chapterHistory: IReadingChapter) => chapterHistory.id === chapter.id,
    );
    if (!isChapterInHistory) {
        if (history.length >= 5) {
            history.shift();
        }
        history.push({
            id: chapter.id,
            story: chapter.story,
            title: chapter.title,
            accessedAt: new Date().toISOString(),
        });
        localStorage.setItem('chapterHistory', JSON.stringify(history));
    }
};
