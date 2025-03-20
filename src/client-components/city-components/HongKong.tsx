import Image from "next/image";
import Link from "next/link";

export default function HongKong() {
  const cityImage05 = {
    id: "hong_kong_symbol",
    src: "/other_images/gau2-lung4-city.jpg",
  };
  return (
    <>
      <section className="py-2 px-6 sm:px-12 bg-transparent dark:bg-transparent">
        <div className="flex justify-center items-center py-2">
          <div className="relative w-full h-auto aspect-[4/3] overflow-hidden">
            <Link href="/cities/hong-kong" className="relative block w-full h-full">
              <Image
                src={cityImage05.src}
                alt="hong_kong_symbol"
                fill
                className="object-contain cursor-pointer transition-transform hover:scale-105 border-2 border-purple-500 rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>
        </div>
        <div className="w-full bg-gray-950/50 text-yellow-50 text-lg font-bold text-center p-2 border-2 border-gray-300 rounded-lg">
          Heung Gong
        </div>
      </section>
    </>
  );
}
