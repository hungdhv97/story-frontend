import { ChapterSelect } from '@/components/ChapterPage/ChapterSelect/ChapterSelect';
import { Button } from '@/components/ui/button';

export function ChapterNavigation() {
    return (
        <div className="flex justify-center gap-2">
            <Button>Chương Trươớc</Button>
            <ChapterSelect />
            <Button>Chương Sau</Button>
        </div>
    );
}
