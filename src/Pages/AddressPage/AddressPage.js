import React, { useState } from "react";
import AddressModal from "./AddressModal";

const AddressPage = () => {
  const [show, setShow] = useState(false);

  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };

  return (
    <div className="bg-white p-5  min-h-screen rounded-3xl">
      <h1 className="text-navy-900 text-start text-5xl">Users Addresses</h1>

      <div className="text-start">
        <button
          className="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-400 mt-8 mx-4"
          onClick={openModal}
        >
          <i className="fa-solid fa-plus"></i> Add an address
        </button>
        {openModal && <AddressModal show={show} closeModal={closeModal} />}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 container mt-3 w-full">
        <div className="flex bg-white shadow-lg rounded-3xl max-w-max border">
          <div className="flex justify-start items-start px-6 py-6">
            <div className="text-start">
              
              <div class="flex items-center justify-between">
                <h2 className="inline text-lg font-semibold p-2 rounded-lg text-red-600 uppercase bg-orange-100 ">
                  <i className="fa-solid fa-location-dot"></i> Office
                </h2>
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

              <div className="flex flex-row justify-between items-center mt-3">
                <div>
                  <button
                    className="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 "
                    onClick={openModal}
                  >
                    <i className="fa-solid fa-pencil"></i> Edit
                  </button>
                  <AddressModal show={show} closeModal={closeModal} />
                </div>
                <div>
                  <button className="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 ">
                    <i className="fa-solid fa-trash-can"></i> Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
