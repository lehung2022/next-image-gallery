import Image from "next/image";
import Link from "next/link";

export default function Vietnam() {
  const cityImage01 = {
    id: "vietnam_symbol",
    src: "/other_images/Best-time-to-visit-saigon.jpg",
  };
  return (
    <>
      <section className="py-2 px-6 sm:px-12 bg-transparent dark:bg-transparent">
        <div className="flex justify-center items-center py-2">
          <div className="relative w-full h-auto aspect-[4/3] overflow-hidden">
            <Link href="/cities/sai-gon" className="relative block w-full h-full">
              <Image
                src={cityImage01.src}
                alt="Best-time-to-visit-saigon"
                fill
                className="object-contain cursor-pointer transition-transform hover:scale-105 border-2 border-yellow-600 rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>
        </div>
        <div className="w-full bg-gray-950/50 text-yellow-50 text-lg font-bold text-center p-2 border-2 border-yellow-600 rounded-lg">
          Sai Gon
        </div>
      </section>
    </>
  );
}
