import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="sticky bottom">
        <div className="bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-center items-start p-20">
          <div className="p-5 ">
            <ul>
              <p className="text-red-800 font-bold text-3xl pb-6">
                Le<span className="text-blue-600"> clan</span>
              </p>
              <div className="flex gap-6 pb-5">
                <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600 text-blue-600" />
                <FaYoutube className="text-2xl cursor-pointer hover:text-red-600 text-black" />
              </div>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Product</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Futures & Options
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Mutual Funds
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Fixed deposits
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Company</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                About
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Products
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Pricing
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Careers
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Press & Media
              </li>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">Support</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Contact
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Videos
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
          <h1 className=" text-gray-800 font-semibold">
            © 2023-2024 All rights reserved | Build with ❤ by{" "}
            <span className="hover:text-blue-600 font-semibold cursor-pointer">
              the Leader of the Le clan{" "}
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
