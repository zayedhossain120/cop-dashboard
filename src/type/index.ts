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
}
