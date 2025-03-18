import Image from "next/image";
import Link from "next/link";


export default function ChineseGenerals() {
  const generalImage03 = {
    id: "Loei Mung",
    src: "/zung_gwok_generals/leoi_mung_02.jpg",
  };
  return (
    <section className="py-2 px-6 sm:px-12 bg-transparent dark:bg-transparent">
      <div className="flex justify-center items-center py-2">
        <div className="relative w-full h-auto aspect-[4/3] overflow-hidden">
          <Link
            href="/generals/zung-gwok-generals"
            className="relative w-full h-full block"
          >
            <Image
              src={generalImage03.src}
              alt="Leoi5 Mung4"
              fill
              className="object-contain cursor-pointer transition-transform hover:scale-105 border-2 border-gray-300 rounded-lg"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Link>
        </div>
      </div>
      <div className="w-full bg-gray-950/50 text-yellow-50 text-lg font-bold text-center p-2">
        China 
      </div>
    </section>
  );
}
