import React from "react";

const CheckoutAddress = () => {
  return (
    <div className="flex mt-5 bg-white shadow-lg rounded-3xl md:mx-auto my-0 max-w-md md:max-w-2xl border w-full mx-auto">
      <div className="flex justify-start items-start px-6 py-6">
        <div className="text-start">
          <div class="flex items-center">
            <input type="radio" name="default-radio" class="w-4 h-4" />
            <label
              for="default-radio-1"
              class="ml-2 text-sm font-medium text-navy-900"
            >
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold -mt-1 text-red-600 uppercase bg-orange-100 p-3">
                    <i className="fa-solid fa-location-dot"></i> Office
                    </h2>
                </div>
        
                <p className="mt-3 text-gray-700 text-lg">Elon Musk</p>
                <p className="text-sm">
                    Suzy Queue 4455 Landing Lange, APT 4 Louisville, KY 40018-1234
                </p>
                <div className="my-4 flex items-center justify-between">
                    <h1 className=" text-gray-700 text-sm">
                    <i className="fa-solid fa-phone-volume"></i> +0123456789
                    </h1>
                </div>
                <hr />
            </label>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CheckoutAddress;
