import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { StatusButton } from '@/components/HomePage/HotStoryList/StatusButton/StatusButton';

import { IStoryResponse } from '@/interfaces/services/responses';

interface IFilterTableProps {
    storyList: IStoryResponse[];
}

export function FilterTable({ storyList }: IFilterTableProps) {
    return (
        <div className="flex flex-col gap-4">
            {storyList.map((story) => (
                <div
                    key={story.id}
                    className="flex flex-row items-center space-x-3"
                >
                    <Image
                        src={story.cover_photo}
                        alt={story.title}
                        width={100}
                        height={150}
                        className="rounded-md"
                    />
                    <div className="flex h-full w-2/4 flex-col justify-between py-5">
                        <div>
                            <Link
                                className="text-purple-400 hover:text-purple-600"
                                href={`/stories/${story.slug}`}
                                passHref
                            >
                                {story.title}
                            </Link>{' '}
                            {story.is_hot && (
                                <StatusButton
                                    label="Hot"
                                    link="/filter/stories/hot"
                                    className="mx-2 w-[50px] rounded-md border-2 border-red-500 bg-background px-2 py-1 text-red-500 hover:border-red-400 hover:text-red-400"
                                />
                            )}
                            {story.is_new && (
                                <StatusButton
                                    label="New"
                                    link="/filter/stories/new"
                                    className="mx-2 w-[50px] rounded-md border-2 border-green-500 bg-background px-2 py-1 text-green-500 hover:border-green-400 hover:text-green-400"
                                />
                            )}
                            {story.status === 'completed' && (
                                <StatusButton
                                    label="Full"
                                    link="/filter/stories/full"
                                    className="mx-2 w-[50px] rounded-md border-2 border-blue-500 bg-background px-2 py-1 text-blue-500 hover:border-blue-400 hover:text-blue-400"
                                />
                            )}
                        </div>
                        <div>
                            <Link href={`/filter/authors/${story.author.id}`}>
                                {story.author.name}
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Link
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400"
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
