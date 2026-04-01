import React from "react";
import "../../style/AutoSlider.css";

const data = [
  "https://i.pinimg.com/736x/90/84/f2/9084f2c7f651854a927670c25c949a21.jpg",
  "https://images.unsplash.com/photo-1542838132-92c53300491e",
  "https://images.unsplash.com/photo-1501004318641-b39e6451bec6",
  "https://images.unsplash.com/photo-1471193945509-9ad0617afabf",
  "https://images.unsplash.com/photo-1512621776951-a57141f2eefd",
  "https://images.unsplash.com/photo-1506806732259-39c2d0268443",
];

export default function AutoSlider() {
  return (
    <div className="marquee-container">
      <div className="marquee">
        {[...data, ...data].map((img, i) => (
          <div className="card" key={i}>
            <img src={img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}