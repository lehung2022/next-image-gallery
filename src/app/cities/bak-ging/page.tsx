import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "中國 | Trung Quốc | Chronicles of Valor",
  description:
    "揭露中共暴政下的歷史真相 - Expose the historical truth under CCP tyranny.",
};

async function getChinaOverviewData() {
  const mockData = [
    {
      name: "北京 (Bắc Kinh)",
      slug: "beijing",
      bio: "滿清滅亡後淪為中共巢穴 - Sau Mãn Thanh thành hang ổ Trung Cộng.",
      events: [
        { title: "天安門屠殺 (1989)", slug: "tiananmen-1989" },
        { title: "臺兒莊大捷 (1938)", slug: "tainierzhuang-1938" },
      ],
    },
    {
      name: "上海 (Thượng Hải)",
      slug: "shanghai",
      bio: "國民黨治理，後被中共占 - Quốc Dân Đảng quản lý, sau bị Trung Cộng chiếm.",
      events: [{ title: "四行倉庫保衛戰 (1937)", slug: "sihang-1937" }],
    },
  ];
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockData;
}

export default async function ChinaRegionPage() {
  const cities = await getChinaOverviewData();

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
          中國 (Trung Quốc)
        </h1>
        <div className="bg-slate-950/50 p-6 rounded-lg border-2 border-black">
          <h2 className="text-2xl font-bold text-yellow-50 mb-4">
            歷史與現況 - Lịch sử và Hiện tại
          </h2>
          <p className="text-gray-300 mb-4">
            中國自滿清滅亡
            (1911)，經國民黨抗戰勝利，卻被中共竊國。今日，中共暴政統治，民不聊生。
          </p>
          <h3 className="text-xl font-bold text-yellow-50 mb-2">
            城市範例 - Ví dụ Thành phố
          </h3>
          {cities.map((city) => (
            <div key={city.slug} className="mb-4">
              <Link href={`/cities/bak-ging/${city.slug}`}>
                <h4 className="text-lg font-bold text-yellow-50 hover:underline">
                  {city.name}
                </h4>
              </Link>
              <p className="text-gray-300">{city.bio}</p>
              <ul className="text-gray-300 list-disc pl-5">
                {city.events.map((event) => (
                  <li key={event.slug}>
                    <Link
                      href={`/cities/bak-ging/${city.slug}/${event.slug}`}
                      className="hover:underline"
                    >
                      {event.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
