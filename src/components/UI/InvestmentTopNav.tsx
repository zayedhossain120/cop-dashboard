"use client";

import { investmenTopNav } from "@/constants/investmenTopNav";
import { IStatementSideNav } from "@/type";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const InvestmentTopNav = () => {
  const pathName = usePathname();

  return (
    <aside className="flex items-center justify-center ">
      {investmenTopNav.map((investmenTopNav: IStatementSideNav) => (
        <Link
          href={investmenTopNav?.href}
          className={`${
            pathName === investmenTopNav?.href
              ? " text-primary border-b-2 border-primary   px-5 py-2 font-semibold  "
              : "list-none font-semibold  w-full   px-5 py-2"
          } `}
          key={investmenTopNav?.key}
        >
          {investmenTopNav?.label}
        </Link>
      ))}
    </aside>
  );
};

export default InvestmentTopNav;
