"use client";
import Link from "next/link";
import { generals } from "@/client-components/characters-components/generals";

const Generals = () => {
  return (
    <>
      <div
        className={`flex flex-col items-center transition-transform duration-1000 ease-out px-4`} // Added padding (px-4) to prevent edge touching on mobile
      >
        <div
          className={`text-3xl bg-gray-950/50 text-center font-bold text-yellow-50 mb-4`}
        >
          <h2>The most legendary Generals</h2>
        </div>
        <section
          className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-4xl`} // Limited max width to 4xl for larger screens
        >
          {generals.map(({ id, component: General }) => (
            <div
              key={id}
              className="w-full sm:w-3/4 md:w-full border-2 border-gray-300 rounded-lg p-4 mx-auto max-w-xs" // Adjusted widths for mobile and added max-w-xs to limit size
            >
              <General />
            </div>
          ))}
        </section>
        <Link href="/">
          <button
            className={`text-white bg-slate-950/50 hover:bg-slate-950 mt-4 px-4 py-2 rounded-lg mb-4`}
          >
            ← Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Generals;
