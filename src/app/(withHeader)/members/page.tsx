import AllMembers from "@/components/UI/AllMembers";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const Members = () => {
  return (
    <section>
      <PageHeader
        decription="Here all of the members who joined to the organization"
        title="Members"
      />

      <AllMembers />
    </section>
  );
};

export default Members;
