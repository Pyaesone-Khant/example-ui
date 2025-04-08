"use client";

import { PIE_SOCKET } from "@/constants/websocket-url";
import { useEffect, useRef, useState } from "react";
import { AskRoomId } from "./AskRoomId";
import { ChatBox } from "./ChatBox";
import { Messages } from "./Messages";

export function WebSocketChat() {
    const [messages, setMessages] = useState<{ text: string; sender: string }[]>([]);
    const [roomId, setRoomId] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const ws = useRef<WebSocket | null>(null);

    useEffect(() => {
        if (roomId) {
            connectWebSocket(roomId);
        }

        return () => {
            if (ws.current) {
                ws.current.close();
                ws.current = null;
            }
        }
    }, [roomId]);

    const connectWebSocket = (roomId: string) => {
        ws.current = new WebSocket(`${PIE_SOCKET.URL}/${roomId}?apiKey=${PIE_SOCKET.API_KEY}`);

        ws.current.onopen = () => {
            console.log("WebSocket connection established!");
            ws.current?.send(JSON.stringify({
                sender: "server",
                text: `${username} joined the room!`
            }))
        };

        ws.current.onmessage = (event) => {
            const data = JSON.parse(event.data);
            setMessages((prev) => [...prev, data]);
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
            const payload = {
                sender: username!,
                text: input
            }
            ws.current.send(JSON.stringify(payload));
            setMessages((prev) => [...prev, payload]);
        }
    };

    return (
        <div
            className="p-10"
        >
            {
                (roomId && username) ? (
                    <section className="p-4 rounded-md shadow-md w-full space-y-4 border border-gray-300 max-w-4xl mx-auto mt-4">
                        <h2
                            className="text-lg font-semibold"
                        > Websocket Chat {`<Room - ${roomId} >`} </h2>
                        <Messages
                            username={username}
                            messages={messages}
                        />
                        <ChatBox
                            sendMessage={sendMessage}
                        />
                    </section>
                ) : (
                    <AskRoomId
                        onJoinRoom={(roomId: string, username: string) => {
                            setRoomId(roomId);
                            setUsername(username);
                        }}
                    />
                )
            }
        </div>
    );
}
