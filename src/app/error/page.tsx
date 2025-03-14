"use client";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error?: Error;
  reset?: () => void;
}) {
  const searchParams = useSearchParams();
  const errorMessage =
    searchParams.get("message") || error?.message || "Unknown error";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-8 sm:p-10 text-white bg-gray-900">
      <h1 className="text-4xl sm:text-6xl font-bold text-yellow-50">500</h1>
      <p className="text-xl sm:text-2xl text-gray-300">Something Went Wrong</p>
      <p className="text-lg text-gray-400 max-w-md text-center">
        An error occurred: {errorMessage}.
      </p>
      <div className="flex gap-4">
        {reset && (
          <button
            onClick={reset}
            className="px-6 py-3 text-lg font-bold bg-slate-950/50 hover:bg-stone-700 rounded-lg shadow-lg"
          >
            Try Again
          </button>
        )}
        <Link href="/">
          <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg mb-4">
            ← Back
          </button>
        </Link>
      </div>
    </div>
  );
}
