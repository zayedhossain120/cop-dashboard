"use client";

import { IInvestedProjusesDataProps, Investor } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CawInvestmentProject {
  data: IInvestedProjusesDataProps;
}

const CawInvestmentProject: React.FC<CawInvestmentProject> = ({ data }) => {
  return (
    <div>
      {data.isActive === true && (
        <Link
          href={`/investment/${data?._id}`}
          className="flex items-center justify-center flex-col  shadow-lg rounded-lg gap-4 py-4"
        >
          <Image
            src={data?.picture || "/default-image.jpg"}
            alt="caw investment project"
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
                <Image
                  className=" h-6 w-6 rounded-full"
                  src={investor?.profile || "/default-image.jpg"}
                  alt="investor profile"
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
          href={`/investment/${data?._id}`}
          className="flex items-center justify-center flex-col  shadow-lg rounded-lg gap-4 py-4"
        >
          <div className="relative w-[90%] ">
            <Image
              src={data?.picture || "/default-image.jpg"}
              alt="active investment data picture"
              className="h-36 w-[100%] rounded-lg object-cover"
            />
            <div className="bg-customColor-orange  top-0 left-0 absolute  text-customColor-100 py-2 px-4 rounded-tl-lg rounded-br-lg">
              Revoked
            </div>
          </div>

          <p className="font-bold text-textColor">{data?.cawInvestment}</p>
          <small className="font-bold text-customColor-50  px-3 py-1 rounded-lg">
            Invested On
            {data?.registered}
          </small>

          <div className="flex justify-center items-center flex-row">
            {data.investors.map((investor: Investor) => (
              <div className=" " key={investor.profile}>
                <Image
                  className=" h-6 w-6 rounded-full"
                  src={investor?.profile || "/default-image.jpg"}
                  alt="investor profile"
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
