import { UserCircle2 } from "lucide-react";

type Props = {
    size?: number,
}

export function Avatar({
    size = 48,
    ...props
}: Props) {
    return (
        <div
            className="relative rounded-full"
        >
            <UserCircle2
                size={size}
                {...props}
            />
            <span
                className="w-3 aspect-square bg-green-500 absolute bottom-1 right-1 rounded-full"
            />
        </div>
    )
}
