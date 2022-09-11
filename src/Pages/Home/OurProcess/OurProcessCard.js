import React from "react";

const OurProcessCard = ({ processData }) => {
  const { name, img, description, image, badge } = processData;
  return (
    <div className=" w-64 flex flex-col text-center items-center py-5">
      <div className="relative w-28 h-28 bg-red-600 flex flex-col justify-center items-center rounded-full">
        <div className="absolute badge bg-white border-none w-8 h-8 text-purple-800 rounded-full left-0 top-0">
            {badge}
        </div>
        <img src={img} alt="search" className="w-16 h-16 " />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
      <div>{image}</div>
    </div>
  );
};

export default OurProcessCard;
