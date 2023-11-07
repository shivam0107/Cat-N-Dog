import React from 'react'
import AppStore from '../assets/AppStore.png'
import AppStore2x from "../assets/AppStore.png";
import google from '../assets/google.png'

 import './RightSection.css'

const RightSection = () => {
  return (
    <div className="w-[740px] mx-auto  ">
      <div className="mt-[300px] w-[571px] flex flex-col gap-8 align-left">
        <div className='space-y-2'>
          <p className=" text-[42px]  title ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className=" text-[16px] text-[#6D6D6D] title ">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <div className="flex ">
            <img src={AppStore2x} className=" w-[160px] mt-3 h-[53px]" />
            <img src={google} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSection