/**
 * =======================================================================
 * TEAM CONTENT FILE — BSTC Website
 * =======================================================================
 * HOW TO EDIT THIS FILE SAFELY (Guide for non-programmers):
 *
 * 1. Each team member is represented as a block inside curly braces { ... }.
 * 2. Edit values inside quotes "like this" (e.g., name, designation, bio).
 * 3. Placeholders marked with `// TODO(client): confirm` should be verified
 *    and updated with official client details.
 * 4. Keep "slug" unique for each member, using lowercase and hyphens
 *    (e.g., "hassan-zeb").
 * =======================================================================
 */

import type { TeamMember } from "@/types/content";

export const teamMembers: readonly TeamMember[] = [
  {
    slug: "hassan-zeb",
    name: "Hassan Zeb",
    designation: "CEO / Principal Tax Consultant (ITP)",
    department: "Management & Corporate Taxation",
    shortDesc:
      "Registered Income Tax Practitioner (ITP) leading corporate tax strategy, FBR audits, and SECP compliance.",
    bio: "Hassan Zeb is a Registered Income Tax Practitioner (ITP) with extensive specialized experience in Pakistani corporate taxation, FBR statutory compliance, and SECP regulations. He founded BSTC to provide clear, reliable, and results-driven taxation and corporate consultancy to individuals, partnerships, and growing businesses across Pakistan.",
    email: "hassan@bstc.com.pk", // TODO(client): confirm official email (O9)
    phone: "+92 300 0000000", // TODO(client): confirm official direct phone (O9)
    extension: "101",
    whatsapp: "+923000000000", // TODO(client): confirm WhatsApp business number (O9)
    linkedinUrl: "#", // TODO(client): confirm LinkedIn profile URL
    image: "/images/team/hassan-zeb.svg", // Client photo placeholder
    order: 1,
  },
  {
    slug: "ahmed-ali",
    name: "Ahmed Ali",
    designation: "Senior Tax Consultant",
    department: "Provincial & Federal Sales Tax",
    shortDesc:
      "Specialist in provincial sales tax compliance across PRA, SRB, KPRA, and BRA.",
    bio: "Ahmed Ali oversees monthly sales tax compliance and advisory for commercial and service sector clients. He specializes in managing cross-provincial tax reconciliations, input tax claims, and representing clients before provincial revenue authorities.",
    email: "ahmed@bstc.com.pk", // TODO(client): confirm official email (O10)
    phone: "+92 300 0000000", // TODO(client): confirm direct phone (O10)
    extension: "102",
    whatsapp: "+923000000000", // TODO(client): confirm WhatsApp (O10)
    linkedinUrl: "#", // TODO(client): confirm LinkedIn profile URL
    image: "/images/team/ahmed-ali.svg", // Client photo placeholder
    order: 2,
  },
  {
    slug: "sarah-khan",
    name: "Sarah Khan",
    designation: "Corporate Bookkeeper",
    department: "Accounting & Financial Reporting",
    shortDesc:
      "Manages corporate bookkeeping, general ledgers, payroll, and periodic financial statements.",
    bio: "Sarah Khan leads accounting operations, managing structured general ledgers, accounts reconciliation, payroll registers, and periodic balance sheet preparations for corporate clients and SMEs.",
    email: "sarah@bstc.com.pk", // TODO(client): confirm official email (O10)
    phone: "+92 300 0000000", // TODO(client): confirm direct phone (O10)
    extension: "103",
    whatsapp: "+923000000000", // TODO(client): confirm WhatsApp (O10)
    linkedinUrl: "#", // TODO(client): confirm LinkedIn profile URL
    image: "/images/team/sarah-khan.svg", // Client photo placeholder
    order: 3,
  },
] as const;

export const team = teamMembers;
