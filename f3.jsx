import React from "react";
import "./App.css";
import s3_image from "./assets/s3-image.jpg";
import pointer from "./assets/pointer.svg";

export default function Feature3() {
  return (
    <div className="f3">
      <div className="feature-info">
        <h2>Innovate With Speed</h2>
        <div className="image-holder-phone">
          <img src={s3_image} className="feature-image" alt="service-image" />
        </div>
        <div className="feature-details">
          <h3>
            Create higher quality software, deliver on customer expectations and
            business goals
          </h3>
        </div>
        <div className="feature-link">
          <p>DevOps</p>
          <img src={pointer} className="pointer" alt="arrow" />
        </div>
      </div>
      <div className="outer-image-holder">
        <div className="image-holder-pc">
          <img src={s3_image} className="feature-image" alt="service-image" />
        </div>
      </div>
    </div>
  );
}