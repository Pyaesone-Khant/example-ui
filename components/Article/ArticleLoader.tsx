
export function ArticleLoader() {
    return (
        <div
            className="py-6 max-sm:p-4 flex items-start gap-3"
        >
            <div
                className="size-12 aspect-square rounded-full bg-gray-300 animate-pulse"
            />
            <div
                className="space-y-4 w-full"
            >
                <article
                    className="flex items-center gap-4"
                >
                    <h3
                        className="w-40 h-5 rounded-full font-bold bg-gray-300 animate-pulse"
                    />
                    <p
                        className="w-16 h-5 rounded-full font-bold bg-gray-300 animate-pulse"
                    />
                </article>
                <article
                    className="space-y-2"
                >
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <p
                                key={index}
                                className="w-full h-5 rounded-full font-bold bg-gray-300 animate-pulse"
                            />
                        ))
                    }
                </article>

                <article
                    className="flex items-center gap-4 mt-6"
                >
                    {
                        Array.from({ length: 4 }).map((_, index) => (
                            <p
                                key={index}
                                className="w-16 h-5 rounded-full font-bold bg-gray-300 animate-pulse"
                            />
                        ))
                    }
                </article>
            </div>
        </div>
    )
}
