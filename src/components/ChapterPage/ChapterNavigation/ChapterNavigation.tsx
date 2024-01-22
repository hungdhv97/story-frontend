import { ChapterSelect } from '@/components/ChapterPage/ChapterSelect/ChapterSelect';
import { Button } from '@/components/ui/button';

export function ChapterNavigation() {
    return (
        <div className="flex justify-center gap-2">
            <Button className="w-[150px]">Chương Trước</Button>
            <ChapterSelect />
            <Button className="w-[150px]">Chương Sau</Button>
        </div>
    );
}
