import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutPayment = () => {
  const background =
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL6GUpqeY8UWzbMerPMh7wbljDWFZ-zmIlAA&usqp=CAU";
    
    return (
        <div>
        <Link
          to=""
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
          to=""
          type="submit"
          className="block w-full  mt-4 py-3 rounded-md text-white font-semibold mb-2 "
          style={{ background: `url(${background})` }}
        >
          Cancel this transfer
        </Link>
      </div>
    );
};

export default CheckoutPayment;