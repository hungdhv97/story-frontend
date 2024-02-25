import { clsx } from 'clsx';
import Link from 'next/link';
import React, { useState } from 'react';

import { H1 } from '@/components/Common/Custom/Custom';

import {
    IGenreResponse,
    IStoryResponse,
} from '@/interfaces/services/responses';

interface IStoryInformationProps {
    story: IStoryResponse;
}

export function StoryInformation({ story }: IStoryInformationProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };
    return (
        <div>
            <H1>Thông Tin Truyện</H1>
            <div className="flex space-x-3">
                <div className="basis-1/3">
                    <img
                        src={story.cover_photo}
                        alt={story.title}
                        className="w-full rounded-lg object-cover"
                    />
                </div>
                <div className="flex basis-2/3 flex-col space-y-3">
                    <div className="text-center text-3xl font-bold">
                        {story.title}
                    </div>
                    <div className="flex justify-center">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <svg
                                key={index}
                                xmlns="http://www.w3.org/2000/svg"
                                className={clsx(
                                    'h-6 w-6',
                                    index < story.avg_rating
                                        ? 'text-yellow-500'
                                        : 'text-gray-300',
                                )}
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M12 .587l3.668 7.431 8.332 1.209-6.001 5.849 1.416 8.265-7.415-3.896-7.415 3.896 1.416-8.265-6.001-5.849 8.332-1.209L12 .587z" />
                            </svg>
                        ))}
                    </div>
                    <div>
                        <div className="inline font-bold">Thể Loại:</div>{' '}
                        {story.genres.map(
                            (genre: IGenreResponse, index: number) => (
                                <span key={genre.id}>
                                    {index > 0 && ', '}
                                    <Link
                                        className="text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400"
                                        href={`/filter/genres/${genre.slug}`}
                                        passHref
                                    >
                                        {genre.name}
                                    </Link>
                                </span>
                            ),
                        )}
                    </div>
                    {story.source != '' && (
                        <div>
                            <div className="inline font-bold">Nguồn:</div>{' '}
                            {story.source}
                        </div>
                    )}
                    <div className="leading-7">
                        <div className="inline font-bold">Mô tả:</div>{' '}
                        {story.description.length > 1000 ? (
                            <>
                                {isExpanded
                                    ? story.description
                                    : `${story.description.substring(0, 1000)}...`}
                                <button
                                    onClick={toggleDescription}
                                    className="ml-1 text-blue-500 hover:text-blue-600"
                                >
                                    {isExpanded ? 'Ẩn bớt' : 'Xem thêm'}
                                </button>
                            </>
                        ) : (
                            story.description
                        )}
                    </div>
                    <div>
                        <div className="inline font-bold">Tác giả:</div>{' '}
                        <Link
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-200 dark:hover:text-blue-400"
                            href={`/filter/authors/${story.author.id}`}
                            passHref
                        >
                            {story.author.name}
                        </Link>
                    </div>
                    <div>
                        <div className="inline font-bold">Tổng số chương:</div>{' '}
                        {story.total_chapters}
                    </div>
                    <div>
                        <div className="inline font-bold">Trạng thái:</div>{' '}
                        {story.status == 'completed' && (
                            <div className="inline text-green-500">
                                Đã hoàn thành
                            </div>
                        )}
                        {story.status == 'ongoing' && (
                            <div className="inline text-red-500">
                                Chưa hoàn thành
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
