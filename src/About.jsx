import React from "react";
import Navbar from "./Navbar";
import ZdjecieProfilowe from "./fotka.jpg";
import Boutme from "/public/zdjecie.jpg";
import { FaGithub} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden py-10 px-4 min-h-screen flex items-center bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Kolumna z tekstem - dostosowanie marginesów i układu */}
          <div className="text-center md:text-left order-2 md:order-1">
            {/* Zmiana rozmiaru czcionki dla nagłówka na mniejszych ekranach */}
            <h2 className="font-serif text-4xl sm:text-5xl md:text-7xl leading-tight text-green-500">
              About <span className="italic">Me</span>
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-gray-700 leading-relaxed">
              Hi! My name is Oliver, and I'm a high school student from Poland specializing in informatics.
              I would describe myself as someone who loves learning new things, working in a team, and isn't afraid to take on responsibility.
              I also enjoy improving my skills and character every day. Besides that, I love spending time with my friends and family,
              and I enjoy playing sports, especially running, going to the gym, and football.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center md:justify-start space-x-4 sm:space-x-6">
              <a href="https://github.com/okolacki" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-colors duration-300">
                <FaGithub size={28} sm:size={32} />
              </a>
              <a href="mailto:oliverkolacki@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-500 transition-colors duration-300">
                <IoIosMail size={28} sm:size={32} />
              </a>
            </div>
          </div>
          
          {/* Kolumna ze zdjęciem i dekoracjami - przesunięcie na górę w widoku mobilnym */}
          <div className="relative flex justify-center md:justify-end order-1 md:order-2">
            {/* Dekoracje - dostosowanie rozmiaru na mniejszych ekranach */}
            <div className="absolute w-52 h-52 sm:w-64 sm:h-64 md:w-full md:h-full rounded-full bg-gradient-to-br from-green-300 to-emerald-400 opacity-60 blur-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            
            {/* Kontener na zdjęcie - dostosowanie rozmiaru */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl z-10 transition-transform hover:scale-105 duration-300">
              <img
                src={Boutme}
                alt="Zdjęcie profilowe"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Usunięto dekoracyjny gradient na dole, zgodnie z Twoim wcześniejszym życzeniem */}
      </section>
    </>
  );
}