"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const getSaigonData = async () => {
  const mockData = {
    name: "Sài Gòn",
    bio: "Trung tâm Nam Kỳ dưới Pháp, Dinh Độc Lập thời VNCH, giải phóng 30/4/1975. Gái ngành thì khu Bùi Viện nổi tiếng, chờ khảo sát thêm 😌.",
  };
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay giả lập
  return mockData;
};

const Saigon = () => {
  const [data, setData] = useState<{ name: string; bio: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getSaigonData();
      setData(fetchedData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        {loading ? (
          <div className="text-gray-300">Đang tải dữ liệu Sài Gòn...</div>
        ) : (
          <div className="text-white">
            <h1 className="text-4xl font-bold text-yellow-50 mb-4">
              {data?.name}
            </h1>
            <p className="text-lg text-gray-300">{data?.bio}</p>
          </div>
        )}
        {/* Back Button (Centralized) */}
        <Link href="/cities">
          <button className="text-white bg-slate-900 hover:bg-slate-950/50 px-4 py-2 rounded-lg mb-4">
            ← Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Saigon;
