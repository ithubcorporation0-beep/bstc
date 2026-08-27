# Business Solutions Tax Consultants (BSTC)

The official web platform for **Business Solutions Tax Consultants (BSTC)**, a premier Pakistani taxation and corporate advisory firm led by Registered Income Tax Practitioners (ITP). Designed for high-converting lead generation, search engine authority, and flawless performance across all device viewports.

---

## ⚡ Tech Stack

| Technology | Role & Purpose |
| :--- | :--- |
| **[Next.js 16 (App Router)](https://nextjs.org/)** | Static Site Generation (SSG), Turbopack bundler, server-rendered components, dynamic OpenGraph image generation. |
| **[React 19](https://react.dev/)** | Component architecture, declarative hooks, zero runtime overhead. |
| **[TypeScript 5](https://www.typescriptlang.org/)** | End-to-end strict type safety across data schemas and component props. |
| **[Tailwind CSS v4](https://tailwindcss.com/)** | Build-time PostCSS styling with curated royal/lime design tokens and dark mode support. |
| **[Lucide React](https://lucide.dev/)** | Lightweight, individually imported SVG iconography. |
| **[Resend SDK](https://resend.com/)** | Serverless transactional email delivery for consultation form submissions. |

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Clone the repository
git clone <repository-url>
cd "BSTCC f"

# 2. Install dependencies
npm install

# 3. Setup environment variables
cp .env.example .env.local
# Add your RESEND_API_KEY and NEXT_PUBLIC_SITE_URL in .env.local

# 4. Start local development server
npm run dev
# Open http://localhost:3000

# 5. Type-check & Production Build
npm run typecheck
npm run build
```

---

## 📂 Project Architecture Map

```text
.
├── docs/                        # Complete project and client documentation
│   ├── HANDOVER.md              # 🛠️ Developer & Maintainer Technical Handover Guide
│   ├── CONTENT-GUIDE.md         # 📘 Client Plain-Language Content Management Guide
│   ├── CONTENT-BRIEF.md         # 📝 14-Service Content Questionnaire for Hassan Zeb
│   └── OPEN-ITEMS.md            # 📋 Live Client Open Items Tracker (PRD §9)
├── public/                      # Static assets (self-hosted fonts, SVGs, favicon)
│   ├── fonts/                   # Inter (400–700) & Plus Jakarta Sans (600–800) .woff2
│   └── images/                  # Showcase graphics, service icons, team avatars
├── src/
│   ├── app/                     # Next.js App Router (Pages, Layouts, API, Metadata)
│   ├── components/              # UI Component Library (Forms, Home, Layout, Services)
│   ├── data/                    # 📌 SINGLE SOURCE OF TRUTH (Settings, Services, Team, Home)
│   ├── lib/                     # Utilities (JSON-LD schemas, SEO helper, Validation regex)
│   └── types/                   # TypeScript interfaces and content models
└── next.config.ts               # AVIF/WebP image formats & build optimization
```

---

## 📚 Essential Documentation Links

- **[Developer Handover Guide (docs/HANDOVER.md)](file:///e:/BSTCC%20f/docs/HANDOVER.md)**: Architectural rationale (no CMS/database), environment variables, deployment/rollback guide, third-party accounts, and v2 roadmap.
- **[Client Content Management Guide (docs/CONTENT-GUIDE.md)](file:///e:/BSTCC%20f/docs/CONTENT-GUIDE.md)**: Plain-language instructions for Mr. Hassan Zeb on where each piece of content lives in `src/data/` and how to request updates in 30 seconds.
- **[Service Content Brief Questionnaire (docs/CONTENT-BRIEF.md)](file:///e:/BSTCC%20f/docs/CONTENT-BRIEF.md)**: Fill-in-the-blank questionnaire for all 14 tax and corporate services.
- **[Open Items Tracker (docs/OPEN-ITEMS.md)](file:///e:/BSTCC%20f/docs/OPEN-ITEMS.md)**: Live tracking table for client-provided assets, contact numbers, and verified credentials.

---

## 🛡️ License & Maintenance
Copyright © 2026 Business Solutions Tax Consultants (BSTC). All rights reserved.
