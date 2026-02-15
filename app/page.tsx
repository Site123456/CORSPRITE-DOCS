"use client";

import Image from "next/image";
import Link from "next/link";
import { Activity, Brain, ArrowRight } from "lucide-react";

// ---------------------------------------------
// PERSONA MODULE PREVIEW
// ---------------------------------------------
const personaPreview = [
  {
    id: "Installation",
    title: "Get Started",
    icon: Brain,
    description: "Install now and try it in Beta",
    link: "https://github.com/Site123456/CORSPRITE",
  },
];

// ---------------------------------------------
// PAGE
// ---------------------------------------------
export default function Page() {
  return (
    <main
      className="
        bg-black text-white
        transition-colors duration-300
      "
    >

      {/* HEADER */}
      <header
        className="
          fixed top-0 z-20 w-full
          backdrop-blur-xl
          bg-black/70
          transition-colors duration-300
        "
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="relative flex items-center">
            <Image
              src="/logo/logo.png"
              alt="LOGO TRADEMARK"
              width={512}
              height={512}
              className="
                h-9 w-9 sm:h-12 sm:w-12
                drop-shadow-[0_0_6px_rgba(255,255,255,0.25)]
              "
            />

            <h1
              className="
                font-bold text-2xl sm:text-4xl tracking-tight
                text-white
                drop-shadow-[-6px_0_40px_rgba(255,255,255,0.35)]
                whitespace-nowrap
              "
            >
              ORSPRITE
            </h1>

            <div
              className="
                absolute -right-10 top-0
                px-1.5 py-[2px] rounded-md
                text-[9px] font-semibold
                text-white
                bg-white/10
                backdrop-blur
              "
            >
              BETA
            </div>

          </Link>


          <Link
            href="https://github.com/Site123456/CORSPRITE"
            className="
              group relative inline-flex items-center gap-2 px-7 py-3 rounded-xl
              font-semibold text-sm text-white
              bg-linear-to-r from-indigo-500 via-blue-500 to-cyan-400
              shadow-lg shadow-blue-500/20
              transition-all duration-300
              hover:scale-[1.05] hover:shadow-cyan-400/40
              active:scale-[0.98]
            "
          >
            <span className="relative z-10">Get Started</span>

            {/* Shine overlay */}
            <span
              className="
                absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100
                bg-gradient-to-r from-transparent via-white/20 to-transparent
                animate-[shine_1.5s_linear_infinite]
              "
            />
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-40 pb-24">

        {/* Title */}
        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
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

                {/* Gradient glow border */}
                <div
                  className="
                    absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
                    transition duration-300 pointer-events-none
                    bg-gradient-to-br from-black via-black/20 to-white/10
                  "
                />

                {/* Header */}
                <div className="flex items-center gap-3 relative z-10">
                  <div className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition">
                    <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
                  </div>
                  <span className="text-lg font-semibold tracking-tight">
                    {mod.title}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition relative z-10">
                  {mod.description}
                </p>

                {/* Footer link */}
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
