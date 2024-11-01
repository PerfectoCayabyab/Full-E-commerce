import React from "react";
import { assets } from "../assets/assets";

const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      {/* <img className="w-[max(10%,80px)]" src={assets.logo} alt="" /> */}
      <div className="flex gap-1 items-center border cursor-pointer">
        <div className="bg-black py-2 px-4">
          <h1 className="text-white font-medium">Latest</h1>
        </div>
        <div className="py-1 px-3">
          <h1 className="font-medium">Fashion</h1>
        </div>
      </div>
      <button
        onClick={() => setToken("")}
        className="bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
