export interface IAuthorResponse {
    id: number;
    name: string;
}

export interface IGenreResponse {
    id: number;
    name: string;
    slug: string;
}

export interface IChapterShortInfoResponse {
    id: number;
    title: string;
    published_date: string;
}

export interface IPaginationResponse {
    current_page: number;
    next_page: number | undefined;
    prev_page: number | undefined;
    total_pages: number;
    total_records: number;
}

export interface IMeta {
    pagination: IPaginationResponse;
}

export interface IStoryResponse {
    id: number;
    title: string;
    description: string;
    author: IAuthorResponse;
    genres: IGenreResponse[];
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
    latest_chapter: IChapterShortInfoResponse;
}

export interface IStoryPaginationResponse {
    meta: IMeta;
    results: IStoryResponse[];
}

export interface IStoryShortInfo {
    title: string;
    slug: string;
}

export interface IChapterResponse {
    id: number;
    story: IStoryShortInfo;
    title: string;
    content: string;
    published_date: string;
}

export interface ITopStoryResponse {
    id: number;
    title: string;
    cover_photo: string;
    slug: string;
    total_reads: number;
}

export interface ITopStoryListResponse {
    week: ITopStoryResponse[];
    month: ITopStoryResponse[];
    all: ITopStoryResponse[];
}

export interface IChapterShortInfoPaginationResponse {
    meta: IMeta;
    results: IChapterShortInfoResponse[];
}
