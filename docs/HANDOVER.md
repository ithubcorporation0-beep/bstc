# Developer Handover & Architecture Document — BSTC Platform

Welcome to the **BSTC (Business Solutions Tax Consultants)** codebase. This document is written for incoming developers to understand the design system, directory structure, data patterns, and deployment procedures.

---

## 🏛️ Architecture Overview

The application is built on **Next.js (App Router)** with **TypeScript**, **Tailwind CSS v4**, and static site generation for peak performance, sub-second TTFB, and zero runtime database overhead.

```
src/
├── app/                  # Next.js App Router (pages, layout, API routes)
├── components/           # Presentational UI components (pure, zero hardcoded content)
│   ├── home/             # Homepage section components
│   ├── layout/           # Navbar, Footer, ThemeToggle, FloatingButtons
│   ├── services/         # ServiceSidebar, RelatedServices, Breadcrumb
│   ├── forms/            # ConsultationForm
│   └── ui/               # Button, Card, Accordion, Reveal, CountUp, Icon
├── data/                 # Single Source of Truth for all site content
│   ├── services.ts       # 14 corporate & tax services
│   ├── team.ts           # Team members & consultants
│   ├── home.ts           # Homepage copy, metrics, why us, FAQs, testimonials
│   ├── settings.ts       # Global contact info, social links, SEO defaults
│   └── index.ts          # Barrel export
├── lib/                  # Shared utilities (SEO, JSON-LD, validation, utils)
└── types/                # Strict TypeScript type declarations
```

---

## 🔒 The Fundamental Rule: Content Separation

To ensure maintainability, content and presentation are decoupled:
1. **Never hardcode business copy, contact details, or service names in JSX/TSX components.**
2. Components consume data from `src/data/` via imports or typed props.
3. If the client asks to change a phone number, update an FAQ, or add a service benefit, modify only the corresponding file in `src/data/`.

---

## 📑 Routing & Dynamic Pages

| Route | File Path | Description |
| :--- | :--- | :--- |
| `/` | `src/app/page.tsx` | Main landing page assembling home sections |
| `/services/[slug]` | `src/app/services/[slug]/page.tsx` | Dynamic service page generated statically via `generateStaticParams()` |
| `/team/[slug]` | `src/app/team/[slug]/page.tsx` | Dynamic consultant profile page |
| `/privacy` | `src/app/privacy/page.tsx` | Comprehensive privacy policy |
| `/terms` | `src/app/terms/page.tsx` | Terms of service and engagement |
| `/api/contact` | `src/app/api/contact/route.ts` | Server-side route handler for consultation requests |

---

## 🛠️ Adding a New Service
1. Open [`src/data/services.ts`](../src/data/services.ts).
2. Append a new object complying with the `Service` interface:
   ```typescript
   {
     slug: "new-service-slug",
     title: "Service Title",
     shortDesc: "Brief summary for card grids.",
     fullDesc: "Detailed description for the service landing page.",
     icon: "shield-check",
     benefits: ["Benefit 1", "Benefit 2"],
     requiredDocs: ["Document 1", "Document 2"],
     processSteps: ["Step 1", "Step 2", "Step 3"],
     faqs: [{ question: "...", answer: "..." }],
     seoTitle: "Service Title | BSTC",
     seoDescription: "Meta description for SEO...",
     order: 15,
   }
   ```
3. The sitemap, service listing, dynamic routing, and related services will update automatically.

---

## 🌐 SEO & Structured Data (JSON-LD)
- Metadata is dynamically constructed using `src/lib/seo.ts`.
- Schema.org structured data is generated in `src/lib/jsonld.ts` including:
  - `LocalBusiness` / `AccountingService` for the homepage.
  - `Service` for each dynamic service page.
  - `BreadcrumbList` for breadcrumb navigation.
  - `FAQPage` for interactive FAQs.

---

## 🚀 Build & Deployment Commands

```bash
# Development server
npm run dev

# Run TypeScript typecheck
npm run typecheck

# Build static production bundle
npm run build

# Start production server
npm run start
```

---

## 🏷️ Git Workflow & Commit Rules

After every single prompt or task, commit using the standard format:
```bash
git add -A
git commit -m "type: description"
git push
```

### Message Format: `type: description` (lowercase, present tense)

| Type | Use for | Example |
| :--- | :--- | :--- |
| `chore` | Setup, config, tooling | `chore: configure tailwind tokens` |
| `feat` | A new thing that works | `feat: add floating whatsapp button` |
| `fix` | Repairing something broken | `fix: resolve icon typing error` |
| `content` | Text and data changes in `src/data/` | `content: update office phone number` |
| `style` | Visual only, no behaviour change | `style: improve glassmorphism contrast` |
| `perf` | Speed & optimization | `perf: optimize static page generation` |
| `a11y` | Accessibility improvements | `a11y: add aria labels to mobile drawer` |
| `docs` | Documentation updates | `docs: add client content guide` |

