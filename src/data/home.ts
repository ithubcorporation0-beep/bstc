/**
 * =======================================================================
 * HOMEPAGE CONTENT FILE — BSTC Website
 * =======================================================================
 * HOW TO EDIT THIS FILE SAFELY (Guide for non-programmers):
 *
 * 1. This file contains all text for the homepage: Hero section,
 *    About section, Stats, Why Choose Us, Testimonials, Process, and FAQs.
 * 2. You can edit text inside quotes "like this".
 * 3. Placeholders marked with `// TODO(client): confirm` should be reviewed
 *    by the client to ensure accurate business figures and testimonials.
 * =======================================================================
 */

import type { HomeContent } from "@/types/content";

export const homeContent: HomeContent = {
  hero: {
    badge: "Accepting new clients for Tax Year 2026",
    title: "Professional Tax & Business Consultancy in Pakistan",
    subtitle:
      "Helping Businesses Stay Compliant, Registered, and Financially Organized.",
    cta: "Book Consultation",
  },
  about: {
    badge: "Our Story",
    title: "About Business Solutions Tax Consultants",
    intro:
      "Founded and led by Hassan Zeb, a Registered Income Tax Practitioner (ITP), Business Solutions Tax Consultants (BSTC) was established with one simple mission: Tax and business registration should never be confusing, slow, or uncertain.",
    body: [
      "For over a decade, we have helped individuals, freelancers, traders, startups, and companies across Swat and Pakistan navigate tax compliance, business registrations, bookkeeping, and financial documentation with confidence.",
      "Whether you need your first NTN Registration, complete SECP Company Registration, monthly Bookkeeping, Sales Tax Registration, or professional tax consultancy, our experienced team ensures every process is completed accurately, on time, and in accordance with FBR and provincial regulations.",
      "We handle the paperwork, compliance, and reporting — so you can focus on growing your business.",
    ],
    image: "/images/team/hassan-zeb.svg",
    founderName: "Hassan Zeb (ITP)",
    founderTitle: "Founder & CEO",
  },
  stats: [
    {
      label: "Years Experience",
      value: 12,
      suffix: "+", // TODO(client): confirm actual years of experience (O11)
    },
    {
      label: "Clients Served",
      value: 1500,
      suffix: "+", // TODO(client): confirm client count statistic (O12)
    },
    {
      label: "Projects Completed",
      value: 2400,
      suffix: "+", // TODO(client): confirm projects completed statistic (O13)
    },
    {
      label: "Returns Filed",
      value: 4500,
      suffix: "+", // TODO(client): confirm returns filed count (O14)
    },
  ],
  whyUs: [
    {
      icon: "shield-check",
      title: "Experienced Consultants",
      desc: "Direct guidance from registered Income Tax Practitioners with proven regulatory expertise.",
    },
    {
      icon: "zap",
      title: "Quick Response",
      desc: "Structured workflows ensuring timely document preparation and prompt filing.",
    },
    {
      icon: "scale",
      title: "100% Transparency",
      desc: "Upfront fee structure with zero hidden costs and official government receipts provided.",
    },
  ],
  testimonials: [
    {
      name: "Omar Farooq", // TODO(client): confirm client name / permission (O15)
      company: "E-commerce Founder", // TODO(client): confirm client company title
      rating: 5,
      text: "BSTC made my company registration and NTN process completely painless. Highly recommended!", // TODO(client): confirm testimonial text
    },
    {
      name: "Ali Raza", // TODO(client): confirm client name / permission (O15)
      company: "Tech Solutions CEO", // TODO(client): confirm client company title
      rating: 5,
      text: "Professional, fast, and transparent. Hassan Zeb and his team handled our sales tax flawlessly.", // TODO(client): confirm testimonial text
    },
  ],
  processSteps: [
    {
      stepNumber: "01",
      title: "Consultation",
      desc: "Initial discussion to identify your specific tax, accounting, or corporate registration needs.",
    },
    {
      stepNumber: "02",
      title: "Documentation",
      desc: "Secure collection and verification of essential CNIC, banking, and business records.",
    },
    {
      stepNumber: "03",
      title: "Processing",
      desc: "Accurate preparation, calculation, and electronic filing through official government portals.",
    },
    {
      stepNumber: "04",
      title: "Delivery",
      desc: "Handover of official FBR acknowledgments, certificates, and compliance documentation.",
    },
  ],
  faqs: [
    {
      question: "How long does company registration take?",
      answer:
        "Standard SECP incorporation is typically finalized within 2 to 4 business days once all required subscriber documentation is submitted.",
    },
    {
      question: "Do I need to visit your office physically?",
      answer:
        "No, our entire consultancy and filing process can be completed digitally via secure email and WhatsApp communication.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No, we provide complete, transparent fee quotations including government challans before beginning any engagement.",
    },
    {
      question: "What happens if I miss the annual tax filing deadline?",
      answer:
        "Missing the deadline may result in removal from the Active Taxpayer List (ATL) and statutory late filing penalties. We help you file on time or submit condonation requests.",
    },
  ],
  aboutCards: [
    {
      title: "Certified Experts",
      desc: "Registered Income Tax Practitioner (ITP) experienced in FBR, SECP, Sales Tax, PRA, KPRA, BRA, and SRB compliance.",
    },
    {
      title: "Trusted Services",
      desc: "Successfully assisted hundreds of businesses, freelancers, and corporations across Pakistan.",
    },
    {
      title: "Professional Support",
      desc: "Personalized consultation and dedicated client assistance throughout the financial year.",
    },
    {
      title: "Compliant Processing",
      desc: "Every registration and statutory filing executed strictly within official legal frameworks.",
    },
  ],
} as const;

export const home = homeContent;
