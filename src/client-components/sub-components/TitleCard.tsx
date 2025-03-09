"use client";
import Image from "next/image";
import Link from "next/link";

interface TitleCardProps {
  title: string;
  href: string;
  imageSrc: string;
}

const TitleCard = ({ title, href, imageSrc }: TitleCardProps) => {
  return (
    <div className="flex flex-col gap-6">
      <section
        className="text-4xl bg-gray-950/50 text-center font-extrabold leading-none tracking-tight text-yellow-50 md:text-5xl lg:text-6xl dark:text-white"
        aria-label={title}
      >
        <h1>{title}</h1>
      </section>
      <div className="grid place-items-center w-full">
        <Link
          href={href}
          className="relative flex items-center justify-center w-full max-w-sm text-white text-2xl font-bold transition-all"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden">
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-contain transform-gpu hover:scale-105 hover:rotate-2 hover:opacity-75 hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 will-change-transform"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 60vw, 50vw)"
              priority={true} // Tải sớm tất cả ảnh
              loading="eager"
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TitleCard;
