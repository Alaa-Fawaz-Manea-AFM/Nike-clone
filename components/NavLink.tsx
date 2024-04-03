import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";

const NavLink = () => (
  <>
    {navLinks.map((link) => (
      <li key={link.label}>
        <Link
          href={link.href}
          className="font-montserrat leading-normal text-lg text-slate-gray hover:text-red-600"
        >
          {link.label}
        </Link>
      </li>
    ))}
  </>
);

export default NavLink;
