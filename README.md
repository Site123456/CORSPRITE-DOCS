### CORSPRITE

`CORSPRITE` is a **Windows desktop sprite companion** built as a modular assistant: part study buddy, part task helper, part game assistant overlay.

Think of it as a **small, 2D character** that lives on your screen, reacts to what you’re doing, and helps you stay on track and simplify your job to next level.

---

## 1. Concept

- **Form:** 2D sprite on desktop (always‑on‑top, click‑through capable)  
- **Role:** Companion for **study**, **productivity**, **Basic Tasks** and **game hints**  
- **Principles:**  
  - Privacy‑first, explicit consent  
  - Respect aware, context‑aware  

---

## 2. Core Modules

- **Presentation Layer (`ui`)**  
  Renders the sprite, chat bubbles, HUD, notifications, and settings.

- **Behavior Engine (`behavior`)**  
  Central “brain” that routes events, manages mood/state, and decides when CORSPRITE reacts.

- **Context Engine (`context`)**  
  Detects whether you’re studying, gaming, working, or idle and switches modes accordingly.

- **Safety Module (`safety`)**  
  Enforces strict, predefined rules: privacy, app permissions, Minimum Mode, no automation.

- **Task Module (`task`)**  
  Lightweight tasks, reminders, timers, and quick notes.

- **Study Engine (`study`)**  
  Summaries, flashcards, quizzes, and session tracking.

- **Vision Engine (`vision`)**  
  Opt‑in screen capture of whitelisted apps; extracts HUD and simple visual features.

- **GameSense Engine (`gamesense`)**  
  Uses Vision features to provide **fair‑play hints** (e.g., arrows, block placement suggestions).

- **Voice Engine (`voice`)**  
  Optional speech output and short voice commands (always opt‑in).

- **Storage Engine (`storage`)**  
  Local‑first config, tasks, study data, and preferences (with future cloud sync option).

---

## 3. Example Use Cases

- **Study mode**
  - Paste text → get summary + flashcards  
  - Start a session → CORSPRITE tracks focus and suggests breaks  

- **Task mode**
  - Add quick todos and reminders  
  - Get gentle nudges when something is due  

- **Game mode**
  - Minecraft: subtle build hints, block suggestions  
  - FPS: HUD‑aware reminders (ammo, health) without aiming or automation  

---

## 4. Limitations

- High END Device minimum: 32GB RAM for smooth responce