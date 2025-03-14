import { SendIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../common";

export function ChatBox({ sendMessage }: { sendMessage: (input: string) => void }) {

    const [input, setInput] = useState<string>("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const onSend = () => {
        sendMessage(input);
        setInput("");
    }

    return (
        <div className="flex gap-4">
            <input
                value={input}
                onChange={onChange}
                onKeyDown={(e) => e.key === "Enter" && onSend()}
                className="flex-1 border border-gray-400 outline-none rounded-md p-2"
                placeholder="Type a message..."
            />
            <Button
                className="px-4 py-2 bg-blue-500 hover:opacity-80 transition duration-200 text-white rounded-md disabled:bg-gray-400 disabled:hover:opacity-100 disabled:cursor-not-allowed gap-2"
                onClick={onSend}
                disabled={input.trim() === ""}
            >
                <SendIcon size={20} /> Send
            </Button>

        </div>
    )
}
