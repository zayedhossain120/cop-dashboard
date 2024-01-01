import { IDepositData, IWithdrawData } from "@/type";
import { withdrawData } from "@/utils/data/withdrawData";
import React from "react";

const WithdrawTable = () => {
  return (
    <div className="">
      <table className="table table-pin-rows table-pin-cols">
        {/* head */}
        <thead>
          <tr className="text-customColor-50 font-bold text-[18px]">
            <th>Amount</th>
            <th>Date</th>
            <th>Proved By</th>
            <th>Transfer By</th>
            <th>Approved By</th>
          </tr>
        </thead>
        <tbody className="   ">
          {/* row 1 */}

          {withdrawData?.map((data: IWithdrawData) => (
            <tr className="text-textColor font-bold" key={data?._id}>
              <td>{data?.amount}</td>
              <td>{data?.registered}</td>
              <td>{data?.provedBy}</td>
              <td>{data?.transferBy}</td>
              <td>{data?.approvedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WithdrawTable;
