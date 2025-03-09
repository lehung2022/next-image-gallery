"use client";
import Link from "next/link";

const FeudalTimes = () => {
  return (
    <>
      <div className={`flex flex-col items-center p-10 `}>
        {/* Back Button */}
        <Link href="/timeline">
          <button className="mt-8 px-6 py-3 text-white text-lg font-bold bg-slate-950/50 hover:bg-stone-950 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
            ← Back
          </button>
        </Link>
        {/* Feudal Times Link */}
        <div className="border p-4 rounded-lg shadow-lg text-white">
          <p>
            Since this is feudal times, I will list out all of the dynasties.
            The dynasties will belong to each country. There will be three
            countries here. One, is Vietnam. Two, is Japan. And last, is China.
            For Taiwan, I will mention this island after the Nationalist Party
            set foot on this island, not before.
          </p>
        </div>
      </div>
    </>
  );
};

export default FeudalTimes;
