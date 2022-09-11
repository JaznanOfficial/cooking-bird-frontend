import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="flex flex-wrap flex-col lg:flex-row justify-center items-start bg-gray-100 py-8 px-12">
                <div className="lg:w-3/12 lg:mx-auto lg:order-2">
                    <div className="flex flex-nowrap justify-center items-center">
                        <img
                            src="https://i.ibb.co/9Yg0Pvx/cooking-bird.png"
                            width={"50px"}
                            alt=""
                        />
                        <h1 className="text-2xl text-red-600">Cooking Bird</h1>
                    </div>
                    <div>
                        <p className="text-justify">
                            {" "}
                            <span className="text-red-600">COOKING BIRD</span> is one of the most
                            beautiful and fast growing online based restaurant and delivery service.
                            we're available on website and apps those released on playstore and
                            appstore
                        </p>
                    </div>
                    
                    <div className="flex flex-nowrap justify-center items-center mt-3">
                        <a
                            href="https://github.com/jaznanofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-2 p-1 border hover:border-red-600 border-navy-900 rounded-full  text-white  transition-colors duration-500 bg-navy-900 hover:bg-red-600 w-10"
                        >
                            <i class="fa-brands fa-github-alt text-2xl  m-0 p-0"></i>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/jaznanofficial/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-2 p-1 border hover:border-red-600 border-navy-900 rounded-full  text-white  transition-colors duration-500 bg-navy-900 hover:bg-red-600 w-10"
                        >
                            <i class="fa-brands fa-linkedin-in text-2xl m-0 p-0"></i>
                        </a>
                        <a
                            href="https://www.facebook.com/jaznan.official"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-2 p-1 border hover:border-red-600 border-navy-900 rounded-full  text-white  transition-colors duration-500 bg-navy-900 hover:bg-red-600 w-10"
                        >
                            <i class="fa-brands fa-facebook-f text-2xl m-0 p-0"></i>
                        </a>
                        <a
                            href="https://twitter.com/jaznanofficial"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="m-2 p-1 border hover:border-red-600 border-navy-900 rounded-full  text-white  transition-colors duration-500 bg-navy-900 hover:bg-red-600 w-10"
                        >
                            <i class="fa-brands fa-twitter text-2xl m-0 p-0"></i>
                        </a>
                    </div>

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
            <div className="flex flex-wrap justify-center items-center h-20 bg-black border rounded-tl-full rounded-tr-full">
                <h1 className="text-white mx-10">Copyright © 2022 Design & Developed by <span className="font-bold text-red-600">Team Cooking Bird</span></h1>
            </div>
        </div>
    );
};

export default Footer;
