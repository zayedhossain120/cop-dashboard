import { IMembersDataProps } from "@/type";
import { membersData } from "@/utils/data/membersData";
import React from "react";
import MembersCard from "./smallCard/MembersCard";

const AllMembers = () => {
  return (
    <div className="card-responsive-style mt-4">
      {membersData.map((data: IMembersDataProps) => (
        <MembersCard key={data?._id} data={data} />
      ))}
    </div>
  );
};

export default AllMembers;
