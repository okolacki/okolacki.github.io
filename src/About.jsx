import React from "react";
import Navbar from "./Navbar";
// Załóżmy, że masz jakieś zdjęcie profilowe, np. fotka.jpg
import ZdjecieProfilowe from "./fotka.jpg";
import Boutme from "/public/zdjecie.jpg"
import { FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
export default function About() {
  return (
    <>
    <Navbar/>
    <section className="relative overflow-hidden py-16 px-6 h-screen flex items-center bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Kolumna z tekstem */}
        <div className="text-center md:text-left">
          <h2 className="font-serif text-6xl md:text-7xl leading-tight text-green-500">
            About <span className="italic">Me</span>
          </h2>
          <p className="mt-6 text-lg text-gray-700 leading-relaxed">
          Hi! My name is Oliver, and I'm a high school student from Poland specializing in informatics.
          I would describe myself as someone who loves learning new things, working in a team, and isn't afraid to take on responsibility.
          I also enjoy improving my skills and character every day. Besides that, I love spending time with my friends and family,
          and I enjoy playing sports, especially running, going to the gym, and football.
          </p>
          <div className="mt-8 flex justify-center md:justify-start space-x-6">
              <a href="https://github.com/okolacki-github-profile" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-colors duration-300">
                <FaGithub size={32} />
              </a>
              <a href="https://www.instagram.com/o.kolacki/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-colors duration-300">
                <FaInstagram size={32} />
              </a>
              <a href="https://www.facebook.com/o.kolacki/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-colors duration-300">
                <FaFacebook size={32} />
              </a>
            </div>
        </div>
        
        {/* Kolumna ze zdjęciem i dekoracjami */}
        <div className="relative flex justify-center md:justify-end">
          {/* Duży, zielony okrąg jako tło */}
          <div className="absolute w-full h-full rounded-full bg-gradient-to-br from-green-300 to-emerald-400 opacity-60 blur-2xl top-0 left-0 animate-pulse-slow"></div>
          
          {/* Kontener na zdjęcie */}
          <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden shadow-2xl z-10 transition-transform hover:scale-105 duration-300">
            <img
              src={Boutme}
              alt="Zdjęcie profilowe"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
      </div>

      {/* Dekoracyjny gradient na dole, tak jak w Hero */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-green-200 to-transparent pointer-events-none z-0"></div>
    </section>
    </>
  );
}