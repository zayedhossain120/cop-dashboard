import { IProfitData } from "@/type";
import { profitData } from "@/utils/data/profitData";
import React from "react";

const ProfitTable = () => {
  return (
    <div className="">
      <table className="table table-pin-rows table-pin-cols">
        {/* head */}
        <thead>
          <tr className="text-customColor-50 font-bold text-[18px]">
            <th>Investment Name</th>
            <th>Invested Amount</th>
            <th>Range</th>
            <th>Profit</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody className="   ">
          {/* row 1 */}

          {profitData?.map((data: IProfitData) => (
            <tr className="text-textColor font-bold" key={data?._id}>
              <td>{data?.investName}</td>
              <td>{data?.investAmount}</td>
              <td>{data?.range}</td>
              <td>{data?.profit}</td>
              <td
                className={`${
                  data?.status === "Revocked"
                    ? "text-customColor-orange"
                    : "text-customColor-blue"
                }`}
              >
                {data?.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfitTable;
