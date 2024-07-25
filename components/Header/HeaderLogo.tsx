import Link from "next/link";
import Image from "next/image";

export default function HeaderLogo() {
  return (
    <Link href={"/"} className="md:w-[25%] md:max-w-[220px]">
      <Image src={"/mainlogo.png"} alt="main logo" width={200} height={200} />
    </Link>
  );
}
