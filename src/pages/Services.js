import React from "react";

const Services = () => {
  return (
    <div className="container w-full px-4 mx-auto my-16 sm:px-6 lg:px-8">
      <h3 className="py-6 mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl dark:text-gray-500">
        What I do ?
      </h3>
      <div className="flex items-center justify-start bg-gray-0">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="flex flex-col items-start justify-start px-6 py-4 text-left">
            <span className="my-6">
              <svg
                className="w-12 h-10 text-gray-700 dark:text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 21H7V19H9V18H3C1.89543 18 1 17.1046 1 16V5C1 3.89543 1.89543 3 3 3H21C22.1046 3 23 3.89543 23 5V16C23 17.1046 22.1046 18 21 18H15V19H17V21ZM3 5V16H21V5H3Z"></path>
              </svg>
            </span>
            <span className="my-3 text-xl font-medium leading-6 text-gray-700 dark:text-gray-500">
              UI/UX Design
            </span>
            <p className="mt-2 text-base text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start px-6 py-4 text-left">
            <span className="my-6">
              <svg
                className="w-12 h-10 text-gray-700 dark:text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 23H7C5.89543 23 5 22.1046 5 21V2.913C5.04661 1.84255 5.92853 0.998988 7 1H17C18.1046 1 19 1.89543 19 3V21C19 22.1046 18.1046 23 17 23ZM7 3V21H17V3H15C15 4.10457 14.1046 5 13 5H11C9.89543 5 9 4.10457 9 3H7Z"></path>
              </svg>
            </span>
            <span className="my-3 text-xl font-medium leading-6 text-gray-700 dark:text-gray-500">
              Mobile Development
            </span>
            <p className="mt-2 text-base text-gray-500">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
          <div className="flex flex-col items-start justify-start px-6 py-4 text-left">
            <span className="my-6">
              <svg
                className="w-12 h-10 text-gray-700 dark:text-gray-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 21H13V15H21V21ZM11 21H3V11H11V21ZM21 13H13V3H21V13ZM11 9H3V3H11V9Z"></path>
              </svg>
            </span>
            <span className="my-3 text-xl font-medium leading-6 text-gray-900 dark:text-gray-500">
              Web Apps
            </span>
            <p className="mt-2 text-base text-gray-500 ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              impedit perferendis suscipit eaque, iste dolor cupiditate
              blanditiis ratione.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
