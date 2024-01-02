// members data interface

export interface IMembersDataProps {
  _id: string;
  picture: string;
  blood: string;
  title: string;
  name: string;
  phone: string;
}

// invested project interface

export interface Investor {
  profile: string;
}

export interface IInvestedProjusesDataProps {
  _id: string;
  picture: string;
  cawInvestment: string;
  investedAmount: number;
  investors: Investor[];
  registered: string;
  isActive: boolean;
}

// header menu type declaration

export interface MenuItem {
  label: string;
  key: string;
  href: string;
}

// statement side nav

export interface IStatementSideNav {
  label: string;
  key: string;
  href: string;
}

// deposit data interface

export interface IDepositData {
  _id: string;
  amount: string;
  collectedBy: string;
  approvedBy: string;
  registered: string;
}

// expense data interface

export interface IExpenseData {
  _id: string;
  amount: string;
  collectedBy: string;
  approvedBy: string;
  registered: string;
  reason: string;
}

// Withdraw data interface
export interface IWithdrawData {
  _id: string;
  amount: string;
  provedBy: string;
  transferBy: string;
  approvedBy: string;
  registered: string;
}

// profit data interface
export interface IProfitData {
  _id: string;
  investAmount: string;
  profit: string;
  investName: string;
  status: string;
  range: string;
}
