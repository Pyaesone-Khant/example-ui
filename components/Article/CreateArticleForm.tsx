import { Author } from "../common/Author";
import { Avatar } from "../common/Avatar";
import { CreateArticleFormActions } from "./CreateArticleFormActions";

export function CreateArticleForm() {
    return (
        <section
            className="flex items-start gap-3 p-6 max-sm:p-4 border-b border-gray-200 sticky top-0 bg-white z-10"
        >
            <Avatar
                src="/assets/boy_avatar.png"
            />
            <div
                className="w-full"
            >
                <Author
                    name="John Doe"
                    isCurrentUser
                />
                <textarea
                    placeholder="Share your thoughts"
                    className="w-full border-none outline-none resize-none"
                />
                <CreateArticleFormActions />
            </div>

        </section>
    )
}
