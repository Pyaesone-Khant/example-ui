"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
    {
        href: "/",
        label: "Feed",
    },
    {
        href: "/chat",
        label: "Chat Room",
    },
]

export function Header() {
    return (
        <header
            className="bg-gray-800 text-white sticky top-0 z-10"
        >
            <nav
                className="space-x-4 h-16 flex items-center px-4 max-w-3xl mx-auto"
            >
                {
                    LINKS.map((link) => (
                        <NavLink
                            key={link.href}
                            href={link.href}
                        >
                            {link.label}
                        </NavLink>
                    ))
                }
            </nav>
        </header>
    )
}

const NavLink = (
    { href, children }:
        {
            href: string;
            children: React.ReactNode;
        }) => {

    const pathname = usePathname();

    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={cn('text-gray-500 h-[80%] flex items-center justify-center px-4 border-b-4 border-transparent', {
                'text-white border-white': isActive,
            })}
        >
            {children}
        </Link>
    )
}