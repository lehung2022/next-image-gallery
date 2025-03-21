import Link from "next/link";
import { notFound } from "next/navigation";
import { CityData } from "@/types/city";

async function getChinaCityData(city: string): Promise<CityData> {
  const mockFirebase: { [key: string]: CityData } = {
    "bak-ging": {
      name: "北京 (Bắc Kinh)",
      bio: "滿清滅亡後淪為中共巢穴 - Sau Mãn Thanh thành hang ổ Trung Cộng.",
      history:
        "北京自元朝為首都，經明清興衰，至1911滿清滅亡，國民黨治理短，後被中共占據.",
      events: [
        {
          title: "臺兒莊大捷 (1938)",
          slug: "tainierzhuang-1938",
          summary: "Quốc Dân Đảng thắng Nhật.",
        },
        {
          title: "天安門屠殺 (1989)",
          slug: "tiananmen-1989",
          summary: "Trung Cộng giết sinh viên.",
        },
      ],
      politics: "現時：中共權力中心，民無自由。",
    },
    "seung-hoi": {
      name: "上海 (Thượng Hải)",
      bio: "國民黨治理，後被中共占 - Quốc Dân Đảng quản lý, sau bị Trung Cộng chiếm.",
      history: "上海自清朝為大商港，國民黨發展強，至1949被中共搶.",
      events: [
        {
          title: "四行倉庫保衛戰 (1937)",
          slug: "sihang-1937",
          summary: "Quốc Dân Đảng chống Nhật.",
        },
        {
          title: "克林頓經濟政策 (1990年代)",
          slug: "clinton-1990s",
          summary: "Clinton giúp Trung Cộng trỗi dậy.",
        },
      ],
      politics: "現時：民在中共靴下，被剝削殆盡。",
    },
  };
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = mockFirebase[city];
  if (!data) throw new Error(`Không tìm thấy dữ liệu cho ${city}`);
  return data;
}

export default async function ChinaCityList({ city }: { city: string }) {
  let data;
  try {
    data = await getChinaCityData(city);
  } catch (error) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 text-white">
      <div className="flex justify-start mb-6">
        <Link href="/cities/bak-ging">
          <button className="px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-700 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
            ← Back to Trung Quốc
          </button>
        </Link>
      </div>
      <section className="animate-fadeIn">
        <h1 className="text-4xl font-bold text-yellow-50 mb-6">{data.name}</h1>
        <div className="bg-slate-950/50 p-6 rounded-lg border-2 border-black">
          <h2 className="text-2xl font-bold text-yellow-50 mb-4">
            歷史 - Lịch sử
          </h2>
          <p className="text-gray-300 mb-4">{data.history}</p>
          <h2 className="text-2xl font-bold text-yellow-50 mb-4">
            重大事件 - Sự kiện Nổi bật
          </h2>
          {data.events.map((event) => (
            <div key={event.slug} className="mb-4">
              <Link href={`/cities/bak-ging/${city}/${event.slug}`}>
                <h3 className="text-xl font-bold text-yellow-50 hover:underline">
                  {event.title}
                </h3>
              </Link>
              <p className="text-gray-300">{event.summary}</p>
            </div>
          ))}
          <h2 className="text-2xl font-bold text-yellow-50 mb-4">Hiện tại</h2>
          <p className="text-gray-300">{data.politics}</p>
        </div>
      </section>
    </div>
  );
}
