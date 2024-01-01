import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
const Service = () => {
  return (
    <div className="service">
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showThumbs={false}
        interval={2000}
        showStatus={false}
      >
        <div>
          <img src={img1} alt="Item1" />
          <p className="legend">Full-Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item2" />
          <p className="legend">Peer-to-Peer support</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Service;
