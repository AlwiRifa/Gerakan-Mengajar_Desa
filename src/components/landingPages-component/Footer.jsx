import React from "react";
import logo2 from "../../assets/gmd-logo-blue.png";

function Footer() {
  return (
    <div className="h-screen text-black relative " id="ourActivity">
      <div className="flex justify-between w-full max-w-7xl mx-auto pt-32 px-16">
        <div className="flex flex-col">
          <img src={logo2} className="w-[209px] h-[105px] -translate-y-3" />
          <p className="font-bold text-base">
            Yayasan Generasi Sahabat Pendidikan
          </p>
          <p className="font-base text-base">
            Pesona Cianjur Indah
            <br />
            Kec. Cianjur, Kabupaten Cianjur
            <br />
            Jawa Barat 43212
          </p>
        </div>
        <div className="flex flex-row  gap-20 ">
          <div className=" flex-col  space-y-10 ">
            <h1 className="font-bold text-[28px] h-[72px]">
              Pintar Desanya <br /> Maju Negaranya
            </h1>
            <div className="space-y-5 text-[20px]">
              <p>Program</p>
              <p>Pengabdian</p>
              <p>Training of Trainer</p>
              <p>Creative Lab</p>
              <p>Tentang Kami</p>
              <p>Partnership</p>
            </div>
          </div>

          <div className="flex-col space-y-10">
            <h1 className="font-bold text-[28px]  h-[72px]">
              Tutor <br /> Inspiratif
            </h1>
            <div className="space-y-5 text-xl text-[20px]">
              <p>Daftar Tutor Inspiratif</p>
              <p>Daftar Pengabdian</p>
              <p>FAQ</p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute w-full bottom-0 flex justify-center">
        <div className="max-w-7xl mx-auto w-full px-16">
          <div className="border-t-2 py-6 border-black flex justify-between">
            <p>
              © 2023 <span className="font-bold">Gerakan Mengajar Desa</span>
              <span className="px-1"> | </span>All rights reserved
            </p>
            <div className="flex space-x-5">
              <p>Terms</p>
              <p>Policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
