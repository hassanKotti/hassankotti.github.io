import React from "react";

const Contact = () => {
  return (
    <div>
      <div class="container bg-gray-50 mx-auto w-full h-full dark:bg-gray-900">
        <div class="relative wrap overflow-hidden p-10 h-full">
          <div
            class="border-2-2 absolute border-solid border-gray-500 h-full border -left-4/3"
            style={{ left: "56px" }}
          ></div>

          <div class="mb-8 flex justify-between items-center w-full">
            <div class="order-2 w-6/12"></div>
            <div class="z-20">
              <div class="my-4 rounded-full h-10 w-10 flex items-center bg-gray-300 ring-4 ring-gray-400 ring-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div class="order-1 bg-gray-300 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div className="flex flex-col items-start justify-start py-4 text-left">
                <span className="my-3 text-xl font-medium leading-6 text-gray-700 dark:text-gray-500">
                  Sr. Web Developer University of Science and Techcnology -
                  Information Center
                </span>
                <p className="mt-2 text-base text-gray-500">
                  10/2017 - 04/2021
                </p>

                <p className="mt-2 text-base font-semibold text-gray-500">
                  Omdurman,Sudan The Center for Information Technology is
                  established to provide its services in the field of
                  information technology and computer applications.
                </p>
                <p className="mt-4 text-base text-gray-500">
                  Sr. Web developer, Development team leader <br />
                  Contact: Ammar M. Abdu - +249912355655
                </p>
              </div>
            </div>
          </div>

          <div class="mb-8 flex justify-between items-center w-full">
            <div class="order-2 w-6/12"></div>
            <div class="z-20">
              <div class="my-4 rounded-full h-10 w-10 flex items-center bg-gray-300 ring-4 ring-gray-400 ring-opacity-30">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-10 w-10 text-gray-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div class="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div class="flex flex-row">
                <h3 class="mb-3 font-bold text-gray-800 text-xl">Status</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="red"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <h5 class="mb-3 font-bold text-gray-800 text-xl">Loc</h5>
              </div>

              <p class="text-base leading-snug tracking-wide text-gray-900 text-opacity-100">
                statusinfo helooooooooooooooooooooooo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
