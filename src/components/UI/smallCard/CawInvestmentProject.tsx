"use client";

import { IInvestedProjusesDataProps, Investor } from "@/type";
import Link from "next/link";
import { redirect } from "next/navigation";
import React from "react";

interface CawInvestmentProject {
  data: IInvestedProjusesDataProps;
}

const CawInvestmentProject: React.FC<CawInvestmentProject> = ({ data }) => {
  return (
    <div>
      {data.isActive === true && (
        <Link
          href={`/investment/details/${data?._id}`}
          className="flex items-center justify-center flex-col  shadow-lg rounded-lg gap-4 py-4"
        >
          <img
            src={data.picture}
            alt={data.name}
            className="h-36 w-[90%] rounded-lg object-cover"
          />

          <p className="font-bold text-textColor">{data?.cawInvestment}</p>
          <small className="font-bold text-customColor-50  px-3 py-1 rounded-lg">
            Invested On
            {data?.registered}
          </small>

          <div className="flex justify-center items-center flex-row">
            {data.investors.map((investor: Investor) => (
              <div className=" " key={investor.profile}>
                <img
                  className=" h-6 w-6 rounded-full"
                  src={investor.profile}
                  alt={investor.profile}
                />
              </div>
            ))}
          </div>

          <div className="w-full border-b border-neutral-200"></div>
          <div className=" flex justify-between items-center  gap-3">
            <p className="font-semibold text-customColor-50">Invested amount</p>
            <button className="btn rounded-2xl btn-primary">
              $ {data?.investedAmount}
            </button>
          </div>
        </Link>
      )}
      ,
      {data.isActive === false && (
        <Link
          href={`/investment/details/${data?._id}`}
          className="flex items-center justify-center flex-col  shadow-lg rounded-lg gap-4 py-4"
        >
          <img
            src={data.picture}
            alt={data.name}
            className="h-36 w-[90%] rounded-lg object-cover"
          />

          <p className="font-bold text-textColor">{data?.cawInvestment}</p>
          <small className="font-bold text-customColor-50  px-3 py-1 rounded-lg">
            Invested On
            {data?.registered}
          </small>

          <div className="flex justify-center items-center flex-row">
            {data.investors.map((investor: Investor) => (
              <div className=" " key={investor.profile}>
                <img
                  className=" h-6 w-6 rounded-full"
                  src={investor.profile}
                  alt={investor.profile}
                />
              </div>
            ))}
          </div>

          <div className="w-full border-b border-neutral-200"></div>
          <div className=" flex justify-between items-center  gap-3">
            <p className="font-semibold text-customColor-50">Invested amount</p>
            <button className="btn rounded-2xl btn-primary">
              $ {data?.investedAmount}
            </button>
          </div>
        </Link>
      )}
    </div>
  );
};

export default CawInvestmentProject;
