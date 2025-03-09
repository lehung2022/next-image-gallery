"use client";

import Image from "next/image";
import Link from "next/link";

export default function NihonDynastyImage() {
  const cityImage02 = {
    id: "japan_symbol",
    src: "/other_images/Bandera_shogunato_tokugawa.png",
  };

  return (
    <>
      <div className="flex justify-center items-center py-2">
        <div className="relative w-full h-auto aspect-[4/3] overflow-hidden">
          <Link href="/dynasties/yat-bun" className="relative w-full h-full block">
            <Image
              src={cityImage02.src}
              alt="Japan"
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
