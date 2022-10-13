import React from "react";
import { Link } from "react-router-dom";
import CheckoutAddress from "./CheckoutAddress";
import CheckoutPayment from "./CheckoutPayment";

const Checkout = () => {

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
           

            <CheckoutAddress />
            <CheckoutAddress />
          </div>

          <div class="xl:w-2/5 flex flex-col sm:flex-row xl:flex-col justify-center items-center bg-gray-100 dark:bg-gray-800 py-7 sm:py-0 xl:py-10 px-10">
            <CheckoutPayment />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;