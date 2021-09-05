import React from "react";

import Slider, { SliderItem } from "../components/Slider";

import items from "../content/items";

const index = () => {
  const listItems = items.map((item) => {
    return (
      <div key={item.id}>
        <Slider>
          <SliderItem>
            <div>
              {item.name}
              {item.description}
            </div>
          </SliderItem>
          <SliderItem>
            <div className="middle-slide">
              image
              <img
                src={require(`../images/${item.image}`).default}
                alt={item.imgDescription}
                className="item-img"
              />
            </div>
          </SliderItem>
          <SliderItem>{item.details}</SliderItem>
        </Slider>
      </div>
    );
  });

  return <div>{listItems}</div>;
};

export default index;
