import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ChinaCityList from "@/server-components/cities/ChinaCityList";
import { CityData } from "@/types/city";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city;

  async function getCityData(city: string): Promise<CityData> {
    const mockFirebase: { [key: string]: CityData } = {
      "bak-ging": {
        name: "北京 (Bắc Kinh)",
        bio: "...",
        history: "...",
        events: [],
        politics: "...",
      },
      "seung-hoi": {
        name: "上海 (Thượng Hải)",
        bio: "...",
        history: "...",
        events: [],
        politics: "...",
      },
    };
    const data = mockFirebase[city];
    if (!data) throw new Error("Không tìm thấy");
    return data;
  }

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
  params: Promise<{ city: string }>;
}) {
  const resolvedParams = await params;
  const citySlug = resolvedParams.city;

  const validCities = ["bak-ging", "seung-hoi"];
  if (!validCities.includes(citySlug)) {
    notFound();
  }

  return <ChinaCityList city={citySlug} />;
}
