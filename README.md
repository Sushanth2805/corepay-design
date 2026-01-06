# CorePay Landing Page

A high-fidelity, neobrutalist-inspired landing page for a global payment platform. This project focuses on premium aesthetics, featuring glassmorphic UI elements, "Satoshi-style" typography, and pixel-perfect layouts.

## 🚀 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Module Resolution:** [esm.sh](https://esm.sh/) (No-build setup using ES Modules)
- **Typography:** Plus Jakarta Sans (configured for a Satoshi-like feel with tight tracking)
- **Icons:** Custom SVG Graphics

## ✨ Key Features

- **Floating Glassmorphic Navbar:** A sophisticated, blur-heavy navigation bar that stays fixed as you scroll.
- **Neobrutalist Hero Section:** Bold borders, hard shadows, and vibrant orange (`#FF5C35`) accents.
- **Layered Card Illustrations:** Custom-styled credit card visuals with depth-driven rotation and shadows.
- **Subtle Grid System:** A refined 40px grid background with low-contrast opacity (2%) for a professional blueprint feel.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop views.

## 📁 Project Structure

```text
.
├── index.html          # Entry point with Tailwind & Google Fonts
├── index.tsx           # React root initialization
├── App.tsx             # Main layout and section orchestration
├── components/         # Modular UI components
│   ├── Navbar.tsx      # Glassmorphic floating nav
│   ├── Hero.tsx        # Headline and card illustrations
│   ├── Stats.tsx       # Horizontal data highlights
│   ├── Features.tsx    # Service grid
│   ├── Pricing.tsx     # Tiered subscription cards
│   └── Footer.tsx      # Site navigation and branding
└── metadata.json       # Project configuration
```

## 🎨 Design System

- **Primary Color:** `#FF5C35` (Vibrant Orange)
- **Background:** `#F8F6F1` (Soft Creamy White)
- **Text:** `#1A1A1A` (Deep Charcoal)
- **Typography:** 
  - Weight: 700-800 for headlines.
  - Tracking: `-0.04em` (Tight) for that modern fintech aesthetic.
