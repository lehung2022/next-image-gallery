import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type CityData = {
  name: string;
  bio: string;
  history: string;
  events: { title: string; slug: string; summary: string }[];
  politics: string;
};

async function getCityData(city: string): Promise<CityData> {
  const mockFirebase = {
    beijing: {
      name: "北京 (Bắc Kinh)",
      bio: "滿清滅亡後淪為中共巢穴 - Sau Mãn Thanh thành hang ổ Trung Cộng.",
      history:
        "北京自元朝為首都，經明清興衰，至1911滿清滅亡，國民黨治理 ngắn,後 bị中共占據.",
      events: [
        {
          title: "臺兒莊大捷 (1938)",
          slug: "tainierzhuang-1938",
          summary: "Quốc Dân Đảng thắng Nhật lần đầu tiên.",
        },
        {
          title: "天安門屠殺 (1989)",
          slug: "tiananmen-1989",
          summary: "Trung Cộng giết sinh viên.",
        },
      ],
      politics:
        "Hiện tại: Trung tâm quyền lực Trung Cộng khốn kiếp, dân không tự do.",
    },
    shanghai: {
      name: "上海 (Thượng Hải)",
      bio: "國民黨治理，後被中共占 - Quốc Dân Đảng quản lý, sau bị Trung Cộng chiếm.",
      history:
        "上海 từ thời Thanh là thương cảng lớn, Quốc Dân Đảng phát triển mạnh, đến 1949 bị Trung Cộng cướp.",
      events: [
        {
          title: "四行倉庫保衛戰 (1937)",
          slug: "sihang-1937",
          summary: "Quốc Dân Đảng chống Nhật.",
        },
        {
          title: "克林頓經濟政策 (1990s)",
          slug: "clinton-1990s",
          summary: "Clinton giúp Trung Cộng trỗi dậy.",
        },
      ],
      politics:
        "Hiện tại: Dân sống dưới gót giày Trung Cộng, bị bóc lột tận xương.",
    },
  };
  const data = mockFirebase[city as keyof typeof mockFirebase];
  if (!data) throw new Error("Không tìm thấy");
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>; // Đổi thành Promise
}): Promise<Metadata> {
  const resolvedParams = await params; // Await params
  const citySlug = resolvedParams.city;
  try {
    const data = await getCityData(citySlug);
    return {
      title: `${data.name} | Trung Quốc | Chronicles of Valor`,
      description: `揭露${data.name}下的歷史與中共暴政 - Uncover the history and CCP tyranny in ${data.name}.`,
    };
  } catch (error) {
    return {
      title: "Không tìm thấy | Trung Quốc | Chronicles of Valor",
      description: "Trang không tồn tại.",
    };
  }
}

export default async function CityDetailPage({
  params,
}: {
  params: Promise<{ city: string }>; // Đổi thành Promise
}) {
  const resolvedParams = await params; // Await params
  const citySlug = resolvedParams.city;
  let data: CityData;
  try {
    data = await getCityData(citySlug);
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
              <Link href={`/cities/bak-ging/${citySlug}/${event.slug}`}>
                <h3 className="text-xl font-bold text-yellow-50 hover:underline">
                  {event.title}
                </h3>
              </Link>
              <p className="text-gray-300">{event.summary}</p>
            </div>
          ))}
          <h2 className="text-2xl font-bold text-yellow-50 mb-4">
            現在 - Hiện tại
          </h2>
          <p className="text-gray-300">{data.politics}</p>
        </div>
      </section>
    </div>
  );
}
