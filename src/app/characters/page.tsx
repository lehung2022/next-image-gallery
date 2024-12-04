"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import imageShow from "./imageshow/index";
import Link from "next/link";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Characters() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Automatically cycle through images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageShow.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  return (
    <>
      <div className="h-20"></div>
      {/* Container for the responsive grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {imageShow.map((image, index) => (
          <Link key={index} href="/timelines">
            {/* No <a> tag needed, Link wraps the div directly */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-112">
              <Image
                src={image}
                alt={`Image ${index + 1}`}
                layout="fill" // Image fills the container div
                objectFit="cover" // Ensures the image covers the container
                className="rounded-lg"
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
