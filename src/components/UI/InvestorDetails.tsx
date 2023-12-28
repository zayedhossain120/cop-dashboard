import EditIcon from "../svgIcons/EditIcon";
import TelePhoneIcon from "../svgIcons/TelePhoneIcon";

const InvestorDetails = () => {
  return (
    <section className="flex flex-col justify-center antialiased bg-gray-50 text-gray-600 max-h-screen p-4 h-100vh">
      <div className="relative max-w-[340px]  bg-white shadow-lg rounded-lg">
        <div className="py-6 px-5 ">
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

            <div className="relative inline-flex flex-shrink-0  ">
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

        {/* Email and others details  we will add conponent here */}

        <div className="py-3 px-5 flex flex-col gap-2 pb-[145px] ">
          <p className="font-bold  text-customColor-50 flex items-center justify-between">
            Name: <span className="text-textColor">Nurul Islam Rimon</span>{" "}
          </p>
          <p className="font-bold text-customColor-50 flex items-center justify-between">
            Fathe Name:
            <span className="text-textColor">Nurun Nobi</span>{" "}
          </p>
          <p className="font-bold text-customColor-50 flex items-center justify-between">
            Mother Name:
            <span className="text-textColor">Jannat Afroz</span>{" "}
          </p>
          <p className="font-bold text-customColor-50 flex items-center justify-between">
            Join Date:
            <span className="text-textColor">13 jan, 2023</span>{" "}
          </p>
          <p className="font-bold text-customColor-50 flex items-center justify-between">
            Address:
            <span className="text-textColor whitespace-pre-wrap">
              Danesh munshi bari,
            </span>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvestorDetails;
