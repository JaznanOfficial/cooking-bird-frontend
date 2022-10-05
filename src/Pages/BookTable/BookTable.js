import React from "react";
import { Link } from "react-router-dom";

const BookTable = () => {
  return (
    <div>
      <div className="container flex flex-wrap lg:flex-nowrap lg:flex-row justify-around items-center mx-auto gap-10 lg:gap-4">
         
        <div className="container w-full  mx-10 pb-10">
          <h1 className="font-monoton text-3xl text-red-600">Reservation</h1>
          <h1 className="text-7xl font-bold font-ubuntu text-navy-900 my-10">
            Mmm...! <br />
            Your evening <br />
            will be great! <br />
          </h1>
          <div className="flex justify-center items-center">
            <p className="text-center text-normal text-navy-900 w-80">
            Thank you for visiting us! <br /> We hope you find what you're looking for and that you enjoy your stay. We look forward to serving you. Have a great day!
            </p>
          </div>
        </div>
        
        <div className="w-full">
          <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px]">
              <form action="https://formbold.com/s/FORM_ID" method="POST">
                <div class="mb-3">
                  <label
                    for="Name"
                    class="mb-3 block text-base font-medium text-[#cf1414]"
                  >
                    Reservation Details
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="email"
                    placeholder="abc@def.com"
                    required
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="tel"
                    // type="number"
                    placeholder="Phone number"
                    pattern="[0-9]{11}"
                    maxLength="11"
                    required
                    class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>

                <div class="mb-3">
                  <input
                    type="number"
                    placeholder="How many guest are you bringing?"
                    required
                    min="0"
                    class="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
                  />
                </div>

                <div class="-mx-3 flex flex-wrap">
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="date"
                        class="mb-3 block text-base font-medium"
                      >
                        Date
                      </label>
                      <input
                        type="date"
                        required
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
                      />
                    </div>
                  </div>
                  <div class="w-full px-3 sm:w-1/2">
                    <div class="mb-5">
                      <label
                        for="time"
                        class="mb-3 block text-base font-medium"
                      >
                        Time
                      </label>
                      <input
                        type="time"
                        required
                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-red-600 focus:shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div class="mb-5">
                  <label class="mb-3 block text-base font-medium">
                    Are you coming to the event?
                  </label>
                  <div class="flex items-center space-x-6">
                    <div class="flex items-center">
                      <input type="radio" class="h-5 w-5" />
                      <label
                        for="radioButton1"
                        class="pl-3 text-base font-medium"
                      >
                        Yes
                      </label>
                    </div>
                    <div class="flex items-center">
                      <input type="radio" class="h-5 w-5" />
                      <label
                        for="radioButton2"
                        class="pl-3 text-base font-medium"
                      >
                        No
                      </label>
                    </div>
                  </div>
                </div>

                <Link
                  to="/"
                  className="hover:shadow-form rounded-md bg-red-600 py-3 px-8 text-center text-base font-semibold text-white outline-none hover:bg-red-500"
                >
                  Reserve
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
