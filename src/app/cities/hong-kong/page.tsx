"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const HongKong = () => {
  const [data, setData] = useState<{ name: string; bio: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const mockData = {
          name: "Hương Cảng (Hong Kong)",
          bio: "Thành phố tự do trước 2019. Biến cố lớn: Bàn giao 1997 (Anh → TQ), biểu tình Umbrella 2014, phong trào chống luật dẫn độ 2019-2020, luật an ninh quốc gia 2020. Gái ngành thì nổi tiếng ở Wan Chai, chờ khảo sát thêm 😌.",
        };
        // Thay bằng: await fetch("/api/cities/hong-kong") khi có Firebase
        setTimeout(() => setData(mockData), 1000); // Delay giả lập
      } catch (err) {
        setError("Không tải được dữ liệu Hương Cảng.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

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
      <section className="text-white">
        {loading ? (
          <div className="text-gray-300">Đang tải dữ liệu Hương Cảng...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <>
            <h1 className="text-4xl font-bold text-yellow-50 mb-4">
              {data?.name}
            </h1>
            <p className="text-lg text-gray-300">{data?.bio}</p>
            {/* Thêm danh sách thành phố gợi ý sau này */}
            <div className="mt-6">
              <h2 className="text-2xl font-bold text-yellow-50">
                Thành phố khác
              </h2>
              <p className="text-gray-300">Chờ API: Cửu Long, Đảo HK...</p>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default HongKong;
