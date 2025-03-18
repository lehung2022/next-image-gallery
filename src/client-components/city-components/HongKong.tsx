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
            <Link
              href="/cities/hong-kong"
              className="relative w-full h-full block"
            >
              <Image
                src={cityImage05.src}
                alt="hong kong symbol"
                fill
                className="object-contain cursor-pointer transition-transform hover:scale-105 border-2 border-red-700 rounded-lg"
                priority={false}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>
        </div>
        <div className="w-full bg-red-950/50 text-yellow-50 text-lg font-bold border-2 border-red rounded-lg text-center p-2">
          Gau Lung
        </div>
      </section>
    </>
  );
}
