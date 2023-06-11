import React from "react";
import banner from "../../assets/gmd_banner.png";
import arrowR from "../../assets/arrowR.svg";

function Hero() {
  return (
    <div className="w-full">
      <div className="bg-blue-gradient overflow-hidden ">
        <div className="max-w-7xl mx-auto px-16">

        <div className="bg-blue-gradient flex justify-between ">
          <div className="flex flex-col justify-end pb-10 gap-10">
            <h1 className="font-bold text-[40px]">Gerakan Mengajar Desa</h1>
            <h2 className="font-semibold text-[24px]">
              The Youth Collaboration Project
              <br />
              For Better Education
            </h2>
            <h3 className="font-light text-base">
              <i>“Pintar Desanya, Maju Negaranya”</i>
            </h3>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row gap-2">
                <input
                  type="email"
                  className="p-[10px] rounded-[10px] w-[344px] text-black"
                  placeholder="Tuliskan Emailmu"
                  />
                <div className="bg-secondary p-[10px] rounded-[10px] w-[71px] flex justify-center items-center cursor-pointer">
                  <img src={arrowR} />
                </div>
              </div>
              <p className="font-light text-[10px]">
                <i>
                  Lebih dari 8300 orang telah bergabung, jangan sampai
                  tertinggal
                </i>
              </p>
            </div>
          </div>
          <div className="h-[650px] w-[685px]">
            <img
              src={banner}
              alt="banner"
              className="h-full w-full object-cover"
              />
          </div>
              </div>
        </div>
      </div>
      <div className="text-center text-black  w-full p-10 ">
        <h2 className="font-light text-[24px] italic">
          “Kami percaya anak muda selalu memiliki peran yang besar untuk
          kemajuan bangsa”
        </h2>
        <h2 className="font-semibold text-[24px]">
          <i>-Gerakan Mengajar Desa</i>
        </h2>
      </div>
    </div>
  );
}

export default Hero;
