import React from "react";

const Cooks = () => {
  const cookDataIcon = (
    <>
      <div className="flex flex-nowrap justify-center items-center">
        <a
          href="https://github.com/jaznanofficial"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
        >
          <i class="fa-brands fa-github-alt text-black m-0 p-0"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/jaznanofficial/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
        >
          <i class="fa-brands fa-linkedin-in text-black m-0 p-0"></i>
        </a>
        <a
          href="https://www.facebook.com/jaznan.official"
          target="_blank"
          rel="noopener noreferrer"
          className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
        >
          <i class="fa-brands fa-facebook-f text-black m-0 p-0"></i>
        </a>
        <a
          href="https://twitter.com/jaznanofficial"
          target="_blank"
          rel="noopener noreferrer"
          className=" p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
        >
          <i class="fa-brands fa-twitter text-black m-0 p-0"></i>
        </a>
      </div>
    </>
  );

  return (
    <div className="py-8">
      <div className="card pl-20 text-center">
        <h1 className="text-navy-900 text-4xl font-ubuntu py-8">They will cook for you</h1>
        <h6>
          Consectetur numquam poro nemo veniam <br/>
           eligendi rem adipisci quo modi.
        </h6>
      </div>

      <div className="flex flex-wrap justify-center items-center pt-16">
        <div className="card w-72">
          <figure>
            <img
              className="h-80 bg-gray-100"
              src="https://i.ibb.co/pPzj4sd/1.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="text-1xl font-bold  text-navy-900"> Paul Trueman</h2>
            <p>Chef</p>
            {cookDataIcon}
          </div>
        </div>

        <div className="card w-72">
          <figure>
            <img
              className="h-80 bg-gray-100"
              src="https://i.ibb.co/V20rTwG/3.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="text-1xl font-bold text-navy-900">Oscar Oldman</h2>
            <p>Assistant Chef</p>
            {cookDataIcon}
          </div>
        </div>

        <div className="card w-72">
          <figure>
            <img
              className="h-80 bg-gray-100"
              src="https://i.ibb.co/QdmCDST/2.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="text-1xl font-bold text-navy-900">Emma Newman</h2>
            <p>Chef</p>
            {cookDataIcon}
          </div>
        </div>

        <div className="card w-72">
          <figure>
            <img
              className="h-80 bg-gray-100"
              src="https://i.ibb.co/82hfxZT/4.png"
              alt=""
            />
          </figure>
          <div className="card-body">
            <h2 className="text-1xl font-bold text-navy-900">Ed Freeman</h2>
            <p>Assistant Chef</p>
            {cookDataIcon}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cooks;
