import React from "react";
import arrowB from '../../assets/arrowB.svg';

function OurActivity() {
  return (
    <div className="h-screen max-w-7xl mx-auto flex justify-center items-center relative text-black" id="ourActivity">
      <h1 className="font-bold text-[40px] absolute top-0 mt-32">Our Activity</h1>
      <a href="#whatTheySay" className="absolute bottom-0 m-10 p-2 hover:bg-neutral-100 rounded-full cursor-pointer">
       <img src={arrowB} alt="arrowB" />
      </a>
    </div>
  );
}

export default OurActivity;
