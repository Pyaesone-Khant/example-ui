import { cn } from "@/lib/utils";
import { MessageSquare, TrendingUp } from "lucide-react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { PiHandPointing } from "react-icons/pi";

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
            className="flex items-center gap-6 mt-4"
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
                <MessageSquare
                    size={20}
                />
                <Count
                    count={totalComments}
                />
            </ActionButton>
            <ActionButton>
                <PiHandPointing
                    size={20}
                />
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
            className={cn("flex items-center gap-1 cursor-pointer", className)}
        >
            {children}
        </button>
    )
}

const Count = ({ count }: { count: number }) => {
    return count > 0 && (
        <span
            className="text-sm text-neutral-500">
            {count}
        </span>
    )
}