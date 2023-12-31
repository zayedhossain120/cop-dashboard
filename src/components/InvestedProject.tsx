import { IInvestedProjusesDataProps } from "@/type";
import { investedProjectData } from "@/utils/data/InvestedProjectData";
import React from "react";
import CawInvestmentProject from "./UI/smallCard/CawInvestmentProject";

const InvestedProject = () => {
  return (
    <div className="card-responsive-style mt-4">
      {investedProjectData.map((data: IInvestedProjusesDataProps) => (
        <CawInvestmentProject key={data._id} data={data} />
      ))}
    </div>
  );
};

export default InvestedProject;
