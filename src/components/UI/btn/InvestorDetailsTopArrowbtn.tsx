import LeftArrow from "@/components/svgIcons/LeftArrow";
import RightArrow from "@/components/svgIcons/RightArrow";
import Link from "next/link";
import React from "react";

const InvestorDetailsTopArrowbtn = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Link href="#" className="  flex justify-center items-center gap-2">
        <RightArrow /> Back to Previous Page
      </Link>
      <Link href="#" className=" flex justify-center items-center gap-2">
        Back to Previous Page <LeftArrow />
      </Link>
    </div>
  );
};

export default InvestorDetailsTopArrowbtn;
