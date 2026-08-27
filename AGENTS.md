# Standing Rules for AI Agents — BSTC Codebase

## 1. Content Separation Mandate (Zero Exception)
- **ALL content, copy, business parameters, numbers, emails, addresses, WhatsApp links, service names, and bios MUST live exclusively in `src/data/`.**
- **Presentation components in `src/components/` must NEVER contain hardcoded prose or contact details.**
- If a client wants to update their phone number or service details, there must be **exactly ONE file** to modify.

## 2. Directory Architecture
- `src/data/`: The single source of truth for site data (`services.ts`, `team.ts`, `home.ts`, `settings.ts`, `index.ts`).
- `src/types/`: TypeScript definitions (`content.ts`) guaranteeing type safety.
- `src/components/`: Reusable, purely presentational components receiving typed props or consuming `src/data/`.
- `src/app/`: Next.js App Router routes, layouts, error boundaries, and metadata.
- `src/lib/`: SEO helpers, JSON-LD builders, validation schemas, and general utilities.
- `docs/`: Client guides (`CONTENT-GUIDE.md`), open items tracker (`OPEN-ITEMS.md`), and developer handover (`HANDOVER.md`).

## 3. Git Workflow
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

## 4. Code Standards
- Strict TypeScript (`strict: true`). Zero `any` types unless explicitly justified.
- Tailwind CSS v4 design tokens and semantic classes.
- Full mobile responsiveness, accessibility standards (ARIA labels, keyboard navigation), and light/dark theme support.

