import Image from "next/image";
import Link from "next/link";

export default function ChinaCityList() {
  const cityImage04 = {
    id: "bak_ging",
    src: "/other_images/北京-01.jpg",
  };

  return (
    <>
      <div className="flex justify-center items-center py-2">
        <div className="relative w-full h-auto aspect-[4/3] overflow-hidden">
          <Link
            href="/cities/bak-ging"
            className="relative w-full h-full block"
          >
            <Image
              src={cityImage04.src}
              alt="bak_ging"
              fill
              className="object-contain cursor-pointer transition-transform hover:scale-105"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
      </div>
      <div className="w-full bg-gray-950/50 text-yellow-50 text-lg font-bold text-center p-2">
        Bak Ging 
      </div>
    </>
  );
}
