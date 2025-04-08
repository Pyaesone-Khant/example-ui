import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

export function Messages({ messages, username }: { messages: { text: string; sender: string }[], username: string }) {

    const messageEndRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="h-[500px] overflow-y-auto border border-gray-300 p-4 rounded bg-gray-100">
            {messages.map((msg, index) => (
                <div
                    key={index}
                    className={cn("mb-2 p-2 rounded-md max-w-xs bg-gray-300 text-black", {
                        "bg-blue-500 text-white ml-auto": msg.sender === username,
                        "bg-black text-white text-center rounded-full mx-auto": msg.sender === "server",
                    })}
                >
                    <article
                        className="space-y-0.5"
                    >
                        {
                            msg.sender !== "server" && (
                                <h3
                                    className="text-sm font-semibold"
                                >
                                    {msg.sender === username ? "You" : msg.sender}:
                                </h3>
                            )
                        }
                        <p>{msg.text}</p>
                    </article>
                </div>
            ))}
            <div ref={messageEndRef}></div>
        </div>
    )
}
