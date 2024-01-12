import { FullStories } from '@/components/home/main/full_stories';
import { HotStories } from '@/components/home/main/hot_stories';
import { UpdatedStories } from '@/components/home/main/updated_stories';

export default function MainContent() {
    return (
        <div className="flex flex-col container px-30">
            <HotStories />
            <UpdatedStories />
            <FullStories />
        </div>
    );
}
