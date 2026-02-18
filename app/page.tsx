"use client";

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
      <section className="relative max-w-5xl mx-auto px-6 py-4">

        {/* Title */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">
            Current Progress
          </h2>
          <p className="text-sm text-gray-400 mt-1">
            Live preview of the latest system build.
          </p>
        </div>
        <div className="group relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-black shadow-[0_25px_70px_-20px_rgba(0,0,0,0.9)]">

          {/* Video */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/demo/Demo_sprite_generation_18_feb_2026.mp4" type="video/mp4" />
          </video>

          {/* Cinematic overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/10 via-black/25 to-transparent" />

          {/* Vignette */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_85%,black_100%)] opacity-70" />

          {/* Bottom UI */}
          <div className="relative z-10 flex items-end h-full p-6">

            <div className="flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-lg bg-black/40 border border-white/10 shadow-md">

              {/* Live indicator */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-70" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              <span className="text-xs tracking-wide text-gray-200 font-medium">
                Developpement Preview
              </span>

            </div>
          </div>

          {/* Hover glow frame */}
          <div className="absolute inset-0 rounded-3xl ring-1 ring-white/5 group-hover:ring-white/20 transition duration-300" />

        </div>



      </section>

    </main>
  );
}
