import React from "react";

const BannerCategory = ({category}) => {
  return (
    <div
      className="flex flex-col justify-center items-center"
    >
      <div>
        <img
          // className="mask w-24 h-24"
          className="mask mask-circle w-28 h-24"
          src={category.img}
          alt=""
        />
      </div>
      <div>
        <h5 className="text-red-600 font-medium mt-1 mb-2">{category.name}</h5>
      </div>
    </div>
  );
};

export default BannerCategory;
