"use client";

import Link from "next/link";
import { Download, Boxes, ArrowRight, LucideIcon } from "lucide-react";
import Image from "next/image";
type NavCard = {
  id: string;
  title: string;
  description: string;
  link: string;
  icon: LucideIcon;
};

const navCards: NavCard[] = [
  {
    id: "install",
    title: "Get Started",
    description: "Install CORSPRITE and start exploring.",
    link: "https://github.com/Site123456/CORSPRITE",
    icon: Download,
  },
  {
    id: "modules",
    title: "Core Modules",
    description: "Browse built-in system components.",
    link: "/modules",
    icon: Boxes,
  },
];
export default function Page() {
  return (
    <main className="bg-black text-white">
      <div className="fixed z-0 inset-0 pointer-events-none opacity-35">
        <Image
          width={3000}
          height={2000}
          src="/logo/bannerplaytrailer.jpg"
          alt="Trailer for current version"
          className="
            w-full h-full object-cover 
            opacity-90 group-hover:opacity-100 
            transition duration-500
          "
        />
      </div>
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-24">
        <div className="bg-red-400/10 border-l-8 border-red-600 rounded text-white p-4 mb-6" role="alert">
          <p className="font-bold">Alpha phase access restricted!</p>
          <p>Corsprite Beta Phase will start in: July 1, 2026 UTC+1 00:00.</p>
        </div>
        <h1 className="w-full text-center text-4xl sm:text-7xl font-bold tracking-tight bg-linear-to-r from-white to-gray-500 text-transparent bg-clip-text">
          Documentation
        </h1>
        {/* NAV CARDS */}
        <div className="grid sm:grid-cols-2 gap-8 mt-8">
          {navCards.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.link}
                className="group relative rounded-3xl p-7 flex flex-col gap-5 bg-[#050505]/60 backdrop-blur transition-all duration-300 hover:border-white/10 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.9)]"
              >
                <div className="absolute inset-0 rounded-3xl z-0 opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none bg-linear-to-br from-transparent via-black/20 to-black "></div>
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10">
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </div>
                  <span className="text-lg font-semibold">{item.title}</span>
                </div>

                <p className="text-sm text-gray-400 group-hover:text-gray-300">
                  {item.description}
                </p>

                <span className="mt-auto flex items-center gap-1 text-sm font-medium text-cyan-400">
                  Explore
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>


    </main>
  );
}
