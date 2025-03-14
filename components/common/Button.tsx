import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className={cn("flex items-center gap-1 cursor-pointer", className)}
            {...props}
        >
            {children}
        </button>
    )
}
