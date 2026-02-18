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
      <section className="relative max-w-6xl mx-auto px-6 pb-24 pt-20">

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
    </main>
  );
}
