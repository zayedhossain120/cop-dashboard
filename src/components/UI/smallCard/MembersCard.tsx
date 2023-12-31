import { IMembersDataProps } from "@/type";
import React from "react";

interface MembersCard {
  data: IMembersDataProps;
}

const MembersCard: React.FC<MembersCard> = ({ data }) => {
  return (
    <div className="flex items-center justify-center flex-col">
      <img
        src={data.picture}
        alt={data.name}
        className="h-16 w-16 rounded-full"
      />

      <p>Title: {data.title}</p>
      <p>Name: {data.name}</p>
      <p>Phone: {data.phone}</p>
      <p>Blood Type: {data.blood}</p>
    </div>
  );
};

export default MembersCard;
