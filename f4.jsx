import React from "react";
import "./App.css";
import s4_image from "./assets/s4-image.jpg";
import pointer from "./assets/pointer.svg";

export default function Feature4() {
  return (
    <div className="f4">
      <div className="feature-info">
        <h2>Embrace Cloud</h2>
        <div className="image-holder-phone">
          <img
            src={s4_image}
            className="feature-image-ns"
            alt="service-image"
          />
        </div>
        <div className="feature-details">
          <h3>
            With Cloud-First accelerate innovation and optimize performance
          </h3>
        </div>
        <div className="feature-link">
          <p>Cloud Services</p>
          <img src={pointer} className="pointer" alt="arrow" />
        </div>
      </div>
      <div className="outer-image-holder">
        <div className="image-holder-pc">
          <img
            src={s4_image}
            className="feature-image-ns"
            alt="service-image"
          />
        </div>
      </div>
    </div>
  );
}