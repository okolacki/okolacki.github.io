import React from "react";
import {Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="">
      <div className="hidden md:flex gap-8 text-sm uppercase tracking-wider flex items-center justify-between px-6 py-4">
        <Link to="/"><div>Home</div></Link>
        <Link to="/about"><div>About</div></Link>
        <Link to="/work"><div>Work</div></Link>
        <Link to="/cv"><div>CV</div></Link>
      </div>
    </header>
  );
}
