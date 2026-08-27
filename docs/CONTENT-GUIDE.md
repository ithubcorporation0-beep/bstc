# BSTC Website — Content Management Guide for Client & Staff

Welcome to the content guide for the **Business Solutions Tax Consultants (BSTC)** website. This document explains how you can easily update text, contact information, services, team details, and FAQs without breaking the design or needing deep programming skills.

---

## 🎯 The One Golden Rule

> **All site content lives inside the `src/data/` folder.**  
> You never need to touch design code, buttons, or page layouts. When you update a file in `src/data/`, the entire website updates everywhere automatically.

---

## 📁 Where to Find What

| What you want to change | File to open | Examples of what is inside |
| :--- | :--- | :--- |
| **Phone, Email, WhatsApp, Address, Socials** | [`src/data/settings.ts`](../src/data/settings.ts) | Office phone, WhatsApp number, Islamabad/Swat address, office timings, Google Maps URL, Facebook/LinkedIn links |
| **The 14 Tax & Corporate Services** | [`src/data/services.ts`](../src/data/services.ts) | Service titles, descriptions, benefits lists, required documents, process steps, and service FAQs |
| **Team Members & Consultants** | [`src/data/team.ts`](../src/data/team.ts) | Hassan Zeb and consultant names, designations, bios, direct phone/extension, WhatsApp, and profile photos |
| **Homepage Copy, Stats, About, FAQs** | [`src/data/home.ts`](../src/data/home.ts) | Hero headline, badge, experience years, clients served, why choose us cards, client reviews, and general FAQs |

---

## 🛠️ Step-by-Step Examples

### 1. Updating the Company Phone or WhatsApp Number
1. Open [`src/data/settings.ts`](../src/data/settings.ts).
2. Look for the lines:
   ```typescript
   phone: "+92 300 0000000",
   whatsapp: "+923000000000",
   ```
3. Change the number inside the quotes:
   ```typescript
   phone: "+92 51 1234567",
   whatsapp: "+923001234567",
   ```
4. Save the file. The header, mobile drawer, footer, contact form, and floating action buttons update immediately.

---

### 2. Updating a Service's Required Documents or Benefits
1. Open [`src/data/services.ts`](../src/data/services.ts).
2. Find the service by name (for example, `secp-company-registration` or `sales-tax-registration`).
3. Modify the list items inside `benefits` or `requiredDocs`:
   ```typescript
   requiredDocs: [
     "Color copy of CNICs of all Directors / Shareholders",
     "Proposed Company Names (3 choices in order of preference)",
     "Registered Office Address & Proof of Tenancy / Ownership",
     "Subscriber Share Capital Breakdown",
   ],
   ```
4. Save the file. The service detail page and schema update automatically.

---

### 3. Adding or Updating a Team Member
1. Open [`src/data/team.ts`](../src/data/team.ts).
2. Update the consultant's name, bio, or direct contact:
   ```typescript
   {
     slug: "hassan-zeb",
     name: "Hassan Zeb",
     designation: "CEO / Principal Tax Consultant (ITP)",
     department: "Management & Corporate Taxation",
     bio: "Registered Income Tax Practitioner (ITP) with extensive specialized experience...",
     email: "hassan@bstc.com.pk",
     phone: "+92 300 0000000",
     whatsapp: "+923000000000",
     image: "/images/team/hassan-zeb.webp",
     order: 1,
   }
   ```

---

## 🚀 How Changes Go Live
1. Make your edits in `src/data/`.
2. Commit and push the changes to GitHub (`git add -A && git commit -m "content: update phone number" && git push`).
3. Vercel or your hosting platform will build and deploy the new version in under 2 minutes.
