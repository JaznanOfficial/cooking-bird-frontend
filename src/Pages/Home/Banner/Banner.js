import React from "react";
import "./Banner";
import Ben2 from "./Ben2";

const Banner = () => {
  return (
    <div className="bg-base-200 my-5">
      <div className="container relative flex flex-wrap justify-around items-center lg:flex-row-reverse py-5">
        
        <div>
         <Ben2 />
        </div>

        <div className="text-start py-4 px-3 description-div">
          <h1 className=" text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
            <br />
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et{" "}
            <br />a id nisi.
          </p>
          <button className=" inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-500">
            Get Started
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Banner;
