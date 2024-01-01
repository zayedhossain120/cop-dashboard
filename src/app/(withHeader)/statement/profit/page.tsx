import DipositTable from "@/components/forStatement/DipositTable";
import ProfitTable from "@/components/forStatement/ProfitTable";
import React from "react";

const Profit = () => {
  return (
    <div className="h-[90vh] ">
      <div className="overflow-auto h-[500px] px-4">
        <ProfitTable />
      </div>
    </div>
  );
};

export default Profit;
