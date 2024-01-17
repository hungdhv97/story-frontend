import { Skeleton } from '@/components/ui/skeleton';

export function HotStoriesSkeleton() {
    return (
        <div className="grid gap-8 grid-cols-5">
            {Array.from({ length: 10 }).map((_, index) => (
                <Skeleton key={index} className="min-h-[350px] rounded-2xl" />
            ))}
        </div>
    );
}
