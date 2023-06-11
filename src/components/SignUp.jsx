import React from "react";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import Footer from "./landingPages-component/Footer";

function SignUp() {
  return (
    <div className="h-screen max-w-7xl mx-auto flex justify-center items-center">
      <div className="px-16 py-10 rounded-2xl max-w-xl w-full border border-neutral-100 shadow-md space-y-12 relative">
        <Link
          to={"/"}
          className="absolute m-4 top-0 right-0 hover:bg-neutral-100 rounded-full p-4 cursor-pointer transition"
        >
          <MdClose className="w-6 h-6" />
        </Link>
        <h1 className="text-2xl font-bold text-center">
          Daftar Tutor Inspiratif
        </h1>
        <form className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <span className="font-bold ">Nama Lengkap</span>
            <input
              type="text"
              placeholder="Nama Lengkap"
              className="px-4 py-1 rounded-md border border-gray-300 hover:border-primary "
            />
            <span className="font-light text-gray-300 ">
              Masukan Nama Asli Anda
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold ">Alamat Email</span>
            <input
              type="text"
              placeholder="Alamat Email"
              className="px-4 py-1 rounded-md border border-gray-300 hover:border-primary"
            />
            <span className="text-gray-300 ">Masukan Email Aktif Anda</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-bold ">Masukan Password Baru</span>
            <input
              type="text"
              placeholder="Masukan Password Baru"
              className="px-4 py-1 rounded-md border border-gray-300 hover:border-primary"
            />
            <span className="text-gray-300 ">
              Gunakan minimal 8 karakter kombinasi huruf dan angka
            </span>
          </div>
          <button className="font-semibold text-lg py-1 bg-primary w-full rounded-md text-white hover:bg-secondary hover:text-black">
            Daftar
          </button>
          <div className="flex flex-row items-center space-x-2 my-2">
            <div className="border-b border-gray-400 w-full" />
            <span className="text-gray-500">Atau</span>
            <div className="border-b border-gray-400 w-full" />
          </div>
          <div>
            <button className="w-full py-2  text-center border border-neutral-100 shadow-md rounded-md hover:bg-accent hover:text-white flex items-center justify-center">
              {" "}
              <FcGoogle className="w-6 h-6 mx-2" />
              Daftar dengan google
            </button>
          </div>
        </form>
        <p className=" text-center ">
          Sudah punya akun?{" "}
          <Link to={"/login"} className="font-semibold underline ml-1 ">
            Masuk Sekarang
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
