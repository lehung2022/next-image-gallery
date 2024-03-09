import React from "react";
import Image from "next/image";
import Navbar from "./Navbar";

export default function Content() {
  return (
    <>
      <div className="h-20"></div>
      <div className="h-96 w-full text-gray-100 bg-red-900 relative">
        <Image
          src="/img/Drawing_the_sword.jpg"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={true}
          fill
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
          alt="Picture of the first character"
        />
      </div>
    </>
  );
}
