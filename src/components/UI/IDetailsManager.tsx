import React from "react";
import CallIcon from "../svgIcons/CallIcon";
import LocationIcon from "../svgIcons/LocationIcon";

const IDetailsManager = () => {
  return (
    <>
      <div className="flex items-center justify-start gap-2 p-10  ">
        <div>
          <img
            className="rounded-lg"
            src="https://images.pexels.com/photos/14297722/pexels-photo-14297722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Lauren Marsano"
            width="150"
            height="150"
          />
        </div>
        <div className="flex items-start justify-start flex-col gap-2">
          <h3 className="font-bold text-xl  text-textColor flex items-center justify-between">
            Nurul Islam Rimon{" "}
          </h3>
          <p className="text-customColor-50 text-[14px]  flex items-center justify-start gap-2 font-bold">
            <CallIcon /> 01850-711231{" "}
          </p>
          <p className="text-customColor-50 text-[14px]  flex items-center justify-center gap-2 font-bold">
            <LocationIcon /> Solaiman miyar bari, Dhanshallik bazar.{" "}
          </p>
        </div>
      </div>
      <div className="flex p-10 items-start justify-center flex-col gap-2">
        <p className="text-customColor-50 text-[14px]  flex items-center justify-start gap-2 font-bold">
          Note
        </p>

        <div className="border-b-2 border-neutral-200 w-full"></div>

        <p className="text-customColor-50 text-[14px]  flex items-center justify-start gap-2 font-bold">
          Aliquam porta nisl dolor, molestie pellentesque elit Molestie in.Morbi
          metus neque, elementum ullam
        </p>
      </div>
    </>
  );
};

export default IDetailsManager;
