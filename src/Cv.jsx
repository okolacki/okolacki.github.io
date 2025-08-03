import React from "react";
import Navbar from "./Navbar";

export default function Cv() {
  return (
    <>
      {/* Assuming you have a Navbar component */}
      <Navbar /> 
      <section className="relative overflow-hidden py-16 px-6 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-serif text-6xl md:text-7xl leading-tight text-orange-400">
              My <span className="italic">Journey</span>
            </h2>
          </div>

          {/* CV Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Column 1: Experience & Education */}
            <div className="space-y-10">
              {/* Experience Section */}
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 border-b-2 border-orange-400 pb-2">
                  Professional Experience
                </h3>
                <div className="mt-6 space-y-8">
                  {/* Job Entry 1 */}
                  <div className="relative pl-8">
                    {/* Decorative line */}
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    {/* Circle bullet point */}
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">2023 - Present</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">Technical Service</h4>
                    <p className="text-gray-700">Klub Piłki Siatkowej Chemik Police S.A. | Szczecin, Poland</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Preparing the sports venue for match events in accordance with sponsorships requirements</li>
                      <li>Setting up the club's partners display materials</li>
                      <li>Maintaing a good condition of display materials</li>
                      <li>Ensuring the aesthetical aspect of marketing materials in the venue</li>
                    </ul>
                  </div>
                                    <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">2023-Present</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">Social Media Marketing</h4>
                    <p className="text-gray-700">Moje M | Police, Poland</p>
                      <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Real Estate Video shooting</li>
                      <li>Video Editing</li>
                    </ul>
                  </div>
                  {/* Job Entry 2 (Add more as needed) */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">06-07.2023, 06-07.2024</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">Technical Serivce</h4>
                    <p className="text-gray-700">Zachondiopomorski Związek Piłki Siatkowej | Kołobrzeg, Poland</p>
                    <p className="text-gray-700">Młodzieżowy Międzynarodowy Puchar Bałytku w Siatkówce Plażowej</p>
                    <p className="text-gray-700">Ogólnopolskie Mistrzostwa w Minisiatkówce Plażowej o Puchar KINDER Joy of Moving</p>
                    <ul className="list-disc list-inside mt-2 text-gray-600">
                      <li>Installation and removal of a beach volleyball infrastructure and courts in accordance with organizers guidelines and sport rules</li>
                      <li>Installation and removal of a technical infrastructure such as: court lines, nets, banners, tents</li>
                      <li>Setting up promotional and marketing display materials</li>
                      <li>Technical and ligistical assist during the tournaments</li>
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

              {/* Education Section */}
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 border-b-2 border-orange-400 pb-2">
                  Education
                </h3>
                <div className="mt-6 space-y-8">
                  {/* Education Entry 1 */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">2021 - Present</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">Student</h4>
                    <p className="text-gray-700">Szczecińskie Collegium Informatyczne | Szczecin, Poland</p>
                  </div>
                  <div className="mt-6 space-y-8">
                  {/* Education Entry 2 */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full w-0.5 bg-orange-300"></div>
                    <div className="absolute left-0 top-0 -ml-2 h-4 w-4 bg-orange-400 rounded-full shadow-md animate-pulse-slow"></div>
                    <p className="text-sm text-gray-500 font-medium italic">2021</p>
                    <h4 className="text-xl font-semibold text-gray-800 mt-1">IC3 Spark Certification</h4>
                    <p className="text-gray-700">Szczecińskie Collegium Informatyczne | Szczecin, Poland</p>
                  </div>
                  </div>
                  <div className="mt-6 space-y-8">
                  {/* Education Entry 3 */}
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
            </div>

            {/* Column 2: Skills & Other Info */}
            <div className="space-y-10">
              {/* Skills Section */}
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 border-b-2 border-orange-400 pb-2">
                  Skills
                </h3>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {/* Skill Entry 1 */}
                  <div className="p-4 bg-white rounded-md shadow-lg transition-transform hover:scale-105">
                    <h4 className="font-semibold text-gray-800">Web Development</h4>
                    <p className="text-sm text-gray-600 mt-1">HTML, CSS, PHP, JavaScript, MySQL</p>
                  </div>
                  {/* Skill Entry 2 */}
                  <div className="p-4 bg-white rounded-md shadow-lg transition-transform hover:scale-105">
                    <h4 className="font-semibold text-gray-800">Graphic Design</h4>
                    <p className="text-sm text-gray-600 mt-1">Adobe Photoshop, Figma</p>
                  </div>
                  {/* Add more skills as needed */}
                </div>
              </div>

              {/* Other Information Section */}
              <div>
                <h3 className="text-3xl font-serif font-bold text-gray-800 border-b-2 border-orange-400 pb-2">
                  Other
                </h3>
                <div className="mt-6 space-y-4">
                  <div className="p-4 bg-white rounded-md shadow-lg">
                    <h4 className="font-semibold text-gray-800">Languages</h4>
                    <p className="text-sm text-gray-600 mt-1">Polish (Native), English (B2+), Spanish (B1)</p>
                  </div>
                  <div className="p-4 bg-white rounded-md shadow-lg">
                    <h4 className="font-semibold text-gray-800">Interests</h4>
                    <p className="text-sm text-gray-600 mt-1">Sports, travelling, cooking</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}