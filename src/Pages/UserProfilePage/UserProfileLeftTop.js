import React, { useEffect, useState } from "react";
import { RingLoader } from "react-spinners";
import useFetch from "../../Hooks/useFetch";
import useFirebase from "../../Hooks/useFirebase";
import EditModal from "./EditModal";

const UserProfileLeftTop = () => {
    const { getData, data, dataLoading } = useFetch();
    const { user,loading } = useFirebase();


    // console.log(user.email);

    useEffect(() => {
        if (user?.email) {
            getData(
                `https://cooking-bird-server-production.up.railway.app/api/v1/users?email=${user.email}`
            );
        }
    }, [user?.email,]);
    
    // console.log(data[0]);
    const userData = data[0]
    const {name,email,profession,img,phone} = userData || {}

    const [show, setShow] = useState(false);

    const openModal = () => {
        setShow(true);
    };

    const closeModal = () => {
        setShow(false);
    };

    if (dataLoading || loading) {
        return (
            <div className="h-full mx-10 flex justify-center items-center py-24 lg:py-12">
                <div>
                    <RingLoader color="#E32D36" size={300} cssOverride={{ margin: "50px auto" }} />
                </div>
            </div>
        );
    }

     
        return (
            <div className="container mx-auto">
                <div className="flex items-center justify-center">
                    <div className="bg-white font-semibold text-center rounded-3xl border shadow-lg py-5 max-w-sm w-full">
                        <img className="mb-3 w-32 h-32 rounded-full shadow-lg mx-auto" src={img} alt='user-img'/>
                        <h1 className="text-lg text-gray-700"> {name} </h1>
                        <h3 className="text-sm text-gray-400 "> {profession || "set profession"} </h3>
                        <p className="text-xs text-gray-400 mt-4"> {phone || "set mobile number"}</p>
                        <p className="text-xs text-gray-400 mt-4"> {email}</p>
                        <button
                            onClick={openModal}
                            className="bg-red-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide hover:bg-red-500 "
                        >
                            Edit Profile
                        </button>
                        <EditModal show={show} closeModal={closeModal} userData={userData} />
                    </div>
                </div>
            </div>
        );
    
};

export default UserProfileLeftTop;
