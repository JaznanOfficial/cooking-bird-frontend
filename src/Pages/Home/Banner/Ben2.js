import { Carousel } from "flowbite-react";
import React from "react";

const Ben2 = () => {
  return (
    <div>
    <div className="w-80 h-56 sm:h-64 xl:h-80 2xl:h-96">
    <Carousel>
      <img
        className="w-80 h-80"
        src="https://static.toiimg.com/photo/msid-87930581/87930581.jpg?211826"
        alt="..."
      />
      <img
        className="w-80 h-80"
        src="https://templates.hibootstrap.com/restant/default/assets/img/home-one/collection/1.jpg"
        alt="..."
      />
      <img
        className="w-80 h-80"
        src="https://i.pinimg.com/originals/24/ac/bb/24acbb7530fb22151d3f3f1581fb947d.png"
        alt="..."
      />
    </Carousel>
  </div>

    </div>
  );
};

export default Ben2;
