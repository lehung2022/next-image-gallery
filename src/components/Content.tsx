"use client";
// In next.js 13, both objectFit and layout prop are deprecated from the Image component and must be implemented with style or className.
// Fill is a boolean that is false if not applied and true if present.
import React, { useState, useEffect } from "react";
import Image from "next/image";
import images from "./slideshow";

export default function Content() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <>
      <div className="w-full h-20"></div>
      <div className="relative w-full relative w-full h-[80vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center bg-black">
        <Image
          src={images[currentImageIndex]}
          alt={`Slideshow Image ${currentImageIndex + 1}`}
          layout="intrinsic"
          width={600}
          height={600}
          objectFit="cover" // Maintain aspect ratio and cover the full container
          className="rounded-lg" // Rounded corners for the image
        />
        <div className="absolute bottom-4 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}
