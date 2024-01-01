import TopProfitEarner from "@/components/TopProfitEarner";
import AmountCard from "@/components/UI/AmountCard";
import Button from "@/components/UI/Button";
import CawInvestment from "@/components/UI/CawInvestment";
import InvestorDetails from "@/components/UI/InvestorDetails";
import AvailableBalanceCard from "@/components/UI/allFigureCard/AvailableBalanceCard";
import DepositAmount from "@/components/UI/allFigureCard/DepositAmount";
import InvestedAmount from "@/components/UI/allFigureCard/InvestedAmount";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const Dashboard = () => {
  return (
    <section className="h-[90vh] ">
      <PageHeader
        decription="
        "
        title="Dashboard"
      />

      <div className="flex justify-start item-center gap-4 ">
        <div className="w-[485px] h-[100%]">
          <InvestorDetails />
        </div>
        <div className="flex item-center justify-start flex-col w-full">
          {/* Balance section  start*/}
          <div className="flex justify-start items-center gap-4 h-[200px] ">
            <AvailableBalanceCard />
            <DepositAmount />
            <InvestedAmount />
          </div>

          {/* Balance section  end*/}

          <div className="flex item-center justify-start flex-col mt-4  ">
            <PageHeader decription="" title="Investment" />

            <CawInvestment />
          </div>
          <div>
            <TopProfitEarner />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
