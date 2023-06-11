import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { MdClose } from "react-icons/md";
import Footer from "./landingPages-component/Footer";

function Login() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="px-20 py-10 rounded-2xl max-w-xl w-full border border-neutral-100 shadow-md space-y-12 relative">
        <Link
          to={"/"}
          className="absolute m-4 top-0 right-0 hover:bg-neutral-100 rounded-full p-4 cursor-pointer transition"
        >
          <MdClose className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-center">
          Masuk Tutor Inspiratif
        </h1>
        <form className="flex flex-col gap-[10px]">
          <input
            type="text"
            placeholder="Masukan Email"
            className="px-4 py-1 rounded-md border border-gray-300 hover:border-primary"
          />
          <input
            type="text"
            placeholder="Masukan Password"
            className="px-4 py-1 rounded-md border border-gray-300 hover:border-primary"
          />
          <Link
            to={"/fPassword"}
            className="font-semibold text-md text-end hover:underline cursor-pointer transition py-3"
          >
            Lupa Password?
          </Link>
          <Link to={'/homePage'} className="text-center font-semibold text-lg py-1 bg-primary w-full rounded-md text-white hover:bg-secondary hover:text-black">
            Masuk
          </Link>
          <div className="flex flex-row items-center space-x-2 my-4">
            <div className="border-b border-gray-400 w-full" />
            <span className="text-gray-500">Atau</span>
            <div className="border-b border-gray-400 w-full" />
          </div>
          <div>
            <Link to={'/homePage'} className="w-full py-2 text-sm text-center border border-neutral-100 shadow-md rounded-md hover:bg-accent hover:text-white flex items-center justify-center">
              {" "}
              <FcGoogle className="w-6 h-6 mx-2" />
              Masuk dengan google
            </Link>
          </div>
        </form>
        <p className=" text-center">
          Belum punya akun?{" "}
          <Link to={"/signUp"} className="font-semibold underline ml-1">
            Daftar Sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
