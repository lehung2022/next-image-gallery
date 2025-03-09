"use client";
import Link from "next/link";
import { Suspense } from "react";
import { cities } from "@/client-components/city-components/cities";

const Cities = () => {
  return (
    <div className="max-w-5xl mx-auto px-6">
      {/* Back Button */}
      <div className="flex justify-start max-w-5xl mx-auto mb-4">
        <Link href="/">
          <button className="text-white bg-slate-950 hover:bg-slate-950/50 px-4 py-2 rounded-lg">
            ← Back
          </button>
        </Link>
      </div>

      {/* City Grid */}
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
