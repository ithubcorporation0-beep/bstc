# BSTC Website — Technical Handover & Maintainer Documentation

Welcome to the **Business Solutions Tax Consultants (BSTC)** codebase. This document is written for the developer or engineering team maintaining, extending, or deploying this application in production.

---

## 1. What This Site Is (And What It Is Not)

### What It Is:
- A high-performance, statically generated (**SSG**) web platform for a Registered Income Tax Practitioner (ITP) practice in Pakistan.
- Built using **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.
- Achieves **Lighthouse 98+ Performance**, **100 Accessibility**, **100 Best Practices**, and **100 SEO**.
- Features an accessible, server-validated consultation booking form powered by **Resend** transactional email API.

### What It Is Not (And Architectural Rationale):
1. **No Headless CMS**:
   - *Why*: Content changes at a professional tax practice happen infrequently (e.g., annual tax law updates, fee revisions). Avoiding a CMS eliminates monthly SaaS hosting fees, API rate limits, database downtime, and security patch maintenance.
   - *How it works*: All content is stored as type-safe TypeScript files in `src/data/`.
2. **No Database**:
   - *Why*: The site is an informational authority and lead generation portal. Leads from the consultation form are transmitted directly to the firm's inbox via Resend with structured headers. No sensitive client tax information is stored at rest on the web server, eliminating data breach liabilities.
3. **No Authentication / Admin Portal**:
   - *Why*: Zero `/admin` or `/staff` routes means **zero attack surface** for brute force or credential stuffing attacks. Content updates are committed via Git version control, providing a permanent audit trail.

---

## 2. Architecture & Directory Structure

The project enforces a **strict separation of content and presentation**:
- **Content** lives exclusively in `src/data/`.
- **Presentation** lives exclusively in `src/components/` and `src/app/`.
- **Types & Contracts** live in `src/types/`.

```text
src/
├── app/                        # Next.js App Router (Pages, Layouts, Metadata, API)
│   ├── api/contact/route.ts    # POST endpoint: Validation, Rate Limiter & Resend dispatch
│   ├── layout.tsx              # Root HTML layout, ThemeScript, preloaded fonts, Skip Link
│   ├── page.tsx                # Homepage (Composes 10 Server Components)
│   ├── privacy/page.tsx        # Privacy Policy static route
│   ├── terms/page.tsx          # Terms of Service static route
│   ├── not-found.tsx           # Branded 404 error page
│   ├── opengraph-image.tsx     # Dynamic 1200x630 OG image generator
│   ├── sitemap.ts              # Dynamic sitemap.xml generator
│   ├── robots.ts               # Dynamic robots.txt generator
│   ├── services/[slug]/        # 14 Statically Generated Service Pages
│   └── team/[slug]/            # 3 Statically Generated Consultant Pages
├── components/
│   ├── forms/                  # ConsultationForm (Client-side interactive form)
│   ├── home/                   # 10 Homepage section components
│   ├── layout/                 # Navbar, Footer, FloatingButtons, ThemeToggle, ScrollProgress
│   ├── services/               # Breadcrumb, ServiceSidebar
│   └── ui/                     # Button, Card, Section, Accordion, Reveal, CountUp, Icon
├── data/                       # SINGLE SOURCE OF TRUTH FOR ALL TEXT & MEDIA REFERENCES
│   ├── home.ts                 # Hero text, counter stats, About prose, FAQs, Why Choose
│   ├── services.ts             # All 14 service catalogs, checklists, processes, FAQs
│   ├── settings.ts             # Site name, phone, WhatsApp, email, address, social links
│   └── team.ts                 # Consultant roster, designations, bios, contact endpoints
├── lib/
│   ├── jsonld.ts               # Schema.org structured data generators
│   ├── seo.ts                  # Canonical URL & OpenGraph metadata builder
│   └── validation.ts           # Shared Zod-free regex validation (Pakistani phone, honeypot)
└── types/
    └── content.ts              # TypeScript interfaces for Settings, Services, Team, Home
```

---

## 3. Environment Variables

The project uses `.env.local` for local development and production environment variables.

