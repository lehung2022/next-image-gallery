import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hương Cảng | Cities | Chronicles of Valor",
  description:
    "揭露中共暴政下的城市與歷史真相 - Expose the cities and historical truth under CCP tyranny.",
};

async function getChinaRegionData() {
  const mockData = [
    {
      name: "香港 (Hương Cảng)",
      bio: "英治時期自由港，後 bị 中共 吞噬 - Cảng tự do thời Anh, sau bị Trung Cộng nuốt chửng.",
      events: [
        "雨傘運動 (2014) - Phong trào Dù: Dân chống Trung Cộng khốn kiếp.",
        "反送中 (2019) - Chống luật dẫn độ: Dân Hương Cảng đánh bại ý đồ Trung Cộng.",
      ],
      politics:
        "Hiện tại: Trung Cộng đàn áp, dân mất tự do, biến thành địa ngục.",
    },
    {
      name: "九龍 (Cửu Long)",
      bio: "都市區，英治時期發達 - Khu đô thị, phát triển thời Anh.",
      events: [
        "國民黨活動 (1940s) - Hoạt động Quốc Dân Đảng: Chống Nhật, không phải Trung Cộng.",
      ],
      politics: "Hiện tại: Trung Cộng kiểm soát, dân bất mãn.",
    },
  ];
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return mockData;
}

export default async function ChinaRegionPage() {
  const cities = await getChinaRegionData();

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
          香港(Hương Cảng)
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cities.map((city, index) => (
            <div
              key={index}
              className="bg-slate-950/50 p-4 rounded-lg border-2 border-black hover:shadow-lg transition-all duration-200"
            >
              <h2 className="text-2xl font-bold text-yellow-50 mb-2">
                {city.name}
              </h2>
              <p className="text-gray-300">{city.bio}</p>
              <ul className="mt-2 text-gray-300 list-disc pl-5">
                {city.events.map((event, idx) => (
                  <li key={idx}>{event}</li>
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
