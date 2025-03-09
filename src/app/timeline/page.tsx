"use client";
import Link from "next/link";
import { timelineItems } from "./era"; // Import the timeline data

const Timeline = () => {
  return (
    <>
      <div className={`flex flex-col items-center`}>
        <div className="flex flex-col items-center justify-center py-12 relative transition-transform duration-500 ease-out animate-fadeIn">
          <h2 className="text-center text-2xl font-bold text-white mb-6">
            Choose Your Period
          </h2>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-5xl relative z-10 transition-transform duration-1000 ease-out `}
          >
            {timelineItems.map(({ title, description, link }) => (
              <Link key={title} href={link} className="block group">
                <div className="border bg-slate-950/50 hover:bg-slate-950 p-4 rounded-lg shadow-lg hover:bg-opacity-80 transition-all transform hover:scale-105">
                  {/* Text Section */}
                  <h3 className="font-semibold text-lg text-white">{title}</h3>
                  <p className="mt-2 text-sm text-white">{description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/">
          <button className="mt-8 px-6 py-3 text-white text-lg font-bold bg-slate-950/50 hover:bg-stone-950 transition-all duration-200 rounded-lg shadow-lg hover:scale-105">
            ← Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Timeline;
