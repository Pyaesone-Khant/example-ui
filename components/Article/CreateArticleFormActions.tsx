import { GoImage } from "react-icons/go";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { PiGifLight, PiHandbagLight } from "react-icons/pi";
import { Button } from "../common/Button";
import { CreateArticleIcon } from "../common/icons";

const ActionIcons = [
    <GoImage
        key={1}
    />,
    <PiGifLight
        key={2}
    />,
    <HiOutlineMenuAlt1
        key={3}
    />,
    <IoLocationOutline
        key={4}
    />
]

export function CreateArticleFormActions() {
    return (
        <div
            className="flex sm:items-center justify-between max-sm:flex-col max-sm:gap-2"
        >
            <div
                className="flex items-center gap-6"
            >
                {
                    ActionIcons?.map((icon, index) => (
                        <Button
                            key={index}
                            className="text-xl"
                        >
                            {icon}
                        </Button>
                    ))
                }
            </div>
            <div
                className="flex items-center gap-6"
            >
                <Button>
                    <PiHandbagLight
                        size={20}
                    />
                    Product/Service
                </Button>
                <Button>
                    <CreateArticleIcon
                        width={16}
                        height={16}
                    />
                    Create Article
                </Button>
            </div>
        </div>
    )
}
