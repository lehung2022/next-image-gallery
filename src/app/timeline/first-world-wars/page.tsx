"use client";
import Link from "next/link";

const FirstWorldWar = () => {
  return (
    <>
      <div className={`flex flex-col items-center p-10 `}>
        {/* Back Button */}
        <Link href="/timeline">
          <button className="mt-8 px-6 py-3 text-white text-lg font-bold bg-slate-950/50 hover:bg-stone-950 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
            ← Back
          </button>
        </Link>
        <div className="border p-4 rounded-lg shadow-lg text-white">
          <p>How the first world war actually ended</p>
        </div>
      </div>
    </>
  );
};

export default FirstWorldWar;
