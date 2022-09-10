import React, { useEffect, useState } from "react";
import BannerCategory from "./BannerCategory";

const BannerCategories = () => {
    const categoriesAll = [
    {
      _id: 1,
      name: "Bangladeshi",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDQRVsvgsM6izhvzc0_veBbQ6vYDgg9JbOJg&usqp=CAU"
    },
    {
      _id: 2,
      name: "Dessert",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOHRQcnL-vKWYwazdFXarSk3jpF_U75jm-A&usqp=CAU"
    },
    {
      _id: 3,
      name: "Fast Food",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRmYX4OqLGoOrbQXe2XFcDAbNphmu7dgkdQ&usqp=CAU"
    },
    {
      _id: 4,
      name: "Korean",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzlb6MbnJMxp-8jEmYvkGoB7uRO4MjnCpbfA&usqp=CAU"
    },
    {
      _id: 5,
      name: "Special Arabic",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpkyi5iS-hDNLxOK5pqoniFBHwZW6Q7_uuQQ&usqp=CAU"
    },
    {
      _id: 6,
      name: "Beef",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3v9Iaf-zVq2nvbRAgwiwGhanXqjCbKOXFQA&usqp=CAU"
    },
    {
      _id: 7,
      name: "Chickens",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsbl-mlPrKQnvtnnfp4aLx2_9RxIkZa6BAw&usqp=CAU"
    },
    {
      _id: 8,
      name: "Chinese",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiatXOzqHvcUk_lHWhzLoFZYlcpYOKnpo-w&usqp=CAU"
    },
  ]; 

/* const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("./menuData.json")
      .then((res) => res.json())

      .then((data) => console.log(data));
  }, []); */
  
  return (
    <div>
      <div className="py-3">
        <div className="flex flex-wrap justify-center items-center gap-3">
          {categoriesAll?.map((category) => (
            <BannerCategory
              key={category._id}
              category={category}
            ></BannerCategory>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerCategories;
