import { cn } from "@/lib/utils";

export function Button({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <button
            className={cn("flex items-center gap-1 cursor-pointer", className)}
        >
            {children}
        </button>
    )
}
