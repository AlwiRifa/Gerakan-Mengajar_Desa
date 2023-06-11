import React from "react";
import shafa from "../../assets/Shafa.png";
import arrowB from '../../assets/arrowB.svg';

function WhatAreWe() {
  return (
    <div className="h-screen max-w-7xl mx-auto px-16 flex justify-center items-center relative text-black" id="whatAreWe">
      <div className="flex justify-between items-center space-x-20">
        <div className="flex flex-col gap-10 ">
          <h1 className="font-bold text-[40px]">What Are We?</h1>
          <p className="font-normal text-xl leading-6">
            Gerakan Mengajar Desa adalah gerakan pendidikan yang berada dibawah
            naungan Yayasan Generasi Sahabat Pendidikan. Diinisiasi atas dasar
            kepedulian terhadap pendidikan di Indonesia.
          </p>
          <p className="font-normal text-xl leading-6">
            Gerakan Mengajar Desa tumbuh menjadi salah satu gerakan pendidikan
            terbesar di Indonesia dengan lebih dari 8.300+ Tutor Inspiratif dari
            144 Kabupaten/Kota dan 30 Provinsi. Kami percaya, dengan
            berkolaborasi Indonesia akan semakin maju dan juara!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img src={shafa} alt="shafa" />
          <div className="border-[3px] rounded-full w-[432px] border-primary"></div>
        </div>
      </div>
      <a href="#ourScope" className="absolute bottom-0 m-10 p-2 hover:bg-neutral-100 rounded-full cursor-pointer transition">
       <img src={arrowB} alt="arrowB" />
      </a>
    </div>
  );
}

export default WhatAreWe;
