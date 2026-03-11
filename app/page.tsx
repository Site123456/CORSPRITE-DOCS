"use client";

<<<<<<< HEAD
import { ArrowRight, Boxes, Download, LucideIcon, MessageCircle, PlayCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import BetaCountdown from "@/components/RealeasedateCounter";

=======
import Link from "next/link";
import { Download, Boxes, ArrowRight, LucideIcon } from "lucide-react";
import Image from "next/image";
import BetaCountdown from "@/components/RealeasedateCounter";
>>>>>>> 345509225e392ccf080dc3a83aacc563da4c0565
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
<<<<<<< HEAD
    link: "/input/audio",
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
=======
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
          src="/logo/banner_main.jpg"
          alt="Trailer for current version"
          className="
            w-full h-full object-cover 
            opacity-90 group-hover:opacity-100 
            transition duration-500
          "
        />
      </div>
      <section className="max-w-6xl mx-auto px-6 pb-24">
          <BetaCountdown />
        <h1 className="w-full text-center text-4xl sm:text-7xl font-bold tracking-tight bg-linear-to-r from-white to-gray-500 text-transparent bg-clip-text">
          Documentation
        </h1>
        {/* NAV CARDS */}
        <div className="grid sm:grid-cols-2 gap-8 mt-8">
>>>>>>> 345509225e392ccf080dc3a83aacc563da4c0565
          {navCards.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.id}
                href={item.link}
<<<<<<< HEAD
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
=======
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
>>>>>>> 345509225e392ccf080dc3a83aacc563da4c0565
                  Explore
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>
<<<<<<< HEAD
    </main>
  );
}
=======


    </main>
  );
}
>>>>>>> 345509225e392ccf080dc3a83aacc563da4c0565