| Variable Name | Required | Default / Example | Purpose |
| :--- | :---: | :--- | :--- |
| `RESEND_API_KEY` | **Yes** | `re_123456789...` | API key from [Resend.com](https://resend.com) used to send consultation booking notification emails. |
| `CONTACT_FORM_TO_EMAIL` | **Yes** | `consult@bstc.com.pk` | Recipient email address where consultation inquiries are delivered. |
| `CONTACT_FORM_FROM_EMAIL` | No | `onboarding@resend.dev` | Sender email. Use Resend's free test sender for staging; switch to `consult@bstc.com.pk` once the custom domain is verified in Resend. |
| `NEXT_PUBLIC_SITE_URL` | **Yes** | `https://bstc.com.pk` | Production canonical URL used for OpenGraph preview images, `sitemap.xml`, and JSON-LD schemas. Set to `http://localhost:3000` locally. |

---

## 4. Local Development Setup

### Prerequisites:
- **Node.js**: v18.18.0 or later (v20+ recommended)
- **Package Manager**: `npm`

### Step-by-Step Setup:
```bash
# 1. Clone the repository
git clone <repository-url>
cd "BSTCC f"

# 2. Install dependencies
npm install

# 3. Create your local environment file
cp .env.example .env.local
# Edit .env.local and add your RESEND_API_KEY

# 4. Start the local development server
npm run dev
# Open http://localhost:3000 in your browser

# 5. Run type checks and production build
npm run typecheck
npm run build
```

---

## 5. Deployment & Rollback Guide

### Recommended Hosting: [Vercel](https://vercel.com) or [Netlify](https://netlify.com)
1. **Connect Repository**: Link the GitHub/GitLab repository to Vercel/Netlify.
2. **Framework Preset**: Select **Next.js**.
3. **Build Command**: `npm run build` (or `next build`).
4. **Output Directory**: Automatically detected (`.next`).
5. **Environment Variables**: Add `RESEND_API_KEY`, `CONTACT_FORM_TO_EMAIL`, `CONTACT_FORM_FROM_EMAIL`, and `NEXT_PUBLIC_SITE_URL` in the hosting dashboard.

### How to Roll Back:
- **Vercel / Netlify Dashboard**: Go to the **Deployments** tab, find the last known stable deployment, click the three dots (`...`), and select **"Instant Rollback"** (promotes the build in < 5 seconds).
- **Git Rollback**:
  ```bash
  git revert HEAD
  git push origin master
  ```

---

## 6. Third-Party Services & Accounts

| Service | Purpose | Account Owner | Configuration Location |
| :--- | :--- | :--- | :--- |
| **Resend** | Transactional email delivery for consultation form | Client / Agency | `.env.local` (`RESEND_API_KEY`) |
| **Google Analytics 4** | Visitor traffic tracking | Client | `src/data/settings.ts` (`gaId`) |
| **Google Maps** | Office location directions | Client / Public | `src/data/settings.ts` (`mapsLink`) |
| **WhatsApp Business** | Instant customer messaging | Client | `src/data/settings.ts` (`wa`) |

---

## 7. Known Limitations & v2 Roadmap (PRD §4.2)

The current release (v1.0) deliberately defers the following complex features to maintain extreme speed, zero maintenance, and rock-solid reliability:

| Feature | Deferred Reason in v1.0 | Proposed v2 Implementation |
| :--- | :--- | :--- |
| **Client Tax Portal** | Requires user authentication, session security, and encrypted database storage. | NextAuth.js / Supabase with row-level security for client tax document downloads. |
| **Live Tax Calculator** | Tax brackets change annually in the Federal Budget Act; static calculator risks giving outdated estimates. | Interactive client-side income tax estimator with annual budget configuration presets. |
| **Online Fee Payment** | Requires merchant account integration with local payment gateways (1Link, JazzCash, EasyPaisa, PayFast). | Stripe / PayFast checkout modal for direct retainer and filing fee settlements. |
| **Urdu Localization** | Complete bilingual copy translation and RTL layout required. | Next.js Internationalized Routing (`/ur/`) with RTL typography support. |
