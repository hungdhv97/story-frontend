import { useAtom } from 'jotai/index';
import { useRouter } from 'next/navigation';

import { ChapterSelect } from '@/components/ChapterPage/ChapterSelect/ChapterSelect';
import { Button } from '@/components/ui/button';

import { selectedChapterIdAtom, selectedStorySlugAtom } from '@/atoms';
import { IChapterShortInfoResponse } from '@/interfaces/services/responses';

export function ChapterListPagination({
    chapterStoryInfoList,
}: {
    chapterStoryInfoList: IChapterShortInfoResponse[];
}) {
    const [selectedChapterId, setSelectedChapterId] = useAtom(
        selectedChapterIdAtom,
    );
    const [selectedStorySlug] = useAtom(selectedStorySlugAtom);
    const router = useRouter();

    function getCurrentIndex(
        chapterStoryInfoList: IChapterShortInfoResponse[],
        selectedChapterId: number,
    ) {
        return chapterStoryInfoList.findIndex(
            (chapter) => chapter.id === selectedChapterId,
        );
    }

    const goToPreviousChapter = () => {
        const currentIndex = getCurrentIndex(
            chapterStoryInfoList,
            selectedChapterId,
        );
        if (currentIndex > 0) {
            const previousChapterId = chapterStoryInfoList[currentIndex - 1].id;
            setSelectedChapterId(previousChapterId);
            router.push(
                `/stories/${selectedStorySlug}/chapters/${previousChapterId}`,
            );
        }
    };

    const goToNextChapter = () => {
        const currentIndex = getCurrentIndex(
            chapterStoryInfoList,
            selectedChapterId,
        );

        if (currentIndex < chapterStoryInfoList.length - 1) {
            const nextChapterId = chapterStoryInfoList[currentIndex + 1].id;
            setSelectedChapterId(nextChapterId);
            router.push(
                `/stories/${selectedStorySlug}/chapters/${nextChapterId}`,
            );
        }
    };

    const isFirstChapter = () => {
        return getCurrentIndex(chapterStoryInfoList, selectedChapterId) == 0;
    };

    const isLatestChapter = () => {
        return (
            getCurrentIndex(chapterStoryInfoList, selectedChapterId) ==
            chapterStoryInfoList.length - 1
        );
    };

    return (
        <div className="my-3 flex justify-center gap-2">
            <Button
                className="w-[200px]"
                onClick={goToPreviousChapter}
                disabled={isFirstChapter()}
            >
                Chương Trước
            </Button>
            {chapterStoryInfoList && (
                <ChapterSelect chapterStoryInfoList={chapterStoryInfoList} />
            )}
            <Button
                className="w-[200px]"
                onClick={goToNextChapter}
                disabled={isLatestChapter()}
            >
                Chương Sau
            </Button>
        </div>
    );
}
