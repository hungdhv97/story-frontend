import { FullStories } from '@/components/home/main/full-stories';
import { HotStories } from '@/components/home/main/hot-stories';
import { UpdatedStories } from '@/components/home/main/updated-stories';

export default function MainContent() {
    return (
        <div className="flex flex-col container px-30">
            <HotStories />
            <UpdatedStories />
            <FullStories />
        </div>
    );
}
