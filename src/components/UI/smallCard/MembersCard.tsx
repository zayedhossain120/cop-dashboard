import { IMembersDataProps } from "@/type";
import React from "react";

interface MembersCard {
  data: IMembersDataProps;
}

const MembersCard: React.FC<MembersCard> = ({ data }) => {
  return (
    <div className="flex items-center justify-center flex-col  shadow-lg rounded-lg gap-4 py-4">
      <img
        src={data.picture}
        alt={data.name}
        className="h-20 w-20 rounded-full object-cover"
      />

      <p className="font-bold text-textColor">{data?.name}</p>
      <small className="font-bold text-primary border border-neutral-200 px-3 py-1 rounded-lg">
        {data?.title}
      </small>
      <small className="font-bold text-customColor-50 ">{data?.blood}</small>

      <div className="w-full border-b border-neutral-200"></div>
      <p className="font-bold text-customColor-50">{data?.phone}</p>
    </div>
  );
};

export default MembersCard;
