import React from "react";
import AmountCard from "../AmountCard";
import Button from "../Button";
import WithdrawModal from "@/components/shared/WithdrawModal";

const AvailableBalanceCard = () => {
  return (
    <AmountCard>
      <div className="flex items-center justify-between gap-2  bg-primary rounded-lg h-[200px] px-5 shadow-sm ">
        <div className="">
          <h3 className="text-[18px] font-semibold text-customColor-100 ">
            Available Balance
          </h3>
          <h2
            className="text-3xl font-bold text-customColor-100 
             "
          >
            2850
          </h2>
        </div>
        <div>
          <WithdrawModal />
          <Button btnText="Withdraw" btnType="btn-warning" />
        </div>
      </div>
    </AmountCard>
  );
};

export default AvailableBalanceCard;
