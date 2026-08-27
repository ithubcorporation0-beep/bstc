# BSTC Website — Open Items Tracker (PRD §9)

This live tracker documents all items requiring authentic content, credentials, contact endpoints, or assets from the client.

| Item ID | Section / Field | Current Placeholder Value | What Is Needed From Client | Status | Date Resolved |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **O1** | Service Detail Pages (`src/data/services.ts`) | Empty strings / empty arrays | Authentic `fullDesc`, `benefits`, `reqDocs`, `process`, and `faqs` for all 14 services. | 🟡 Open | — |
| **O2** | Official Phone Number (`src/data/settings.ts`, `team.ts`) | `+92 333 9860439` | Official office phone numbers for general inquiries and consultant direct extensions. | 🟢 Resolved | 2026-08-27 |
| **O3** | Official WhatsApp Number (`src/data/settings.ts`, `team.ts`) | `923339860439` | Active WhatsApp business number for instant chat widget and 1-click consultation. | 🟢 Resolved | 2026-08-27 |
| **O4** | Office Physical Address (`src/data/settings.ts`) | `Office No. 03, Shehzad Plaza, Saidu Road, Makan Bagh, Mingora, District Swat` | Exact physical street address, building/floor, and office location in Pakistan. | 🟢 Resolved | 2026-08-27 |
| **O5** | Google Maps Location Link (`src/data/settings.ts`) | `https://maps.google.com/?q=Shehzad+Plaza+Saidu+Road+Makan+Bagh+Mingora+Swat` | Google Maps location URL / embed link for the office. | 🟢 Resolved | 2026-08-27 |
| **O6** | Inquiries Email Address (`src/data/settings.ts`, `team.ts`) | `bs.taxconsultants@gmail.com` | Confirmed active email address for contact form submissions and consultant profiles. | 🟢 Resolved | 2026-08-27 |
| **O7** | Operating Business Hours (`src/data/settings.ts`) | `Mon - Sat: 9:00 AM - 6:00 PM` | Confirmed office working hours and weekend schedule. | 🟡 Open | — |
| **O8** | Facebook Page URL (`src/data/settings.ts`) | `https://facebook.com` | Official Facebook company page URL. | 🟡 Open | — |
| **O9** | LinkedIn Profile URL (`src/data/settings.ts`, `team.ts`) | `https://linkedin.com` | Official company LinkedIn page and consultant profile URLs. | 🟡 Open | — |
| **O10** | Twitter / X Handle (`src/data/settings.ts`) | `https://twitter.com` | Official Twitter / X profile URL (if applicable). | 🟡 Open | — |
| **O11** | Instagram Profile URL (`src/data/settings.ts`) | `https://instagram.com` | Official Instagram profile URL. | 🟡 Open | — |
| **O12** | YouTube Channel URL (`src/data/settings.ts`) | `https://youtube.com` | Official YouTube channel URL (if applicable). | 🟡 Open | — |
| **O13** | Client Testimonials & Reviews (`src/data/home.ts`) | Generic client names & text | 3–6 real client testimonials with client names, business titles, and authentic review quotes. | 🟡 Open | — |
| **O14** | Consultant Headshots (`public/images/team/`) | SVG avatar placeholders | Real professional portrait photos for Hassan Zeb, Ahmed Ali, Sarah Khan. | 🟡 Open | — |
| **O15** | Firm Statistics (`src/data/home.ts`) | `20+ yrs, 15,000+ clients, 24,000+ projects, 45,000+ returns` | Verified numerical metrics for the homepage counter bar. | 🟢 Resolved | 2026-08-27 |
| **O16** | Google Analytics 4 ID (`src/data/settings.ts`) | `G-XXXXXXXXXX` | Client's Google Analytics 4 Measurement ID (`G-...`) for live traffic tracking. | 🟡 Open | — |

---

### Instructions for Content Updates
To update any item:
1. Provide the verified text, number, or asset corresponding to the Item ID (e.g. `O2: +92 51 1234567`).
2. Update the corresponding field in `src/data/` (e.g. [`src/data/settings.ts`](file:///e:/BSTCC%20f/src/data/settings.ts)).
3. Change the status in this tracker from 🟡 `Open` to 🟢 `Resolved` and record the resolution date.
