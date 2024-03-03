import React from "react";
import "./App.css";
import s1_image from "./assets/s2-image.png";
import pointer from "./assets/pointer.svg";

export default function Feature2() {
  return (
    <div className="f2">
      <div className="feature-info">
        <h2>Make Bolder Choices</h2>
        <div className="image-holder-phone">
          <img src={s1_image} className="feature-image" alt="service-image" />
        </div>
        <div className="feature-details">
          <h3>Digital focused strategies to realize market-changing ideas</h3>
        </div>
        <div className="feature-link">
          <p>Build Better Apps</p>
          <img src={pointer} className="pointer" alt="arrow" />
        </div>
      </div>
      <div className="outer-image-holder">
        <div className="image-holder-pc">
          <img src={s1_image} className="feature-image" alt="service-image" />
        </div>
      </div>
    </div>
  );
}