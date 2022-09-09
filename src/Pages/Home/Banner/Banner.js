import { Carousel } from "flowbite-react";
import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="bg-red-100 my-5">
      <div className="container relative flex flex-wrap justify-around items-center lg:flex-row-reverse py-5">
        
        <div>
        <div className="w-80 h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img
            className="w-80 h-80"
            src="https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826"
            alt="..."
          />
          <img
            className="w-80 h-80"
            src="https://templates.hibootstrap.com/restant/default/assets/img/home-one/collection/1.jpg"
            alt="..."
          />
          <img
            className="w-80 h-80"
            src="http://www.allbdrecipe.com/Images/Article/Img_2020823_152455_115.jpg"
            alt="..."
          />
        </Carousel>
      </div>
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
