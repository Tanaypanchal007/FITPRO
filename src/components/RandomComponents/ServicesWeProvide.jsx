// import React from "react";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { CiDeliveryTruck } from "react-icons/ci";
import { IoTimerOutline } from "react-icons/io5";

const ServicesWeProvide = () => {
  return (
    <div className="py-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
      <div className="flex flex-col gap-1 justify-center items-center bg-gray-200 py-4 rounded">
        <VscWorkspaceTrusted className="text-2xl" />
        <h1 className="text-sm ">100% Original</h1>
        <p className="text-xs">Product</p>
      </div>
      <div className="flex flex-col gap-1  justify-center items-center bg-gray-200 py-4 rounded">
        <CiDeliveryTruck className="text-2xl" />
        <h1 className="text-sm ">Free Shipping</h1>
        <p className="text-xs">On above $999</p>
      </div>
      <div className="flex flex-col gap-1  justify-center items-center bg-gray-200 py-4 rounded">
        <IoTimerOutline className="text-2xl" />
        <h1 className="text-sm ">Easy Return</h1>
        <p className="text-xs">14 days policy</p>
      </div>
      <div className="flex flex-col gap-1  justify-center items-center bg-gray-200 py-4 rounded">
        <IoTimerOutline className="text-2xl" />
        <h1 className="text-sm ">Easy Return</h1>
        <p className="text-xs">14 days policy</p>
      </div>
    </div>
  );
};

export default ServicesWeProvide;
