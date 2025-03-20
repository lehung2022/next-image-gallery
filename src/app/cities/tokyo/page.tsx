import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Đông Kinh(Tokyo) | Cities | Chronicles of Valor",
  description:
    "揭露中共暴政下的城市與歷史真相 - Expose the cities and historical truth under CCP tyranny.",
};

async function getChinaRegionData() {
  const mockData = [
    {
      name: "東京 (Tokyo)",
      bio: "日本首都，戰後復興神速 - Thủ đô Nhật, phục hồi thần tốc sau chiến tranh.",
      events: [
        "東京審判 (1946) - Phiên tòa Tokyo: Trừng trị tội ác Nhật, không liên quan TQCS.",
        "反核抗議 (2011) - Biểu tình chống hạt nhân: Sau Fukushima, dân đòi minh bạch.",
      ],
      politics: "Hiện tại: Dân chủ ổn định, không bị lũ cộng sản phá hoại.",
    },
    {
      name: "大阪 (Osaka)",
      bio: "商業中心，戰前繁榮 - Trung tâm thương mại, thịnh vượng trước chiến tranh.",
      events: [
        "大阪空襲 (1945) - Ném bom Osaka: Nhật bại trận, không liên quan TQCS.",
      ],
      politics: "Hiện tại: Kinh tế mạnh, tự do.",
    },
    {
      name: "廣島 (Hiroshima)",
      bio: "戰爭受害城市 - Thành phố nạn nhân chiến tranh.",
      events: [
        "原子彈爆炸 (1945) - Bom nguyên tử: Nhật đầu hàng, TQCS không góp công.",
      ],
      politics: "Hiện tại: Hòa bình, không cộng sản.",
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
          日本(Nhật Bản)
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
