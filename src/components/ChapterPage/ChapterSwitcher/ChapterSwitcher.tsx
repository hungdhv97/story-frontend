import { ChapterSelect } from '@/components/ChapterPage/ChapterSelect/ChapterSelect';
import { Button } from '@/components/ui/button';

export function ChapterSwitcher() {
    return (
        <div className="flex justify-center gap-2">
            <Button>Left</Button>
            <ChapterSelect />
            <Button>Right</Button>
        </div>
    );
}
