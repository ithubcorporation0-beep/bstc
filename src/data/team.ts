import { TeamMember } from "@/types/content";

/**
 * Static Team & Consultant Profiles.
 * Name-based slugs (e.g. "javed-hussain", "hassan-zeb", "azlan-manzoor") map directly to `/team/[slug]`.
 */
export const team: TeamMember[] = [
  {
    slug: "javed-hussain",
    name: "Javed Hussain",
    desig: "Owner & Registered Income Tax Practitioner (ITP)",
    dept: "Executive Leadership & Corporate Advisory",
    shortDesc: "Owner & Registered Income Tax Practitioner (ITP) leading corporate taxation strategy and client advisory.",
    bio: "Javed Hussain is the Owner and a Registered Income Tax Practitioner (ITP) at Business Solutions Tax Consultants (BSTC). With deep expertise in Pakistani tax laws, corporate compliance, and business setup, he leads the firm with a commitment to providing transparent, accurate, and audit-proof corporate advisory across Pakistan.",
    email: "javedhussainitp@gmail.com",
    phone: "+92 313 9760000",
    wa: "923139760000",
    li: "https://linkedin.com",
    img: "/images/team/javed-hussain.svg",
    status: "active",
    order: 1,
  },
  {
    slug: "hassan-zeb",
    name: "Hassan Zeb",
    desig: "Principal Tax Consultant & Registered ITP",
    dept: "Direct Taxation & FBR Compliance",
    shortDesc: "Registered Income Tax Practitioner (ITP) leading direct tax filing, corporate appeals, and SECP compliance.",
    bio: "Hassan Zeb is a Registered Income Tax Practitioner (ITP) with extensive experience in corporate taxation, FBR compliance, and SECP regulations. He specializes in individual and corporate income tax return filing, sales tax optimization, and audit representation across Pakistan.",
    email: "hassanzebitp@gmail.com",
    phone: "+92 333 9860439",
    wa: "923339860439",
    li: "https://linkedin.com",
    img: "/images/team/hassan-zeb.svg",
    status: "active",
    order: 2,
  },
  {
    slug: "azlan-manzoor",
    name: "Azlan Manzoor",
    desig: "Senior Tax Advisor",
    dept: "Taxation Advisory & Client Compliance",
    shortDesc: "Senior Tax Advisor specializing in corporate tax advisory, FBR return preparation, and business registrations.",
    bio: "Azlan Manzoor serves as Senior Tax Advisor at Business Solutions Tax Consultants (BSTC), guiding businesses through direct and indirect taxation, sales tax on services across provincial revenue authorities, and strategic tax planning.",
    email: "azlanmanzooritp@gmail.com",
    phone: "+92 313 1541054",
    wa: "923131541054",
    li: "https://linkedin.com",
    img: "/images/team/azlan-manzoor.svg",
    status: "active",
    order: 3,
  },
];
