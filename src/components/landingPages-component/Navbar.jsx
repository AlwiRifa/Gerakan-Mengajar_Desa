import React from "react";
import logo from "../../assets/gmd_logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar fixed w-full top-0 flex justify-center z-20">
      <div className="w-full max-w-7xl mx-auto  py-5 px-16 flex items-start justify-between xl:items-center ">
        <div className="flex flex-row gap-20 items-center">
          <img src={logo} alt="logo" className="w-[105px] h-[53px]" />
          <span className="text-base font-bold text-white">Tentang Kami</span>
          <span className="text-base font-bold text-white">Program</span>
        </div>
        <div className="flex flex-row gap-6 items-center">
          <Link to={'/login'} className="text-base font-bold text-white border w-[105px] h-[42px] flex items-center justify-center rounded-[10px] hover:bg-secondary hover:text-black hover:border-hidden">
            Login
          </Link>
          <Link to={'/signUp'} className="text-base font-bold bg-white text-black border w-[105px] h-[42px] flex items-center justify-center rounded-[10px] hover:bg-accent hover:text-white hover:border-hidden">
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
