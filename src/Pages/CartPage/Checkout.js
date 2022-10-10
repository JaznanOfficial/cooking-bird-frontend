import React from "react";
import { Link } from "react-router-dom";

const Checkout = () => {

  const background =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6GUpqeY8UWzbMerPMh7wbljDWFZ-zmIlAA&usqp=CAU";

  return (
    <div class="py-16 px-5 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
      <div class="flex flex-col justify-start items-start w-full space-y-9">
        <div class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full px-5">
          <div>
            <p class="font-ubuntu mb-6 text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800 dark:text-gray-50">
              Checkout
            </p>

            <Link to="/">
              <button className="bg-red-600 px-8 py-2 mt-6 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:bg-red-500 ">
                <i class="fa-solid fa-tent-arrow-turn-left"></i> Back{" "}
              </button>{" "}
            </Link>
          </div>
        </div>

        <div class="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
          <div class="p-8 bg-gray-100 dark:bg-gray-800 flex flex-col lg:w-full xl:w-3/5">
            <h1 className="text-navy-900 text-2xl text-start font-ubuntu pt-5">
              Billing details
            </h1>

            <form>
              <div class="grid grid-cols-1 gap-6 mt-3 md:grid-cols-2">
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
              </div>

              <div>
                <h1 className="text-navy-900 text-xl text-start font-ubuntu my-3">
                  Additional information
                </h1>

                <textarea
                  name="Order notes (optional)"
                  cols="30"
                  rows="5"
                  class="block w-full px-5  text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-red-300 dark:focus:border-red-300 focus:ring-red-300 focus:outline-none focus:ring focus:ring-opacity-40"
                ></textarea>
              </div>

              

              <div>
                <h1 className="text-navy-900 text-xl text-start font-ubuntu my-3">
                  Payment method
                </h1>

                <ul class="p-3 space-y-3 text-sm">
                  <li>
                    <div class="flex items-center">
                      <input
                        type="radio"
                        name="default-radio"
                        class="w-4 h-4"
                      />
                      <label
                        for="default-radio-1"
                        class="ml-2 text-sm font-medium text-navy-900"
                      >
                        Direct bank transfer
                      </label>
                    </div>
                  </li>

                  <li>
                    <div class="flex items-center">
                      <input
                        type="radio"
                        name="default-radio"
                        class="w-4 h-4"
                      />
                      <label
                        for="default-radio-1"
                        class="ml-2 text-sm font-medium text-navy-900"
                      >
                        Credit Card
                      </label>
                    </div>
                  </li>

                  <li>
                    <div class="flex items-center">
                      <input
                        type="radio"
                        name="default-radio"
                        class="w-4 h-4"
                      />
                      <label
                        for="default-radio-1"
                        class="ml-2 text-sm font-medium text-navy-900"
                      >
                        Check payments
                      </label>
                    </div>
                  </li>

                  <li>
                    <div class="flex items-center">
                      <input
                        type="radio"
                        name="default-radio"
                        class="w-4 h-4"
                      />
                      <label
                        for="default-radio-1"
                        class="ml-2 text-sm font-medium text-navy-900"
                      >
                        Cash on delivery
                      </label>
                    </div>
                  </li>
                </ul>
              </div>

              <Link
              to="/"
              type="submit"
              className="block w-full  mt-4 py-3 rounded-md text-white font-semibold mb-2 "
              style={{ background: `url(${background})` }}
              >
              Continue to payment
              </Link>
              
              <Link
                to=""
                type="submit"
                className="text-white px-10 block w-full mt-4 py-3 font-medium rounded-lg text-sm mr-2 mb-2 bg-red-600"
              >
              Cancel this transfer
              </Link>

              <Link
              to="/"
              type="submit"
              className="block w-full  mt-4 py-3 rounded-md text-white font-semibold mb-2 "
              style={{ background: `url(${background})` }}
              >
              Cancel this transfer
              </Link>
              
            </form>
          </div>

          <div class="xl:w-2/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
