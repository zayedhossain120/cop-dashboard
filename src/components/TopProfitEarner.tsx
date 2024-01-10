import Image from "next/image";
import React from "react";

const TopprofitEarner = () => {
  const topprofit = [
    {
      count: 1,
      name: "Zayed Hossain",
      invested: 5896,
      profit: 2358,
      profile:
        "https://images.pexels.com/photos/15369189/pexels-photo-15369189/free-photo-of-a-black-and-white-photo-of-a-pigeon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      count: 2,
      name: "Nurul Islam",
      invested: 86896,
      profit: 3558,
      profile:
        "https://images.pexels.com/photos/6337786/pexels-photo-6337786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      count: 3,
      name: "Nizam Udddin",
      invested: 45963,
      profit: 259,
      profile:
        "https://images.pexels.com/photos/1165082/pexels-photo-1165082.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      count: 4,
      name: "Shariful Afasar",
      invested: 4596,
      profit: 369,
      profile:
        "https://images.pexels.com/photos/4062819/pexels-photo-4062819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      count: 5,
      name: "Jaker Hossain ",
      invested: 148,
      profit: 23,
      profile:
        "https://images.pexels.com/photos/146015/pexels-photo-146015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      count: 6,
      name: "Rasel Vipar",
      invested: 45896,
      profit: 2589,
      profile:
        "https://images.pexels.com/photos/6105396/pexels-photo-6105396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <section className="p-4 shadow-lg h-[255px] overflow-auto rounded-lg">
      <div className="flex item-center justify-between">
        <h3 className="text-lg font-bold text-customColor-50">
          Top profit Earner
        </h3>
        <h3 className="text-lg font-bold text-customColor-blue  ">View all</h3>
      </div>

      <div className="flex justify-center items-center  flex-col gap-4 mt-4">
        {topprofit.map((data) => (
          <div
            className="flex  items-center justify-between gap-4 w-full "
            key={data?.count}
          >
            <div className="text-[18px] font-bold text-textColor">
              #{data?.count}
            </div>
            <div className="flex justify-center items-center gap-2">
              <Image
                src={data?.profile}
                alt="Profile picture"
                className="  rounded-full"
                height="48"
                width="48"
              />
              <h3 className="text-[18px] font-bold text-textColor">
                {data?.name}
              </h3>{" "}
            </div>
            <div className="flex justify-center items-center flex-col">
              <p className="text-[18px] font-bold text-textColor">
                {data?.invested}
              </p>
              <p className="text-[18px] font-bold text-customColor-50">
                Invested
              </p>
            </div>
            <div className="flex justify-center items-center flex-col">
              <p className="text-[18px] font-bold text-textColor">
                {data?.profit}
              </p>
              <p className="text-[18px] font-bold text-customColor-50">
                Profit
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopprofitEarner;
