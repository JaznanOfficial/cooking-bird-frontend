import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div class="py-16 px-5 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
      <div class="flex flex-col justify-start items-start w-full space-y-9">
        <div class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full px-5">
          <div>
            <p class="font-ubuntu mb-6 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">
              Checkout
            </p>

            <p>Home / Cart / View Cart / Checkout</p>

            <div class="mt-6">
              <h1 class="text-navy-900"> Select type of account </h1>

              <div class="mt-3 md:flex md:items-center md:-mx-2">
                <Link
                  to="/"
                  className="flex justify-center w-full px-6 py-3 mt-4  border border-red-600 rounded-md md:mt-0 md:w-auto md:mx-2 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span class="mx-2">client</span>
                </Link>

                <Link
                  to="/"
                  className="flex justify-center w-full px-6 py-3 mt-4  border border-red-600 rounded-md md:mt-0 md:w-auto md:mx-2 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>

                  <span class="mx-2">worker</span>
                </Link>
              </div>
            </div>

            <Link to="/">
              <button className="bg-red-600 px-8 py-2 mt-6 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:bg-red-500 ">
                <i class="fa-solid fa-tent-arrow-turn-left"></i> Back{" "}
              </button>{" "}
            </Link>
          </div>

          <div>
            <img
              className="w-60 h-60"
              src="https://i.ibb.co/9Yg0Pvx/cooking-bird.png"
              alt="..."
            />
          </div>
        </div>

        <div class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
          <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
            
          <h1 className="text-navy-900 text-2xl font-ubuntu pt-5">Billing details</h1>
          
            <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
              
              <input
                type="text"
                placeholder="First Name"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <input
                type="text"
                placeholder="Last Name"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />

              <input
                type="email"
                placeholder="Email"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <input
                type="tel"
                placeholder="Phone"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              <input
                type="text"
                placeholder="Company Name (optional)"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />

              <input
                type="text"
                placeholder="Country / Region *"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              
              <input
                type="text"
                placeholder="Town / City *"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />

              <input
                type="text"
                placeholder="Street Address and House number * "
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              
              <input
                type="text"
                placeholder="Apartment, suite, unit, etc. (optional)"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />
              
              <input
                type="text"
                placeholder="Postcode *"
                class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
              />

              <h1 className="text-navy-900 text-xl font-ubuntu py-8">Additional information</h1> <br />
              
              <div class="flex flex-row justify-center items-center my-6">
                <hr class="border w-full" />
                <p class="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600 dark:text-white">
                  or pay with card
                </p>
                <hr class="border w-full" />
              </div>
            </form>
          </div>

          <div class="xl:w-2/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
