import React from "react";
import ygsp from "../../assets/ygsp.png";
import upi from "../../assets/upi.png";
import umn from "../../assets/umn.png";
import shopee from "../../assets/shopee.png";
import gojek from "../../assets/gojek.png";
import mandiri from "../../assets/mandiri.png";
import mbkm from "../../assets/mbkm.png";
import logo2 from "../../assets/gmd-logo-blue.png";
import { Link } from "react-router-dom";

function OurPartnership() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col justify-center items-center relative px-16 gap-y-10 text-black">
      <h1 className="font-bold text-[40px] mt-32 mb-10">Our Partnership</h1>
      <div className="flex flex-row gap-10 ">
        <img src={logo2} alt="logo2" />
        <img src={logo2} alt="logo2" />
        <img src={logo2} alt="logo2" />
        <img src={logo2} alt="logo2" />
      </div>
      <div className="flex flex-row gap-10 ">
        <img src={ygsp} alt="logo2" />
        <img src={ygsp} alt="logo2" />
        <img src={ygsp} alt="logo2" />
      </div>
      <div className="flex flex-row gap-20 items-center ">
        <img src={shopee} alt="logo2" className="w-full h-full" />
        <img src={gojek} alt="logo2" className="w-full h-full" />
        <img src={mandiri} alt="logo2" className="w-full h-full" />
        <img src={umn} alt="logo2" className="w-full h-full" />
        <img src={upi} alt="upi" className="w-full h-full" />
        <img src={mbkm} alt="mbkm" className="w-full h-full" />
      </div>

      <div className="w-full bg-primary shadow-md gap-10 flex flex-col text-white items-center justify-center py-10 my-10 z-10">
            <h3 className="font-bold text-xl">What do you waiting for?</h3>
            <h3 className="text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              rhoncus odio urna.
            </h3>
            <Link
              to={"/signUp"}
              className="border-4 bg-secondary text-black px-12 py-4 rounded-[10px] font-bold text-2xl"
            >
              Join Us
            </Link>
          </div>
    </div>
  );
}

export default OurPartnership;
