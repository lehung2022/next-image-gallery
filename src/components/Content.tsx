"use client";
// In next.js 13, both objectFit and layout prop are deprecated from the Image component and must be implemented with style or className.
// Fill is a boolean that is false if not applied and true if present.
import React from "react";
import Image from "next/image";

export default function Content() {

  const images = [
    "https://images3.alphacoders.com/134/1349243.jpeg",
    "https://images3.alphacoders.com/134/1342688.jpeg",
    "https://images.alphacoders.com/132/1327818.png",
    "https://images4.alphacoders.com/103/1033672.jpg",
    "https://images8.alphacoders.com/100/1007427.jpg",
    "https://images.alphacoders.com/101/1015424.jpg"
  ]

  return (
    <>
      <div className="w-full h-20"></div>
      <div className="relative flex flex-col items-center h-screen overflow-scroll">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((imageUrl, index) => (
            <div key={index}>
              <Image
                src={imageUrl}
                alt={`Grid Item ${index + 1}`}
                width={800}  
                height={800}  
                className="object-cover rounded-lg" // Responsive & rounded corners
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
