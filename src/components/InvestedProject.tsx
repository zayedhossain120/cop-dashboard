import { IInvestedProjusesDataProps } from "@/type";
import { investedProjectData } from "@/utils/data/InvestedProjectData";
import React from "react";
import CawInvestmentProject from "./UI/smallCard/CawInvestmentProject";

const InvestedProject = ({ isActive }: any) => {
  return (
    <div className="card-responsive-style mt-4">
      {investedProjectData.map((data: IInvestedProjusesDataProps) => (
        <div key={data?._id}>
          {isActive === data?.isActive && (
            <CawInvestmentProject key={data._id} data={data} />
          )}
        </div>
      ))}
    </div>
  );
};

export default InvestedProject;
