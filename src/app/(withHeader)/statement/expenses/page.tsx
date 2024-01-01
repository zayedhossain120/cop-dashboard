import ExpenseTable from "@/components/forStatement/ExpenseTable";
import React from "react";

const Expense = () => {
  return (
    <div className="h-[90vh]  ">
      <div className="overflow-auto h-[500px] px-4">
        <ExpenseTable />
      </div>
    </div>
  );
};

export default Expense;
