# BSTC Live Tracker — Open Confirmation Items (PRD §9: O1–O16)

> **Purpose**: This live tracker catalogs all client confirmation points required before production launch. Once confirmed by the client, update the respective file in `src/data/` and mark the status as **[DONE]**.

---

## 📋 Open Items Table

| ID | Item Description | Target File | Current Placeholder | Status | Verification Notes |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **O1** | Primary Office Phone Number | `src/data/settings.ts` | `+92 300 0000000` | 🟡 `Pending Client` | Required for click-to-call & header |
| **O2** | Official WhatsApp Business Number | `src/data/settings.ts` | `+923000000000` | 🟡 `Pending Client` | Needed for floating WhatsApp CTA |
| **O3** | Official Inquiries Email Address | `src/data/settings.ts` | `consult@bstc.com.pk` | 🟡 `Pending Client` | Destination for contact form notifications |
| **O4** | Primary Office Physical Address | `src/data/settings.ts` | `Blue Area, Islamabad, Pakistan` | 🟡 `Pending Client` | Full street address for local SEO |
| **O5** | Swat Branch Office Address | `src/data/settings.ts` | `Main Mingora / Saidu Sharif, Swat` | 🟡 `Pending Client` | Secondary branch office address |
| **O6** | Google Maps Business Pin URL | `src/data/settings.ts` | `https://maps.google.com` | 🟡 `Pending Client` | Embed / direct directions URL |
| **O7** | Official Working Hours | `src/data/settings.ts` | `Mon - Fri, 9:00 AM - 6:00 PM` | 🟡 `Pending Client` | Client intake & consultation hours |
| **O8** | Social Media URLs (FB, LinkedIn, X, Insta) | `src/data/settings.ts` | `#` | 🟡 `Pending Client` | Official corporate social channels |
| **O9** | Hassan Zeb (ITP) Photo & Credentials | `src/data/team.ts` | `/images/team/hassan-zeb.webp` | 🟡 `Pending Client` | High-res professional headshot |
| **O10** | Additional Consultant Profiles & Photos | `src/data/team.ts` | Ahmed Ali, Sarah Khan | 🟡 `Pending Client` | Confirm names, roles & headshots |
| **O11** | Years in Practice Metric | `src/data/home.ts` | `12+` | 🟡 `Pending Client` | Actual founding year / experience |
| **O12** | Total Clients Served Metric | `src/data/home.ts` | `1500+` | 🟡 `Pending Client` | Verified client milestone |
| **O13** | Projects / Cases Completed Metric | `src/data/home.ts` | `2400+` | 🟡 `Pending Client` | Corporate / tax case total |
| **O14** | FBR Returns Filed Metric | `src/data/home.ts` | `4500+` | 🟡 `Pending Client` | Annual returns filed count |
| **O15** | Client Testimonials & Endorsements | `src/data/home.ts` | 2 placeholder quotes | 🟡 `Pending Client` | Real client reviews with permission |
| **O16** | Registered ITP License & NTN for Footer | `src/data/settings.ts` | `Registered ITP (FBR / ICTBAR)` | 🟡 `Pending Client` | Official practitioner license details |

---

## 🔄 How to Close an Item
1. Receive confirmed details from the client.
2. Edit the corresponding field in [`src/data/`](../src/data/).
3. Update the status in this file from `Pending Client` to `DONE` and record the verification date.
