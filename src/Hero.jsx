import React from "react";
import Zdjecie from "./fotka.jpg"

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 px-6 h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-serif text-6xl md:text-7xl leading-tight text-blue-400">
          Oliver <span className="italic">KOŁACKI</span><span className=""> Portfolio</span>
        </h1>
        <div className="mt-8 flex justify-center">
          <div className="w-50 bg-gradient-to-br from-blue-200 to-pink-200 rounded-md flex items-center justify-center">
            <img src={Zdjecie} alt="" className="rounded-md" />
          </div>
        </div>
        <div className="mt-4 text-xs uppercase text-gray-600 flex justify-between px-4">
          <div className="font-medium">GRAPHIC DESIGN &amp; WEB DEVELOPMENT</div>
          <div className="font-medium">READY TO SEE MY WORK?</div>
        </div>
      </div>

      {/* dekoracyjne bloki/obrazy na dole */}
      <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-indigo-200 to-transparent pointer-events-none"></div>
    </section>
  );
}
