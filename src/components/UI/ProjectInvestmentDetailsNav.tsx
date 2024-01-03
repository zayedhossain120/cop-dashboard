"use client";

import { projectInvestemtDetailsNav } from "@/constants/projectInvestemtDetailsNav";
import { MenuItem } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface IProjectInvestmentDetailsNav {
  params: string;
}

const ProjectInvestmentDetailsNav = ({ params }: any) => {
  const pathName = usePathname();

  const menu = projectInvestemtDetailsNav;
  return (
    <div className="flex item-center justify-between shadow-lg py-4 rounded-lg ">
      {menu?.map((menuItem: MenuItem) => (
        <nav className="" key={menuItem?.key}>
          <Link
            scroll={false}
            href={menuItem?.href}
            className={`${
              pathName === menuItem.href
                ? "bg-primary text-customColor-100  rounded-xl px-5 py-4 font-semibold "
                : "list-none font-semibold   py-4 rounded-xl px-5 "
            } `}
          >
            {menuItem?.label}
          </Link>
        </nav>
      ))}
    </div>
  );
};

export default ProjectInvestmentDetailsNav;
