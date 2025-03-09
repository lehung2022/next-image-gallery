"use client";
import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

// Type router dựa trên ReturnType của useRouter
type RouterType = ReturnType<typeof useRouter>;

const performSearch = (
  query: string,
  router: RouterType,
  onSuccess: () => void
) => {
  fetch(`/api/search?q=${encodeURIComponent(query)}`)
    .then((response) => {
      if (!response.ok) {
        if (response.status === 404) {
          router.push("/not-found");
        } else {
          router.push(
            `/error?message=${encodeURIComponent(
              "Search failed: " + response.status
            )}`
          );
        }
        onSuccess(); // Đóng modal ngay cả khi lỗi
        return;
      }
      return response.json();
    })
    .then(() => {
      router.push(`/search?q=${encodeURIComponent(query)}`);
      onSuccess();
    })
    .catch((error) => {
      console.error("Search error:", error);
      router.push(`/error?message=${encodeURIComponent(error.message)}`);
      onSuccess();
    });
};

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const toggleSearch = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeSearch = () => {
    setIsOpen(false);
    setQuery("");
  };

  const handleSearch = () => {
    if (!query.trim()) return;
    const searchQuery = query; // Lưu query trước khi reset
    setQuery(""); // Reset input ngay lập tức
    performSearch(searchQuery, router, closeSearch);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query.trim()) {
      handleSearch();
    }
  };

  const handleModalContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="relative">
      {/* Desktop */}
      <div className="hidden sm:flex items-center gap-2">
        <input
          type="text"
          placeholder="Search generals, cities, dynasties..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full sm:w-full max-w-md px-4 py-2 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 z-40"
        />
        <button
          onClick={handleSearch}
          className="p-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 z-40"
          aria-label="Search"
        >
          <FaSearch size={24} />
        </button>
      </div>

      {/* Mobile */}
      <button
        onClick={toggleSearch}
        className="p-2 text-blue-200 sm:hidden z-40"
        aria-label="Open search modal"
      >
        <FaSearch size={24} />
      </button>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-800 text-blue-200 flex flex-col items-center transform sm:hidden transition-all duration-700 ease-in-out z-40 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        onClick={closeSearch}
      >
        <div
          className="relative z-50 flex flex-col items-center w-full max-w-md p-6"
          onClick={handleModalContentClick}
        >
          <button
            className="absolute top-4 left-4 text-2xl text-blue-200"
            aria-label="Close search modal"
            onClick={closeSearch}
          >
            ✖
          </button>
          <div className="flex justify-center items-center gap-2 w-full mt-12">
            <input
              type="text"
              placeholder="Search generals, cities, dynasties..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-3/4 px-4 py-2 rounded-md bg-gray-800 text-blue-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
              autoFocus
            />
            <button
              onClick={handleSearch}
              className="p-2 bg-gray-700 text-blue-200 rounded-md hover:bg-gray-600"
              aria-label="Search"
            >
              <FaSearch size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
