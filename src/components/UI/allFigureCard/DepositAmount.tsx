import React from "react";
import AmountCard from "../AmountCard";
import Button from "../Button";

const DepositAmount = () => {
  return (
    <AmountCard>
      <div className="flex items-center justify-between gap-2  bg-[#FFEDE6] rounded-lg h-[200px] px-5 shadow-sm">
        <div className="">
          <h2
            className="text-3xl font-bold text-customColor-orange
             "
          >
            2850
          </h2>
          <h3 className="text-[18px] font-bold text-customColor-orange ">
            Available Balance
          </h3>
          <p className="font-bold text-customColor-50">23 Time Deposit</p>
        </div>
      </div>
    </AmountCard>
  );
};

export default DepositAmount;
