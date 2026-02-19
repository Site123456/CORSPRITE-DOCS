"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import { Download, Boxes, ArrowRight, Search, LucideIcon } from "lucide-react";

type Status = "Alpha" | "Beta" | "Stable";

type BuildCard = {
  title: string;
  description: string;
  videoSrc: string;
  date: string;
  version: string;
  status: Status;
  tags: string[];
};

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

const builds: BuildCard[] = [
  {
    title: "60 Hz Fine-Tuner",
    description: "Real-time wav frequency tuning engine.",
    videoSrc: "/demo/audigeneration49finetuned.mp4",
    date: "2026-02-19",
    version: "0.1.0",
    status: "Beta",
    tags: ["Audio", "DSP"],
  },
  {
    title: "Sprite Generation",
    description: "Procedural sprite renderer.",
    videoSrc: "/demo/Demo_sprite_generation_18_feb_2026.mp4",
    date: "2026-02-18",
    version: "0.0.9",
    status: "Beta",
    tags: ["Graphics"],
  },
  {
    title: "Audio Generation",
    description: "Seed-based synthesis engine.",
    videoSrc: "/demo/audigeneration49params.mp4",
    date: "2026-02-18",
    version: "0.0.8",
    status: "Alpha",
    tags: ["Audio", "AI"],
  },
];


const statusColor: Record<Status, string> = {
  Alpha: "bg-cyan-400",
  Beta: "bg-amber-400",
  Stable: "bg-emerald-400",
};

function LazyVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      controls
      playsInline
      preload="none"
      poster="/logo/logo.png"
      className="absolute inset-0 w-full h-full object-cover"
    >
      {visible && <source src={src} />}
    </video>
  );
}

/* ---------------- BUILD CARD ---------------- */

function BuildCardView({ card }: { card: BuildCard }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-linear-to-b from-white/5 to-transparent overflow-hidden transition hover:-translate-y-2 hover:shadow-2xl">

      <div className="relative aspect-video">

        <LazyVideo src={card.videoSrc} />

        <div className="absolute top-3 right-3 rounded-full bg-black/60 border border-white/15 px-3 py-1 text-xs backdrop-blur">
          {new Date(card.date).toLocaleDateString()}
        </div>

        <div className="absolute top-12 right-3 flex items-center gap-2 rounded-full bg-black/60 border border-white/15 px-3 py-1 text-xs backdrop-blur">
          <span className={`h-2 w-2 rounded-full ${statusColor[card.status]}`} />
          {card.status}
        </div>
      </div>

      <div className="p-5 space-y-3">

        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">{card.title}</h3>
          <span className="text-xs text-gray-400">v{card.version}</span>
        </div>

        <p className="text-sm text-gray-400">{card.description}</p>

        <div className="flex flex-wrap gap-2">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs rounded-full border border-white/10 bg-white/5 text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------------- FEATURES SECTION ---------------- */

function FeaturesSection() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"new" | "old">("new");
  const [tag, setTag] = useState("All");

  const tags = ["All", ...Array.from(new Set(builds.flatMap((b) => b.tags)))];

  const filtered = useMemo(() => {
    let list = builds.filter((b) =>
      b.title.toLowerCase().includes(search.toLowerCase())
    );

    if (tag !== "All") list = list.filter((b) => b.tags.includes(tag));

    list.sort((a, b) =>
      sort === "new"
        ? +new Date(b.date) - +new Date(a.date)
        : +new Date(a.date) - +new Date(b.date)
    );

    return list;
  }, [search, sort, tag]);

  return (
    <section className="max-w-5xl mx-auto px-6 py-20">

      {/* header */}
      <div className="mb-10 space-y-6">

        <div className="flex flex-wrap justify-between items-end gap-6">
          <div>
            <h2 className="text-3xl font-semibold">System Builds</h2>
            <p className="text-gray-400 mt-1">Latest modules and previews</p>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search builds..."
              className="pl-10 pr-4 py-2 rounded-full bg-black/60 border border-white/15 text-sm outline-none focus:border-cyan-400"
            />
          </div>
        </div>

        {/* filters */}
        <div className="flex flex-wrap gap-3 items-center">

          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setTag(t)}
              className={`px-3 py-1 rounded-full text-xs border transition
                ${
                  tag === t
                    ? "bg-white text-black border-white"
                    : "border-white/15 text-gray-300 hover:border-white/40"
                }`}
            >
              {t}
            </button>
          ))}

          <select
            aria-label="Sort builds"
            value={sort}
            onChange={(e) => setSort(e.target.value as "new" | "old")}
            className="ml-auto px-6 py-2 rounded-full text-xs bg-black border border-white/15"
          >
            <option value="new">Newest</option>
            <option value="old">Oldest</option>
          </select>
        </div>
      </div>

      {/* grid */}
      {filtered.length ? (
        <div className="grid sm:grid-cols-2 gap-7">
          {filtered.map((card) => (
            <BuildCardView key={card.title} card={card} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No builds found.</p>
      )}
    </section>
  );
}

/* ---------------- PAGE ---------------- */

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-24">

        <h1 className="text-5xl sm:text-7xl font-bold tracking-tight bg-linear-to-r from-white to-gray-500 text-transparent bg-clip-text">
          Documentation
        </h1>

        <p className="mt-6 text-lg text-gray-400 max-w-xl">
          CORSPRITE — interactive modular assistant platform.
        </p>

        {/* NAV CARDS */}
        <div className="grid sm:grid-cols-2 gap-8 mt-16">
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

      <FeaturesSection />

    </main>
  );
}
