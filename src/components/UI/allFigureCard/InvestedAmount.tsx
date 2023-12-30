import React from "react";
import AmountCard from "../AmountCard";
import Button from "../Button";

const InvestedAmount = () => {
  return (
    <AmountCard>
      <div className="flex items-center justify-between gap-2  bg-customColor-bg rounded-lg h-[200px] px-5 shadow-sm">
        <div className="">
          <h2
            className="text-3xl font-bold text-primary
             "
          >
            35824
          </h2>
          <h3 className="text-[18px] font-bold text-primary ">Investment</h3>
          <p className="font-bold text-customColor-50">
            Invested in 2 business Policy
          </p>
        </div>
      </div>
    </AmountCard>
  );
};

export default InvestedAmount;
