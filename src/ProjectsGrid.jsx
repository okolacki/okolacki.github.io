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
import Herb from "/public/Herb_Polski.svg";
import Break from "/public/breakiticon.png"

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

const myProjects = [
    {
        id: 1,
        title: "BreakIT",
        description: "Game designed especially for new groups getting to know eachother, or groups of people looking for a deeper connection. SCI Hackathon winning project",
        image: Break,
        link: "https://github.com/Elteys/Hackhaton_SCI_2025_BreakIT"
    },
    // Dodałem 2x to samo dla podglądu, zmień sobie dane na właściwe :)
    {
        id: 2,
        title: "Lost And Found",
        description: "Service made for simplfying civic lost and found data across municipal areas. HackNation Hackathon 2025 Project",
        image: Herb,
        link: "https://github.com/Elteys/HackNation_2025_Odnalezione_Zguby_Gitownia"
    },
    {
        id: 3,
        title: "Boombat 3",
        description: "Game service where you climb up the Batcoins leaderboard - currency you can earn by playing games.",
        image: Bat,
        link: "https://github.com/BoomBat-esmovia"
    },
    {
        id: 4,
        title: "PyknijMY",
        description: "Website that helps you find people to do activities with. Find someone to play sports, go to a concert or even study.",
        image: Pyknijmy,
        link: "https://github.com/niedlich3/PyknijMy"
    }
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {myProjects.map((project) => (
                        <a
                            key={project.id}
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="group block h-full"
                        >
                            <div className="relative h-full p-8 flex flex-col items-center justify-start rounded-3xl bg-gradient-to-br from-blue-50 via-white to-pink-50 border border-white shadow-lg hover:shadow-2xl hover:shadow-pink-200/50 transition-all duration-500 ease-out group-hover:-translate-y-2 overflow-hidden">

                                {/* Opcjonalny dekoracyjny "glow" w tle karty */}
                                <div className="absolute -top-10 -right-10 w-32 h-32 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>
                                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

                                {/* Kontener na obrazek (Glassmorphism) */}
                                <div className="relative w-full max-w-[240px] h-48 mb-6 flex items-center justify-center bg-white/40 backdrop-blur-md rounded-2xl p-6 border border-white/60 shadow-sm group-hover:bg-white/60 transition-colors duration-500">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />
                                </div>

                                {/* Teksty */}
                                <h2 className="text-pink-500 text-3xl font-serif font-semibold mb-3 relative z-10">
                                    {project.title}
                                </h2>
                                <p className="text-gray-600 text-center text-sm leading-relaxed max-w-sm relative z-10">
                                    {project.description}
                                </p>

                            </div>
                        </a>
                    ))}
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