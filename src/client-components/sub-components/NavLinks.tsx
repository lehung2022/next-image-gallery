"use client";
import Link from "next/link";

type NavLinksProps = {
  onClick?: () => void; // Optional, used only for closing mobile menu
};

const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const links = [
    { href: "/about", label: "About" },
    { href: "/dynasties", label: "Dynasties" },
    { href: "/timeline", label: "Timeline" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex flex-col items-center lg:flex-row lg:space-x-6 gap-4">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="hover:text-blue-400 active:text-red-600 text-xl"
          onClick={onClick}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default NavLinks;
