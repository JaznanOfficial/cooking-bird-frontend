import React from "react";
import OurProcessCard from "./OurProcessCard";

const OurProcess = () => {
  const allProcessData = [
    {
      _id: 1,
      name: "Search",
      img: "https://i.ibb.co/dr3Dj6V/download.png",
      description:"Lorem ipsum dlor sit amet, contur adcing elit. Aliam Lorem ipsum dlor si ipsum impedit ullam.",
      badge:"1"
    },
    {
      _id: 2,
      name: "Select",
      img: "https://i.ibb.co/Wn8y7sx/download-1.png",
      description:"Lorem ipsum dlor sit amet, cotur adcing elit. Aliam Lorem ipsum dlor si ipsum impedit ullam.",
      badge:"2"
    },
    {
      _id: 3,
      name: "Order",
      img: "https://i.ibb.co/Yy81p3J/download-2.png",
      description:"Lorem ipsum dlor sit amet, cotur asing elit. Aluam Lorem ipsum dlor si ipsum impedit ullam.",
      badge:"3"
    },
    {
      _id: 4,
      name: "Enjoy",
      img: "https://i.ibb.co/wCnSxxQ/download-3.png",
      description:"Lorem ipsum dlor sit amet, cotur ading elit. Aquam Lorem ipsum dlor si ipsum impedit ulla.",
      badge:"4"
    },
  ];

  return (
    <div className="bg-gray-50 mb-10 py-20">
      <div className="py-10">
        <h1 className="text-red-600 text-2xl  font-ubuntu">OUR PROCESS</h1>
        <h1 className="text-5xl font-bold font-ubuntu text-navy-900">How Does It Work</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {allProcessData?.map((processData) => (
          <OurProcessCard key={processData._id} processData={processData}></OurProcessCard>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
