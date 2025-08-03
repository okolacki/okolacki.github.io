import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ProjectsGrid from "./ProjectsGrid";
import { BrowserRouter, Routes, Route, Link, Navigate } from "react-router-dom";
import Cv from "./Cv";
import About from "./About";
import Work from "./Work";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      {/* ewentualny footer */}
    </div>
  );
}

export default App;
