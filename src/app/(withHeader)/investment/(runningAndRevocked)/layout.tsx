import InvestedProject from "@/components/InvestedProject";
import InvestmentTopNav from "@/components/UI/InvestmentTopNav";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const InvestmentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        {" "}
        <div>
          <PageHeader
            decription="All of the investment is showing here"
            title="Invesment"
          />
        </div>
        <div>
          <InvestmentTopNav />
        </div>
      </div>
      {children}
    </section>
  );
};

export default InvestmentLayout;
