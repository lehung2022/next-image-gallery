"use client";
import Link from "next/link";
import { dynasties } from "@/client-components/dynasty-components/dynasties";

const Dynasties = () => {
  return (
    <>
      <div className={`flex flex-col items-center p-10 `}>
        <div
          className={`transition-transform duration-500 ease-out animate-slideDown`}
        >
          {/* Title for the section */}
          <h2 className="text-3xl text-center font-bold text-white mb-4">
            Ancient Dynasties
          </h2>
        </div>
        {/* Responsive Section Layout */}
        <section
          className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2 w-full`}
        >
          {dynasties.map(({ id, component: Dynasties }) => (
            <div
              key={id}
              className="w-full border-2 border-gray-300 rounded-lg p-4"
            >
              <Dynasties />
            </div>
          ))}
        </section>
        {/* Back Button */}
        <Link href="/" className="animate-fadeIn">
          <button className="text-white mt-4 bg-slate-950/50 hover:bg-slate-950 px-4 py-2 rounded-lg mb-4">
            ← Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Dynasties;
