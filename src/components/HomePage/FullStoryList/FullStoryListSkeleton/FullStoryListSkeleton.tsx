import { Skeleton } from '@/components/ui/skeleton';

export function FullStoryListSkeleton() {
    return (
        <div className="grid gap-8 grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
                <Skeleton key={index} className="min-h-[350px] rounded-2xl" />
            ))}
        </div>
    );
}