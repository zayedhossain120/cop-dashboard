import { menuItems } from "@/constants/menuItem";
import Link from "next/link";
import React from "react";
import LogoutIcon from "../svgIcons/LogoutIcon";

import { MenuItem } from "@/type";
import { usePathname } from "next/navigation";
import Nav from "../UI/Nav";

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="">
        <Link href="/" className="text-3xl font-extrabold text-primary">
          Cop
        </Link>
      </div>
      <Nav />
      <button className="btn btn-circle ">
        <LogoutIcon />
      </button>
    </header>
  );
};

export default Header;
