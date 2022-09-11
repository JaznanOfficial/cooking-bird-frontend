import { Badge } from "flowbite-react";
import React from "react";

const OurProcessCard = ({ processData }) => {
  const { name, img, description, badge } = processData;
  return (
    <div className=" w-64 flex flex-col text-center items-center py-5">
      <div className="relative w-28 h-28 bg-red-600 flex flex-col justify-center items-center rounded-full">
        <div className="absolute rounded-full left-0 top-0">
          <Badge
            color="purple"
            size="md"
          >
            {badge}
          </Badge>
        </div>
        <img src={img} alt="search" className="w-16 h-16 " />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default OurProcessCard;
