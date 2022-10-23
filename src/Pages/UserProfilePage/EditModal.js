import React, { useRef } from "react";
import { Modal } from "flowbite-react";
import useFetch from "../../Hooks/useFetch";
import useFirebase from "../../Hooks/useFirebase";

const EditModal = ({ show, closeModal, userData }) => {
  const { patchData } = useFetch()
  const {user} = useFirebase()
  console.log(user.email)
    const { name, email, profession, gender, phone } = userData || {}
    const nameRef = useRef();
    const professionRef = useRef();
    const emailRef = useRef();
    const phoneRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const profession = professionRef.current.value;
        const email = emailRef.current.value;
        const phone = `+88${phoneRef.current.value}`;

      const data = {name, profession, email, phone, };
      patchData(`https://cooking-bird-server-production.up.railway.app/api/v1/users?email=${user.email}`, data)
    };

    return (
        <React.Fragment>
            <Modal show={show} size="md" popup={true} onClose={closeModal}>
                <Modal.Header />
                <Modal.Body>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit}>
                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    ref={nameRef}
                                    placeholder="Name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    defaultValue={name}
                                />
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="text"
                                    ref={professionRef}
                                    placeholder="Profession"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                    defaultValue={profession}
                                />
                            </div>

                            <div className="relative z-0 mb-6 w-full group">
                                <input
                                    type="email"
                                    ref={emailRef}
                                    placeholder="name@company.com"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
                                    defaultValue={email}
                                    disabled
                                />
                            </div>

                            <div className="grid md:grid-cols-2 md:gap-6">
                                <div className="relative z-0 mb-6 w-full group">
                                    <input
                                        type="tel"
                                        pattern="[0-9]{11}"
                                        name="floating_phone"
                                        id="floating_phone"
                                        ref={phoneRef}
                                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-rose-400 focus:outline-none focus:ring-0 focus:border-rose-600 peer"
                                        placeholder="phone number "
                                        defaultValue={phone?.slice(-11)}
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
