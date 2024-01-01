import { IDepositData, IExpenseData } from "@/type";
import { expensData } from "@/utils/data/expenseData";

const ExpenseTable = () => {
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
            <th>Reason</th>
          </tr>
        </thead>
        <tbody className="   ">
          {/* row 1 */}

          {expensData?.map((data: IExpenseData) => (
            <tr className="text-textColor font-bold" key={data?._id}>
              <td>{data?.amount}</td>
              <td>{data?.registered}</td>
              <td>{data?.collectedBy}</td>
              <td>{data?.approvedBy}</td>
              <td>{data?.reason}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseTable;
