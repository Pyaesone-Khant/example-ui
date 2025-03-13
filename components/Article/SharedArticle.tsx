import Image from "next/image";
import { Avatar } from "../common/Avatar";
import { CreateArticleIcon } from "../common/icons";

export function SharedArticle(props: Article) {

    const { author, title, body, minRead } = props;

    return (
        <section
            className="grid grid-cols-5 shadow-md rounded-md overflow-hidden"
        >
            <article
                className="col-span-3 max-sm:col-span-5 max-sm:order-2 p-4 space-y-1"
            >
                <h3
                    className="flex items-center gap-1 text-sm"
                >
                    <CreateArticleIcon
                        width={14}
                        height={14}
                    />
                    Article
                </h3>
                <h2
                    className="text-xl font-medium"
                >
                    {title}
                </h2>
                <p
                    className=" line-clamp-3 text-gray-400 tracking-wide"
                >
                    {body}
                </p>
                <div
                    className="mt-4 flex items-center gap-2"
                >
                    <Avatar
                        src={author.avatar}
                        size={28}
                        isActive={false}
                    />
                    <h2>
                        {author.name}
                    </h2>
                    <p
                        className="text-gray-400 text-sm"
                    >
                        {minRead}m read
                    </p>
                </div>
            </article>
            <Image
                src={'/assets/image8.png'}
                alt="Article Image"
                width={280}
                height={200}
                className="col-span-2 max-sm:col-span-5 max-sm:order-1 object-cover h-full w-full "
            />
        </section>
    )
}
