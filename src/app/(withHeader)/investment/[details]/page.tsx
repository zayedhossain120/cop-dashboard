"use client";

import { investedProjectData } from "@/utils/data/InvestedProjectData";

// export async function getInvestedProject(params) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const resultObject = investedProjectData.find(
//         (item) => item._id === params._id
//       );

//       if (resultObject) {
//         resolve(resultObject);
//       } else {
//         reject(`Object not found for ID: ${params}`);
//       }
//     }, 500);
//   });
// }

const InvestmentDetailsPage = (params: { details: string }) => {
  // const investedProjectData = getInvestedProject(params);
  // console.log(investedProjectData);

  console.log(params.details);
  return <div></div>;
};

export default InvestmentDetailsPage;
