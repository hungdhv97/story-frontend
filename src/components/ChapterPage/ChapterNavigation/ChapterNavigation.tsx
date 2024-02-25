import { ChapterSelect } from '@/components/ChapterPage/ChapterSelect/ChapterSelect';
import { Button } from '@/components/ui/button';

export function ChapterNavigation() {
    return (
        <div className="my-3 flex justify-center gap-2">
            <Button className="w-[200px]">Chương Trước</Button>
            <ChapterSelect />
            <Button className="w-[200px]">Chương Sau</Button>
        </div>
    );
}
