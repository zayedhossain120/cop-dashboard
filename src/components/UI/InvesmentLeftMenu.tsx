import Link from "next/link";
import React from "react";

const InvesmentLeftMenu = () => {
  return (
    <aside className="flex justify-center items-center flex-col">
      <Link href="/statement/diposit">Diposit</Link>
      <Link href="/statement/expenses">Expense</Link>
      <Link href="/statement/withdraw">Withdraw</Link>
      <Link href="/statement/profit">Profit</Link>
    </aside>
  );
};

export default InvesmentLeftMenu;
