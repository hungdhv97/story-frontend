import Link from 'next/link';

import { StatusButton } from '@/components/HomePage/HotStoryList/StatusButton/StatusButton';

import { IStoryResponse } from '@/interfaces/services/responses';

interface IFilterTableProps {
    storyList: IStoryResponse[];
}

export function FilterTable({ storyList }: IFilterTableProps) {
    return (
        <div className="flex flex-col gap-4">
            {storyList.map((story) => (
                <div key={story.id} className="flex flex-row items-center">
                    <div
                        className="w-1/4 bg-contain bg-top bg-no-repeat h-28"
                        style={{
                            backgroundImage: `url(${story.cover_photo})`,
                        }}
                    />
                    <div className="w-2/4 flex flex-col">
                        <div className="h-1/2">
                            <Link
                                className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                                href={`/stories/${story.slug}`}
                                passHref
                            >
                                {story.title}
                            </Link>
                            {story.is_hot && (
                                <StatusButton
                                    label="Hot"
                                    link="/filter/stories/hot"
                                    className="px-1 mx-1 border-2 hover:font-bold text-red-500 hover:text-red-500 border-red-500 hover:border-red-500 rounded-none h-1/2"
                                />
                            )}
                            {story.is_new && (
                                <StatusButton
                                    label="New"
                                    link="/filter/stories/new"
                                    className="px-1 mx-1 border-2 hover:font-bold text-green-500 hover:text-green-500 border-green-500 hover:border-green-500 rounded-none h-1/2"
                                />
                            )}
                            {story.status === 'completed' && (
                                <StatusButton
                                    label="Full"
                                    link="/filter/stories/full"
                                    className="px-1 mx-1 border-2 hover:font-bold text-blue-500 hover:text-blue-500 border-blue-500 hover:border-blue-500 rounded-none h-1/2"
                                />
                            )}
                        </div>
                        <div className="h-1/2">
                            <Link href={`/filter/authors/${story.author.id}`}>
                                {story.author.name}
                            </Link>
                        </div>
                    </div>
                    <div className="w-1/4">
                        <Link
                            className="text-blue-600 hover:text-blue-800 visited:text-purple-600"
                            href={`/stories/${story.slug}/chapters/${story.latest_chapter.id}`}
                        >
                            {story.latest_chapter.title}
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
}
