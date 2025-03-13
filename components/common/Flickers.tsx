import Image from "next/image";

export function Flickers({
    flickers
}: Pick<Article, 'flickers'>) {

    const lastFlicker = flickers && flickers?.data[flickers?.data.length - 1];

    return (
        <div
            className="flex items-center gap-2"
        >
            <div
                className="flex -space-x-3 overflow-hidden"
            >
                <Image
                    src={"/assets/avatar3.png"}
                    alt="avatar"
                    width={28}
                    height={28}
                    className="rounded-full object-cover ring-2 ring-white"
                />
                <Image
                    src={"/assets/avatar4.png"}
                    alt="avatar"
                    width={28}
                    height={28}
                    className="rounded-full object-cover ring-2 ring-white"
                />
                <p
                    className="text-white bg-blue-900 size-7 rounded-full  flex items-center justify-center ring-2 ring-white text-xs"
                >
                    +{Number(flickers?.total) - 2}
                </p>
            </div>
            <p>
                <strong className="mr-1">
                    {lastFlicker?.name}
                </strong>
                and 5 others flicked this post.
            </p>
        </div>
    )
}
