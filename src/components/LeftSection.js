import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import Group2 from '../assets/Group2.png'
import Group from "../assets/Group.png";
import HeroSlider from 'hero-slider/dist/HeroSlider';
import { Slide } from 'hero-slider';

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
      <AliceCarousel
        
      >
        
          <img src={Group} className="sliderimg bg-no-repeat" />
      
      
          <img src={Group} className="sliderimg bg-no-repeat" />
      
      </AliceCarousel>
    </div>
  );
}

export default LeftSection