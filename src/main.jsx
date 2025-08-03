import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './About.jsx';
import Work from './Work.jsx';
import Cv from './Cv.jsx';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="about" element={<About />} />
      <Route path="work" element={<Work />} />
      <Route path="cv" element={<Cv/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
