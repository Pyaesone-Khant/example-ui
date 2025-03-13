import { UserCircle2 } from "lucide-react";
import Image from "next/image";

type Props = {
    src?: string,
    size?: number,
    isActive?: boolean,
}

export function Avatar({
    src,
    size = 48,
    isActive = true,
    ...props
}: Props) {
    return (
        <div
            className="relative rounded-full border border-neutral-200 w-fit min-w-max"
        >
            {
                src ? (
                    <Image
                        src={src}
                        alt="Avatar"
                        width={size}
                        height={size}
                        objectFit="cover"
                        className="rounded-full"
                        quality={100}
                    />
                ) : (
                    <UserCircle2
                        size={size}
                        {...props}
                    />
                )
            }
            {
                isActive && (
                    <span
                        className="w-3 aspect-square bg-green-500 absolute bottom-0 right-0 rounded-full"
                    />
                )
            }
        </div>
    )
}
