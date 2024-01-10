import DownloadIcon from "@/components/svgIcons/DownloadIcon";
import React from "react";

const StatementTotalCard = () => {
  return (
    <div className="flex justify-start items-center flex-col shadow-lg py-4 px-16 rounded-lg gap-4">
      <small className="font-bold text-textColor">Total Deposit</small>
      <p className="font-bold text-customColor-90">$38,274</p>
      <button className="btn btn-primary ">
        Download <DownloadIcon />
      </button>
    </div>
  );
};

export default StatementTotalCard;
