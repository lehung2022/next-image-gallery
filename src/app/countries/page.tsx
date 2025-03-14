"use client";
import Link from "next/link";

const Countries = () => {
  return (
    <>
      <div className={`flex flex-col items-center p-10 text-white`}>
        <div className="text-white text-2xl">Countries</div>
        {/* Back Button */}
        <div className="flex justify-start max-w-5xl mx-auto mb-4">
          <Link href="/">
            <button className="mt-8 px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-700 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
              ← Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Countries;
