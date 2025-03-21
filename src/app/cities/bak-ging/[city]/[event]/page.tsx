import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ChinaEvent from "@/server-components/cities/ChinaEvent";
import { EventData } from "@/types/city";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; event: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const { city: citySlug, event: eventSlug } = resolvedParams;

  async function getEventData(
    city: string,
    eventSlug: string
  ): Promise<EventData> {
    const mockFirebase: { [city: string]: { [eventSlug: string]: EventData } } =
      {
        beijing: {
          "tainierzhuang-1938": { title: "臺兒莊大捷 (1938)", detail: "..." },
          "tiananmen-1989": { title: "天安門屠殺 (1989)", detail: "..." },
        },
        shanghai: {
          "sihang-1937": { title: "四行倉庫保衛戰 (1937)", detail: "..." },
          "clinton-1990s": { title: "克林頓經濟政策 (1990s)", detail: "..." },
        },
      };
    const cityData = mockFirebase[city];
    const data = cityData && cityData[eventSlug];
    if (!data) throw new Error("Không tìm thấy");
    return data;
  }

  try {
    const data = await getEventData(citySlug, eventSlug);
    return {
      title: `${data.title} | Trung Quốc | Chronicles of Valor`,
      description: `揭露${data.title}的真相 - Uncover the truth of ${data.title}.`,
    };
  } catch (error) {
    return {
      title: "Không tìm thấy | Trung Quốc | Chronicles of Valor",
      description: "Trang không tồn tại.",
    };
  }
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ city: string; event: string }>;
}) {
  const resolvedParams = await params;
  const { city: citySlug, event: eventSlug } = resolvedParams;

  const validCities = ["bak-ging", "seung-hoi"];
  if (!validCities.includes(citySlug)) {
    notFound();
  }

  return (
    <>
      <ChinaEvent city={citySlug} event={eventSlug} />
    </>
  );
}
