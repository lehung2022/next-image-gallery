import { notFound } from "next/navigation";
import HongKongCityList from "@/server-components/cities/HongKongCityList";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await params;
  const cityNames: { [key: string]: string } = {
    "hong-kong": "香港 (Hương Cảng)",
    "gau-lung": "九龍 (Cửu Long)",
  };
  const title = cityNames[city] || "Unknown City";
  return {
    title: `${title} | Chronicles of Valor`,
    description: `Explore the history and events of ${title} under CCP influence.`,
  };
}

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await params;
  const validCities = ["hong-kong", "gau-lung"];
  if (!validCities.includes(city)) {
    notFound();
  }

  return <HongKongCityList city={city} />;
}
