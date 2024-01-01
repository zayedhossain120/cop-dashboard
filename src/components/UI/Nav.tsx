"use client";

import { menuItems } from "@/constants/menuItem";
import { MenuItem } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Nav = () => {
  const pathName = usePathname();

  const menu = menuItems;
  return (
    <div className="flex item-center justify-around ">
      {menu?.map((menuItem: MenuItem) => (
        <nav className="" key={menuItem?.key}>
          <Link
            scroll={false}
            href={menuItem?.href}
            className={`${
              pathName === menuItem.href
                ? "bg-customColor-100 text-primary  rounded-xl px-5 py-2 font-semibold "
                : "list-none font-semibold    rounded-xl px-5 py-2"
            } `}
          >
            {menuItem?.label}
          </Link>
        </nav>
      ))}
    </div>
  );
};

export default Nav;
