import React from "react";
import Image from "next/image";

export default function Content() {
  return (
    <>
      <div className="h-96 w-full text-gray-100 bg-red-900">
        <Image
          src="/img/Drawing_the_sword.jpg"
          style={{objectFit:"cover", objectPosition:"center"}}
          fill
          className="w-full h-full top-0 left-0 object-cover rounded-2xl"
          alt="Picture of the first character"
        />
      </div>
    </>
  );
}
