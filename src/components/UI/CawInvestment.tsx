import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PageHeader from "../shared/PageHeader";

const CawInvestment = () => {
  const value = 66;

  const couwInvesement = [
    {
      titel: "Caw Investment #1",
      date: "12 June, 2022",
      progressValue: 75,
    },
    {
      titel: "Caw Investment #2",
      date: "12 June, 2023",
      progressValue: 55,
    },
  ];

  return (
    <section className="flex h-[200px] justify-between items-center gap-4 ">
      {couwInvesement?.map((elem, i) => (
        <div
          key={i}
          className="flex items-center justify-center gap-4 shadow-lg  rounded-lg h-[150px] w-full"
        >
          <div>
            <h3 className="text-lg font-bold text-textColor">{elem?.titel}</h3>
            <p className="font-bold text-customColor-50 ">{elem?.date}</p>
          </div>
          <div>Progress</div>
        </div>
      ))}
    </section>
  );
};

export default CawInvestment;
