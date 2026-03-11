"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeaderDef() {
  return (
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
                px-1.5 py-0.5 rounded-md
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
                bg-linear-to-r from-transparent via-white/20 to-transparent
                animate-[shine_1.5s_linear_infinite]
              "
            />
          </Link>
        </div>
      </header>
  );
}
