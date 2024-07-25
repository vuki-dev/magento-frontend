import { ShoppingCart, User } from "lucide-react";

export default function HeaderIcons() {

    return (
        <div className="flex items-center justify-end gap-3 md:w-[220px]">
            <button className="">
                <User />
            </button>
            <button>
                <ShoppingCart />
            </button>
        </div>
    )
}