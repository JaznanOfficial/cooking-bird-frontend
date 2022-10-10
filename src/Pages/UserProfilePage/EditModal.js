import React, { useRef } from "react";
import { Modal } from "flowbite-react";

const EditModal = ({ show, closeModal }) => {

    const nameRef = useRef();
    const titleRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

        const name = nameRef.current.value;
        const title = titleRef.current.value;
        const email = emailRef.current.value;
        const phone = phoneRef.current.value;

        console.log(name, title, email, phone);
  };

  return (
      <React.Fragment>
        <Modal show={show} size="md" popup={true} onClose={closeModal}>
          <Modal.Header />
          <Modal.Body>
            <div className="mt-5">
              <form onSubmit={handleSubmit}>
                {/* <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="file"
                  accept="image/*"
                  
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div> */}

                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    ref={nameRef}
                    placeholder="Name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>

                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="text"
                    ref={titleRef}
                    placeholder="Title"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>

                <div className="relative z-0 mb-6 w-full group">
                  <input
                    type="email"
                    ref={emailRef}
                    placeholder="name@company.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 mb-6 w-full group">
                    <input
                      type="tel"
                      pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                      name="floating_phone"
                      id="floating_phone"
                      ref={phoneRef}
                      className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-400 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                      placeholder="phone number "
                      required
                    />
                  </div>
              </div>
              
                <div className="flex justify-end items-center">
                  <button
                    type="submit"
                    className="bg-red-600 px-4 py-2 rounded-3xl text-gray-100 tracking-wide hover:bg-red-500 text-end"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
  );
};

export default EditModal;
