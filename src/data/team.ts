import { TeamMember } from "@/types/content";

/**
 * Static Team & Consultant Profiles.
 * Name-based slugs (e.g. "hassan-zeb") map directly to `/team/[slug]`.
 */
export const team: TeamMember[] = [
  {
    slug: "hassan-zeb",
    name: "Hassan Zeb",
    desig: "CEO & Principal Tax Consultant (ITP)",
    dept: "Direct Taxation & Corporate Advisory",
    shortDesc: "Registered Income Tax Practitioner (ITP) leading corporate tax strategy and SECP compliance.",
    bio: "Hassan Zeb is a Registered Income Tax Practitioner (ITP) with over 20 years of specialized experience in corporate taxation, FBR compliance, and SECP regulations. He founded BSTC to simplify the complex regulatory landscape for Pakistani businesses, helping over 15,000 clients achieve full tax compliance and seamless company incorporations.",
    email: "bs.taxconsultants@gmail.com",
    phone: "+92 333 9860439",
    ext: "101",
    wa: "923339860439",
    li: "https://linkedin.com",
    img: "/images/team/hassan-zeb.svg",
    status: "active",
    order: 1,
  },
  {
    slug: "ahmed-ali",
    name: "Ahmed Ali",
    desig: "Senior Tax Consultant",
    dept: "Provincial & Indirect Taxation",
    shortDesc: "Specialist in sales tax across PRA, SRB, and KPRA revenue authorities.",
    bio: "Ahmed Ali specializes in multi-jurisdictional indirect tax advisory, managing sales tax on services for hotels, IT exporters, construction firms, and commercial enterprises across Punjab, Sindh, and Khyber Pakhtunkhwa.",
    email: "ahmed@bstc.com.pk", // TODO(O6): confirm direct email
    phone: "+92 300 0000000", // TODO(O2): real phone number from client
    ext: "102",
    wa: "923000000000", // TODO(O3): real WhatsApp number from client
    li: "https://linkedin.com", // TODO(O9): LinkedIn profile from client
    img: "/images/team/ahmed-ali.svg", // TODO(O14): real headshot image from client
    status: "active",
    order: 2,
  },
  {
    slug: "sarah-khan",
    name: "Sarah Khan",
    desig: "Corporate Bookkeeper & Financial Analyst",
    dept: "Accounting & Financial Reporting",
    shortDesc: "Manages corporate bookkeeping, payroll reconciliation, and financial reporting.",
    bio: "Sarah Khan brings meticulous attention to detail in ledger maintenance, accounts reconciliation, payroll management, and financial statement compilation in compliance with Pakistani accounting standards.",
    email: "sarah@bstc.com.pk", // TODO(O6): confirm direct email
    phone: "+92 300 0000000", // TODO(O2): real phone number from client
    ext: "103",
    wa: "923000000000", // TODO(O3): real WhatsApp number from client
    li: "https://linkedin.com", // TODO(O9): LinkedIn profile from client
    img: "/images/team/sarah-khan.svg", // TODO(O14): real headshot image from client
    status: "active",
    order: 3,
  },
];
