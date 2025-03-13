import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { CommentIcon, HandPointingIcon } from "../common/icons";

type Props = {
    isLiked: boolean,
    totalLikes: number,
    totalComments: number,
    totalHandPointing: number,
    totalTrending: number,
}

export function ArticleActions({
    isLiked,
    totalLikes,
    totalComments,
    totalHandPointing,
    totalTrending
}: Props) {
    return (
        <section
            className="flex items-center gap-8"
        >
            <ActionButton
                className={cn({
                    "text-red-500": isLiked
                })}
            >
                {
                    isLiked ? <FaHeart
                        size={20}
                    /> : <FaRegHeart
                        size={20}
                    />
                }
                <Count
                    count={totalLikes}
                />
            </ActionButton>
            <ActionButton>
                <CommentIcon />
                <Count
                    count={totalComments}
                />
            </ActionButton>
            <ActionButton>
                <HandPointingIcon />
                <Count
                    count={totalHandPointing}
                />
            </ActionButton>
            <ActionButton>
                <TrendingUp
                    size={20}
                />
                <Count
                    count={totalTrending}
                />
            </ActionButton>
        </section>
    )
}

const ActionButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
    return (
        <button
            className={cn("flex items-center gap-1.5 cursor-pointer", className)}
        >
            {children}
        </button>
    )
}

const Count = ({ count }: { count: number }) => {
    return count > 0 && (
        <span
            className="text-sm">
            {count}
        </span>
    )
}