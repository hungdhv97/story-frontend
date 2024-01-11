export interface IAuthor {
    id: number;
    name: string;
}


export interface IGenre {
    id: number;
    name: string;
    slug: string;
}


export interface IChapterDetail {
    id: number;
    title: string;
    published_date: string;
}

export interface IStory {
    id: number;
    title: string;
    description: string;
    author: IAuthor;
    genres: IGenre[];
    total_chapters: number;
    total_reads: number;
    created_date: string;
    status: string;
    source: string;
    cover_photo: string;
    slug: string;
    is_new: boolean;
    is_hot: boolean;
    avg_rating: number;
    latest_chapter: IChapterDetail;
}

export interface IStoryDetail {
    title: string;
    slug: string;
}

export interface IChapter {
    id: number;
    story: IStoryDetail;
    title: string;
    content: string;
    published_date: string;
}