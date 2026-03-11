"use client";

import { Mic, Video, Zap, Cpu } from "lucide-react";

export default function Page() {
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 space-y-16">

      {/* ALERT */}
      <div
        role="alert"
        className="flex items-start gap-4 rounded-2xl border border-red-500/60 bg-red-600/50 text-red-100 px-6 py-4 backdrop-blur-xl shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-7 h-7 shrink-0 mt-0.5 text-red-200"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z"
          />
        </svg>

        <p className="text-base leading-relaxed font-medium">
          This is a core Module!
        </p>
      </div>
      <section className="relative overflow-hidden rounded-3xl bg-linear-to-br from-blue-700 via-blue-600 to-indigo-700 p-10 sm:p-14 md:p-20 text-white shadow-2xl">

        <div className="absolute inset-0 bg-white/10 backdrop-blur-sm pointer-events-none" />

        <div className="relative space-y-8 max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-5 py-1.5 text-sm backdrop-blur-md font-medium">
            <Cpu size={16} />
            Real-Time
          </div>

          <div className="flex items-center gap-4">
            <Mic className="shrink-0" size={48} />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Audio Input
            </h1>
          </div>

          <p className="text-lg sm:text-xl opacity-90 leading-relaxed max-w-2xl">
            Outputs a realtime MP3 stream (1s-10min delay) and a JSON payload
            containing pitch, tone, descriptors, and other voice metrics.
            Data is automatically deleted after ~20 minutes or at the next session launch.
          </p>

        </div>
      </section>
      <section className="space-y-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <Feature
            icon={<Zap size={26} />}
            title="Auto Detection"
            desc="Automatically detects microphones at launch."
            color="from-sky-400 to-blue-500"
          />

          <Feature
            icon={<Cpu size={26} />}
            title="Low Latency"
            desc="Optimized for fast voice interaction. Auto-disables when CPU/GPU exceed 50%."
            color="from-cyan-400 to-teal-500"
          />

          <Feature
            icon={<Video size={26} />}
            title="Realtime MP3 Output"
            desc="Streams compressed audio with a 1–10 min rolling buffer."
            color="from-amber-400 to-orange-500"
          />

          <Feature
            icon={<Cpu size={26} />}
            title="Voice Metrics"
            desc="Extracts pitch, energy, and timbre descriptors in JSON."
            color="from-green-400 to-emerald-500"
          />

          <Feature
            icon={<Zap size={26} />}
            title="Hot Reload Safe"
            desc="Survives UI reloads without audio dropouts."
            color="from-fuchsia-400 to-purple-600"
          />

          <Feature
            icon={<Cpu size={26} />}
            title="Developer Hooks"
            desc="Expose lifecycle events for custom DSP or routing."
            color="from-teal-400 to-cyan-500"
          />

        </div>
      </section>
      <section className="space-y-10">
        <h2 className="text-3xl font-bold tracking-tight">
          Module Access Permissions
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <AccessCard
            color="red"
            title="Microphone Access"
            desc="Live audio capture from hardware input."
          />

          <AccessCard
            color="orange"
            title="Text‑to‑Audio Module"
            desc="Sends text for synthesis and playback."
          />

          <AccessCard
            color="yellow"
            title="Audio‑to‑Text Module"
            desc="Provides speech recognition and transcripts."
          />

          <AccessCard
            color="green"
            title="CORSPRITE Output Text"
            desc="Receives processed assistant responses."
          />

          <AccessCard
            color="blue"
            title="JSON Metadata"
            desc="Pitch, tone, energy, and voice descriptors."
          />

          <AccessCard
            color="purple"
            title="MP3 Stream"
            desc="Realtime rolling audio buffer (1s–10min)."
          />

        </div>
      </section>

    </main>
  );
}

/* FEATURE CARD */interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  color: string;
}

function Feature({ icon, title, desc, color }: FeatureProps) {
  return (
    <div
      className={`group rounded-2xl p-7 bg-linear-to-br ${color} shadow-xl 
      transition-all duration-300 hover:scale-[1.05] hover:shadow-2xl`}
    >
      <div className="mb-4 opacity-90 group-hover:opacity-100 transition">
        {icon}
      </div>

      <div className="font-semibold text-xl tracking-tight mb-2">
        {title}
      </div>

      <p className="text-sm opacity-90 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}

/* ACCESS CARD */
const colors = {
  red: "from-red-600/40 to-red-700/40 border-red-500/60",
  orange: "from-orange-600/40 to-orange-700/40 border-orange-500/60",
  yellow: "from-yellow-600/40 to-yellow-700/40 border-yellow-500/60",
  green: "from-green-600/40 to-green-700/40 border-green-500/60",
  blue: "from-blue-600/40 to-blue-700/40 border-blue-500/60",
  purple: "from-purple-600/40 to-purple-700/40 border-purple-500/60",
} as const;

function AccessCard({
  color,
  title,
  desc
}: {
  color: keyof typeof colors;
  title: string;
  desc: string;
}) {
  return (
    <div
      className={`flex items-start gap-4 p-6 rounded-2xl bg-linear-to-br ${colors[color]} 
      shadow-xl backdrop-blur-xl transition-all hover:scale-[1.03]`}
    >
      <span className="w-4 h-4 rounded-full bg-white/40 mt-1.5 shadow" />
      <div>
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-sm opacity-90 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
