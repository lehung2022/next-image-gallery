import Link from "next/link";

// Hàm fetch giả lập (sẽ thay bằng Firebase server-side)
async function getBakGingData() {
  // Giả lập API - sau này dùng Firebase
  const mockData = {
    name: "Bắc Kinh",
    bio: "Thủ đô từ thời Nguyên, Minh, Thanh. Biến cố lớn: Thiên An Môn 1989, thay đổi chính sách đàn áp biểu tình. Gái ngành thì chưa rõ, chờ khảo sát thêm 😌.",
  };

  await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay giả lập
  return mockData;
}

export default async function BakGing() {
  const data = await getBakGingData();

  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Back Button */}
      <div className="flex justify-start max-w-5xl mx-auto mb-2">
        <Link href="/cities">
          <button className="mt-8 px-6 py-3 text-lg text-white font-bold bg-slate-950/50 hover:bg-stone-700 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
            ← Back
          </button>
        </Link>
      </div>

      {/* Biography */}
      <section className="text-white bg-slate-950/50 rounded-lg">
        <h1 className="text-4xl font-bold text-yellow-50 mb-4">{data.name}</h1>
        <p className="text-lg text-gray-300">{data.bio}</p>
        {/* Danh sách thành phố gợi ý */}
        <div className="mt-6">
          <h2 className="text-2xl font-bold text-yellow-50">Thành phố khác</h2>
          <p className="text-gray-300">Chờ API: Thượng Hải, Quảng Châu...</p>
        </div>
      </section>
    </div>
  );
}
