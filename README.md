# Level Up Fitness | Mathikere — Premium Five-Page Gym Website

A bespoke, production-ready website for **Level Up Fitness | Mathikere**, a highly rated gym and fitness centre located in Mathikere, Bengaluru, Karnataka, India.

---

## 📍 Business Overview

- **Business Name:** Level Up Fitness | Mathikere
- **Category:** Gym and fitness centre
- **Phone:** `+91 99169 90052`
- **Address:** No. 14, Athriya Towers, Tank Bund Road, opposite JP Park ground, next to Reliance Supermarket, Brindavan Nagar, SBM Colony, Mathikere, Bengaluru, Karnataka 560054, India.
- **Google Maps Snapshot:** **4.9 ★** rating based on **593 verified reviews**.
- **Key Real Highlights:** Spacious workout floor, clean and well-maintained equipment, knowledgeable and patient trainers, friendly community atmosphere, and true value for money.

---

## 🎨 Art Direction & Visual Identity

The design adheres to a strict editorial athletic aesthetic:

- **Obsidian Black (`#0A0A09`)**: Core canvas background (70% surface).
- **Deep Charcoal (`#171715`)**: Secondary editorial surfaces and cards (25% surface).
- **Graphite (`#242421`)**: Subtle borders, dividers, and card frames.
- **Warm Ivory (`#F2F0E9`)**: High-contrast editorial display headlines and key text.
- **Muted Stone (`#AAA79F`)**: Secondary text, technical labels, and captions.
- **Restrained Olive (`#777C57`)**: Brand accent used for badges, active states, keylines, and subtle callouts.

*Strict anti-AI rules enforced: Zero purples, blues, cyans, neons, floating blobs, or generic glassmorphic cards.*

---

## 🏛️ Five Direct Accessible Routes

1. **`/` (Home)** — High-impact hero, verified 4.9★ / 593 reviews badge, trust strip, about preview, verified facilities grid, member feedback summary, and closing CTA.
2. **`/about` (About Us)** — Editorial story, three core principles (*Consistency, Guidance, Community*), verified training environment qualities, and training inclusivity manifesto.
3. **`/facilities` (Facilities)** — Equipment breakdown, asymmetrical photo gallery with live category filtering, and accessible full-screen image lightbox modal.
4. **`/membership` (Membership)** — Honest enquiry-led membership structure, tenure options, validated enquiry form, and comprehensive FAQ.
5. **`/contact` (Contact)** — Direct dialer, full physical address with landmarks, verified hours snapshot, validated contact form, and high-contrast dark Google Maps embed.

---

## ⚡ Custom Motion & Mobile Optimizations

- **Bespoke Glowy Cursor (PC Only):** Dual-element cursor with a precision dot and smooth trailing olive glow aura (`#777C57`). Hides default OS cursor on pointer devices; completely disabled on touchscreens.
- **Mobile Quick-Action Thumb Bar:** Fixed bottom bar on smartphones with instant one-touch direct dial (`+91 99169 90052`) and quick enquiry navigation.
- **Safe Area Insets & iOS Zoom Protection:** All inputs locked at `16px` on mobile to prevent Safari auto-zoom; fully responsive from 360px viewports up to 4K displays.

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Routing:** React Router v7 (`react-router-dom`)
- **Icons:** Lucide React
- **SEO & Structured Data:** JSON-LD `ExerciseGym` Schema injected in `index.html`

---

## 🚀 Getting Started

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Starts the local development server at `http://localhost:5173`.

### Production Build
```bash
npm run build
```
Generates an optimized static production bundle in `dist/`.

---

## ⚙️ Central Configuration

All business information, Google review snapshots, operational hours, facilities categories, and gallery photographs are centrally managed in:
[`src/data/gymConfig.ts`](./src/data/gymConfig.ts)

Gym management can easily replace phone numbers, review metrics, or photo URLs in this single file without editing React components.
