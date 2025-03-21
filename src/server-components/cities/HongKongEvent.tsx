import Link from "next/link";
import { notFound } from "next/navigation";
import { EventData } from "@/types/city";
import Image from "next/image";

async function getHongKongEventData(
  city: string,
  eventSlug: string
): Promise<EventData> {
  const mockFirebase: { [city: string]: { [eventSlug: string]: EventData } } = {
    "hong-kong": {
      "handover-1997": {
        title: "交還 (1997)",
        detail: "Anh giao Hương Cảng cho Trung Cộng, kết thúc thời kỳ tự do.",
        imageUrl: "/other_images/hong-kong-handover-1997.webp",
      },
      "anti-extradition-2019": {
        title: "反送中 (2019)",
        detail: "Dân Hương Cảng biểu tình chống luật dẫn độ về TQ.",
        imageUrl: "/other_images/protestor-fight-back-2019.jpg",
      },
      "umbrella-2014": {
        title: "雨傘運動 (2014)",
        detail:
          "Phong trào Dù: Dân Hương Cảng chống Trung Cộng kiểm soát bầu cử.",
        imageUrl: "/other_images/hong-kong-protesters-umbrellas-2019.png",
      },
    },
    "gau-lung": {
      "kmt-1940s": {
        title: "國民黨活動 (1940s)",
        detail: "Hoạt động Quốc Dân Đảng chống Nhật tại Cửu Long.",
        imageUrl: "/other_images/taiwan.png",
      },
    },
  };
  const cityData = mockFirebase[city];
  const data = cityData && cityData[eventSlug];
  if (!data) throw new Error("Không tìm thấy");
  return data;
}

export default async function HongKongEvent({
  city,
  event,
}: {
  city: string;
  event: string;
}) {
  let data;
  try {
    data = await getHongKongEventData(city, event);
  } catch (error) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <div className="flex justify-start mb-6">
        <Link href={`/cities/hong-kong/${city}`}>
          <button className="px-4 py-2 bg-slate-950/50 hover:bg-stone-700 text-white rounded-lg transition-all duration-200 hover:scale-105">
            ← Back to {city === "hong-kong" ? "香港" : "九龍"}
          </button>
        </Link>
      </div>
      <section className="animate-fadeIn bg-slate-950/50 p-4 rounded-lg border-2 border-black hover:shadow-lg transition-all duration-200">
        <h1 className="text-4xl font-bold text-yellow-50 mb-4">{data.title}</h1>
        {data.imageUrl && (
          <Image
            src={data.imageUrl}
            alt={data.title}
            width={500}
            height={300}
            className="rounded-lg mb-4 w-full h-auto object-contain"
            priority={false}
          />
        )}
        <p className="text-lg text-gray-300">{data.detail}</p>
      </section>
    </div>
  );
}
