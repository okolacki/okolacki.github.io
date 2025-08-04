import React, { useState } from "react";
import Navbar from "./Navbar";
import { Css3, Html5, Code, Database, Linux, Server, Github, Movie, AdobePhotoshop, Figma } from "iconoir-react";


// Skill sets
const skillSets = [
  {
    category: "Web Development",
    skills: [
      { name: "JavaScript", icon: <Code width={36} height={36} color="#000000ff" /> },
      { name: "HTML5", icon: <Html5 width={36} height={36} color="#000000ff" /> },
      { name: "CSS", icon: <Css3 width={36} height={36} color="#000000ff" /> },
      { name: "PHP", icon: <Code width={36} height={36} color="#000000ff" /> },
      { name: "React", icon: <Code width={36} height={36} color="#000000ff" /> },
      { name: "Tailwind CSS", icon: <Css3 width={36} height={36} color="#000000ff" /> },
      { name: "SQL", icon: <Database width={36} height={36} color="#000000ff" /> },
    ]
  },
  {
    category: "Servers & Tools",
    skills: [
      { name: "Linux", icon: <Linux width={36} height={36} color="#000000ff" /> },
      { name: "Linux Server", icon: <Server width={36} height={36} color="#000000ff" /> },
      { name: "Windows Server", icon: <Server width={36} height={36} color="#000000ff" /> },
      { name: "GitHub", icon: <Github width={36} height={36} color="#000000ff" /> },
    ]
  },
  {
    category: "Graphic & Video",
    skills: [
      { name: "Adobe Photoshop", icon: <AdobePhotoshop width={36} height={36} color="#000000ff" /> },
      { name: "DaVinci Resolve", icon: <Movie width={36} height={36} color="#000000ff" /> },
      { name: "Figma", icon: <Figma width={36} height={36} color="#000000ff" /> },
    ]
  }
];

// Accordion Component
function SkillAccordion() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="grid grid-cols-1 gap-6">
      {skillSets.map((set, idx) => (
        <div key={set.category}>
          <button
            className="w-full flex items-center justify-between p-4 bg-white rounded-md shadow-lg text-left font-semibold text-gray-800 hover:bg-gray-50 transition"
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`skills-panel-${idx}`}
          >
            <span>{set.category}</span>
            <span>{openIndex === idx ? "▲" : "▼"}</span>
          </button>
          <div
            id={`skills-panel-${idx}`}
            className={`transition-all duration-300 ${openIndex === idx ? 'max-h-40 pt-2' : 'max-h-0 overflow-hidden'}`}>
            <div className="flex flex-wrap gap-6 pl-4">
              {set.skills.map(skill =>
                <div className="flex flex-col items-center" key={skill.name}>
                  {skill.icon}
                  <span className="text-xs mt-2 text-gray-600 uppercase tracking-wide">{skill.name}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Full CV component
export default function Cv() {
  return (
    <>
      <Navbar />
      <section className="relative overflow-hidden py-16 px-6 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-6xl md:text-7xl leading-tight text-orange-400">
              My<span className="italic">JOURNEY</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Column 1: Experience & Education */}
            <div className="space-y-10">
              {/* --- Professional Experience --- */}
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 border-b-2 border-orange-400 pb-2">
                  Professional Experience
                </h3>
                <div className="mt-6 space-y-8">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">2023 - Present</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">Technical Service</h4>
                    <p className="text-gray-700">Klub Piłki Siatkowej Chemik Police S.A. | Szczecin, Poland</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Preparing the sports venue for match events in accordance with sponsorship requirements</li>
                      <li>Setting up the club's partners display materials</li>
                      <li>Maintaining good condition of display materials</li>
                      <li>Ensuring the aesthetic aspect of marketing materials in the venue</li>
                    </ul>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">2023 - Present</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">Social Media Marketing</h4>
                    <p className="text-gray-700">Moje M | Police, Poland</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Real Estate Video shooting</li>
                      <li>Video Editing</li>
                    </ul>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">06-07.2023, 06-07.2024</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">Technical Service</h4>
                    <p className="text-gray-700">Zachodniopomorski Związek Piłki Siatkowej | Kołobrzeg, Poland</p>
                    <p className="text-gray-700">Młodzieżowy Międzynarodowy Puchar Bałtyku w Siatkówce Plażowej</p>
                    <p className="text-gray-700">Ogólnopolskie Mistrzostwa w Minisiatkówce Plażowej o Puchar KINDER Joy of Moving</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Installation and removal of beach volleyball infrastructure and courts</li>
                      <li>Technical infrastructure setup: court lines, nets, banners, tents</li>
                      <li>Setting up promotional and marketing materials</li>
                      <li>Technical and logistical assistance during tournaments</li>
                      <li>Ensuring safety and cleanliness</li>
                    </ul>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">01-09.2024, 30-09.2024</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">Graphic Design Practices</h4>
                    <p className="text-gray-700">INTO.ZONE | Szczecin, Poland</p>
                  </div>
                </div>
              </div>
              {/* --- Education --- */}
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 border-b-2 border-orange-400 pb-2">
                  Education
                </h3>
                <div className="mt-6 space-y-8">
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">2021 - Present</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">Student</h4>
                    <p className="text-gray-700">Szczecińskie Collegium Informatyczne | Szczecin, Poland</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">2021</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">IC3 Spark Certification</h4>
                    <p className="text-gray-700">Szczecińskie Collegium Informatyczne | Szczecin, Poland</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">2023</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">eJPT Certification</h4>
                    <p className="text-gray-700">Szczecińskie Collegium Informatyczne | Szczecin, Poland</p>
                  </div>
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">2024</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">INF.02 Certification</h4>
                    <p className="text-gray-700">Szczecińskie Collegium Informatyczne | Szczecin, Poland</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Column 2: Skills & Other Info */}
            <div className="space-y-10">
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 border-b-2 border-orange-400 pb-2 mb-4">
                  Skills
                </h3>
                <SkillAccordion />
              </div>
              {/* --- Languages --- */}
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 border-b-2 border-orange-400 pb-2">Languages</h3>
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-white rounded-md shadow-lg">
                    <h4 className="font-semibold text-gray-800">Polish</h4>
                    <p className="text-sm text-gray-600 mt-1">Native</p>
                  </div>
                  <div className="p-4 bg-white rounded-md shadow-lg">
                    <h4 className="font-semibold text-gray-800">English</h4>
                    <p className="text-sm text-gray-600 mt-1">B2+</p>
                  </div>
                  <div className="p-4 bg-white rounded-md shadow-lg">
                    <h4 className="font-semibold text-gray-800">Spanish</h4>
                    <p className="text-sm text-gray-600 mt-1">B1</p>
                  </div>
                </div>
              </div>
              {/* --- Interests --- */}
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 border-b-2 border-orange-400 pb-2">Interests</h3>
                <div className="mt-6">
                  <div className="p-4 bg-white rounded-md shadow-lg">
                    <p className="text-sm text-gray-600 mt-1">Sports, travelling, cooking</p>
                  </div>
                </div>
              </div>
              {/* Możesz dodać kolejne sekcje jeżeli chcesz */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
