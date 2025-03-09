"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-6 text-white bg-gray-900">
      <h1 className="text-6xl font-bold text-yellow-50">404</h1>
      <p className="text-2xl text-gray-300">No Results Found</p>
      <p className="text-lg text-gray-400 max-w-md text-center">
        Sorry, we couldn’t find any results for your search.
      </p>
      <Link href="/">
        <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg">
          ← Back
        </button>
      </Link>
    </div>
  );
}
