"use client";
import { Button } from "../common";

export function AskRoomId({
    onJoinRoom
}: {
    onJoinRoom: (roomId: string, username: string) => void;
}) {

    const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const roomId = formData.get("roomId") as string;
        const username = formData.get("username") as string;

        if (!(roomId.trim().length && username.trim().length)) {
            alert("Please fill all the fields!");
            return;
        }
        onJoinRoom(roomId, username)
    }

    return (
        <section
            className="max-w-sm w-full mx-auto space-y-6 "
        >
            <article>
                <h2
                    className="text-2xl font-semibold"
                >
                    Join a channel?
                </h2>
                <p
                    className="text-gray-500"
                >
                    Please fill &quot;Room ID&quot; and &quot;Username&quot; to join the channel.
                </p>
            </article>
            <form
                onSubmit={onFormSubmit}
                className="flex flex-col gap-4 "
            >
                <input
                    className="flex-1 border border-gray-400 outline-none rounded-md p-2"
                    placeholder="Room ID"
                    name="roomId"
                />
                <input
                    className="flex-1 border border-gray-400 outline-none rounded-md p-2"
                    placeholder="Username"
                    name="username"
                />
                <Button
                    className="px-4 py-3 bg-blue-500 hover:opacity-80 transition duration-200 text-white rounded-md disabled:bg-gray-400 disabled:hover:opacity-100 disabled:cursor-not-allowed gap-2 flex items-center justify-center"
                    type="submit"
                >
                    Join
                </Button>
            </form>
        </section>
    )
}
