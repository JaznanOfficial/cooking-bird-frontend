import React from "react";

const CheckoutPayment = ({handlePayment}) => {
  const background =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6GUpqeY8UWzbMerPMh7wbljDWFZ-zmIlAA&usqp=CAU";

  return (
    <div>
      
      <button
        type="submit"
        onClick={handlePayment}
        className="block w-full  mt-4 py-3 rounded-md text-white font-semibold mb-2 "
        style={{ background: `url(${background})` }}
      >
        Continue to payment
      </button>

      <button
        type="submit"
        // onClick={handlePayment}
        className="text-white px-10 block w-full mt-4 py-3 font-medium rounded-lg text-sm mr-2 mb-2 bg-red-600"
      >
        Cancel this transfer
      </button>

      <button
        type="submit"
        // onClick={handlePayment}
        className="block w-full  mt-4 py-3 rounded-md text-white font-semibold mb-2 "
        style={{ background: `url(${background})` }}
      >
        Cancel this transfer
      </button>
    </div>
  );
};

export default CheckoutPayment;
