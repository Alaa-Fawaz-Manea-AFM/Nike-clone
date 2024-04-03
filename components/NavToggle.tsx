"use client";
import { hamburger } from "@/public/assets/icons";
import { useState } from "react";
import NavLink from "./NavLink";
import Image from "next/image";

const NavToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="relative hidden max-lg:block cursor-pointer">
      <Image
        onClick={() => setToggle(!toggle)}
        src={toggle ? close : hamburger}
        alt="mune"
        className="cursor-pointer object-contain w-[28px] h-[28px]"
      />

      {toggle && (
        <ul
          onClick={() => setToggle(!toggle)}
          className="absolute -right-14 top-10 w-[150px] bg-black flex-1 flex flex-col justify-center items-center rounded-xl py-5 gap-5 font-montserrat font-semibold"
        >
          <NavLink />
        </ul>
      )}
    </div>
  );
};

export default NavToggle;
