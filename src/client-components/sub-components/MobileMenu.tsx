"use client";
import NavLinks from "./NavLinks";

type MobileMenuProps = {
  isOpen: boolean;
  toggleMenu: () => void;
};

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu }) => {
  return (
    <>
      {/* Background overlay to close menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleMenu}
        />
      )}

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-slate-800 text-white flex flex-col items-center justify-center transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-500 ease-in-out z-40`}
      >
        {/* Close button in the top-left corner */}
        <button
          className={`absolute top-4 ${
            isOpen ? "left-4" : "right-4"
          } text-2xl transition-all duration-500`}
          onClick={toggleMenu}
          aria-label="Close menu"
        >
          ✖
        </button>

        {/* Navigation Links (Centered in Screen) */}
        <nav className="flex flex-col items-center gap-6 text-xl">
          <NavLinks onClick={toggleMenu} />
        </nav>
      </div>
    </>
  );
};

export default MobileMenu;
