import LeftArrow from "@/components/svgIcons/LeftArrow";
import RightArrow from "@/components/svgIcons/RightArrow";
import React from "react";

const InvestorDetailsTopArrowbtn = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <button className="btn btn-ghost">
        <RightArrow /> Back to Previous Page
      </button>
      <button className="btn btn-ghost">
        Back to Previous Page <LeftArrow />
      </button>
    </div>
  );
};

export default InvestorDetailsTopArrowbtn;
