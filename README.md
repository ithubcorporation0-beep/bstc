# BSTC — Business Solutions Tax Consultants

Official web platform for **BSTC (Business Solutions Tax Consultants)**, a premier Pakistani tax and corporate consultancy led by Registered Income Tax Practitioners (ITP).

---

## ⚡ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Server Components & Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Self-hosted / Optimized Web Fonts (Plus Jakarta Sans & Inter)
- **Deployment**: Vercel / Node.js Server

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Type Checking & Production Build
```bash
npm run typecheck
npm run build
```

---

## 📁 Content Architecture (Golden Rule)

> **All text, contact information, services, team members, and FAQs live in `src/data/`.**  
> Presentation components in `src/components/` contain zero hardcoded content.

- `src/data/settings.ts`: Company contact numbers, WhatsApp link, physical address, business hours, social channels.
- `src/data/services.ts`: The 14 corporate and tax services with details, benefits, documents, and process steps.
- `src/data/team.ts`: Consultant profiles, designations, contact details, and bios.
- `src/data/home.ts`: Hero text, metrics, about narrative, why choose us pillars, testimonials, and FAQs.
- `src/data/index.ts`: Barrel export for clean imports across the application.

---

## 📚 Documentation
- [`docs/CONTENT-GUIDE.md`](./docs/CONTENT-GUIDE.md): Client-facing manual for requesting or editing website text.
- [`docs/OPEN-ITEMS.md`](./docs/OPEN-ITEMS.md): Live tracker for PRD §9 confirmation items (O1–O16).
- [`docs/HANDOVER.md`](./docs/HANDOVER.md): Developer architecture and onboarding guide.
