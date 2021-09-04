import React, { useState } from "react";
import "../styles/slider.css";

export const SliderItem = ({ children, width }) => {
  return (
    <div className="slider-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    setActiveIndex(newIndex);
  };

  return (
    <div className="slider">
      <div
        className="inner"
        style={{ transform: `translateX(-${activeIndex * 50}%)` }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: "50%" });
        })}
      </div>
      <div className="more-info">
        <button
          onClick={() => {
            updateIndex(1);
          }}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default Slider;
