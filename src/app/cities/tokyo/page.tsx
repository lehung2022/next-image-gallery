"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

// Fetch function for Tokyo
const getTokyoData = async () => {
  const mockData = {
    name: "Tokyo",
    bio: `The history of the city of Tokyo stretches back some 400 years. Originally named Edo, the city started to flourish after Tokugawa Ieyasu established the Tokugawa Shogunate here in 1603. As the center of politics and culture in Japan, Edo grew into a huge city with a population of over a million by the mid-eighteenth century. Throughout this time, the Emperor resided in Kyoto, which was the formal capital of the nation. The Edo Period lasted for nearly 260 years until the Meiji Restoration in 1868, when the Tokugawa Shogunate ended and imperial rule was restored. The Emperor moved to Edo, which was renamed Tokyo. Thus, Tokyo became the capital of Japan.

    During the Meiji era (1868-1912), Japan began its avid assimilation of Western civilization. Buildings made of stone and bricks were built on the sites of the mansions of feudal lords, and the major roads were paved with round stones. In 1869 Japan’s first telecommunications line was opened between Tokyo and Yokohama, and the first steam locomotive started running in 1872 from Shimbashi to Yokohama. Western hairstyles replaced the traditional topknot worn by men, and bowler hats, high collars, and bustled skirts were the height of fashion. In 1882 Japan’s first zoological gardens were opened in Ueno. In 1885 the cabinet system of government was adopted and Ito Hirobumi became Japan’s first prime minister. With the promulgation of the Constitution of the Empire of Japan in 1889 Japan established the political system of a modern state.`, // Add the rest if needed
  };
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API delay
  return mockData;
};

const Tokyo = () => {
  const [data, setData] = useState<{ name: string; bio: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getTokyoData();
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
          <div className="text-gray-300">Đang tải dữ liệu Tokyo...</div>
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

export default Tokyo;
