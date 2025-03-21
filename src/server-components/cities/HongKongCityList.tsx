import Link from "next/link";
import { notFound } from "next/navigation";
import { CityData } from "@/types/city";
import Image from "next/image";

async function getHongKongCityData(city: string): Promise<CityData> {
  const mockFirebase: { [key: string]: CityData } = {
    "hong-kong": {
      name: "香港 (Hương Cảng)",
      slug: "hong-kong",
      bio: "英治時期自由港，後被中共吞噬.",
      history: "1842成英殖民地，1997交中共.",
      events: [
        {
          title: "交還 (1997)",
          slug: "handover-1997",
          summary: "Anh giao cho TQ.",
          imageUrl: "/other_images/hong-kong-handover-1997.webp",
        },
        {
          title: "反送中 (2019)",
          slug: "anti-extradition-2019",
          summary: "Chống luật dẫn độ.",
          imageUrl: "/other_images/protestor-fight-back-2019.jpg",
        },
      ],
      politics: "現時：中共 đàn áp.",
      imageUrl: "/other_images/hong_kong_lead.avif",
    },
    "gau-lung": {
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
  };
  const data = mockFirebase[city];
  if (!data) throw new Error(`Không tìm thấy dữ liệu cho ${city}`);
  return data;
}

export default async function HongKongCityList({ city }: { city: string }) {
  let data;
  try {
    data = await getHongKongCityData(city);
  } catch (error) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <div className="flex justify-start mb-6">
        <Link href="/cities/hong-kong">
          <button className="px-4 py-2 bg-slate-950/50 hover:bg-stone-700 text-white rounded-lg transition-all duration-200 hover:scale-105">
            ← Back
          </button>
        </Link>
      </div>
      <section className="animate-fadeIn bg-slate-950/50 p-4 rounded-lg border-2 border-black hover:shadow-lg transition-all duration-200">
        <h1 className="text-4xl font-bold text-yellow-50 mb-4">{data.name}</h1>
        {data.imageUrl && (
          <Image
            src={data.imageUrl}
            alt={data.name}
            width={500}
            height={300}
            className="rounded-lg mb-4 w-full h-auto object-contain"
            priority={false}
          />
        )}
        <p className="text-lg text-gray-300">{data.bio}</p>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-yellow-50">重大事件</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 list-none">
            {data.events.map((event) => (
              <li
                key={event.slug}
                className="bg-slate-950/50 p-4 rounded-lg border-2 border-black hover:shadow-lg transition-all duration-200"
              >
                <Link
                  href={`/cities/hong-kong/${city}/${event.slug}`}
                  className="hover:underline"
                >
                  {event.title}
                </Link>
                <p>{event.summary}</p>
                {event.imageUrl && (
                  <Image
                    src={event.imageUrl}
                    alt={event.title}
                    width={400}
                    height={250}
                    className="mt-2 w-full h-auto object-contain rounded-lg"
                    priority={false}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
