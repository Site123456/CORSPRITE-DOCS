"use client";

import { ArrowRight, Boxes, Download, LucideIcon, MessageCircle, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BetaCountdown from "@/components/RealeasedateCounter";

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
    <main className="relative w-full flex flex-col items-center justify-center">

      <div className="z-4 p-4 mb-4 text-sm text-white/80 bg-orange-600 rounded-2xl shadow-inner" role="alert">
        <span className="font-medium block text-white">Access restricted!</span> The following features are currently closed and only available to a limited number of users. See more details below:
        <BetaCountdown />
      </div>
      <div className="fixed inset-0 pointer-events-none">
        <Image
          width={3000}
          height={2000}
          src="/banner_main.jpg"
          alt="Background banner"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <section className="z-2 px-6 pb-24 max-w-6xl w-full">

        {/* Title */}
        <h1 className="text-center text-4xl sm:text-7xl font-bold tracking-tight text-foreground">
          Documentation
        </h1>

        {/* NAV CARDS */}
        <div className="grid sm:grid-cols-2 gap-8 mt-12">
          {navCards.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.link}
                className="
                  group relative rounded-3xl p-7 flex flex-col gap-5
                  bg-background/60 backdrop-blur-sm
                  border-4 border-blue-700/5
                  transition-all duration-300
                  hover:-translate-y-1 hover:shadow-xl hover:border-indigo-700/20
                "
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-muted/50">
                    <Icon className="h-5 w-5 text-foreground/70 group-hover:text-foreground transition-colors" />
                  </div>
                  <span className="text-lg font-semibold text-foreground">
                    {item.title}
                  </span>
                </div>

                <p className="text-sm text-foreground/70">
                  {item.description}
                </p>

                <span className="mt-auto flex items-center gap-1 text-sm font-medium text-primary">
                  Explore
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>


      <div className="mb-12 flex justify-center w-full max-w-xl z-2">
        <div className="rounded-3xl shadow-xl p-8 w-full text-center bg-background/60 backdrop-blur-sm">
          <h1 className="text-2xl font-bold mb-2">
            Youtube
          </h1>
          <p className="text-sm text-foreground/70 mb-6">
            Watch trailers, tutorials, ask questions in our youtube channel!
          </p>

          <Link
            href="https://www.youtube.com/@CORSPRITE"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <PlayCircle size={18} />
            Watch on Youtube
          </Link>
        </div>
      </div>
    </main>
  );
}