import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function Messages({ messages }: { messages: { text: string; sender: "server" | "you" }[] }) {

    const messageEndRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="h-[300px] overflow-y-auto border border-gray-300 p-4 rounded bg-gray-100">
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={cn("mb-2 p-2 rounded-md max-w-[240px] bg-gray-300 text-black", {
                        "bg-blue-500 text-white ml-auto": msg.sender === "you",
                    })}
                >
                    {msg.text}
                </div>
            ))}
            <div ref={messageEndRef}></div>
        </div>
    )
}
