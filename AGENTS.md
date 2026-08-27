# Standing Rules for AI Agents — BSTC Codebase

## Context
Marketing site for **BSTC (Business Solutions Tax Consultants)**, a premier Pakistani tax and corporate consultancy led by Registered Income Tax Practitioners (ITP).
Next.js App Router, TypeScript, Tailwind CSS. Static content from typed files in `src/data/`.
No database, no auth, no admin routes.

---

## 🚫 Non-Negotiable Rules

1. **No Admin / Staff Routes**: Never create `/admin` or `/staff` routes. They were deliberately removed.
2. **Content Separation Mandate (Zero Exception)**:
   - **ALL content, copy, business parameters, numbers, emails, addresses, WhatsApp links, service names, and bios MUST live exclusively in `src/data/`.**
   - **Presentation components in `src/components/` must NEVER contain hardcoded prose or contact details.**
   - If a client wants to update their phone number or service details, there must be **exactly ONE file** to modify.
3. **No Redesigns**: The prototype's visual design is client-approved. Reproduce it; do not modernise, simplify, or "improve" it.
4. **No Hallucinated Tax Law**: Never invent facts about Pakistani tax law, required documents, filing deadlines, or process steps. If content is missing, write `TODO(O1)` through `TODO(O16)` and leave it for the client to supply.
5. **No Secret Commits**: Never commit secrets. API keys go in `.env.local`, which is gitignored.
6. **Server-Side Rendering for Content**: Every page must server-render its content. No client-side data fetching for content that should be in the HTML source.

---

## 📁 Directory Architecture
- `src/data/`: The single source of truth for site data (`services.ts`, `team.ts`, `home.ts`, `settings.ts`, `index.ts`).
- `src/types/`: TypeScript definitions (`content.ts`) guaranteeing type safety.
- `src/components/`: Reusable, purely presentational components receiving typed props or consuming `src/data/`.
- `src/app/`: Next.js App Router routes, layouts, error boundaries, and metadata.
- `src/lib/`: SEO helpers, JSON-LD builders, validation schemas, and general utilities.
- `docs/`: Client guides (`CONTENT-GUIDE.md`), open items tracker (`OPEN-ITEMS.md`), and developer handover (`HANDOVER.md`).

---

## 🎨 Code & Style Guidelines
- **Strict TypeScript**: `strict: true`. Zero `any` types.
- **Server Components by Default**: Add `"use client"` only where a component genuinely needs state, effects, or browser APIs.
- **Component File Structure**: One component per file, named the same as the file.
- **Lucide Icons**: Import lucide icons individually (e.g. `import { FileText } from "lucide-react"`).
- **Tailwind CSS**: Utility classes only. No separate CSS files beyond `globals.css`.

---

## 🔄 Git Workflow
- Always make atomic, semantic commits after every prompt:
  ```bash
  git add -A
  git commit -m "type: description"
  git push
  ```
- **Message format**: `type: description` (strictly lowercase, present tense).
- **Commit Types**:
  - `chore`: Setup, config, tooling
  - `feat`: A new thing that works
  - `fix`: Repairing something broken
  - `content`: Text and data changes
  - `style`: Visual only, no behaviour change
  - `perf`: Speed
  - `a11y`: Accessibility
  - `docs`: Documentation

---

## 🤝 Working Style for Pair Programming
- Explain each command before running it and each file before creating it.
- Change only what the current prompt asks for. If you notice an unrelated problem, mention it and leave it alone.
- After finishing, list every file created or modified.
