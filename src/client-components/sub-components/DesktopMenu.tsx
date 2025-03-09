"use client"
import NavLinks from "./NavLinks";

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex space-x-6">
      <NavLinks />
    </div>
  );
};

export default DesktopMenu;
