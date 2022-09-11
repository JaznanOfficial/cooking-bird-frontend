import { Card } from "flowbite-react";
import React from "react";

const Cooks = () => {
  return (
    <div className="py-8 px-10">
      <h1 className="text-navy-900 text-4xl font-medium font-ubuntu">
        They will cook for you
      </h1>

      <div>
        <div className="card w-80 ">
          <figure>
            <img
              className="h-96 bg-gray-100"
              src="https://i.ibb.co/pPzj4sd/1.png"
              alt="Shoes"
            />
          </figure>
          <div className="card-body border-none">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Paul Trueman
            </h5>
                      <p className="font-normal text-gray-700 dark:text-gray-400">Chef</p>
                      
            <div className="flex flex-nowrap justify-center items-center mt-3">
              <a
                href="https://github.com/jaznanofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="m-2 p-1 border hover:border-red-600 rounded-full  text-white  transition-colors duration-500  hover:bg-red-600 w-8"
              >
                <i class="fa-brands fa-github-alt text-black m-0 p-0"></i>
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
        </div>
      </div>
    </div>
  );
};

export default Cooks;
