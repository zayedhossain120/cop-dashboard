import InvestedProject from "@/components/InvestedProject";
import InvestmentTopNav from "@/components/UI/InvestmentTopNav";
import InvestorDetailsTopArrowbtn from "@/components/UI/btn/InvestorDetailsTopArrowbtn";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const InvestmentDetailsLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <section>
      <div className="flex justify-between items-center">
        {" "}
        <div className="w-full">
          <InvestorDetailsTopArrowbtn />
        </div>
      </div>
      {children}
    </section>
  );
};

export default InvestmentDetailsLayout;
