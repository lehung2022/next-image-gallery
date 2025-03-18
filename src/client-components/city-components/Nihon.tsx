import Image from "next/image";
import Link from "next/link";

export default function Nihon() {
  const cityImage02 = {
    id: "japan_symbol",
    src: "/other_images/東京.jpg",
  };
  return (
    <section className="py-2 px-6 sm:px-12 bg-transparent dark:bg-transparent">
      <div className="flex justify-center items-center py-2">
        <div className="relative w-full h-auto aspect-[4/3] overflow-hidden">
          <Link href="/cities/tokyo" className="relative w-full h-full block">
            <Image
              src={cityImage02.src}
              alt="東京"
              fill
              className="object-contain cursor-pointer transition-transform hover:scale-105 border-2 border-white rounded-lg"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
      </div>
      <div className="w-full bg-gray-950/50 text-yellow-50 text-lg font-bold border-2 rounded-lg border-yellow-300 text-center p-2">
        Tokyo
      </div>
    </section>
  );
}
