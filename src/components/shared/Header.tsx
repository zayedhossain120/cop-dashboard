"use client";
import { menuItems } from "@/constants/menuItem";
import Link from "next/link";
import React from "react";
import LogoutIcon from "../svgIcons/LogoutIcon";

const Header = () => {
  const menu = menuItems;
  console.log(menu, "here is menu items");

  return (
    <header className="flex items-center justify-between py-4">
      <div className="">
        <Link href="/" className="text-3xl font-extrabold text-primary">
          Cop
        </Link>
      </div>
      <div className="flex item-center justify-around ">
        {menu?.map((menuItem) => (
          <nav className="" key={menuItem?.key}>
            <Link
              href={menuItem?.href}
              className="list-none font-semibold text-textColor  hover:text-primary  rounded-xl px-5 py-2 hover:bg-customColor-100"
            >
              {menuItem?.label}
            </Link>
          </nav>
        ))}
      </div>
      <button className="btn btn-circle">
        <LogoutIcon />
      </button>
    </header>
  );
};

export default Header;
