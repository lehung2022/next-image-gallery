"use client";
import React, { useState, useCallback } from "react";
import DesktopMenu from "@/client-components/sub-components/DesktopMenu";
import MobileMenu from "@/client-components/sub-components/MobileMenu";

const Linkbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="hidden lg:flex w-full justify-evenly">
          <DesktopMenu />
        </div>
        <div className="lg:hidden flex items-center">
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className={`text-2xl text-white ${isOpen ? "hidden" : "block"}`}
            onClick={toggleMenu}
          >
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-slate-100 opacity-50 z-20"
          aria-hidden={!isOpen}
          onClick={closeMenu}
        />
      )}
      <MobileMenu isOpen={isOpen} toggleMenu={closeMenu} />
    </>
  );
};

export default Linkbar;
