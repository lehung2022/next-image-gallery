import React from "react";
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa6";

function Footer() {
  const currentYear = new Date().getFullYear(); // Get the current year
  const startYear = 2023; // Starting year (you can change this as needed)
  const yearRange =
    startYear === currentYear
      ? `${currentYear}`
      : `${startYear}-${currentYear}`;
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
                <a
                  href="https://www.facebook.com/profile.php?id=61560868992749"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaFacebook className="text-2xl cursor-pointer hover:text-yellow-600 text-blue-600" />
                </a>
                <a
                  href="https://www.youtube.com/@hunggamerofficial3252"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube className="text-2xl cursor-pointer hover:text-red-600 text-black" />
                </a>
                <a
                  href="https://x.com/lngm1916"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="text-2xl cursor-pointer hover:text-red-600 text-black" />
                </a>
              </div>
            </ul>
          </div>
          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">
                Explore History
              </p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Upcoming Releases (Books, documentaries)
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Historical Articles & Resources
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Key Historical Events
              </li>
            </ul>
          </div>

          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">About Us</p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Our Mission
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Team Members
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Press Coverage
              </li>
            </ul>
          </div>

          <div className="p-5">
            <ul>
              <p className="text-gray-800 font-bold text-2xl pb-4">
                Get Involved
              </p>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Contact Us
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Join Our Team
              </li>
              <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
                Historical Media (Videos)
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
          <h1 className=" text-gray-800 font-semibold">
            © {yearRange} All rights reserved | Build with{" "}
            <span className="text-red-600">❤</span> by{" "}
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
