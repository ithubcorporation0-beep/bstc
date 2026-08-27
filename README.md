# BSTC — Business Solutions Tax Consultants

Official website for **Business Solutions Tax Consultants (BSTC)**, a Pakistani tax and corporate consultancy led by Registered Income Tax Practitioners (ITP).

---

## 📌 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Static Site Generation)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) / Static Hosting

---

## 🚀 How to Run Locally

### 1. Prerequisites
- Node.js (version 18 or higher recommended)
- npm or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your web browser to view the site.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## 📁 Where Content Lives (The Golden Rule)

> **All site copy, services, team bios, contact numbers, and FAQs live exclusively in `src/data/`.**  
> Presentation components in `src/components/` never contain hardcoded text or numbers.

| Content Type | Location |
| :--- | :--- |
| **Phone, Email, WhatsApp, Address, Socials** | `src/data/settings.ts` |
| **The 14 Corporate & Tax Services** | `src/data/services.ts` |
| **Team Profiles & Consultants** | `src/data/team.ts` |
| **Hero Copy, Stats, About, FAQs, Reviews** | `src/data/home.ts` |
| **Data Exports** | `src/data/index.ts` |

---

## 🚢 How to Deploy

1. **Vercel (Recommended)**:
   - Push your code to a GitHub repository (`main` branch).
   - Import the repository in [Vercel Dashboard](https://vercel.com/).
   - Add any production environment variables from `.env.example` in Vercel settings.
   - Every `git push` to `main` will automatically build and deploy the live website.

2. **Self-Hosted Node Server**:
   - Run `npm run build` followed by `npm run start`.
