"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Search() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";

  // Giả lập kết quả, sau này nối API
  const results = query ? [`Result for "${query}"`] : [];

  return (
    <div className="flex flex-col gap-6 p-6 text-white">
      <h1 className="text-4xl font-bold text-center text-yellow-50 sm:text-5xl">
        Search Results
      </h1>
      {query ? (
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto">
          Showing results for: <span className="font-bold">{query}</span>
        </p>
      ) : (
        <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto">
          Please enter a search query.
        </p>
      )}
      <div className="max-w-5xl mx-auto w-full">
        {results.length > 0 ? (
          <ul className="list-disc list-inside text-gray-300">
            {results.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-gray-300">No results found.</p>
        )}
      </div>
      <Link href="/">
        <button className="mt-8 px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-700 rounded-lg shadow-lg mx-auto block">
          ← Back
        </button>
      </Link>
    </div>
  );
}
