import Link from "next/link";
import { notFound } from "next/navigation";

async function getChinaCityData(city: string) {
  const mockData: {
    [key: string]: { name: string; bio: string; events?: string[] };
  } = {
    "bak-ging": {
      name: "Bắc Kinh",
      bio: "Thủ đô từ thời Nguyên, Minh, Thanh. Gái ngành thì chưa rõ, chờ khảo sát thêm 😌.",
      events: ["Thiên An Môn 1989", "Biểu tình chống Tập 2025"],
    },
    shanghai: {
      name: "Thượng Hải",
      bio: "Trung tâm kinh tế TQ, phát triển từ thời Thanh.",
      events: ["Cách mạng Văn hóa 1966", "Bùng nổ kinh tế 1990s"],
    },
  };
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const data = mockData[city];
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
        <Link href="/cities">
          <button className="px-4 py-2 bg-slate-950/50 hover:bg-stone-700 text-white rounded-lg transition-all duration-200 hover:scale-105">
            ← Back
          </button>
        </Link>
      </div>
      <section className="animate-fadeIn">
        <h1 className="text-4xl font-bold text-yellow-50 mb-4">{data.name}</h1>
        <p className="text-lg text-gray-300">{data.bio}</p>
        {data.events && (
          <div className="mt-6">
            <h2 className="text-2xl font-bold text-yellow-50">
              Biến cố nổi bật
            </h2>
            <ul className="text-gray-300 list-disc pl-5">
              {data.events.map((event, index) => (
                <li key={index}>{event}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}
