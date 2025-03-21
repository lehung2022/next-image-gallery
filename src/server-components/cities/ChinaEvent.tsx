import Link from "next/link";
import { notFound } from "next/navigation";
import { EventData } from "@/types/city";

async function getEventData(
  city: string,
  eventSlug: string
): Promise<EventData> {
  const mockFirebase: { [city: string]: { [eventSlug: string]: EventData } } = {
    "bak-ging": {
      "tainierzhuang-1938": {
        title: "臺兒莊大捷 (1938)",
        detail: "國民黨在李宗仁指揮下大勝...",
      },
      "tiananmen-1989": {
        title: "天安門屠殺 (1989)",
        detail: "中共用坦克碾死數千學生...",
      },
    },
    "seung-hoi": {
      "sihang-1937": {
        title: "四行倉庫保衛戰 (1937)",
        detail: "國民黨死守四行抗日...",
      },
      "clinton-1990s": {
        title: "克林頓經濟政策 (1990年代)",
        detail: "Bill Clinton mở cửa kinh tế...",
      },
    },
  };
  const cityData = mockFirebase[city];
  const data = cityData && cityData[eventSlug];
  if (!data) throw new Error("Không tìm thấy");
  return data;
}

export default async function ChinaEvent({
  city,
  event,
}: {
  city: string;
  event: string;
}) {
  let data;
  try {
    data = await getEventData(city, event);
  } catch (error) {
    notFound();
  }
  const cityName = city === "bak-ging" ? "北京 (Bắc Kinh)" : "上海 (Thượng Hải)";

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <div className="flex justify-start mb-6">
        <Link href={`/cities/bak-ging/${city}`}>
          <button className="px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-700 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
            ← Back to {cityName.split(" ")[0]}
          </button>
        </Link>
      </div>
      <section className="animate-fadeIn">
        <h1 className="text-4xl font-bold text-yellow-50 mb-6">{data.title}</h1>
        <div className="bg-slate-950/50 p-6 rounded-lg border-2 border-black">
          <h2 className="text-2xl font-bold text-yellow-50 mb-4">
            詳情 - Chi tiết
          </h2>
          <p className="text-gray-300">{data.detail}</p>
        </div>
      </section>
    </div>
  );
}
