import Link from "next/link";
import { Suspense } from "react";
import { cities } from "@/client-components/city-components/cities";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cities | Chronicles of Valor",
  description:
    "Discover five politically influential regions: Vietnam, Japan, Taiwan, China, and Hong Kong.",
};

const Cities = () => {
  return (
    <div className={`flex flex-col items-center p-4 text-white`}>
      <div className="flex justify-start max-w-5xl mx-auto mb-2">
        <Link href="/">
          <button className="mt-8 px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-700 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
            ← Back
          </button>
        </Link>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-5xl mx-auto">
        {cities.map(({ id, component: City }) => (
          <div
            key={id}
            className="w-full border-2 border-gray-300 rounded-lg p-4"
          >
            <Suspense fallback={<div className="h-60 bg-gray-200"></div>}>
              <City />
            </Suspense>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Cities;
