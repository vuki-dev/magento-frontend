import { Menu } from "lucide-react";
import HeaderLogo from "./HeaderLogo";
import HeaderIcons from "./HeaderIcons";

export default function HeaderMobile(){

    return (
        <header className="flex justify-between items-center p-4">
            <button className="">
                <Menu />
            </button>
            <HeaderLogo />
            <HeaderIcons />
        </header>
    )
}