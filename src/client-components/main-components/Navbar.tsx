"use client";
import Link from "next/link";
import Linkbar from "./Linkbar";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 p-4">
      <div className="flex justify-between items-center transition-transform duration-1000 ease-out">
        <Link href="/" className="group">
          <div className="flex items-center gap-x-4">
            <Image
              src="/other_images/vietnam_royal_flag.png"
              alt="Website Logo"
              width={40}
              height={40}
              priority={false}
            />
            <h1 className="group-hover:text-blue-400 transition-colors duration-300">
              黎興歷史 Wiki
            </h1>
          </div>
        </Link>
        <div className="flex items-center gap-6 flex-shrink-0">
          <SearchBar />
          <Linkbar />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
