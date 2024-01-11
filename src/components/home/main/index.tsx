import { CompletedStories } from '@/components/home/main/completed_stories';
import { HotStories } from '@/components/home/main/hot_stories';
import { NewChapterStories } from '@/components/home/main/new_chapter_stories';

export default function MainContent() {
    return (
        <div className="flex flex-1 flex-col mx-auto my-0 justify-between">
            <HotStories />
            <NewChapterStories />
            <CompletedStories />
        </div>
    );
}
