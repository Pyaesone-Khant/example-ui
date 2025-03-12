import { MoreHorizontal } from "lucide-react";
import { ArticleActions } from "../common/ArticleActions";
import { Author } from "../common/Author";
import { Avatar } from "../common/Avatar";

export function Article(props: Article) {

    const { body, author, media } = props

    return (
        <div
            className="flex items-start gap-3 w-full p-6 border-b border-gray-200"
        >
            <Avatar />

            <article
                className="space-y-1 w-full"
            >
                <div
                    className="flex items-center justify-between w-full"
                >
                    <Author
                        name={author.name}
                    />
                    <MoreHorizontal />
                </div>
                <p
                    className="text-lg"
                >
                    {body}
                </p>

                <ArticleActions
                    isLiked
                    totalLikes={12}
                    totalComments={3}
                    totalHandPointing={5}
                    totalTrending={32}
                />
            </article>
        </div>
    )
}