interface Article {
    id: number;
    author: {
        id: number;
        name: string;
        avatar: string;
    };
    created_at: string;
    body: string;
    media: MediaItem[] | null;
    isLiked: boolean,
    likes_count: number;
    comment_count: number;
    hand_pointing_count: number;
    trending_count: number;
}

interface MediaItem {
    type: "image" | "video";
    url: string;
}
