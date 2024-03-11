"use client";
import React from "react";
import Image from "next/image";

const imageArray = [
  {
    id: 1,
    image: require("../../public/img/black_goku.jpg"),
    description: "Fight or die",
  },
  {
    id: 2,
    image: require("../../public/img/dinh_bo_linh.jpg"),
    description: "Fight or die",
  },
];

export default function Content() {
  return (
    <>
      <div className="h-20"></div>
      <div className="h-96 w-full text-gray-100 bg-red-900 relative">
        {/* {imageArray.map((image) => {
          return (
            <Image
              src={image.image}
              style={{ objectFit: "cover", objectPosition: "center" }}
              priority={true}
              fill
              className="w-full h-full top-0 left-0 object-cover"
              alt="Picture of the first character"
            />
          );
        })} */}
        <Image
          src="/img/demon_king_vearn_1.jpg"
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority={true}
          fill
          className="w-full h-full top-0 left-0 object-cover"
          alt="Picture of the first character"
        />
      </div>
    </>
  );
}
