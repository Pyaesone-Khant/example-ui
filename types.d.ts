interface Article {
    id: number;
    title: string;
    author: Author;
    created_at: string;
    body: string;
    media: MediaItem[] | null;
    product: {
        description: string | null,
        price: number,
    } | null;
    sharedArticle: boolean;
    flickers: {
        total: number,
        data: Author[]
    } | null,
    minRead: number,
    isLiked: boolean,
    likes_count: number;
    comment_count: number;
    hand_pointing_count: number;
    trending_count: number;
}

interface MediaItem {
    type: image | video;
    url: string;
}

interface Author {
    id: number;
    name: string;
    avatar: string;
}
