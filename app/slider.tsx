"use client";
import React, { useState, type ReactNode, type ComponentType } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Home,
  FolderKanban,
  Settings,
  HelpCircle,
  Menu,
  LogIn,
  X,
  Check,
  Info,
  KeyRound,
  FileText,
  Bell,
  Shield,
  Globe,
  ChevronDown,
  PlayCircle,
  Code2
} from "lucide-react";

import { useTheme, type Theme } from "./hooks/useTheme";

import ThemeModeButtons from "../components/ThemeModeButtons";
import MiniToggle from "../components/MiniToggle";
import ServerPanel from "../components/serverPanel";
import { SidebarLink, SidebarGroup, SectionLabel } from "../components/Sidebar";
import { SettingsSectionLabel, SettingsRow } from "../components/SettingsPanel";

interface SliderProps { children?: ReactNode; }

function Footer() {
  return (
    <footer className="text-gray-300">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 border-b border-gray-800/60 pb-10">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Corsprite Logo"
            width={68}
            height={68}
            className="rounded-xl shadow-lg"
          />
          <span className="text-xl font-bold tracking-wide text-white">Corsprite</span>
        </div>
        <div>
          <p className="max-w-xl leading-relaxed text-gray-300">
            Thank you for using <span className="font-semibold text-white">Corsprite</span>!  
            By exploring the platform, you agree to our guidelines below for a smooth experience.
          </p>
          <div className="flex gap-6 pt-2">
            <Link
              href="https://github.com/Site123456/CORSPRITE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 h-12 rounded-full bg-gray-800/50 hover:bg-gray-700 transition shadow-md hover:shadow-lg hover:text-white tooltip"
              title="GitHub"
            >
              <Code2 size={20} />
              {" "}
              Github
            </Link>

            <Link
              href="https://youtube.com/@corsprite"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 h-12 rounded-full bg-gray-800/50 hover:bg-gray-700 transition shadow-md hover:shadow-lg hover:text-white tooltip"
              title="YouTube"
            >
              <PlayCircle size={20} />
              {" "}
              Youtube
            </Link>
          </div>
        </div>
        
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mt-12">
        <div className="rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-2 text-white font-semibold tracking-wide mb-2">
            <Globe size={18} />
            <span>Server & Hosting</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Your domain points to your server’s IP or port 8080 by default.  
            Configure DNS correctly to make your project public.  
            Corsprite cannot fix issues caused by incorrect DNS, hosting problems, or third-party services.
          </p>
        </div>

        <div className="rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-2 text-white font-semibold tracking-wide mb-2">
            <Info size={18} />
            <span>About the Platform</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Corsprite brings AI characters to life in real-time. Customize how your assistant thinks, behaves, and interacts with your app.
          </p>
          <p className="text-gray-400 leading-relaxed mt-2">
            Tokens act as usage credits for AI features, with consumption based on module complexity.
          </p>
        </div>

        <div className="rounded-2xl shadow-md hover:shadow-lg transition">
          <div className="flex items-center gap-2 text-white font-semibold tracking-wide mb-2">
            <KeyRound size={18} />
            <span>Security & Responsibility</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Keep your API key private. You’re responsible for securing it.  
            Corsprite isn’t liable for leaked or misused keys.
          </p>
          <p className="text-gray-400 leading-relaxed mt-2">
            Misuse or reverse engineering is your responsibility.
          </p>
        </div>
      </div>

      <div className="text-center border-t border-gray-800/60 mt-12 pt-6 space-y-1">
        <p className="text-gray-300">
          &copy; 2026-{new Date().getFullYear()} Corsprite. All rights reserved.
        </p>
        <p className="text-gray-500">
          “Corsprite” is open source. Support us by linking to{' '}
          <a href="https://corsprite.com" className="underline hover:text-white">corsprite.com</a> in your license file.
        </p>
      </div>

    </footer>
  );
}

