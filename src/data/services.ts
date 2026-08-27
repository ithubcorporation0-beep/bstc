/**
 * =======================================================================
 * SERVICES CONTENT FILE — BSTC Website
 * =======================================================================
 * HOW TO EDIT THIS FILE SAFELY (Guide for non-programmers):
 *
 * 1. Each service is contained in a block between curly braces { ... }.
 * 2. You can edit text inside quotes "like this" (e.g., title, description).
 * 3. Lists of items are written inside square brackets [ "item 1", "item 2" ].
 * 4. Keep "slug" lowercase with hyphens (e.g., "ntn-registration").
 * =======================================================================
 */

import type { Service } from "@/types/content";

export const services: readonly Service[] = [
  {
    slug: "ntn-registration",
    title: "NTN Registration & Income Tax",
    shortDesc:
      "National Tax Number (NTN) registration for salaried individuals, business individuals, AOPs, and companies.",
    fullDesc:
      "Get your National Tax Number (NTN) issued swiftly with zero hassle. We handle the entire electronic registration process with the Federal Board of Revenue (FBR) IRIS portal for salaried persons, freelance professionals, business individuals, partnerships (AOPs), and limited companies.",
    icon: "file-text",
    benefits: [
      "Official 100% active taxpayer status on FBR Active Taxpayers List (ATL)",
      "Reduced withholding tax rates on banking transactions and vehicle registrations",
      "Fast-track processing within 24 to 48 hours",
      "Complete guidance on documentation and digital compliance",
    ],
    requiredDocs: [
      "Color copy of valid CNIC / NICOP",
      "Active mobile number registered in applicant's name",
      "Personal & business email address",
      "Paid utility bill of business premises (not older than 3 months)",
      "Rent agreement / proof of ownership of business premises",
      "Bank Account Maintenance Certificate in business name",
    ],
    processSteps: [
      "Submission of CNIC and preliminary business information",
      "IRIS e-enrollment and profile configuration",
      "Online verification and business registration with FBR",
      "Delivery of official FBR NTN Certificate",
    ],
    faqs: [
      {
        question: "How long does NTN registration take?",
        answer:
          "For individuals and sole proprietors, NTN registration is typically completed within 24 hours once all required documents are verified.",
      },
      {
        question: "Is physical presence required for NTN issuance?",
        answer:
          "No, the entire process is handled electronically through the FBR IRIS portal by our registered consultants.",
      },
    ],
    seoTitle: "NTN Registration Services Pakistan | Individual & Corporate NTN | BSTC",
    seoDescription:
      "Fast and compliant NTN registration for individuals, sole proprietors, AOPs, and companies in Pakistan. Official FBR IRIS e-filing by registered tax consultants.",
    order: 1,
  },
  {
    slug: "sales-tax-registration",
    title: "Sales Tax Registration (STRN)",
    shortDesc:
      "Sales Tax Registration (STRN) on FBR portal for manufacturers, importers, exporters, wholesalers, and distributors.",
    fullDesc:
      "We provide end-to-end assistance in obtaining your Sales Tax Registration Number (STRN) from the Federal Board of Revenue (FBR). Whether you are a manufacturer, commercial importer, exporter, distributor, or retailer, our team ensures smooth biometric scheduling, post-verification documentation, and prompt STRN issuance.",
    icon: "receipt",
    benefits: [
      "Legally issue official Sales Tax Invoices to corporate clients",
      "Claim input tax adjustments and sales tax refunds",
      "Eligible for government tenders and large commercial contracts",
      "Avoid penalties for unregistered commercial supplies",
    ],
    requiredDocs: [
      "Company / Business NTN Certificate",
      "Original CNICs of all Directors / Partners / Proprietor",
      "Bank Account Maintenance Certificate with active IBAN",
      "Latest paid electricity and gas bills of premises",
      "GPS-tagged photographs of business premises, office, and machinery",
      "Rent Agreement / Property Ownership Documents",
    ],
    processSteps: [
      "Preparation and validation of sales tax application dossier",
      "Online submission through FBR IRIS e-portal",
      "Coordination for biometric verification at NADRA e-Sahulat / FBR RTO",
      "Issuance of Sales Tax Registration Number (STRN)",
    ],
    faqs: [
      {
        question: "Who is required to obtain an STRN in Pakistan?",
        answer:
          "Any business engaged in manufacturing, importing, exporting, wholesale distribution, or retail supplies exceeding taxable thresholds is required to register for Sales Tax.",
      },
      {
        question: "What is the biometric verification requirement for STRN?",
        answer:
          "The applicant or designated principal officer must visit a NADRA e-Sahulat kiosk or FBR field office for digital fingerprint verification within 30 days of registration.",
      },
    ],
    seoTitle: "Sales Tax Registration (STRN) in Pakistan | FBR Sales Tax | BSTC",
    seoDescription:
      "Professional Sales Tax Registration Number (STRN) consultancy for manufacturers, importers, and traders with FBR in Pakistan.",
    order: 2,
  },
  {
    slug: "income-tax-filing",
    title: "Annual Income Tax Filing",
    shortDesc:
      "Timely and accurate income tax return preparation and filing for salaried individuals, freelancers, and businesses.",
    fullDesc:
      "Ensure full compliance and maintain your Active Taxpayer List (ATL) status with our meticulous Annual Income Tax Filing service. We prepare comprehensive wealth statements, compute allowable tax credits, reconcile withholding tax deductions, and file accurate returns on the FBR IRIS portal.",
    icon: "calculator",
    benefits: [
      "Guaranteed Active Taxpayer Status (ATL) on FBR portal",
      "Maximize lawful tax credits, rebates, and deductible allowances",
      "Accurate Wealth Statement reconciliation preventing audit notices",
      "Comprehensive tax deduction certificate verification",
    ],
    requiredDocs: [
      "Annual Salary / Income Certificate or Bank Statements (July 1 to June 30)",
      "Bank account statements for all personal and business accounts",
      "Details of assets, properties, vehicles, and investments purchased or sold",
      "Tax deduction certificates (banks, vehicle token tax, telecom, utility bills)",
      "Annual personal living expense estimates",
    ],
    processSteps: [
      "Collection and preliminary audit of annual financial records",
      "Detailed tax liability computation and wealth reconciliation",
      "Draft review and client approval of final numbers",
      "Electronic submission on FBR IRIS and delivery of CPR / acknowledgment",
    ],
    faqs: [
      {
        question: "What is the deadline for annual income tax return filing?",
        answer:
          "The statutory deadline for individuals, salaried employees, and AOPs is typically September 30th of each tax year, unless extended by the FBR.",
      },
      {
        question: "What are the benefits of being an Active Taxpayer (ATL)?",
        answer:
          "Active taxpayers enjoy significantly lower tax rates on property transactions, vehicle token tax, bank cash withdrawals, and dividend income.",
      },
    ],
    seoTitle: "Income Tax Return Filing in Pakistan | FBR ATL Status | BSTC",
    seoDescription:
      "Expert income tax return filing, wealth reconciliation, and ATL maintenance for individuals, freelancers, and corporate entities in Pakistan.",
    order: 3,
  },
  {
    slug: "secp-company-registration",
    title: "SECP Company Registration",
    shortDesc:
      "End-to-end incorporation of Private Limited (Pvt Ltd), Single Member (SMC), and LLP firms with SECP.",
    fullDesc:
      "Form your corporate entity with the Securities and Exchange Commission of Pakistan (SECP) seamlessly. We handle digital name reservations, drafting Memorandum & Articles of Association (MOA/AOA), obtaining digital signature keys, and securing the official Certificate of Incorporation.",
    icon: "building-2",
    benefits: [
      "Limited liability protection for shareholders and directors",
      "Distinct legal identity facilitating international trade and investor funding",
      "Turnkey service including SECP name reservation, MOA, AOA, and incorporation",
      "Post-incorporation support for company bank account opening and NTN",
    ],
    requiredDocs: [
      "Three proposed company names in order of preference",
      "Color copies of CNIC / NICOP / Passports of all Directors and Subscribers",
      "Registered office physical address and contact details",
      "Authorized and paid-up capital distribution details",
      "Principal line of business description",
    ],
    processSteps: [
      "SECP e-Services profile creation & name reservation application",
      "Drafting specialized Memorandum & Articles of Association",
      "Online submission of statutory incorporation forms",
      "Issuance of Digital Incorporation Certificate from SECP",
    ],
    faqs: [
      {
        question: "How long does it take to register a Private Limited company?",
        answer:
          "With our fast-track process, SECP company registration is typically completed in 2 to 4 business days after document submission.",
      },
      {
        question: "What is the minimum capital required for a Pvt Ltd company in Pakistan?",
        answer:
          "There is no mandatory minimum paid-up capital requirement by SECP for standard private limited companies, making incorporation accessible for startups.",
      },
    ],
    seoTitle: "SECP Company Registration Pakistan | Pvt Ltd & SMC-Pvt | BSTC",
    seoDescription:
      "Seamless SECP company incorporation for Private Limited, SMC, and LLP entities in Pakistan. Fast-track digital incorporation by experienced consultants.",
    order: 4,
  },
  {
    slug: "trademark-registration",
    title: "Trademark & Copyright Registration",
    shortDesc:
      "Protect your brand, logo, slogan, and intellectual property with the Intellectual Property Organization (IPO Pakistan).",
    fullDesc:
      "Safeguard your corporate identity, brand name, and proprietary creations against infringement. We handle comprehensive trademark searches, class classification, application filing (TM-1), response to examination reports, opposition defense, and final certificate issuance with IPO Pakistan.",
    icon: "shield-alert",
    benefits: [
      "Exclusive legal ownership of brand name, logo, and slogan in Pakistan",
      "Protection against brand counterfeiting, copying, and unfair competition",
      "Asset value creation for licensing, franchising, and business valuation",
      "Official (R) registered symbol usage rights upon grant",
    ],
    requiredDocs: [
      "High-resolution image of logo / brand artwork in JPEG format",
      "Applicant CNIC / Company NTN and incorporation details",
      "List of goods/services under international Nice Classification classes",
      "Date of first use in Pakistan (or proposed use)",
      "Power of Attorney (Form TM-48) executed on stamp paper",
    ],
    processSteps: [
      "Exhaustive trademark availability search in IPO database",
      "Filing official application (Form TM-1) under relevant class",
      "Monitoring examination, journal publication, and opposition window",
      "Issuance of 10-Year Renewable Trademark Registration Certificate",
    ],
    faqs: [
      {
        question: "How long is a trademark valid in Pakistan?",
        answer:
          "A registered trademark in Pakistan is valid for 10 years from the date of application and can be renewed indefinitely every 10 years.",
      },
      {
        question: "Can I register both English and Urdu brand names?",
        answer:
          "Yes, trademarks can be registered in English, Urdu, and bilingual combinations under the same or separate class filings.",
      },
    ],
    seoTitle: "Trademark Registration in Pakistan | IPO Pakistan TM & Copyright | BSTC",
    seoDescription:
      "Protect your brand name, logo, and intellectual property with IPO Pakistan. Complete trademark search, filing, and registration services.",
    order: 5,
  },
  {
    slug: "chamber-of-commerce",
    title: "Chamber of Commerce Registration",
    shortDesc:
      "Corporate membership registration with Islamabad (ICCI), Rawalpindi (RCCI), Swat (SCCI), or regional chambers.",
    fullDesc:
      "Obtaining Chamber of Commerce membership is mandatory for commercial importers, exporters, and businesses seeking government procurement tenders or international business visas. We facilitate complete membership documentation, proposer/seconder endorsements, and certificate issuance.",
    icon: "award",
    benefits: [
      "Mandatory requirement for commercial import/export licenses (WeBOC)",
      "Facilitates business visa recommendation letters for international travel",
      "Access to trade delegations, business expos, and international networking",
      "Prestigious corporate credibility among financial institutions",
    ],
    requiredDocs: [
      "Company NTN, STRN, and SECP Incorporation / Form C Certificate",
      "Bank Account Maintenance Certificate in company name",
      "CNIC copies of all Directors / Partners / Proprietor",
      "Proof of business premises ownership / tenancy and latest utility bill",
      "Two passport-sized photographs of the designated voting representative",
    ],
    processSteps: [
      "Chamber membership tier selection (Associate or Corporate Class)",
      "Compilation of chamber application dossier & executive signatures",
      "Submission to Chamber Secretariat and committee review",
      "Issuance of official Chamber Membership Certificate",
    ],
    faqs: [
      {
        question: "What is the difference between Corporate and Associate membership?",
        answer:
          "Corporate membership is designated for limited companies with higher turnover, while Associate membership caters to sole proprietorships and smaller partnerships.",
      },
    ],
    seoTitle: "Chamber of Commerce Registration Pakistan | ICCI, RCCI, SCCI | BSTC",
    seoDescription:
      "Complete Chamber of Commerce membership registration across Pakistan chambers. Essential for export/import WeBOC and commercial tenders.",
    order: 6,
  },
  {
    slug: "pra-registration",
    title: "PRA Registration & Compliance",
    shortDesc:
      "Punjab Revenue Authority (PRA) sales tax on services registration, monthly e-filing, and compliance advisory.",
    fullDesc:
      "For service businesses operating in Punjab—including IT firms, restaurants, consultants, logistics providers, and contractors—we handle Punjab Revenue Authority (PRA) registration, monthly electronic return submissions, withholding tax compliance, and representation during audits.",
    icon: "briefcase",
    benefits: [
      "Full compliance with the Punjab Sales Tax on Services Act",
      "Timely monthly return filing preventing severe late penalties",
      "Smooth issuance of PRA Tax Clearance Certificates",
      "Reconciliation of provincial input and output tax adjustments",
    ],
    requiredDocs: [
      "Federal NTN Certificate of the business",
      "CNIC Copies of Directors / Partners / Proprietor",
      "Registered Office utility bill within Punjab jurisdiction",
      "Business bank account certificate",
      "SECP Form II / Partnership Deed / Business Letterhead",
    ],
    processSteps: [
      "Preparation of PRA e-enrollment profile on Punjab e-portal",
      "Document upload and classification under relevant service tariff",
      "PRA tax officer review and approval",
      "Issuance of PRA Registration Certificate and login credentials",
    ],
    faqs: [
      {
        question: "When is the monthly PRA return due?",
        answer:
          "PRA sales tax returns must be filed electronically by the 18th of each month, with the tax payment deposited by the 15th.",
      },
    ],
    seoTitle: "PRA Registration Punjab Revenue Authority | Sales Tax Punjab | BSTC",
    seoDescription:
      "Punjab Revenue Authority (PRA) sales tax registration, monthly return filing, and withholding compliance services in Lahore and Punjab.",
    order: 7,
  },
  {
    slug: "kpra-registration",
    title: "KPRA Registration & Compliance",
    shortDesc:
      "Khyber Pakhtunkhwa Revenue Authority (KPRA) service tax registration, monthly filing, and audit management.",
    fullDesc:
      "We provide specialized local expertise for businesses operating in Khyber Pakhtunkhwa (Peshawar, Swat, Abbottabad, Mardan, etc.). We handle KPRA service sales tax registration, monthly returns on the KPRA portal, withholding statements, and representation before KPRA assessment commissioners.",
    icon: "layers",
    benefits: [
      "Dedicated regional expertise in Swat, Peshawar, and KP tax laws",
      "Compliance with KP Sales Tax on Services Act",
      "Avoidance of bank account freezing and departmental show-cause notices",
      "Expert representation during audits and provincial tax appeals",
    ],
    requiredDocs: [
      "Federal NTN Certificate",
      "CNIC Copies of Proprietor / Partners / Directors",
      "Proof of business location in Khyber Pakhtunkhwa",
      "Bank Account Certificate with active IBAN",
      "Memorandum / Partnership Deed (where applicable)",
    ],
    processSteps: [
      "Online KPRA profile registration & tariff classification",
      "Electronic submission of verification documents",
      "Field officer inspection or desk verification",
      "Issuance of official KPRA Sales Tax Certificate",
    ],
    faqs: [
      {
        question: "Does a business in Swat need KPRA registration?",
        answer:
          "Yes, any entity providing taxable services specified under KPRA schedules within the jurisdiction of KP is required to maintain KPRA registration and file returns.",
      },
    ],
    seoTitle: "KPRA Registration Khyber Pakhtunkhwa | Swat & Peshawar Tax | BSTC",
    seoDescription:
      "Khyber Pakhtunkhwa Revenue Authority (KPRA) service tax registration and monthly return filing with local expertise in Swat and Peshawar.",
    order: 8,
  },
  {
    slug: "tax-appeals-audits",
    title: "Tax Appeals & Audit Representation",
    shortDesc:
      "Legal representation before FBR Commissioners (Appeals), Appellate Tribunal (ATIR), and audit response drafting.",
    fullDesc:
      "When facing FBR tax audits, amendment orders under Section 122, or penalty notices, our registered Income Tax Practitioners (ITP) provide rigorous legal defense. We prepare comprehensive grounds of appeal, reconcile accounts, represent you at hearings, and safeguard your financial interests.",
    icon: "scale",
    benefits: [
      "Direct representation by Registered Income Tax Practitioners (ITP)",
      "Detailed factual and legal rebuttal to FBR audit show-cause notices",
      "Preparation of formal Memo of Appeal and Stay Applications",
      "Protection against arbitrary tax assessments and bank attachments",
    ],
    requiredDocs: [
      "Copy of FBR Show-Cause Notice / Audit Notice / Assessment Order",
      "Original tax return filings and audited accounts for the relevant tax year",
      "General ledger, bank statements, and supporting expense vouchers",
      "Power of Attorney / Letter of Authorization (Wakalatnama)",
    ],
    processSteps: [
      "Legal and factual examination of the tax department's notice",
      "Reconciliation of tax records and drafting exhaustive written response",
      "Personal appearance and legal advocacy before Commissioner (Appeals) / ATIR",
      "Follow-up until final appellate order or revised assessment is secured",
    ],
    faqs: [
      {
        question: "What should I do immediately upon receiving an FBR audit notice?",
        answer:
          "Contact a qualified tax consultant immediately. Do not ignore statutory deadlines; a formal written reply must be submitted within the timeframe specified in the notice.",
      },
    ],
    seoTitle: "Tax Appeals & FBR Audit Representation Pakistan | ITP Defense | BSTC",
    seoDescription:
      "Strategic defense and legal representation before FBR Commissioner Appeals and Appellate Tribunals. Led by registered Income Tax Practitioners.",
    order: 9,
  },
  {
    slug: "bra-registration",
    title: "BRA Registration & Compliance",
    shortDesc:
      "Balochistan Revenue Authority (BRA) registration and monthly tax return compliance for operations in Balochistan.",
    fullDesc:
      "For contractors, mining entities, logistics firms, and service corporations with projects in Quetta, Gwadar, or anywhere in Balochistan, we manage complete Balochistan Revenue Authority (BRA) sales tax registration, monthly electronic filings, and statutory withholding reconciliations.",
    icon: "file-check-2",
    benefits: [
      "Full statutory compliance for Balochistan infrastructure & service projects",
      "Timely monthly return filing on the BRA e-portal",
      "Avoidance of withholding tax disallowances and departmental penalties",
      "Smooth clearance for government and corporate contract billing",
    ],
    requiredDocs: [
      "Federal NTN Certificate & Business Details",
      "CNICs of Directors / Partners / Owner",
      "Premises Tenancy / Ownership Document in Balochistan",
      "Bank Account Certificate with active IBAN",
    ],
    processSteps: [
      "Application formulation and submission on BRA e-services portal",
      "Verification of documents by BRA tax authorities",
      "Issuance of BRA Registration Certificate",
      "Routine monthly filing setup and withholding guidance",
    ],
    faqs: [
      {
        question: "Do companies operating in Gwadar need BRA registration?",
        answer:
          "Yes, service providers operating within Balochistan, including designated development zones, must adhere to BRA tax regulations unless specifically exempted by statutory SRO.",
      },
    ],
    seoTitle: "BRA Registration Balochistan Revenue Authority | BSTC",
    seoDescription:
      "Balochistan Revenue Authority (BRA) registration and corporate tax compliance services for companies in Quetta, Gwadar, and Balochistan.",
    order: 10,
  },
  {
    slug: "srb-registration",
    title: "SRB Registration & Compliance",
    shortDesc:
      "Sindh Revenue Board registration and monthly sales tax return filings for service providers in Sindh.",
    fullDesc:
      "For companies, financial institutions, logistics operators, software houses, and service firms operating in Karachi and across Sindh, we handle complete Sindh Revenue Board (SRB) registration, monthly e-filing, reconciliation, and audit support under the Sindh Sales Tax on Services Act 2011.",
    icon: "landmark",
    benefits: [
      "SRB Registration Number (SNTN) issuance",
      "Full compliance for Karachi & Sindh corporate services",
      "Timely monthly return filing on SRB e-portal",
      "Input tax adjustment & withholding tax reconciliations",
    ],
    requiredDocs: [
      "Federal NTN & CNIC of Directors / Partners",
      "Utility Bill of Registered Office in Sindh",
      "Bank Account Maintenance Certificate",
      "SECP Form II / Partnership Deed",
    ],
    processSteps: [
      "Profile creation on SRB e-portal",
      "Document upload and classification of tariff headings",
      "Verification by SRB officer and approval",
      "Issuance of SRB Registration Certificate",
    ],
    faqs: [
      {
        question: "What is the monthly filing date for SRB returns?",
        answer:
          "SRB monthly sales tax returns are generally due by the 18th of the month, with tax payments due by the 14th.",
      },
    ],
    seoTitle: "SRB Registration Sindh Revenue Board | Karachi Tax | BSTC",
    seoDescription:
      "Sindh Revenue Board (SRB) sales tax registration and monthly return filing services in Karachi and Sindh by experienced tax consultants.",
    order: 11,
  },
  {
    slug: "pec-registration",
    title: "PEC Registration & Licensing",
    shortDesc:
      "Pakistan Engineering Council constructor, operator, and consultant licensing from C6 to C-A categories.",
    fullDesc:
      "We provide specialized consultancy for Pakistan Engineering Council (PEC) registration, renewal, and category upgrades (C6 through C-A). We assist contracting firms with engineer biometric verifications, machinery documentation, financial credit line verifications, and constructor code allocations.",
    icon: "hard-hat",
    benefits: [
      "Issuance of PEC Constructor / Operator License",
      "Eligibility to participate in government and private construction tenders",
      "Assistance with category upgrades (C6, C5, C4, C3, C2, C1, C-A)",
      "Professional engineer credential verification support",
    ],
    requiredDocs: [
      "Firm NTN and SECP / Form C Registration",
      "CNIC Copies of Partners / Directors",
      "PEC Registered Engineers' Credentials & Biometric Verifications",
      "Bank Statement & Financial Net Worth Certificate",
      "List of Machinery, Equipment, and Office Proof",
    ],
    processSteps: [
      "Category assessment based on engineer points & financial strength",
      "Compilation of PEC application form and supporting binders",
      "Submission to PEC Regional / Head Office",
      "Issuance of official PEC License Certificate",
    ],
    faqs: [
      {
        question: "What is the initial category for new contractors in PEC?",
        answer:
          "New construction companies typically start at Category C-6, which permits project execution up to the prescribed financial limit set by PEC.",
      },
      {
        question: "How long is a PEC license valid?",
        answer:
          "PEC licenses are generally issued on an annual or triennial basis and require periodic renewal with updated engineer verification.",
      },
    ],
    seoTitle: "PEC Registration & Constructor License | Engineering Pakistan | BSTC",
    seoDescription:
      "Pakistan Engineering Council (PEC) constructor registration, category upgrade, and license renewal consultancy.",
    order: 12,
  },
  {
    slug: "pos-integration",
    title: "FBR POS Integration",
    shortDesc:
      "Point of Sale software and hardware integration with FBR digital e-invoicing servers for Tier-1 retailers.",
    fullDesc:
      "Under FBR regulations, all Tier-1 retailers, restaurants, and shopping outlets must integrate their Point of Sale (POS) billing systems with the FBR real-time computerized invoicing system. We provide full technical coordination, API key configuration, QR-code receipt generation setup, and compliance verification.",
    icon: "monitor-smartphone",
    benefits: [
      "Real-time transaction reporting to FBR servers",
      "Generation of verifiable FBR QR-code invoices",
      "Avoidance of heavy non-integration fines and sealing notices",
      "Eligibility for standard sales tax credit treatment",
    ],
    requiredDocs: [
      "Business STRN and NTN Certificates",
      "POS Machine Specifications & POS Software Vendor Details",
      "Branch Location Addresses and Counter Layouts",
      "FBR IRIS Login Credentials for Integration Sandbox",
    ],
    processSteps: [
      "Verification of Tier-1 retailer eligibility criteria",
      "FBR POS portal registration and API credential generation",
      "System configuration and test transaction verification",
      "Live deployment of FBR real-time QR invoicing",
    ],
    faqs: [
      {
        question: "Who is classified as a Tier-1 Retailer by FBR?",
        answer:
          "Tier-1 retailers include units in air-conditioned shopping malls, retail chains with 2+ branches, retailers with electricity bills exceeding prescribed thresholds, and large departmental stores.",
      },
    ],
    seoTitle: "FBR POS Integration Services Pakistan | Tier-1 Retailers | BSTC",
    seoDescription:
      "Turnkey FBR Point of Sale (POS) system integration for Tier-1 retailers and commercial outlets in Pakistan.",
    order: 13,
  },
  {
    slug: "dis-integration",
    title: "FBR Digital Invoicing (DIS)",
    shortDesc:
      "Digital Invoicing System setup and ERP integration for sales tax electronic invoice compliance.",
    fullDesc:
      "We assist corporate entities, manufacturers, and registered taxpayers in integrating their Enterprise Resource Planning (ERP) and billing software with the FBR Digital Invoicing System (DIS). Our service covers digital certificate setup, sandbox testing, schema validation, and real-time electronic invoice transmission.",
    icon: "network",
    benefits: [
      "Direct API integration between company ERP and FBR DIS",
      "Automated electronic sales tax invoice generation",
      "Elimination of manual monthly Annexure-C data entry",
      "Full adherence to modern digital tax reporting mandates",
    ],
    requiredDocs: [
      "Company NTN, STRN, and SECP Registration",
      "ERP / Accounting System Technical Architecture Details",
      "Authorized IT / Technical Contact Particulars",
      "Digital Signature Certificate (if required)",
    ],
    processSteps: [
      "Technical architecture review and FBR DIS API access request",
      "Sandbox environment integration testing & payload validation",
      "Production deployment and live invoice stream verification",
      "Compliance sign-off and audit trail verification",
    ],
    faqs: [
      {
        question: "What is the FBR Digital Invoicing System (DIS)?",
        answer:
          "DIS is FBR's digital initiative requiring businesses to transmit sales tax invoice data electronically in real time via secure API endpoints.",
      },
    ],
    seoTitle: "FBR Digital Invoicing System (DIS) Integration | Electronic Tax | BSTC",
    seoDescription:
      "ERP integration and technical compliance for FBR Digital Invoicing System (DIS) sales tax reporting in Pakistan.",
    order: 14,
  },
] as const;
