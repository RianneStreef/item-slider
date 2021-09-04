import React from "react";
import { StaticImage } from "gatsby-plugin-image";

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
            <StaticImage src={item.image} alt={item.imgDescription} />
          </SliderItem>
          <SliderItem>{item.details}</SliderItem>
        </Slider>
      </div>
    );
  });

  return <div>{listItems}</div>;
};

export default index;
