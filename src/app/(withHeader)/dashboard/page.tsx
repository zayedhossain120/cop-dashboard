import InvestorDetails from "@/components/UI/InvestorDetails";
import React from "react";

const Dashboard = () => {
  return (
    <section>
      <div>
        <h3 className="text-2xl font-bold text-textColor">Dashboard</h3>
        <div>
          <InvestorDetails />
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Dashboard;
