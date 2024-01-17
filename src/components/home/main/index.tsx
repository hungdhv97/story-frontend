import { FullStories } from 'full-stories';
import { HotStories } from 'hot-stories';
import { UpdatedStories } from 'updated-stories';

export default function MainContent() {
    return (
        <div className="flex flex-col container px-30">
            <HotStories />
            <UpdatedStories />
            <FullStories />
        </div>
    );
}
