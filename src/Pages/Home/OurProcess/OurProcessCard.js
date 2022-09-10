import React from "react";

const OurProcessCard = ({ process }) => {
    const { name, img, description } = process;
  return (

        <div className=" w-64 flex flex-col text-center items-center py-5">
          <div className=" w-28 h-28 bg-red-600 flex flex-col justify-center items-center rounded-full">
            <img
              src={img}
              alt="search"
              className="w-16 h-16 "
            />
          </div>
          <div className="card-body items-center text-center">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
          </div>
      </div>
  );
};

export default OurProcessCard;
