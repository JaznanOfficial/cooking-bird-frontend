import React from "react";

const CheckoutAddress = ({setShowAddress}) => {

  const addressHandler = (event) => {
    const data = event.target.innerText;
    setShowAddress(data)

  }


  return (
    <label class="ml-2 text-sm font-medium text-navy-900 cursor-pointer">
      <div className="flex mt-5 bg-white shadow-lg rounded-lg max-w-max">
        <input
          type="radio"
          class="peer sr-only"
          name="pricing" />

        <button
          onClick={addressHandler}
          className="text-gray-600 ring-2 ring-transparent transition-all peer-checked:text-red-600 peer-checked:ring-red-400 peer-checked:ring-offset-2 peer-checked:rounded-lg p-5"
        >
          <div class="flex items-center justify-between">
            <h2 className="inline text-lg font-semibold p-2 rounded-lg text-red-600 uppercase bg-orange-100">
              <i className="fa-solid fa-location-dot"></i> Office
            </h2>

            <svg width="52" height="24" viewBox="0 0 52 24">
              <path
                fill="currentColor"
                d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"
              />
            </svg>
          </div>
          <div className=" text-start">
            <p className="mt-1 text-gray-700 text-lg">Elon Musk</p>
            <p className="text-sm">
              Suzy Queue 4455 Landing Lange, APT 4 Louisville, KY 40018-1234
            </p>
            <div className="my-4 flex items-center justify-between">
              <h1 className="text-gray-700 text-sm">
                <i className="fa-solid fa-phone-volume"></i> +0123456789
              </h1>
            </div>
            <hr />
          </div>
        </button>
      </div>
    </label>
  );
};

export default CheckoutAddress;
