"use client";

import { useEffect, useState } from "react";
import { investedProjectData } from "@/utils/data/InvestedProjectData";
import { IInvestedProjusesDataProps } from "@/type";
import Image from "next/image";

const InvestmentDetailsPage = ({ params }: { params: { details: string } }) => {
  const [investedProject, setInvestedProject] =
    useState<IInvestedProjusesDataProps>();

  console.log(investedProject, "here is out invested project");

  console.log(params.details);

  useEffect(() => {
    const getInvestmentData = investedProjectData.find(
      (investedProject) => investedProject?._id === params.details
    );
    if (getInvestmentData) {
      setInvestedProject(getInvestmentData);
    } else {
      console.log("data not found");
    }
  }, [params.details]);

  return (
    <div>
      <p>{investedProject?.cawInvestment}</p>
      <p>{investedProject?.investedAmount}</p>
      <p>{investedProject?.isActive}</p>
      <p>{investedProject?.registered}</p>
      <Image
        src={investedProject?.picture || "/default-image.jpg"}
        width={500}
        height={500}
        alt="Picture of the author"
      />
    </div>
  );
};

export default InvestmentDetailsPage;
