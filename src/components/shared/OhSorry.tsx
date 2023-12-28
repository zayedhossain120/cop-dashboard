import Link from "next/link";
import React from "react";

const OhSorry = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen bg-gray-100">
        <div className="flex flex-col text-gray-700 lg:flex-row lg:space-x-16 lg:space-x-reverse">
          <div className="order-1 max-w-md px-2 text-sm md:text-base lg:px-0">
            <header className="mb-6">
              <h2 className="text-4xl font-bold leading-none text-gray-400 select-none lg:text-6xl">
                404.
              </h2>
              <h3 className="text-xl font-light leading-normal lg:text-3xl md:text-3xl">
                Sorry, we couldnt find this page.
              </h3>
            </header>

            <p className="max-w-sm mb-5 leading-5 md:leading-7">
              Dont worry, sometimes even we make mistakes. You can find plenty
              of other things on our homepage.
            </p>

            <Link
              href="/"
              className="inline px-4 py-2 text-sm font-medium leading-5 text-white uppercase transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue active:bg-blue-600 hover:bg-blue-700"
            >
              Back to Homepage
            </Link>
          </div>

          <div className="max-w-lg"></div>
        </div>
      </div>
    </>
  );
};

export default OhSorry;
