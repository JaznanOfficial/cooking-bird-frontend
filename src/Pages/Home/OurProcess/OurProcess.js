import React from "react";
import OurProcessCard from "./OurProcessCard";

const OurProcess = () => {
  const allProcessData = [
    {
      _id: 1,
      name: "Search",
      img: "https://i.ibb.co/dr3Dj6V/download.png",
      description:"Searching  is pretty easy. Just type what you're interested in finding into the search box on the web site! If you're using a toolbar, as you type, you may see words begin to appear below the toolbar's search box.",
      badge:"1"
    },
    {
      _id: 2,
      name: "Select",
      img: "https://i.ibb.co/Wn8y7sx/download-1.png",
      description:"Choosing an item,finally choosing for pick-up or delivery.Place a pre-order on website or restaurant app then select desired type of online ordering (pickup,table reservation,order ahead).",
      badge:"2"
    },
    {
      _id: 3,
      name: "Order",
      img: "https://i.ibb.co/Yy81p3J/download-2.png",
      description:"Make your Order and chooses the time they want to their pre-order to be ready And selects a payment method.Choose your location.Order Delivery Confirmation",
      badge:"3"
    },
    {
      _id: 4,
      name: "Enjoy",
      img: "https://i.ibb.co/wCnSxxQ/download-3.png",
      description:"Customers easily ask questions about orders.The Order is Delivery to the Customer. Receive your order and enjoy the meal.And Get 10% instant off for all order.",
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
