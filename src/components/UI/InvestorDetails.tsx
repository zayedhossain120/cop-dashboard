import React from "react";
import EditIcon from "../svgIcons/EditIcon";
import TelePhoneIcon from "../svgIcons/TelePhoneIcon";

const InvestorDetails = () => {
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 min-h-screen p-4">
      <div className="h-full">
        <div className="relative max-w-[340px] mx-auto bg-white shadow-lg rounded-lg">
          <div className="pt-6 pb-4 px-5 ">
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center">
                <img
                  className="rounded-lg"
                  src="https://res.cloudinary.com/dc6deairt/image/upload/v1638102932/user-48-01_nugblk.jpg"
                  width="80"
                  height="80"
                  alt="Lauren Marsano"
                />
              </div>

              <div className="relative inline-flex flex-shrink-0 ">
                <button className="btn btn-circle">
                  <EditIcon />
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-2xl font-bold text-customColor-90">
                Nurul Islam Rimon
              </h3>
              <p className="font-bold text-customColor-50 ">
                CopID: <span className="text-textColor">COP786NI</span>{" "}
              </p>
              <div className="flex item-center justify-between font-bold text-textColor">
                <p className="flex justify-center items-center gap-2 ">
                  <TelePhoneIcon /> <span> 01850-711231</span>
                </p>
                <p>(o+) Positive</p>
              </div>
              <hr />
            </div>
          </div>

          {/* Email and others details  */}

          <div className="py-3 px-5">
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorDetails;