export default function Slidercomponent({ children }: SliderProps) {
  const pathname = usePathname();
  const { theme, setTheme, isDark } = useTheme();

  const [mobileOpen, setMobileOpen] = useState(false);
  // which slide-over panel is showing (or null for none).
  const [openPanel, setOpenPanel] = useState<"settings" | "server" | null>(null);
  const [openGroup, setOpenGroup] = useState<string | null>(null);
  const [expandedPlans, setExpandedPlans] = useState<Set<string>>(new Set());

  const toggleGroup = (key: string) =>
    setOpenGroup((prev) => (prev === key ? null : key));

  const togglePlanExpand = (planKey: string) =>
    setExpandedPlans((prev) => {
      const next = new Set(prev);
      if (next.has(planKey)) next.delete(planKey);
      else next.add(planKey);
      return next;
    });

  const handleThemeChange = setTheme;


  const MiniStat = ({ title, value, tone, sub }: { title: string; value: React.ReactNode; tone?: string; sub?: string }) => (
    <div className={`p-2 rounded-lg flex flex-col items-start gap-1 ${isDark ? "bg-white/5 border border-white/8" : "bg-white border border-black/5"}`}>
      <div className={`text-[9px] uppercase tracking-wide ${isDark ? "text-neutral-400" : "text-neutral-500"}`}>{title}</div>
      <div className={`text-lg font-bold ${tone ?? "text-neutral-900"}`}>{value}</div>
      {sub && <div className="text-[9px] text-neutral-400">{sub}</div>}
    </div>
  );

  // navigation data driven structure makes the sidebar easier to extend
  type NavLink = { href: string; label: string; icon?: ComponentType<{ size?: number }> };
  type NavGroup = { key: string; label: string; icon?: ComponentType<{ size?: number }>;
    items: NavLink[] };

  const sections: { label: string; links?: NavLink[]; groups?: NavGroup[] }[] = [
    {
      label: "Main",
      links: [{ href: "/", label: "Home", icon: Home }],
      groups: [
        {
          key: "docs",
          label: "Documentation",
          icon: FileText,
          items: [
            { href: "/input/audio", label: "Audio Input" },
          ],
        },
        {
          key: "vd",
          label: "Corsprite VD",
          icon: FolderKanban,
          items: [
            { href: "/vd/installation", label: "Installation" },
            { href: "/vd/quick-start", label: "Quick Start" },
            { href: "/vd/workspace", label: "Workspace & UI" },
            { href: "/vd/cad-modules", label: "CAD Modules" },
            { href: "/vd/parametric-modeling", label: "Parametric Modeling" },
            { href: "/vd/direct-modeling", label: "Direct Modeling" },
            { href: "/vd/sketch-system", label: "Sketch System" },
            { href: "/vd/assembly-system", label: "Assembly System" },
            { href: "/vd/pcb-design", label: "PCB Design" },
            { href: "/vd/pcb-routing", label: "PCB Routing" },
            { href: "/vd/schematic-editor", label: "Schematic Editor" },
            { href: "/vd/component-library", label: "Component Library" },
            { href: "/vd/mechanical-tools", label: "Mechanical Tools" },
            { href: "/vd/constraints", label: "Constraints & Mates" },
            { href: "/vd/kinematics", label: "Kinematics & Motion" },
            { href: "/vd/simulation", label: "Simulation" },
            { href: "/vd/fea-analysis", label: "FEA Analysis" },
            { href: "/vd/thermal-analysis", label: "Thermal Analysis" },
            { href: "/vd/fluid-simulation", label: "Fluid Simulation" },
            { href: "/vd/ai-tools", label: "AI Design Assistant" },
            { href: "/vd/generative-design", label: "Generative Design" },
            { href: "/vd/auto-routing-ai", label: "AI PCB Auto Routing" },
            { href: "/vd/design-optimization", label: "Design Optimization" },
            { href: "/vd/rendering", label: "Rendering & Visualization" },
            { href: "/vd/materials", label: "Materials & Textures" },
            { href: "/vd/file-management", label: "File Management" },
            { href: "/vd/version-control", label: "Version Control" },
            { href: "/vd/cloud-collaboration", label: "Cloud Collaboration" },
            { href: "/vd/export-import", label: "Import & Export" },
            { href: "/vd/api-sdk", label: "API & SDK" },
            { href: "/vd/plugins", label: "Plugins & Extensions" }
          ]
        }
      ],
    },
    {
      label: "Support",
      links: [{ href: "/support", label: "Help & support", icon: HelpCircle }],
    },
  ];




  return (
    <div
      className={`min-h-screen transition-colors ${
        isDark ? "bg-neutral-950 text-neutral-50" : "bg-neutral-50 text-neutral-900"
      }`}
    >
      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed left-0 top-0 z-50 flex h-full w-72 flex-col border-r backdrop-blur-2xl transition-transform md:translate-x-0
        ${
          isDark
            ? "border-white/10 bg-black/90 shadow-[0_22px_60px_rgba(0,0,0,0.75)]"
            : "border-black/5 bg-white/90 shadow-[0_22px_60px_rgba(15,23,42,0.25)]"
        }
        ${mobileOpen ? "translate-x-0" : "-translate-x-72"}
      `}
      >
        {/* SIDEBAR HEADER */}
        <div
          className={`flex h-14 items-center justify-between z-60 px-4 border-b ${
            isDark ? "border-white/10" : "border-black/5"
          }`}
        >
          <div className="flex items-center gap-2">
            <div
              className={`flex h-8 w-8 items-center justify-center`}
            >
              <Image src="/logo.png" width={36} height={36} alt="CORSPRITE LOGO" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-sm font-semibold tracking-tight">
                Corsprite Docs
              </span>
              <span
                className={`text-[11px] ${
                  isDark ? "text-neutral-400" : "text-neutral-500"
                }`}
              >
                DOCS for CLIENT & SERVER
              </span>
            </div>
          </div>

          <button
            className={`md:hidden ${
              isDark ? "text-neutral-300" : "text-neutral-600"
            }`}
            onClick={() => setMobileOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        {/* NAV */}
        <nav className="custom-scrollbar flex-1 overflow-y-auto px-3 py-4">
          {sections.map((section, idx) => (
            <React.Fragment key={section.label}>
              <SectionLabel
                label={section.label}
                dark={isDark}
                className={idx > 0 ? "mt-4" : ""}
              />

              {section.links?.map((l) => (
                <SidebarLink
                  key={l.href}
                  href={l.href}
                  label={l.label}
                  icon={l.icon}
                  active={pathname === l.href}
                  dark={isDark}
                />
              ))}

              {section.groups?.map((g) => (
                <SidebarGroup
                  key={g.key}
                  label={g.label}
                  icon={g.icon}
                  open={openGroup === g.key}
                  onToggle={() => toggleGroup(g.key)}
                  dark={isDark}
                >
                  {g.items.map((i, j) => (
                    <SidebarLink
                      key={`${i.href}-${j}-${i.label}`}
                      href={i.href}
                      label={i.label}
                      active={pathname === i.href}
                      dark={isDark}
                    />
                  ))}
                </SidebarGroup>
              ))}
            </React.Fragment>
          ))}
        </nav>

        <div
          className={`border-t px-4 py-3 space-y-3 ${
            isDark ? "border-white/10 bg-black/5" : "border-black/5 bg-white/80"
          }`}
        >

          {/* Actions */}
          <div className="mt-3 flex gap-2">
            <button
              onClick={() => setOpenPanel("settings")}
              className={`flex-1 inline-flex items-center justify-center gap-2 rounded-md border px-3 py-2 text-xs font-medium transition
              ${
                isDark
                  ? "border-white/15 bg-white/5 text-neutral-100 hover:bg-white/10 hover:border-white/25"
                  : "border-black/10 bg-white text-neutral-800 hover:bg-neutral-100"
              }`}
            >
              <Settings size={14} />
              Settings
            </button>

            <button
              onClick={() => setOpenPanel("server")}
              className={`flex-1 inline-flex items-center justify-center gap-2 rounded-md px-3 py-2 text-xs font-medium transition
              ${
                isDark
                  ? "bg-neutral-100 text-neutral-950 hover:bg-white"
                  : "bg-black text-white hover:bg-neutral-800"
              }`}
            >
              <LogIn size={14} />
              Server
            </button>
          </div>
        </div>
      </aside>

      {/* MOBILE TOPBAR */}
      <header
        className={`fixed left-0 right-0 top-0 z-30 flex h-14 items-center border-b px-4 backdrop-blur-xl md:hidden
        ${
          isDark
            ? "border-white/10 bg-black/60 text-neutral-100"
            : "border-black/5 bg-white/80 text-neutral-900"
        }`}
      >
        <button
          onClick={() => setMobileOpen(true)}
          className={isDark ? "text-neutral-200" : "text-neutral-700"}
        >
          <Menu size={22} />
        </button>
        <span className="ml-3 text-sm font-semibold">CORSPRITE Docs</span>
      </header>

      <main
        className={`md:ml-72 pt-20 md:pt-8 transition-colors
          ${isDark ? "bg-neutral-950" : "bg-neutral-50"}`}
        data-dark={isDark} // <- pass it as a prop for children
      >
        <div className="z-1 px-4 md:px-20 ">
          {children}
        </div>
        <div className="z-2 bg-black text-gray-200 px-8 py-14 mt-20 w-full rounded-t-4xl backdrop-blur-2xl">
          <Footer />
        </div>
      </main>
      {openPanel && (
        <div className="fixed inset-0 z-50 flex">
          {/* Backdrop (desktop) */}
          <div
            className="hidden flex-1 bg-black/40 backdrop-blur-sm md:block"
            onClick={() => setOpenPanel(null)}
          />
          {/* Panel */}
          <div
            className={`
              w-full max-w-full md:max-w-md h-full border-l backdrop-blur-2xl
              ${
                isDark
                  ? "border-white/10 bg-neutral-950/90"
                  : "border-black/5 bg-white/95"
              }
              shadow-[0_20px_70px_rgba(0,0,0,0.75)] animate-slideInRight
            `}
          >
            <div
              className={`flex flex-col border-b ${
                isDark ? "border-white/10" : "border-black/5"
              }`}
            >
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex gap-4">
                  <button
                    onClick={() => setOpenPanel("settings")}
                    className={`px-6 py-2 rounded-2xl rounded-b-none transition-colors ${
                      openPanel === "settings"
                        ? "bg-white text-black border-2 border-black/50 border-b-0"
                        : "text-neutral-500 hover:bg-neutral-300/20"
                    }`}
                  >
                    General
                  </button>
                  <button
                    onClick={() => setOpenPanel("server")}
                    className={`px-6 py-2 rounded-2xl rounded-b-none transition-colors ${
                      openPanel === "server"
                        ? "bg-white text-black border-2 border-black/50 border-b-0"
                        : "text-neutral-500 hover:bg-neutral-300/20"
                    }`}
                  >
                    Server
                  </button>
                </div>
                <button
                  onClick={() => setOpenPanel(null)}
                  className="opacity-60 hover:opacity-100"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="px-4">
                <p
                  className={`text-[11px] ${
                    isDark ? "text-neutral-400" : "text-neutral-600"
                  }`}
                >
                  {openPanel === "settings"
                    ? "Appearance and workspace preferences."
                    : "Manage your personal information and preferences."}
                </p>
              </div>
            </div>
            <div className="custom-scrollbar h-[calc(100%-60px)] overflow-hidden px-4 py-8">
              <div
                className="flex w-[200%] h-full transition-transform duration-500 ease-in-out will-change-transform"
                style={{
                  transform:
                    openPanel === "server" ? "translateX(-50%)" : "translateX(0)",
                }}
              >
                <div className="w-full space-y-6 overflow-y-auto px-4 mr-4">
                  <SettingsSectionLabel label="Appearance" dark={isDark} />
                  <div
                    className={`rounded-2xl border p-3 md:p-4 shadow-sm transition-colors
                      ${
                        isDark
                          ? "border-white/10 bg-neutral-900/80"
                          : "border-black/5 bg-white/80"
                      }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <div className="text-xs font-medium">Theme</div>
                        <div
                          className={`text-[11px] ${
                            isDark ? "text-neutral-400" : "text-neutral-600"
                          }`}
                        >
                          Light, Dark, or System.
                        </div>
                      </div>
                      <ThemeModeButtons
                        theme={theme}
                        setTheme={handleThemeChange}
                        dark={isDark}
                      />
                    </div>
                  </div>
                  
                  <div className="p-4 mb-4 text-sm text-white/80 bg-orange-600 rounded-2xl shadow-inner" role="alert">
                    <span className="font-medium block text-white">Access restricted!</span> The following features are currently closed and only available to a limited number of users. We are working hard to expand access soon. Stay tuned for updates!
                  </div>
                  <SettingsSectionLabel label="Notifications" dark={isDark} />
                  <div
                    className={`space-y-2 rounded-2xl border p-3 md:p-4 shadow-sm transition-colors
                      ${
                        isDark
                          ? "border-white/10 bg-neutral-900/80"
                          : "border-black/5 bg-white/80"
                      }`}
                  >
                    <SettingsRow
                      icon={Bell}
                      title="Email alerts"
                      description="Invites, mentions, and project updates."
                      dark={isDark}
                    >
                          <MiniToggle dark={isDark} initialOn={false} />
                    </SettingsRow>
                    <SettingsRow
                      icon={Bell}
                      title="Push notifications"
                      description="Realtime notifications on supported devices."
                      dark={isDark}
                    >
                      <MiniToggle dark={isDark} initialOn={false} />
                    </SettingsRow>
                  </div>
                  <SettingsSectionLabel label="Security" dark={isDark} />
                  <div
                    className={`space-y-2 rounded-2xl border p-3 md:p-4 shadow-sm transition-colors ${
                      isDark
                        ? "border-white/10 bg-neutral-900/80"
                        : "border-black/5 bg-white/80"
                    }`}
                  >
                    <SettingsRow
                      icon={Shield}
                      title="Two‑factor authentication"
                      description="Add an extra layer of protection."
                      dark={isDark}
                    >
                      <MiniToggle dark={isDark} initialOn={false} />
                    </SettingsRow>
                  </div>
                  <SettingsSectionLabel label="Subscriptions & Billing" dark={isDark} />

                  <div
                    className={`
                        relative flex flex-col rounded-2xl border transition-all hover:shadow-lg
                        ${isDark ? "border-white/10 bg-linear-to-br from-black to-neutral-900" : "border-blue-200 bg-linear-to-br from-blue-50 to-white"}
                    `}
                  >
                    <button
                      onClick={() => togglePlanExpand("starter")}
                      className="w-full text-left p-4 md:p-5 flex items-start justify-between gap-3 hover:opacity-80 transition-opacity"
                    >
                      <div className="flex-1 flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-base font-bold tracking-tight">Starter</h3>
                          <p className="text-2xl font-bold">
                            FREE<span className="text-xs font-semibold text-neutral-500 ps-2">for all</span>
                          </p>
                        </div>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`shrink-0 transition-transform duration-300 ${expandedPlans.has("starter") ? "rotate-180" : ""}`}
                      />
                    </button>

                    {expandedPlans.has("starter") && (
                      <div className={`border-t px-4 md:px-5 py-3 space-y-3 ${isDark ? "border-white/10" : "border-black/5"}`}>
                        <p className="text-xs text-neutral-500">Perfect for individuals and small teams.</p>
                        <ul className="space-y-1.5">
                          <li className="flex items-center gap-2 text-xs">
                            <span className="text-green-500 shrink-0"><Check size={14} /></span>
                            <span>Basic Corsprite</span>
                          </li>
                          <li className="flex items-center gap-2 text-xs">
                            <span className="text-green-500 shrink-0"><Check size={14} /></span>
                            <span>Corsprite DOCS</span>
                          </li>
                          <li className="flex items-center gap-2 text-xs">
                            <span className="text-green-500 shrink-0"><Check size={14} /></span>
                            <span>All from open source</span>
                          </li>
                          <li className="flex items-center gap-2 text-xs">
                            <span className="text-red-500 shrink-0"><X size={14} /></span>
                            <span>Custom domain</span>
                          </li>
                        </ul>
                        <button className="w-full py-2 px-3 rounded-lg bg-green-600 text-white text-xs font-semibold mt-2" disabled>
                          Coming soon
                        </button>
                      </div>
                    )}
                  </div>
                  <div
                    className={`
                        relative flex flex-col rounded-2xl border-3 transition-all hover:shadow-2xl border-blue-600
                        ${isDark ? "bg-linear-to-br from-black via-blue-900/20 to-neutral-900" : "bg-linear-to-br from-blue-100 via-white to-blue-50"}
                    `}
                  >
                    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-bl-lg rounded-tr-xl">
                      Shape the future of Corsprite with your feedback!
                    </div>

                    <button
                      onClick={() => togglePlanExpand("premium")}
                      className="w-full text-left p-4 md:p-5 flex items-start justify-between gap-3 hover:opacity-80 transition-opacity"
                    >
                      <div className="flex-1 flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-base font-bold tracking-tight">Premium</h3>
                          <p className="text-2xl font-bold">
                            Free<span className="text-xs font-semibold text-neutral-500"> during alpha and beta.</span>
                          </p>
                        </div>
                      </div>
                      <ChevronDown 
                        size={20} 
                        className={`shrink-0 transition-transform duration-300 ${expandedPlans.has("premium") ? "rotate-180" : ""}`}
                      />
                    </button>

                    {expandedPlans.has("premium") && (
                      <div className={`border-t px-4 md:px-5 py-3 space-y-3 ${isDark ? "border-blue-500/20" : "border-blue-300/30"}`}>
                        <p className="text-xs text-neutral-500">For teams & advanced AI projects with unlimited potential.</p>
                        <ul className="space-y-1.5">
                          <li className="flex items-center gap-2 text-xs">
                            <span className="text-blue-500 shrink-0"><Check size={14} /></span>
                            <span>Everything in Starter</span>
                          </li>
                          <li className="flex items-center gap-2 text-xs">
                            <span className="text-blue-500 shrink-0"><Check size={14} /></span>
                            <span>Latest tools</span>
                          </li>
                          <li className="flex items-center gap-2 text-xs">
                            <span className="text-blue-500 shrink-0"><Check size={14} /></span>
                            <span>Latest AI models</span>
                          </li>
                          <li className="flex items-center gap-2 text-xs">
                            <span className="text-red-500 shrink-0"><X size={14} /></span>
                            <span>Custom domain</span>
                          </li>
                        </ul>
                        <button className="w-full py-2 px-3 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors mt-2">
                          Current plan for all alpha/beta users
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="text-xs text-neutral-500 mt-2">
                  &copy; 2026-{new Date().getFullYear()} Corsprite. All rights reserved.
                  </p>
                </div>
                <div className="w-full overflow-y-auto ml-4">
                  <ServerPanel dark={isDark} />
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

