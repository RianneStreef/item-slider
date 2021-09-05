import React from "react";

import Slider, { SliderItem } from "../components/Slider";

import items from "../content/items";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import img1 from "../images/item1.png";

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
              <img className="item-img" src={img1} />
              {/* <GatsbyImage
                image={image1}
                // alt={item.imgDescription}
              /> */}
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
