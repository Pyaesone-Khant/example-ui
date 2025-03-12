import { PiSealCheckFill, PiUserPlusLight } from "react-icons/pi";
import { RiShieldCheckFill } from "react-icons/ri";

type Props = {
    name: string,
    isCurrentUser?: boolean,
}

export function Author({
    name,
    isCurrentUser = false
}: Props) {
    return (
        <article
            className="flex items-center gap-2"
        >
            <h2
                className="text-xl font-semibold"
            >
                {name}
            </h2>
            {
                isCurrentUser ? (
                    <PiSealCheckFill
                        size={20}
                        className=" text-blue-500"
                    />
                ) : (
                    <RiShieldCheckFill
                        size={20}
                        className=" text-green-600"
                    />
                )
            }

            {
                !isCurrentUser && (
                    <div
                        className="flex items-center gap-3"
                    >
                        <span
                            className="w-1 aspect-square rounded-full bg-neutral-500"
                        />
                        <p
                            className="text-sm"
                        >
                            4m
                        </p>
                        <span
                            className="w-1 aspect-square rounded-full bg-neutral-500"
                        />

                        <button
                            className="cursor-pointer"
                        >
                            <PiUserPlusLight
                                size={24}
                            />
                        </button>
                    </div>
                )
            }
        </article>
    )
}
