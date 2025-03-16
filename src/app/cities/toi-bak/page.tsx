"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

// Fetch function for Tokyo
const getToiBakData = async () => {
  const mockData = {
    name: "Toi Bak",
    bio: `Taipei was founded in the early 18th century by Chinese immigrants from Fujian province on the mainland. In the 19th century it became an important centre for overseas trade via its ports of Chi-lung and Tan-shui (Danshui). Taipei was made an administrative entity of the Chinese government in 1875, and, when Taiwan was proclaimed a province of China in 1886, the city was made the provincial capital. The Japanese acquired Taiwan in 1895 as part of the peace agreement after the first Sino-Japanese War and retained Taipei as the capital. During that time the city acquired the characteristics of an administrative centre, including many new public buildings and housing for civil servants.`, // Add the rest if needed
  };
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
  return mockData;
};

const ToiBak = () => {
  const [data, setData] = useState<{ name: string; bio: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getToiBakData();
      setData(fetchedData);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center text-center">
        <div className="flex justify-start max-w-5xl mx-auto mb-2">
          <Link href="/cities">
            <button className="mt-8 px-6 py-3 text-lg text-white font-bold bg-slate-950/50 hover:bg-stone-700 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
              ← Back
            </button>
          </Link>
        </div>
        {loading ? (
          <div className="text-gray-300">Đang tải dữ liệu Đài Bắc...</div>
        ) : (
          <div className="bg-slate-950/50 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-yellow-50 mb-4">
              {data?.name}
            </h1>
            <div className="text-lg text-gray-300 whitespace-pre-line overflow-y-auto max-h-[500px] scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
              {data?.bio}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ToiBak;
