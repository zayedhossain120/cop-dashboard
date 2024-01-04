import StatementSideNav from "@/components/UI/StatementSideNav";
import InvesmentLeftMenu from "@/components/UI/StatementSideNav";
import Header from "@/components/shared/Header";
import React from "react";

const StatementLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="flex justify-between items-center my-4">
        <div className="text-2xl font-bold text-customColor-50 ">Deposit</div>
        <div>Date</div>
      </div>
      <div className="flex justify-between items-center shadow-lg rounded-lg ">
        <div className="w-[350px] border-r border-neutral-200 h-[90vh] ">
          <StatementSideNav />
        </div>
        <div className=" w-full"> {children}</div>
      </div>
    </section>
  );
};

export default StatementLayout;
