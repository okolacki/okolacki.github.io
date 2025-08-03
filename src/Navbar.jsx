import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // Pamiętaj o instalacji react-icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="relative">
      {/* Nawigacja dla komputerów stacjonarnych */}
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider items-center justify-between px-6 py-4 text-gray-800">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/work">Work</Link>
        <Link to="/cv">CV</Link>
      </div>

      {/* Ikona menu dla urządzeń mobilnych */}
      <div className="md:hidden flex justify-end p-4">
        <button onClick={toggleMenu} className="text-2xl text-gray-800">
          {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Menu nawigacyjne dla urządzeń mobilnych */}
      <div className={`md:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col gap-4 text-center p-6 text-gray-800">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About</Link>
          <Link to="/work" onClick={toggleMenu}>Work</Link>
          <Link to="/cv" onClick={toggleMenu}>CV</Link>
        </div>
      </div>
    </header>
  );
}