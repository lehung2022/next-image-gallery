import CityList from "@/server-components/cities/CityList";

export default async function CityPage({
  params,
}: {
  params: { city: string };
}) {
  return <CityList city={params.city} />;
}
