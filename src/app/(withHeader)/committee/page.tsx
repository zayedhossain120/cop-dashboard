import AllMembers from "@/components/UI/AllMembers";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const Committee = () => {
  return (
    <section>
      <PageHeader
        decription="Here all of the members who joined to the organization"
        title="Committee"
      />

      <AllMembers />
    </section>
  );
};

export default Committee;
