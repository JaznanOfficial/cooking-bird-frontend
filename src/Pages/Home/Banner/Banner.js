import React from "react";

const Banner = () => {
  return (
   <div className="hero min-h-screen bg-base-200">
       <div className="hero-content flex-col lg:flex-row-reverse">
        <div>
          <img
            src="https://placeimg.com/260/400/arch"
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
        </div>
        <div className="text-start">
          <h1 className=" text-5xl font-bold">Box Office News!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda{" "}
            <br />
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et{" "}
            <br />a id nisi.
          </p>
          <button className="ml-3 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-red-500 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-600">Get Started</button>
        
        </div>
      </div> 
 
    </div> 

    
  );
};

export default Banner;
