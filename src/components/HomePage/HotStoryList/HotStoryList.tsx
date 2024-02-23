import { useAtom } from 'jotai';
import Link from 'next/link';

import { useGetStoryList } from '@/hooks/client';

import { H1 } from '@/components/Common/Custom/Custom';
import { GenreSelect } from '@/components/HomePage/HotStoryList/GenreSelect/GenreSelect';
import { HotStory } from '@/components/HomePage/HotStoryList/HotStory/HotStory';
import { HotStoryListSkeleton } from '@/components/HomePage/HotStoryList/HotStoryListSkeleton/HotStoryListSkeleton';

import { selectedGenreAtom } from '@/atoms';
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
            <div className="flex flex-row items-center justify-between">
                <Link href="/filter/stories/hot">
                    <H1>Truyện Hot</H1>
                </Link>
                <GenreSelect />
            </div>
            {hotStoryList ? (
                <div className="grid grid-cols-5 gap-8">
                    {filterStoryList(selectedGenre, hotStoryList).map(
                        (story: IStoryResponse) => (
                            <div key={story.id}>
                                <HotStory story={story} />
                            </div>
                        ),
                    )}
                </div>
            ) : (
                <HotStoryListSkeleton />
            )}
        </div>
    );
}
