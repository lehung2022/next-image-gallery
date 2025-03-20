import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đài Loan | Cities | Chronicles of Valor",
  description:
    "揭露中共暴政下的城市與歷史真相 - Expose the cities and historical truth under CCP tyranny.",
};

async function getChinaRegionData() {
  const mockData = [
    {
      name: "臺北 (Đài Bắc)",
      bio: "國民黨退守之地，反共堡壘 - Nơi Quốc Dân Đảng rút lui, pháo đài chống cộng.",
      events: [
        "二二八事件 (1947) - Sự kiện 228: Dân chống Quốc Dân Đảng, không phải Việt Cộng.",
        "反共抗議 (2020s) - Biểu tình chống Trung Cộng: Dân đòi độc lập.",
      ],
      politics: "Hiện tại: Dân chủ, chống Trung Cộng khốn nạn xâm lược.",
    },
    {
      name: "臺南 (Đài Nam)",
      bio: "古都，反共精神強烈 - Cố đô, tinh thần chống cộng mạnh mẽ.",
      events: [
        "民主運動 (1980s) - Phong trào dân chủ: Chống độc tài, không liên quan TQCS.",
      ],
      politics: "Hiện tại: Ủng hộ độc lập, ghét Trung Cộng.",
    },
    {
      name: "高雄 (Cao Hùng)",
      bio: "港口重鎮，反共前線 - Trấn cảng lớn, tiền tuyến chống cộng.",
      events: [
        "美麗島事件 (1979) - Sự kiện Mỹ Lệ Đảo: Dân chủ hóa, chống độc tài.",
      ],
      politics: "Hiện tại: Dân bất mãn Trung Cộng, đòi tự do.",
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
          臺灣(Đài Loan)
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
