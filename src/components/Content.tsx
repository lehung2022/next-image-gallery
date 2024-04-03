"use client";
// In next.js 13, both objectFit and layout prop are deprecated from the Image component and must be implemented with style or className.
// Fill is a boolean that is false if not applied and true if present.
import React, { useState } from "react";
import images from "./slideshow";
import Image from "next/image";

export default function Content() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };
  return (
    <>
      <div className="w-full h-20"></div>
      <div className="relative flex flex-col items-center"> 
      {/* relative flex class here is the problem. We need to fix this because the overflow is getting
      out of control */}
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2"
          onClick={prevSlide}
        >
          Previous
        </button>
        <div className="flex flex-row justify-center w-full">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={500}
              height={500}
              alt={`Slide ${index + 1}`}
              className={`transition-opacity duration-500 ${
                currentSlide === index
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            />
          ))}
        </div>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2"
          onClick={nextSlide}
        >
          Next
        </button>
      </div>
    </>
  );
}
