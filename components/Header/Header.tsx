import Image from "next/image";
import Link from "next/link";
import SearchBar from "../Searchbar/SearchBar";
import HeaderIcons from "./HeaderIcons";
import useScreenWidth from "@/hooks/useScreenWidth";
import HeaderMobile from "./HeaderMobile";
import HeaderLogo from "./HeaderLogo";
import Navigation from "@/components/Navigation/Navigation";

export default function Header() {
  const { screenWidth, isClient } = useScreenWidth();

  if (!isClient) {
    return null;
  }

  if (screenWidth < 770) {
    return <HeaderMobile />;
  }

  return (
    <>
      <header className="flex justify-between items-center px-12 py-4">
        <HeaderLogo />
        <SearchBar />
        <HeaderIcons />
      </header>
      <Navigation />
    </>
  );
}
