import React from "react";

const ShortIcon = () => {
    return (
        <div className="flex flex-wrap container mx-auto justify-center items-center my-20">
            <div className="flex flex-nowrap justify-center items-center mx-auto">
                <div className="mx-6">
                    <h1 className="text-5xl text-red-600">
                        <i class="fa-regular fa-credit-card"></i>
                    </h1>{" "}
                    <p>100% payment security</p>
                </div>
                <div className="mx-6">
                    <h1 className="text-5xl text-red-600">
                        <i class="fa-solid fa-wallet"></i>
                    </h1>
                    <p>Support lots of payment</p>
                </div>
            </div>
            <div className="flex flex-nowrap justify-center items-center mx-auto">
                <div className="mx-6">
                    <h1 className="text-5xl text-red-600">
                    <i class="fa-regular fa-comments"></i>
                    </h1>
                    <p>24 hours/ 7 days <br /> support</p>
                </div>
                <div className="mx-6">
                    <h1 className="text-5xl text-red-600">
                    <i class="fa-solid fa-truck"></i>
                    </h1>
                    <p>Free delivery</p>
                </div>
            </div>
            <div className="flex flex-nowrap justify-center items-center mx-auto">
                <div className="mx-6">
                    <h1 className="text-5xl text-red-600">
                    <i class="fa-solid fa-list-check"></i>
                    </h1>{" "}
                    <p>Best quality guarantee</p>
                </div>
                <div className="mx-6">
                    <h1 className="text-5xl text-red-600">
                    <i class="fa-brands fa-google-play"></i>
                    </h1>
                    <p>Ready mobile apps</p>
                </div>
            </div>
        </div>
    );
};

export default ShortIcon;
