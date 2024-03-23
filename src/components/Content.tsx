"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
// In next.js 13, both objectFit and layout prop are deprecated from the Image component and must be implemented with style or className.
// Fill is a boolean that is false if not applied and true if present.

const imageArray = [
  "https://staticdelivery.nexusmods.com/images/2763/167485493-1710319726.jpg",
  "https://staticdelivery.nexusmods.com/images/2763/202002272-1709599431.jpg",
  "https://staticdelivery.nexusmods.com/images/2763/139164183-1708909174.jpg",
  "https://staticdelivery.nexusmods.com/images/2763/139164183-1708854266.png",
  "https://staticdelivery.nexusmods.com/images/2763/139164183-1708853698.png",
  "https://firebasestorage.googleapis.com/v0/b/nextjs-image-gallery-418014.appspot.com/o/B%C3%B9i%20%C4%90%E1%BA%AFc%20Tuy%C3%AAn.jpg?alt=media&token=78342bb3-811c-4f32-a238-b448a8260a5f",
  "https://firebasestorage.googleapis.com/v0/b/nextjs-image-gallery-418014.appspot.com/o/D%C6%B0%C6%A1ng%20Tam%20Kha.jpg?alt=media&token=c9a1eb45-fca6-4735-8ca2-875851be1d98",
  "https://firebasestorage.googleapis.com/v0/b/nextjs-image-gallery-418014.appspot.com/o/Gia%20Long%20-%20Nguy%E1%BB%85n%20%C3%81nh.jpg?alt=media&token=aa9b3626-6b48-4526-9da7-6fb7f85e3dee",
];

export default function Content() {
  return (
    <>
      <div className="h-20"></div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {imageArray.map((image, index) => (
          <div
            key={index}
            className="bg-gray-100 p-4 w-full aspect-w-1 aspect-h-1"
          >
            <Link href={`/about/${index + 1}`}>
              <Image
                src={image}
                alt={` ${index + 1}`}
                width={500} // Adjust width as needed
                height={500} // Adjust height as needed
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
