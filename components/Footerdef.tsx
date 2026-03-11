"use client";

import Image from "next/image";
import Link from "next/link";

export default function FooterDef() {
  return (
    <footer className="bg-black border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-gray-400">

        <nav className="flex items-center gap-4">
          <Link href="/" className="hover:text-white transition">
            Installation
          </Link>
          <p>-</p>
          <Link href="/terms" className="hover:text-white transition">
            Terms & Privacy
          </Link>
          <p>-</p>
          <Link href="/robots.txt" className="hover:text-white transition">
            Robots.txt
          </Link>
        </nav>

        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <span className="font-bold text-white">&copy; {new Date().getFullYear()}</span>
          <Image
            src="/logo/favicon-32x32.png"
            alt="CORSPRITE Icon"
            width={16}
            height={16}
            className="opacity-80"
          />
          <span className="text-sm font-bold text-white">CORSPRITE</span>
          <p className="text-xs text-gray-400">, ALL RIGHTS RESERVED</p>
        </div>
      </div>
      <div className="w-full">
        <div
          className="
            flex items-center justify-center gap-10
            whitespace-nowrap
          "
        >
          <Link
            href="/"
            scroll={true}
            className="
              relative flex items-center px-14
            "
          >
            <Image
              src="/logo/logo.png"
              alt="LOGO TRADEMARK"
              width={512}
              height={512}
              className="
                h-14 w-14 sm:h-20 sm:w-20
                drop-shadow-[0_0_10px_rgba(255,255,255,0.25)]
              "
            />

            <h1
              className="
                font-bold text-4xl sm:text-6xl tracking-tight
                text-white
                drop-shadow-[-10px_0_60px_rgba(255,255,255,0.35)]
                scale-[1.03]
                whitespace-nowrap
              "
            >
              ORSPRITE
            </h1>
            <div
              className="
                absolute right-2 top-1
                px-2 py-1 rounded-xl
                text-[10px] font-semibold
                text-white
                bg-black/20
                backdrop-blur-sm
              "
            >
              BETA
            </div>

          </Link>
        </div>
      </div>


    </footer>
  );
}
