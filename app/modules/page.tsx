"use client";

import Link from "next/link";
import modules from "@/data/modules.json"
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
          Modules
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400">
          Discover built-in tools and modular features that power CORSPRITE.
        </p>
        {modules.map((section) => (
        <div key={section.title} className="mt-12">

            <Link href={`/modules/${section.title.toLocaleLowerCase()}`} className="text-3xl p-3 font-semibold">
            {section.title}
            </Link>

            <div className="
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
            gap-x-10 gap-y-3 text-blue-500 text-lg p-4
            ">
            {section.items.map(([name, slug]) => (
                <Link
                key={slug}
                href={`/modules/${section.title.toLowerCase()}/${slug}`}
                className="hover:underline hover:text-blue-400 transition"
                >
                {name}
                </Link>
            ))}
            </div>

        </div>
        ))}


      </section>
    </main>
  );
}
