<<<<<<< HEAD
import "./globals.css";
import type { Metadata } from "next";
import { ReactNode } from "react";
import Slidercomponent from "./slider";

export const metadata: Metadata = {
  metadataBase: new URL("https://corsprite.com"),

  title: {
    default: "Corsprite",
    template: "%s | Corsprite"
  },

  description:
    "Corsprite is a multimodal AI platform that brings interactive on‑screen characters to life. It supports voice, text, image, video, and file interaction, and includes modular tools such as Corsprite VD for engineering, CAD assistance, PCB design, text‑to‑speech, speech‑to‑text, visual understanding, and AI‑powered file analysis.",

  keywords: [
    "Corsprite",
    "AI assistant platform",
    "multimodal AI",
    "AI character engine",
    "interactive AI characters",
    "voice AI",
    "text to speech AI",
    "speech to text AI",
    "image understanding AI",
    "video analysis AI",
    "file analysis AI",
    "engineering AI tools",
    "CAD AI assistant",
    "PCB design AI",
    "Corsprite VD",
    "real‑time AI interaction",
    "AI for developers",
    "AI integration tools"
  ],

  alternates: {
    canonical: "https://corsprite.com"
  },

  authors: [{ name: "Corsprite" }],
  creator: "Corsprite",
  publisher: "Corsprite",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1
    }
  },

  icons: {
    icon: "https://docs.corsprite.com/logo.png",
    shortcut: "https://docs.corsprite.com/logo.png",
    apple: "https://docs.corsprite.com/logo.png"
  },

  openGraph: {
    title: "Corsprite",
    description:
      "Corsprite enables real‑time interaction with AI through voice, text, images, videos, and files. Build intelligent characters and integrate modular tools like Corsprite VD, speech‑to‑text, text‑to‑speech, and AI visual understanding.",
    url: "https://corsprite.com",
    siteName: "Corsprite",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://docs.corsprite.com/logo.png",
        width: 1200,
        height: 1200,
        alt: "Corsprite Logo"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "Corsprite",
    description:
      "Create interactive AI characters and integrate voice, text, image, video, and file intelligence with Corsprite’s modular platform.",
    images: ["https://docs.corsprite.com/logo.png"]
  },

  category: "assistant"
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased p-0 m-0">
        <Slidercomponent>
          <main>{children}</main>
        </Slidercomponent>
      </body>
    </html>
  );
}
=======
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderDef from "@/components/Headerdef";
import FooterDef from "@/components/Footerdef";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CORSPRITE",
  description: "Your assistant reimagined",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeaderDef />
        <div className="pt-20">
          {children}
        </div>
        <FooterDef />
      </body>
    </html>
  );
}
>>>>>>> 345509225e392ccf080dc3a83aacc563da4c0565
