"use client";

import { WEBSOCKET_URL } from "@/constants/websocket-url";
import { useEffect, useRef, useState } from "react";
import { ChatBox } from "./ChatBox";
import { Messages } from "./Messages";

export function WebSocketChat() {
    const [messages, setMessages] = useState<{ text: string; sender: "you" | "server" }[]>([]);
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        connectWebSocket();

        return () => {
            ws.current?.close();
        };
    }, []);

    const connectWebSocket = () => {
        ws.current = new WebSocket(WEBSOCKET_URL!);

        ws.current.onopen = () => {
            setMessages((prev) => [...prev, { text: "Connected to server!", sender: "server" }]);
        };

        ws.current.onmessage = (event) => {
            setMessages((prev) => [...prev, { text: event.data, sender: "server" }]);
        };

        ws.current.onerror = (error) => {
            console.log("WebSocket Error:", error);
        };

        ws.current.onclose = () => {
            setMessages((prev) => [...prev, { text: "Disconnected from server!", sender: "server" }]);
            setTimeout(connectWebSocket, 3000);
        };
    };

    const sendMessage = (input: string) => {
        if (ws.current && input.trim()) {
            ws.current.send(input);
            setMessages((prev) => [...prev, { text: input, sender: "you" }]);
        }
    };

    return (
        <section className="p-4 rounded-md shadow-md w-full space-y-4 border border-gray-300 max-w-3xl mx-auto mt-4">
            <h2
                className="text-lg font-semibold"
            > Websocket Chat </h2>
            <Messages
                messages={messages}
            />
            <ChatBox
                sendMessage={sendMessage}
            />
        </section>
    );
}
