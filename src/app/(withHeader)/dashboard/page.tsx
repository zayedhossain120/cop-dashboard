import InvestorDetails from "@/components/UI/InvestorDetails";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const Dashboard = () => {
  return (
    <section>
      <PageHeader
        decription="
        "
        title="Dashboard"
      />

      <div>
        <div>
          <InvestorDetails />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Dashboard;
