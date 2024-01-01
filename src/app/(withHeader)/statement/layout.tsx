import InvesmentLeftMenu from "@/components/UI/InvesmentLeftMenu";
import Header from "@/components/shared/Header";
import React from "react";

const StatementLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex justify-between items-center border border-customColor-blue">
      <div className="w-[350px] border border-customColor-blue ">
        <InvesmentLeftMenu />
      </div>
      <div className="border border-customColor-orange w-full"> {children}</div>
    </section>
  );
};

export default StatementLayout;
