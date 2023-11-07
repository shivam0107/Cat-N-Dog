import React, { useState } from "react";
import FB from "../assets/FB.png";
import linkedin from "../assets/linkedin.png";
import Twitter from "../assets/Twitter.png";
import ReactModal from "react-modal";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import App from "../App";

const Contact = ({clickState , setClickState}) => {

    const navigate = useNavigate();
    

  return (
    <div className="relative align-left top-[-50%] mx-auto gap-2 flex flex-col  items-center z-30 w-[450px] h-[400px] rounded-md bg-[#7f746f]  ">
      <button className="absolute z-30 right-3 ">X</button>
      <p className="text-[42px] text-[#495057]">Contact</p>
      <p className="text-[#ADB5BD] text-[12px]">
        Lorem Ipsum is simply dummy text of the printing
      </p>
      <div>
        <form>
          <input
            className=" border-[2px] rounded-md px-2 py-2 "
            type="text"
            placeholder="Name"
            name="Name"
          />
          <br />
          <br />
          <input
            className=" border-[2px] rounded-md px-2 py-2 "
            type="text"
            placeholder="Message"
            name="Message"
          />

          <br />
          <br />
          <input
            className=" border-[2px] rounded-md px-2 py-2 "
            type="email"
            placeholder="Enter your email"
            name="email"
          />
        </form>
      </div>

      <div className="right-2">
        <button onClick={navigate(-1)} className="px-3 py-3 bg-black text-white rounded-md">SUBMIT</button>
      </div>
      <div className="flex">
        <p>Need more info? hello@newzera.com</p>
        <div className="flex gap-2">
          <img src={FB} alt="" className=" w-10.5px h-10.5px " />
          <img src={linkedin} alt="" />
          <img src={Twitter} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
