# BSTC Website — Client Content Management Guide

Dear Mr. Hassan Zeb & the BSTC Team,

This guide explains how content on your website is organized and how you or your web team can update text, phone numbers, services, team members, and photos quickly.

---

## 1. The 30-Second Content Location Map

All website content is organized into **4 simple files** in the `src/data/` folder. Whenever you want to change any text on your website, tell your developer which file to update from this table:

| What You Want to Change | Which File to Open | Notes |
| :--- | :--- | :--- |
| **Phone Number / WhatsApp** | `src/data/settings.ts` | Changing this once updates the navbar, footer, contact section, and floating WhatsApp button everywhere automatically. |
| **Office Address & Working Hours** | `src/data/settings.ts` | Updates the contact section, footer, and Google structured data. |
| **Email Address** | `src/data/settings.ts` | Changes the display email across the site and the recipient for consultation form submissions. |
| **Social Media Links** (FB, LinkedIn, etc.) | `src/data/settings.ts` | Add your profile link; leaving it blank automatically hides the icon cleanly. |
| **Homepage Headline & Subheading** | `src/data/home.ts` | Updates the main hero banner text at the top of the homepage. |
| **Firm Statistics** (Years, Clients, Returns) | `src/data/home.ts` | Updates the 4 animated counter boxes on the homepage. |
| **About Us Text & Value Cards** | `src/data/home.ts` | Updates the narrative story and 4 trust cards in the About section. |
| **General Homepage FAQs** | `src/data/home.ts` | Add, edit, or remove frequently asked questions. |
| **Client Testimonials / Reviews** | `src/data/home.ts` | Add real quotes; if left empty, the section disappears cleanly without empty gaps. |
| **Services (14 Service Pages)** | `src/data/services.ts` | Updates the overview, required document checklists, step-by-step process, benefits, and service FAQs for any of the 14 services. |
| **Team Profiles & Bio** | `src/data/team.ts` | Add new consultants, update designations, bios, and direct contact details. |
| **Team Member Photos** | `public/images/team/` | Save portrait photos named after the consultant (e.g. `hassan-zeb.jpg`). |

---

## 2. How to Request a Content Change

To request a content change from your web developer:
1. **Specify the item**: (e.g., *"Update our office address to Suite 204, Evacuee Trust Complex, Islamabad"*).
2. **Reference the file**: Mention the file from the table above (e.g. `src/data/settings.ts`).
3. **Turnaround time**: Simple text, phone number, and address updates take **under 10 minutes** to update and publish live to production.

---

## 3. What Can Be Changed Without Code Changes
The following items can be updated by simply changing the text in the data files:
- All phone numbers, emails, and WhatsApp numbers.
- All service descriptions, required document bullet points, and filing steps.
- All team member names, photos, biographies, and extensions.
- All FAQ questions and answers.
- Working hours and office addresses.
- Social media profile links.

---

## 4. What Requires Developer Work
The following changes involve visual layout adjustments or backend coding and require developer assistance:
- Adding a brand new interactive tool (e.g. an online tax bracket calculator).
- Changing the primary brand colors (royal blue / lime green palette) or font styles.
- Adding a customer login/portal with user passwords.
- Adding an online payment checkout gateway (e.g. credit card or JazzCash integration).
- Translating the entire website layout to Urdu (RTL layout support).
