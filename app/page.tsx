"use client";
import { useState } from "react";


import Link from "next/link";
import { Download, Boxes, ArrowRight } from "lucide-react";

const personaPreview = [
{
    id: "Installation",
    title: "Get Started",
    icon: Download,
    description: "Install CORSPRITE and start exploring the beta in minutes.",
    link: "https://github.com/Site123456/CORSPRITE",
  },
  {
    id: "Modules",
    title: "Core Modules",
    icon: Boxes,
    description: "Discover built-in tools and modular features that power CORSPRITE.",
    link: "/modules",
  }
];
const cardsData = [
  {
    title: "60 Hz Fine-Tuner",
    description: "TenserFlow based Fine tuner for 60Hz Audio.",
    videoSrc: "/demo/audigeneration49finetuned.mp4",
    latestdate: "19 Feb 2026",
    notFinished: "Alpha"
  },
  {
    title: "Sprite Generation",
    description: "Sprite generation made with Python & C++ rendering.",
    videoSrc: "/demo/Demo_sprite_generation_18_feb_2026.mp4",
    latestdate: "18 Feb 2026",
    notFinished: "Alpha"
  },
  {
    title: "Audio Generation",
    description: "Python & JS Audio generation based on seed.",
    videoSrc: "/demo/audigeneration49params.mp4",
    latestdate: "18 Feb 2026",
    notFinished: "Alpha"
  }
];
function FeaturesSection() {
  const [searchName, setSearchName] = useState<string>("");

  // Filtered cards
  const filteredCards = cardsData.filter((card) => {
    const matchesName = card.title.toLowerCase().includes(searchName.toLowerCase());
    return matchesName;
  });

  return (
    <section className="relative max-w-5xl mx-auto px-6 py-4">

      {/* Title */}
      <div className="w-full flex flex-col sm:flex-row sm:justify-center sm:items-center gap-4 mb-6">
        <div className="mb-6 w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            System Builds
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Status preview of the latest system build.
          </p>
        </div>

      {/* Filter Controls */}
        <input
          type="text"
          placeholder="Filter by name..."
          className="px-3 py-2 text-ellipsis rounded-3xl border-4 border-white/10 bg-black text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredCards.length > 0 ? (
          filteredCards.map((card, index) => (
            <div
              key={index}
              className="group relative rounded-3xl overflow-hidden border-2 border-white/10 bg-black shadow-lg shadow-black/80"
            >
              <div className="relative aspect-video w-full overflow-hidden">
                <video
                  playsInline
                  preload="metadata"
                  className="absolute inset-0 w-full h-full object-cover"
                  src={card.videoSrc}
                  controls
                />
                <div className="absolute top-2 right-2">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 shadow-sm">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                    </span>
                    <span className="text-[10px] font-medium text-gray-200 tracking-wide">
                      Update - {card.latestdate}
                    </span>
                  </div>
                </div>
                {card.notFinished && (
                  <div className="absolute top-12 right-2">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-md border border-white/20 shadow-sm">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-70" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                      </span>
                      <span className="text-xs font-medium tracking-wide">
                        {card.notFinished}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 space-y-2">
                <h1 className="text-lg font-bold text-gray-100 tracking-tight">
                  {card.title}
                </h1>
                <p className="text-sm text-gray-400">{card.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            No features match your filters.
          </p>
        )}
      </div>
    </section>
  );
}

export default function Page() {
  
  return (
    <main
      className="
        bg-black text-white
        transition-colors duration-300
      "
    >
      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pb-24 pt-20 bg-black/50">

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Documentation
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
          CORSPRITE — a interactive and modular assistant.
        </p>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 gap-7 mt-16">
          {personaPreview.map((mod) => {
            const Icon = mod.icon;
            return (
              <Link
                key={mod.id}
                href={mod.link}
                className="
                  group relative rounded-3xl p-7 flex flex-col gap-5
                  bg-[#050505]/60
                  backdrop-blur
                  transition-all duration-300
                  hover:-translate-y-2 hover:border-white/10
                  hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.9)]
                "
              >
                <div
                  className="
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                    transition duration-300 pointer-events-none
                    bg-linear-to-br from-black via-black/20 to-white/10
                  "
                />
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
                  </div>
                  <span className="text-lg font-semibold tracking-tight">
                    {mod.title}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition relative z-10">
                  {mod.description}
                </p>
                <span className="mt-auto flex items-center gap-1 text-sm font-medium text-cyan-400 group-hover:text-cyan-300 transition relative z-10">
                  Explore
                  <ArrowRight className="w-4 h-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
      <FeaturesSection />
    </main>
  );
}
