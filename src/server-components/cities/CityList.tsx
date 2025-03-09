import Link from "next/link";
import { notFound } from "next/navigation";

// Hàm fetch dữ liệu (giả lập, thay bằng Firebase sau)
async function getCityData(city: string) {
  const mockData: { [key: string]: { name: string; bio: string } } = {
    "bak-ging": {
      name: "Bắc Kinh",
      bio: "Thủ đô từ thời Nguyên, Minh, Thanh. Biến cố lớn: Thiên An Môn 1989, thay đổi chính sách đàn áp biểu tình. Gái ngành thì chưa rõ, chờ khảo sát thêm 😌.",
    },
    "hong-kong": {
      name: "Hương Cảng (Hong Kong)",
      bio: "Thành phố tự do trước 2019. Biến cố lớn: Bàn giao 1997 (Anh → TQ), biểu tình Umbrella 2014, phong trào chống luật dẫn độ 2019-2020, luật an ninh quốc gia 2020. Gái ngành thì nổi tiếng ở Wan Chai.",
    },
    "sai-gon": {
      name: "Sài Gòn",
      bio: "Trung tâm Nam Kỳ dưới Pháp, Dinh Độc Lập thời VNCH, giải phóng 30/4/1975. Gái ngành thì khu Bùi Viện nổi tiếng, chờ khảo sát thêm 😌.",
    },
    "toi-bak": {
      name: "Đài Bắc",
      bio: "Thành phố nơi đã xảy ra nhiều sự kiện nhạy cảm như Orgy giữa phố 😌😌😌😌 ",
    },
    "ha-noi": {
      name: "Hà Nội",
      bio: "Thành phố nơi đã xảy ra nhiều sự kiện nhạy cảm như Orgy giữa phố 😌😌😌😌 ",
    },
  };

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay giả lập
  const data = mockData[city];
  if (!data) throw new Error(`Không tìm thấy dữ liệu cho ${city}`);
  return data;
}

export default async function CityList({ city }: { city: string }) {
  let data;
  try {
    data = await getCityData(city);
  } catch (error) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-6">
      <div className="flex justify-start mb-4">
        <Link href="/cities">
          <button className="text-white bg-slate-950/50 hover:bg-slate-950 px-4 py-2 rounded-lg">
            ← Back
          </button>
        </Link>
      </div>
      <section className="text-white">
        <h1 className="text-4xl font-bold text-yellow-50 mb-4">{data.name}</h1>
        <p className="text-lg text-gray-300">{data.bio}</p>
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-yellow-50">Thành phố khác</h2>
          <p className="text-gray-300">Chờ API: Thượng Hải, Hà Nội...</p>
        </div>
      </section>
    </div>
  );
}
