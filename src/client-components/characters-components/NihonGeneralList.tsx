"use client";

import Image from "next/image";
import Link from "next/link";

export default function NihonGeneralList() {
  const generalImage02 = {
    id: "Kosaka_Danjo_Masanobu",
    src: "/japanese_generals/Kosaka_Danjo_Masanobu.jpg",
  };

  return (
    <>
      <div className="flex justify-center items-center py-2">
        <div className="relative w-full h-auto aspect-[4/3] overflow-hidden">
          <Link
            href="/generals/nihon-generals"
            className="relative w-full h-full block"
          >
            <Image
              src={generalImage02.src}
              alt="Kosaka_Danjo_Masanobu"
              fill
              className="object-contain cursor-pointer transition-transform hover:scale-105"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
      </div>
      <div className="w-full bg-gray-950/50 text-yellow-50 text-lg font-bold text-center p-2">
        Japan
      </div>
    </>
  );
}
