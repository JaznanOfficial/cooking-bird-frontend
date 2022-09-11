import React from "react";

const Footer = () => {
    return (
        <div>
        <div className="flex flex-wrap flex-col lg:flex-row justify-center items-center bg-gray-100 py-8 px-12">
            <div className="lg:w-3/12 lg:mx-auto lg:order-2">
                <div className="flex flex-nowrap justify-center items-center">
                    <img src="https://i.ibb.co/9Yg0Pvx/cooking-bird.png" width={"50px"} alt="" />
                    <h1 className="text-2xl text-red-600">Cooking Bird</h1>
                </div>
                <div>
                    <p className="text-justify">
                        {" "}
                        <span className="text-red-600">COOKING BIRD</span> is one of the most
                        beautiful and fast growing online based restaurant and delivery service.
                        we're available on website and apps those released on playstore and appstore
                    </p>
                </div>
                <div></div>
            </div>
            <div className="lg:w-3/12 lg:mx-auto my-10 lg:order-3">
                <img
                    src="https://elanta.app/nazar/starbelly-demo/img/illustrations/phones.png"
                    width="500rem"
                    alt=""
                />
            </div>
            <div className="lg:w-3/12 lg:mx-auto text-left lg:order-1">
                <h1 className="font-ubuntu text-6xl text-navy-900 font-bold">
                    Download Our Mobile App
                </h1>
                <h5 className="text-slate-800 my-8">
                    Our beautiful and super easy light-weight app available on
                </h5>
                <div className="flex flex-nowrap justify-center items-center">
                    <a
                        className="mx-2"
                        href="https://play.google.com/store/apps"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <img
                            src="https://elanta.app/nazar/starbelly-demo/img/buttons/1.svg"
                            alt=""
                        />{" "}
                    </a>
                    <a
                        className="mx-3"
                        href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {" "}
                        <img
                            src="https://elanta.app/nazar/starbelly-demo/img/buttons/2.svg"
                            alt=""
                        />{" "}
                    </a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;
