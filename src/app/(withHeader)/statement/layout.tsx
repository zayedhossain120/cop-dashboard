import InvesmentLeftMenu from "@/components/UI/InvesmentLeftMenu";
import Header from "@/components/shared/Header";
import React from "react";

const StatementLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex justify-between items-center">
      <div>
        <InvesmentLeftMenu />
      </div>
      <div> {children}</div>
    </section>
  );
};

export default StatementLayout;
