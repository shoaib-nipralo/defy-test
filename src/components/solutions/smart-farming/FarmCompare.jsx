import React from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  ReactCompareSliderHandle,
} from "react-compare-slider";
import Image from "next/image";

const FarmCompare = () => {
  return (
    <div className="w-full">
      <ReactCompareSlider
        itemOne={
          <ReactCompareSliderImage
            src="/images/solutions/farm1.png"
            alt="Before Analysis"
          />
        } // Update with actual before image
        itemTwo={
          <ReactCompareSliderImage
            src="/images/solutions/farm2.png"
            alt="After Analysis"
          />
        } // Update with actual after image
        handle={
          <Image
            src="/images/solutions/Slider.png"
            alt="Slide"
            width={100}
            height={100}
            className="w-auto max-h-full min-h-full min-w-fit"
          />
        }
        position={25} // Set default slider position
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default FarmCompare;
