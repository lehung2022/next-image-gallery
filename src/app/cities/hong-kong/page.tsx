import Link from "next/link";
import type { Metadata } from "next";
import { CityData } from "@/types/city";
import Image from "next/image";

export const metadata: Metadata = {
  title: "香港 | Hương Cảng | Chronicles of Valor",
  description:
    "揭露中共暴政下的城市與歷史真相 - Expose the cities and historical truth under CCP tyranny.",
};

async function getHongKongRegionData(): Promise<CityData[]> {
  const mockData: CityData[] = [
    {
      name: "香港 (Hương Cảng)",
      slug: "hong-kong",
      bio: "英治時期自由港，後被中共吞噬 - Cảng tự do thời Anh, sau bị Trung Cộng nuốt chửng.",
      history: "1842成英殖民地，1997交中共.",
      events: [
        {
          title: "雨傘運動 (2014)",
          slug: "umbrella-2014",
          summary: "Dân chống Trung Cộng.",
          imageUrl: "/other_images/hong-kong-protesters-umbrellas-2019.png",
        },
        {
          title: "反送中 (2019)",
          slug: "anti-extradition-2019",
          summary: "Chống luật dẫn độ.",
          imageUrl: "/other_images/protestor-fight-back-2019.jpg",
        },
      ],
      politics: "現時：中共 đàn áp, dân mất tự do.",
      imageUrl: "/other_images/hong_kong_lead.avif",
    },
    {
      name: "九龍 (Cửu Long)",
      slug: "gau-lung",
      bio: "都市區，英治時期發達 - Khu đô thị, phát triển thời Anh.",
      history: "隨香港發展.",
      events: [
        {
          title: "國民黨活動 (1940s)",
          slug: "kmt-1940s",
          summary: "Chống Nhật.",
          imageUrl: "/other_images/taiwan.png",
        },
      ],
      politics: "現時：中共 kiểm soát, dân bất mãn.",
      imageUrl: "/other_images/gau2-lung4-city.jpg",
    },
  ];
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockData;
}

export default async function HongKongRegionPage() {
  const cities = await getHongKongRegionData();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <div className="flex justify-start mb-6">
        <Link href="/cities">
          <button className="px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-700 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
            ← Back
          </button>
        </Link>
      </div>
      <section className="animate-fadeIn">
        <h1 className="text-4xl font-bold text-yellow-50 mb-6">
          香港 (Hương Cảng)
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cities.map((city) => (
            <div
              key={city.slug}
              className="bg-slate-950/50 p-4 rounded-lg border-2 border-black hover:shadow-lg transition-all duration-200"
            >
              <Link href={`/cities/hong-kong/${city.slug}`}>
                <h2 className="text-2xl font-bold text-yellow-50 mb-2 hover:underline">
                  {city.name}
                </h2>
              </Link>
              {city.imageUrl && (
                <Image
                  src={city.imageUrl}
                  alt={city.name}
                  width={300}
                  height={200}
                  className="rounded-lg mb-2 w-full h-auto object-contain"
                  priority={false}
                />
              )}
              <p className="text-gray-300">{city.bio}</p>
              <ul className="mt-2 text-gray-300 list-disc pl-5">
                {city.events.map((event) => (
                  <li key={event.slug}>
                    <Link
                      href={`/cities/hong-kong/${city.slug}/${event.slug}`}
                      className="hover:underline"
                    >
                      {event.title}
                    </Link>
                    {event.imageUrl && (
                      <Image
                        src={event.imageUrl}
                        alt={event.title}
                        width={200}
                        height={150}
                        className="mt-2 w-full h-auto object-contain rounded-lg"
                        priority={false}
                      />
                    )}
                  </li>
                ))}
              </ul>
              <p className="mt-2 text-gray-300 italic">{city.politics}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
