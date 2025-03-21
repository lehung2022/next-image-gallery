import { notFound } from "next/navigation";
import HongKongEvent from "@/server-components/cities/HongKongEvent";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; event: string }>;
}): Promise<Metadata> {
  const { city, event } = await params;
  const eventTitles: { [city: string]: { [event: string]: string } } = {
    "hong-kong": {
      "handover-1997": "交還 (1997)",
      "anti-extradition-2019": "反送中 (2019)",
      "umbrella-2014": "雨傘運動 (2014)",
    },
    "gau-lung": {
      "kmt-1940s": "國民黨活動 (1940s)",
    },
  };
  const cityName =
    city === "hong-kong" ? "香港 (Hương Cảng)" : "九龍 (Cửu Long)";
  const eventTitle = eventTitles[city]?.[event] || "Unknown Event";
  return {
    title: `${eventTitle} | Chronicles of Valor`,
    description: `Details of ${eventTitle} in ${cityName}.`,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ city: string; event: string }>;
}) {
  const { city, event } = await params;
  const validCities = ["hong-kong", "gau-lung"];
  if (!validCities.includes(city)) {
    notFound();
  }

  return <HongKongEvent city={city} event={event} />;
}
