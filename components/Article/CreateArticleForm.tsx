import { Author } from "../common/Author";
import { Avatar } from "../common/Avatar";

export function CreateArticleForm() {
    return (
        <section>
            <Avatar />
            <div>
                <Author
                    name="John Doe"
                    isCurrentUser
                />
                <textarea
                    placeholder="Share your thoughts"
                />
            </div>
        </section>
    )
}
