import InvestedProject from "@/components/InvestedProject";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

const Investment = () => {
  return (
    <section>
      <PageHeader
        decription="All of the investment is showing here"
        title="Invesment"
      />
      <InvestedProject />
    </section>
  );
};

export default Investment;
