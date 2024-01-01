import DipositTable from "@/components/forStatement/DipositTable";
import WithdrawTable from "@/components/forStatement/WithdrawTable";
import React from "react";

const Withdraw = () => {
  return (
    <div className="h-[90vh] ">
      <div className="overflow-auto h-[500px] px-4">
        <WithdrawTable />
      </div>
    </div>
  );
};

export default Withdraw;
