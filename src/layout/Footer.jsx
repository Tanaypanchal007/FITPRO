// import React from "react";
import { IoArrowForward } from "react-icons/io5";
import { FaInstagram, FaPinterest, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="bg-white px-5 grid grid-cols-1 lg:grid-cols-2 py-5">
        <div className="flex flex-col justify-between lg:ml-5">
          <div>
            <h1 className="font-orbitron font-bold">Stay In Touch</h1>
            <div className="flex items-center mt-2">
              <input
                type="text"
                className="border-2 border-black  outline-none py-2 px-1"
                placeholder="Enter Your EMail..."
              />
              <button className="bg-black text-white h-11 w-10 flex items-center justify-center text-xl cursor-pointer">
                <IoArrowForward />
              </button>
            </div>
          </div>
          <div className="flex gap-2 text-2xl lg:text-3xl">
            <FaInstagram />
            <FaXTwitter />
            <FaPinterest />
            <FaGoogle />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4">
          <div className="flex flex-col gap-">
            <h1 className="font-orbitron font-bold mb-3 text-xl">SPORTS</h1>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
          </div>
          <div className="flex flex-col gap-">
            <h1 className="font-orbitron font-bold mb-3 text-xl">SPORTS</h1>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
          </div>
          <div className="flex flex-col gap-">
            <h1 className="font-orbitron font-bold mb-3 text-xl">SPORTS</h1>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
          </div>
          <div className="flex flex-col gap-">
            <h1 className="font-orbitron font-bold mb-3 text-xl">SPORTS</h1>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
            <p className="text-lg font-montserrat font-normal">Cricket</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
