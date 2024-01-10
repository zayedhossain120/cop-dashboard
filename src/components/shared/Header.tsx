"use client";
import Link from "next/link";
import React from "react";
import LogoutIcon from "../svgIcons/LogoutIcon";

import Nav from "../UI/Nav";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  //signOut function
  const handleSignOut = () => {
    router.push("/login");
  };
  return (
    <header className="flex items-center justify-between py-4">
      <div className="">
        <Link href="/" className="text-3xl font-extrabold text-primary">
          Cop
        </Link>
      </div>
      <Nav />
      <button onClick={handleSignOut} className="btn btn-circle ">
        {""}
        <LogoutIcon />
      </button>
    </header>
  );
};

export default Header;
