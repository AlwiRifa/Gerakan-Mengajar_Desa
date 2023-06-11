import React from "react";
import arrowB from "../../assets/arrowB.svg";
import indoMap from "../../assets/IndoMap.png";
import userIcon from "../../assets/icon/profile2user.svg";
import bookIcon from "../../assets/icon/book1.svg";
import gpsIcon from "../../assets/icon/gps.svg";
import instagramIcon from "../../assets/icon/instagram.svg";
import locationIcon from "../../assets/icon/locationtick.svg";
import cupIcon from "../../assets/icon/cup.svg";

function OurScope() {
  return (
    <div
      className="h-screen max-w-7xl mx-auto flex justify-center items-center relative text-black"
      id="ourScope"
    >
      <h1 className="font-bold text-[40px] absolute top-0 mt-32">OurScope</h1>

      <div className=" bg-elips2 w-full h-[700px] flex flex-col justify-center items-center gap-y-4 mt-32 ">
        {/* row1 */}
        <div className="flex flex-row space-x-64">
          {/* icon1 */}
          <div className="flex space-x-4">
            <div className="flex-col ">
              <div className="flex justify-end">
                <h1 className="font-bold lg:text-4xl text-xl ">8300+</h1>
              </div>
              <p className="font-base lg:text-base text-xs text-end">
                Tutor Inspiratif Spread Across Nation
              </p>
            </div>
            <img
              src={userIcon}
              alt="icon1"
              className="w-14 h-14 p-2 bg-secondary rounded-full"
            />
          </div>
          {/* icon2 */}
          <div className="flex space-x-4">
            <img
              src={bookIcon}
              alt="icon1"
              className="w-14 h-14 p-2 bg-secondary rounded-full"
            />
            <div className="flex-col ">
              <div className="flex">
                <h1 className="font-bold lg:text-4xl text-xl">500+</h1>
              </div>
              <p className="font-base text-xs lg:text-base">
                University/Institute,High School
              </p>
            </div>
          </div>
        </div>

        {/* row2 */}
        <div className="flex flex-row justify-around items-center space-x-12">
          {/* icon3 */}
          <div className="flex space-x-4">
            <div className="flex-col">
              <div className="flex justify-end">
                <img
                  src={gpsIcon}
                  alt="icon1"
                  className="w-14 h-14 p-2 bg-secondary rounded-full"
                />
              </div>
              <div className="flex justify-end">
                <h1 className="font-bold  text-lg lg:text-4xl text-end">
                  144 Regions
                </h1>
              </div>
              <div className="flex justify-end">
                <p className="text-end font-base lg:text-base text-xs">
                  Spread in Almost 30 <br />
                  Province in Indonesia
                </p>
              </div>
            </div>
          </div>

          <img src={indoMap} alt="indo map" className="w-[598px] h-[239px]" />

          {/* icon4 */}
          <div className="flex space-x-4">
            <div className="flex-col">
              <div className="flex">
                <img
                  src={instagramIcon}
                  alt="icon1"
                  className="w-14 h-14 p-2 bg-secondary rounded-full"
                />
              </div>
              <div className="flex ">
                <h1 className="font-bold text-lg lg:text-4xl">34K+</h1>
              </div>
              <div className="flex justify-end">
                <p className=" font-base lg:text-base text-xs">
                  Followers On Instagram
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* row3 */}
        <div className="flex flex-row space-x-64">
          <div className="flex space-x-4 ">
            <div className="flex-col ">
              <div className="flex justify-end">
                <h1 className="font-bold lg:text-4xl text-lg">XX+</h1>
              </div>

              <p className="font-base text-end lg:text-base text-xs">
                Daerah yang sudah ditelusuri
              </p>
            </div>
            <img
              src={locationIcon}
              alt="icon1"
              className="w-14 h-14 p-2 bg-secondary rounded-full"
            />
          </div>
          <div className="flex space-x-4 ">
            <img
              src={cupIcon}
              alt="icon1"
              className="w-14 h-14 p-2 bg-secondary rounded-full"
            />
            <div className="flex-col">
              <div className="flex justify-end">
                <h1 className="font-bold lg:text-4xl text-lg">Awardee</h1>
              </div>
              <p className="font-base lg:text-base text-xs">lorem</p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#ourActivity"
        className="absolute bottom-0 m-10 p-2 hover:bg-neutral-100 rounded-full cursor-pointer trasition"
      >
        <img src={arrowB} alt="arrowB" />
      </a>
    </div>
  );
}

export default OurScope;
