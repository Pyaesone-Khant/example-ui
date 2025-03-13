import { cn } from "@/lib/utils";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { AiFillMessage } from "react-icons/ai";
import { Author, Avatar, Button, Flickers } from "../common";
import { ArticleActions } from "./ArticleActions";
import { SharedArticle } from "./SharedArticle";

export function Article({ article }: { article: Article }) {

    const { body, author, media, isLiked, likes_count, comment_count, hand_pointing_count, trending_count, product, sharedArticle, flickers } = article;

    return (
        <section className="w-full p-6 max-sm:p-4 border-b border-gray-200">
            {
                flickers && (
                    <div
                        className="flex items-center justify-between mb-6"
                    >
                        <Flickers
                            flickers={flickers}
                        />
                        <MoreHorizontal
                            className="cursor-pointer"
                        />
                    </div>
                )
            }
            <div
                className="flex items-start gap-3"
            >


                <Avatar
                    src={author.avatar}
                />

                <article
                    className="space-y-1 w-full"
                >
                    <div
                        className="flex items-center justify-between w-full"
                    >
                        <Author
                            name={author.name}
                        />
                        {
                            !flickers && (
                                <MoreHorizontal
                                    className="cursor-pointer"
                                />
                            )
                        }
                    </div>

                    {
                        sharedArticle ? (
                            <SharedArticle
                                {...article}
                            />
                        ) : (
                            <>
                                <p
                                    className="text-lg"
                                >
                                    {body}
                                </p>

                                <div
                                    className={cn("flex flex-nowrap gap-4 overflow-x-scroll mt-2")}
                                >
                                    {media && (
                                        media?.map((item) => (
                                            item.type === "image" ? (
                                                <Image
                                                    key={item.url}
                                                    src={item.url}
                                                    alt="Article Image"
                                                    width={250}
                                                    height={250}
                                                    className={cn("aspect-square rounded-md !object-cover shadow", {
                                                        "w-full": media?.find((it) => it.type === "video")
                                                    })}
                                                />
                                            ) : (
                                                <video
                                                    key={item.url}
                                                    src={item.url}
                                                    controls
                                                    className={cn("w-full h-full bg-black rounded-md", {
                                                        "max-h-[460px]": media.length === 1,
                                                        "max-w-[250px]": media.length > 1
                                                    })}
                                                />
                                            )
                                        ))
                                    )}
                                </div>

                                {
                                    product && (
                                        <article
                                            className="space-y-2"
                                        >
                                            <p
                                                className="font-medium text-lg"
                                            >
                                                {product.description}
                                            </p>
                                            <div>
                                                <h3
                                                    className="text-neutral-400 text-base"
                                                >
                                                    Price
                                                </h3>
                                                <p
                                                    className="text-xl font-semibold text-[#0097A7]"
                                                >
                                                    $ {product.price}
                                                </p>
                                            </div>
                                            <div
                                                className="grid grid-cols-2"
                                            >
                                                <div
                                                    className="flex justify-end"
                                                >
                                                    <Button
                                                        className="p-2 px-4 bg-neutral-300 rounded-lg"
                                                    >
                                                        <AiFillMessage
                                                            size={20}
                                                        /> Message
                                                    </Button>
                                                </div>
                                            </div>

                                        </article>
                                    )
                                }
                            </>
                        )
                    }

                    <div
                        className="mt-6"
                    >
                        <ArticleActions
                            isLiked={isLiked}
                            totalLikes={likes_count}
                            totalComments={comment_count}
                            totalHandPointing={hand_pointing_count}
                            totalTrending={trending_count}
                        />
                    </div>
                </article>
            </div>
        </section>
    )
}