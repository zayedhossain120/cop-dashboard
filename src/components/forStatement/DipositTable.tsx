import { IDepositData } from "@/type";
import { dipositData } from "@/utils/data/dipositData";
import React from "react";

const DipositTable = () => {
  return (
    <div className="">
      <table className="table table-pin-rows table-pin-cols">
        {/* head */}
        <thead>
          <tr className="text-customColor-50 font-bold text-[18px]">
            <th>Amount</th>
            <th>Date</th>
            <th>Collected By</th>
            <th>Approved By</th>
          </tr>
        </thead>
        <tbody className="   ">
          {/* row 1 */}

          {dipositData?.map((data: IDepositData) => (
            <tr className="text-textColor font-bold" key={data?._id}>
              <td>{data?.amount}</td>
              <td>{data?.registered}</td>
              <td>{data?.collectedBy}</td>
              <td>{data?.approvedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DipositTable;
