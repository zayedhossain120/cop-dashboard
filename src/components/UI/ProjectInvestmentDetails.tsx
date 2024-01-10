import Image from "next/image";
import EditIcon from "../svgIcons/EditIcon";
import TelePhoneIcon from "../svgIcons/TelePhoneIcon";

const ProjectInvestmentDetails = () => {
  return (
    <section className=" shadow-lg p-5 rounded-lg h-[100vh] w-[345px]  ">
      <div className=" mb-6">
        <h3 className="font-bold  text-textColor mb-4">Cow Investmet - #1</h3>

        <Image
          className="rounded-lg w-full h-[130px] object-cover"
          src="https://images.pexels.com/photos/14297722/pexels-photo-14297722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Lauren Marsano"
        />
      </div>

      {/* created by */}

      <div className="flex items-center justify-start gap-2 pb-6 ">
        <div>
          <span className="text-customColor-50 text-[14px]  font-bold">
            Created by
          </span>
          <Image
            className="rounded-full"
            src="https://images.pexels.com/photos/14297722/pexels-photo-14297722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Lauren Marsano"
            width="40"
            height="40"
          />
        </div>
        <div>
          <p className="font-bold  text-textColor flex items-center justify-between">
            Nurul Islam Rimon{" "}
          </p>
          <span className="text-customColor-blue text-[14px]  font-bold">
            Manager{" "}
          </span>
        </div>
      </div>

      <div className="border-b-2 border-neutral-200"></div>

      {/* buttom section  */}

      <div className="py-3 px-5 flex justify-start items-start flex-col gap-2  ">
        <div>
          <span className="text-customColor-50 text-[14px]  font-bold">
            Invested on
          </span>
          <p className="font-bold  text-textColor flex items-center justify-between">
            12 June, 2023
          </p>
        </div>
        <div>
          <span className="text-customColor-50 text-[14px]  font-bold">
            Investment type
          </span>
          <p className="font-bold  text-textColor flex items-center justify-between">
            One time Revinue
          </p>
        </div>
        <div>
          <span className="text-customColor-50 text-[14px]  font-bold">
            Estimated Revoke date{" "}
          </span>
          <p className="font-bold  text-textColor flex items-center justify-between">
            15 June, 2024{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectInvestmentDetails;
