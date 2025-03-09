"use client";
import Link from "next/link";

const Countries = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-white">Countries</div>
        {/* Back Button */}
        <Link href="/">
          <button className="text-white bg-slate-950/50 hover:bg-slate-950 px-4 py-2 rounded-lg mb-4">
            ← Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Countries;
