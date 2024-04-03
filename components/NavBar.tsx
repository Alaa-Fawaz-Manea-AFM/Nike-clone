import { headerLogo } from "@/public/assets/images";
import { NavLink, NavToggle } from "@/components";
import Image from "next/image";
import Link from "next/link";

const Nav = () => (
  <header className="sm:px-16 px-8 py-8 absolute z-10 w-full">
    <nav className="flex justify-between items-center max-container">
      <Link href="#">
        <Image src={headerLogo} alt="Logo" width={130} height={29} />
      </Link>

      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
        <NavLink />
      </ul>

      <NavToggle />
    </nav>
  </header>
);

export default Nav;
