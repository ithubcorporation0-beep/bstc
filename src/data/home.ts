import { HomeContent } from "@/types/content";

/**
 * Static Homepage Content Model.
 * Consumed by homepage sections in `src/app/page.tsx`.
 */
export const homeContent: HomeContent = {
  hero: {
    title: "Professional Tax & Business Consultancy in Pakistan",
    subtitle:
      "Helping businesses, freelancers, and corporations stay 100% compliant, registered, and financially organized.",
    cta: "Book Free Consultation",
    ctaLink: "#contact",
    secondaryCta: "Explore All Services",
    secondaryCtaLink: "#services",
    bg: "",
  },
  stats: [
    { label: "Years Experience", value: 12, suffix: "+" }, // TODO(O15): real verified metrics from client
    { label: "Clients Served", value: 1500, suffix: "+" }, // TODO(O15): real verified metrics from client
    { label: "Projects Completed", value: 2400, suffix: "+" }, // TODO(O15): real verified metrics from client
    { label: "Returns Filed", value: 4500, suffix: "+" }, // TODO(O15): real verified metrics from client
  ],
  about: {
    title: "About Business Solutions Tax Consultants",
    intro:
      "Founded and led by Hassan Zeb, a Registered Income Tax Practitioner (ITP), BSTC was established with one mission: Tax compliance and corporate registration should never be confusing, slow, or uncertain.",
    desc:
      "For over a decade, we have helped salaried individuals, freelancers, commercial traders, startups, and established enterprises across Pakistan navigate tax compliance, corporate registrations, bookkeeping, and financial reporting with total confidence.\n\nWhether you need seamless annual income tax return filing, provincial sales tax handling, or SECP private limited company incorporation, our dedicated practitioners manage the complexities so you can focus on building your business.",
    img: "/images/about-showcase.svg", // TODO(O11): Replace local placeholder with verified client office/team photo (PRD O11 Unsplash eliminated)
    cards: [
      {
        title: "Registered ITP Leadership",
        desc: "Direct advisory by certified Income Tax Practitioners registered with regulatory authorities.",
      },
      {
        title: "End-to-End Compliance",
        desc: "From NTN issuance and sales tax to annual auditing and corporate SECP filings.",
      },
      {
        title: "100% Digital Convenience",
        desc: "Secure online document submission, remote processing, and transparent updates.",
      },
    ],
  },
  why: [
    {
      icon: "ShieldCheck",
      title: "Licensed Practitioners",
      desc: "Direct counsel from certified Income Tax Practitioners (ITPs) with over a decade of hands-on regulatory experience.",
    },
    {
      icon: "Clock",
      title: "Prompt Turnaround",
      desc: "Fast processing times for NTN generation, company incorporation, and urgent monthly tax filings.",
    },
    {
      icon: "Scale",
      title: "Transparent & Fair Pricing",
      desc: "Clear, upfront fee structure with zero hidden surprise charges or undisclosed expenses.",
    },
    {
      icon: "FileText",
      title: "100% Audit-Proof Accuracy",
      desc: "Meticulous documentation and calculation ensuring total adherence to FBR, SECP, and provincial laws.",
    },
    {
      icon: "Users",
      title: "Dedicated Account Manager",
      desc: "Personalized attention with a direct point of contact for ongoing accounting and tax queries.",
    },
    {
      icon: "Sparkles",
      title: "Multi-Jurisdiction Coverage",
      desc: "Comprehensive expertise across federal FBR and provincial authorities including PRA, SRB, KPRA, and BRA.",
    },
  ],
  faqs: [
    {
      q: "How long does SECP private limited company registration take?",
      a: "Standard SECP company registration takes approximately 3 to 5 business days once all subscriber CNICs, proposed business names, and documentation are submitted through the eServices portal.",
    },
    {
      q: "Do I need to visit your office physically for tax filing?",
      a: "No physical visit is mandatory. All consultations, document transmissions, and approvals can be completed digitally through our secure communication and WhatsApp channels.",
    },
    {
      q: "What is Active Taxpayer List (ATL) status and why does it matter?",
      a: "Being on the Active Taxpayer List (ATL) gives individuals and companies significant tax benefits, including reduced withholding tax rates on banking transactions, vehicle token tax, and property transfers. Non-filers are subject to double withholding rates.",
    },
    {
      q: "Can you assist with provincial sales tax across different provinces?",
      a: "Yes, we handle provincial sales tax on services across all provincial authorities in Pakistan, including PRA (Punjab), SRB (Sindh), KPRA (Khyber Pakhtunkhwa), and BRA (Balochistan).",
    },
    {
      q: "Are there any hidden costs in your consultation or filing fees?",
      a: "No. We believe in 100% transparent pricing and provide a comprehensive itemized quote before initiating any filing, registration, or advisory assignment.",
    },
  ],
  testimonials: [
    {
      name: "Omar Farooq", // TODO(O13): real client testimonial from client
      comp: "Founder, Apex Logistics", // TODO(O13): real client testimonial from client
      rating: 5,
      text: "BSTC made our corporate company registration and NTN procurement completely painless. Hassan Zeb and his team are exceptionally knowledgeable and responsive.",
    },
    {
      name: "Ali Raza", // TODO(O13): real client testimonial from client
      comp: "Director, NexGen Software", // TODO(O13): real client testimonial from client
      rating: 5,
      text: "Professional, fast, and transparent. BSTC has handled our monthly sales tax and annual corporate filings for three consecutive years without a single hiccup.",
    },
    {
      name: "Tariq Mahmood", // TODO(O13): real client testimonial from client
      comp: "Owner, Mahmood Trading Co", // TODO(O13): real client testimonial from client
      rating: 5,
      text: "Their team resolved our lingering tax audit notices and got our business onto the Active Taxpayer List within days. Exceptional service quality.",
    },
  ],
};
