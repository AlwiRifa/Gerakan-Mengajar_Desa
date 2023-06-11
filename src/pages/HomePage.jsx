import React from "react";
import {
  AiOutlineHome,
  AiOutlineTeam,
  AiOutlineUser,
  AiOutlineShop,
  AiOutlineDatabase,
  AiOutlineDollar,
  AiOutlineMenu,
  AiFillBell,
} from "react-icons/ai";
import { MdOutlineViewKanban } from "react-icons/md";
import logo2 from "../assets/gmd-logo-blue.png";
import dashBanner from "../assets/Group 17 (1).png";

function HomePage() {
  const sidebarData = [
    {
      icon: <AiOutlineHome className="w-6 h-6" />,
      heading: "Home",
    },
    {
      icon: <AiOutlineTeam className="w-6 h-6" />,
      heading: "My Team",
    },
    {
      icon: <MdOutlineViewKanban className="w-6 h-6" />,
      heading: "Activity",
    },
    {
      icon: <AiOutlineShop className="w-6 h-6" />,
      heading: "Merchandise",
    },
    {
      icon: <AiOutlineDollar className="w-6 h-6" />,
      heading: "Commitment Fee",
    },
    {
      icon: <AiOutlineUser className="w-6 h-6" />,
      heading: "Profile",
    },
    {
      icon: <AiOutlineMenu className="w-6 h-6" />,
      heading: "Lainya",
    },
  ];

  return (
    <div className="h-screen mx-auto  border flex-row flex">
      <div className="max-w-xs flex flex-col justify-start gap-2 border h-full relative p-6 ">
        <div className="flex justify-center">
          <img src={logo2} alt="logo" className="w-[104px] h-[54.7px]" />
        </div>
        {sidebarData.map((item, index) => (
          <div
            key={index}
            className="flex flex-row items-center p-4 space-x-4 text-primary font-medium hover:bg-primary hover:text-white cursor-pointer rounded-3xl px-8 w-[350px]"
          >
            {item.icon}
            <span>{item.heading}</span>
          </div>
        ))}
        <div className="flex justify-center">
          <p className="absolute bottom-0 text-center text-xs p-2">
            © 2023 <span className="font-semibold">Gerakan Mengajar Desa</span>
            <br />
            All rights reserved
          </p>
        </div>
      </div>
      <div className="w-full h-full bg-primary ">
        <div className="flex justify-between px-16 py-6  ">
          <div className="flex flex-row gap-20 items-center">
            <span className="text-base font-bold text-white">Tentang Kami</span>
            <span className="text-base font-bold text-white">Program</span>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <AiFillBell className="w-6 h-6 text-neutral" />
            <div className="px-4 py-2 bg-neutral rounded-md flex flex-row gap-2">
              <div className=" w-6 h-6 overflow-hidden rounded-full border-2 border-primary text-primary bg-neutral flex justify-center">
                <AiOutlineUser className="h-6 w-6" />
              </div>
              <span className="font-semibold text-base">
                Rocky Ardian Stanlee
              </span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col justify-start px-16  gap-10 ">
          <div className="flex justify-between items-center border-b-4 border-white max-h-80">
            <div className="flex flex-1">
              <h1 className="text-6xl font-bold text-white leading-normal">
                Tutor <br /> Inspiratif
              </h1>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={dashBanner} alt="logo" />
            </div>
          </div>

          <div className="flex flex-row justify-between gap-10 ">
            <div className="bg-white rounded-2xl h-[228px] p-6  w-full flex flex-col gap-4">
              <h2 className="font-bold text-3xl">My Team</h2>
              <p className="italic">Kamu belum memiliki tim pengabdian</p>
              <div className="flex flex-col">
                <span className="font-bold">Progres</span>
                <div className="border-2 p-1 w-full rounded-full border-primary"></div>
                <div className="flex justify-end pt-1">
                  <span>0%</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl h-[228px] p-6  w-full flex flex-col gap-4">
              <h2 className="font-bold text-3xl">Activity</h2>
              <p className="italic">
                Kamu pengangguran, tambahkan aktivitas hingga 100%
              </p>
              <div className="flex flex-col">
                <span className="font-bold">Progres</span>
                <div className="border-2 p-1 w-full rounded-full border-primary"></div>
                <div className="flex justify-end pt-1">
                  <span>0%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-secondary px-4 py-2 rounded-2xl w-[300px] flex justify-center items-center cursor-pointer hover:bg-accent hover:text-white transition duration-200">
            <span className="text-lg font-bold">
              Daftar Pengabdian sekarang
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
