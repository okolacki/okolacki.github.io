import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Asap from "/public/asaprockytapeta_Original.jpeg";
import Logo2 from "/public/logo2.jpg";
import Orly from "/public/orly.png";
import Polska from "/public/plakatpolska.jpg";
import Ulotka1 from "/public/ulotka.jpg";
import Ulotka2 from "/public/ulotkaapteka.jpg";
import Tee from "/public/watchyourtee.png";
import Pyknijmy from "/public/logopyknijmy.png";
import Bat from "/public/batclicker.png";

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute right-4 z-20 cursor-pointer text-black text-3xl opacity-80 hover:opacity-100 transition-opacity`}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} absolute left-4 z-20 cursor-pointer text-black text-3xl opacity-80 hover:opacity-100 transition-opacity`}
      onClick={onClick}
    >
    <FaChevronLeft />
    </div>
  );
};

const items = [
  { id: 1, label: Asap },
  { id: 2, label: Logo2 },
  { id: 3, label: Orly },
  { id: 4, label: Ulotka1 },
  { id: 5, label: Polska },
  { id: 6, label: Ulotka2 },
  { id: 7, label: Tee },
];

export default function ProjectsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="py-16 px-6 bg-white relative z-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-serif text-6xl md:text-7xl mb-2 leading-tight text-pink-400 flex justify-center">
          My <span className="italic">WORK</span>
        </h1>
        <h1 className="font-serif text-xl md:text-2xl mb-4 leading-tight text-pink-400 flex justify-center">
           <span className="italic">Projects</span>
        </h1>
        <div className="flex flex-row justify-center gap-20">
          <a href="https://github.com/BoomBat-esmovia">
        <div className="p-6 relative mb-10 overflow-hidden rounded-md bg-gradient-to-br from-blue-100 to-pink-300 h-[50vh] w-[35vw] flex justify-center flex-col items-center transition duration-300 ease-in-out hover:scale-105">
        <div className="w-120 h-50 bg-white/20 backdrop-blur-lg rounded-xl p-8 border border-white/30 shadow-xl">
        <img src={Bat} alt="" className="w-full h-full object-contain" />
        </div>
          <h1 className="text-pink-400 text-2xl font-serif  rounded-md mt-2">Boombat</h1>
          <p className="text-center">Game service where you climb up the Batcoins leaderboard - currency you can earn by playing games.</p>
        </div>
        </a>
        <a href="https://github.com/niedlich3/PyknijMy">
        <div className="p-6 relative mb-10 overflow-hidden rounded-md bg-gradient-to-br from-blue-100 to-pink-300 h-[50vh] w-[35vw] flex justify-center flex-col items-center transition duration-300 ease-in-out hover:scale-105">
        <div className="w-120 h-50 bg-white/20 backdrop-blur-lg rounded-xl p-8 border border-white/30 shadow-xl">
        <img src={Pyknijmy} alt="" className="w-full h-full object-contain"/>
        </div>
          <h1 className="text-pink-400 text-2xl font-serif  rounded-md mt-2">PyknijMY</h1>
          <p className="text-center">Website that helps you find people to do activities with, you always can find someone to play sports with, go to a concert or even study.</p>
        </div>
        </a>
        </div>
        <h1 className="font-serif text-xl md:text-2xl mb-4 leading-tight text-pink-400 flex justify-center">
           <span className="italic">Graphic Design</span>
        </h1>
        <Slider {...settings}>
          {items.map((it) => (
            <div key={it.id}>
              <div className="relative overflow-hidden rounded-md bg-gradient-to-br from-blue-100 to-pink-300 h-[80vh]">
                <img src={it.label} alt="" className="w-full h-full object-contain p-4" />
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="fixed inset-x-0 bottom-0 h-20 bg-gradient-to-t from-pink-200 to-transparent pointer-events-none z-0"></div>
    </section>
  );
}