import { useAtom } from 'jotai';
import Link from 'next/link';

import { useGetStoryList } from '@/hooks/client';

import { H1 } from '@/components/Common/Custom/Custom';
import { GenreSelect } from '@/components/HomePage/HotStoryList/GenreSelect/GenreSelect';
import { HotStory } from '@/components/HomePage/HotStoryList/HotStory/HotStory';
import { HotStoryListSkeleton } from '@/components/HomePage/HotStoryList/HotStoryListSkeleton/HotStoryListSkeleton';

import { selectedGenreAtom } from '@/atoms/selectedGenreAtom';
import { IStoryResponse } from '@/interfaces/services/responses';

export function HotStoryList() {
    const { data: hotStoryList } = useGetStoryList({ isHot: true });

    const [selectedGenre] = useAtom(selectedGenreAtom);

    function filterStoryList(genreSlug: string, storyList: IStoryResponse[]) {
        let filteredStories: IStoryResponse[] = storyList;
        if (genreSlug !== 'all') {
            filteredStories = filteredStories.filter((story: IStoryResponse) =>
                story.genres.some((genre) => genre.slug === selectedGenre),
            );
        }
        return filteredStories.slice(0, 10);
    }

    return (
        <div>
            <div className="flex items-center justify-between">
                <H1 href="/filter/stories/hot">Truyện Hot</H1>
                <GenreSelect />
            </div>
            {!hotStoryList ? (
                <HotStoryListSkeleton />
            ) : (
                <div className="grid gap-8 grid-cols-5">
                    {filterStoryList(selectedGenre, hotStoryList).map(
                        (story: IStoryResponse) => (
                            <div
                                key={story.id}
                                className="min-h-[200px] rounded-2xl bg-secondary border border-teal-100 hover:border-teal-900 shadow-md"
                            >
                                <Link href={`/stories/${story.slug}`}>
                                    <HotStory
                                        title={story.title}
                                        cover_photo={story.cover_photo}
                                        full={story.status === 'completed'}
                                        is_hot={story.is_hot}
                                        is_new={story.is_new}
                                    />
                                </Link>
                            </div>
                        ),
                    )}
                </div>
            )}
        </div>
    );
}
