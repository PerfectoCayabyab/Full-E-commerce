import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          {/* <img src={assets.logo} className='mb-5 w-32' alt="" /> */}
          <div className="flex gap-1 items-center border w-fit cursor-pointer">
            <div className="bg-black py-2 px-4">
              <h1 className="text-white font-medium">Latest</h1>
            </div>
            <div className="py-1 px-3">
              <h1 className="font-medium">Fashion</h1>
            </div>
          </div>
          <p className="w-full md:w-2/3 text-gray-600 mt-2">
            Follow us on social media to stay updated on the latest trends,
            exclusive offers, and style inspiration.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>perfectocayabyab@gmail.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ Perfecto Cayabyab - All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
