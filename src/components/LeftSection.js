import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Group2 from '../assets/Group2.png'
import Group from "../assets/Group.png";
import HeroSlider from 'hero-slider/dist/HeroSlider';

const LeftSection = () => {
  return (
    <div className="w-[720px] ">
      <div className="absolute z-20 w-[220px] space-y-3 mt-[501px] mx-auto ml-8 ">
        <p className="text-[#FDE3D9] text-xl ">Type Text</p>
        <p className="text-[#FFE8DF]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
          <HeroSlider className="relative"
          slidingAnimation="left_to_right"
          >
        <img src={Group} className="sliderimg bg-no-repeat" />
        <img src={Group} className="sliderimg bg-no-repeat" />
      </HeroSlider>
    </div>
  );
}

export default LeftSection