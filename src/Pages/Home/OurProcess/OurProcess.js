import React from "react";
import OurProcessCard from "./OurProcessCard";

const OurProcess = () => {
  const ourProcessAll = [
    {
      _id: 1,
      name: "Search",
      img: "https://i.ibb.co/dr3Dj6V/download.png",
      description:"Lorem ipsum dlor sit amet, contur adcing elit. Aliuam laborum error aliquid ipsum impedit ullam.",
    },
    {
      _id: 2,
      name: "Select",
      img: "https://i.ibb.co/Wn8y7sx/download-1.png",
      description:"Lorem ipsum dlor sit amet, cotur adcing elit. Aliam laborum error aliquid ipsum impedit ullam.",
    },
    {
      _id: 3,
      name: "Order",
      img: "https://i.ibb.co/Yy81p3J/download-2.png",
      description:"Lorem ipsum dlor sit amet, cotur asing elit. Aluam laborum error aliquid ipsum impedit ullam.",
    },
    {
      _id: 4,
      name: "Enjoy",
      img: "https://i.ibb.co/wCnSxxQ/download-3.png",
      description:"Lorem ipsum dlor sit amet, cotur ading elit. Aquam laborum error aliquid ipsum impedit ulla.",
    },
  ];

  return (
    <div className="bg-gray-50 mb-10 py-20">
      <div className="py-10">
        <h1 className="text-red-600 text-1xl font-medium">OUR PROCESS</h1>
        <h1 className="text-black text-3xl font-medium">How Does It Work</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-3">
        {ourProcessAll.map((process) => (
          <OurProcessCard key={process._id} process={process}></OurProcessCard>
        ))}
      </div>
    </div>
  );
};

export default OurProcess;
