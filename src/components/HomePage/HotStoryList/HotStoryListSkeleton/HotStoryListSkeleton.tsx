import { Skeleton } from '@/components/ui/skeleton';

export function HotStoryListSkeleton() {
    return (
        <div className="grid grid-cols-5 gap-8">
            {Array.from({ length: 10 }).map((_, index) => (
                <Skeleton
                    key={index}
                    className="aspect-[2/3] w-full rounded-lg"
                />
            ))}
        </div>
    );
}
