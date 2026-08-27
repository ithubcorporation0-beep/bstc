export interface ServiceFaq {
  readonly question: string;
  readonly answer: string;
}

export interface Service {
  readonly slug: string;
  readonly title: string;
  readonly shortDesc: string;
  readonly fullDesc: string;
  readonly icon: string;
  readonly benefits: readonly string[];
  readonly requiredDocs: readonly string[];
  readonly processSteps: readonly string[];
  readonly faqs: readonly ServiceFaq[];
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly order: number;
}

export interface TeamMember {
  readonly slug: string;
  readonly name: string;
  readonly designation: string;
  readonly department: string;
  readonly shortDesc: string;
  readonly bio: string;
  readonly email: string;
  readonly phone: string;
  readonly extension?: string;
  readonly whatsapp: string;
  readonly linkedinUrl?: string;
  readonly image: string;
  readonly order: number;
}

export interface StatItem {
  readonly label: string;
  readonly value: number;
  readonly suffix: string;
  readonly prefix?: string;
}

export interface WhyUsItem {
  readonly icon: string;
  readonly title: string;
  readonly desc: string;
}

export interface TestimonialItem {
  readonly name: string;
  readonly company: string;
  readonly rating: number;
  readonly text: string;
}

export interface ProcessStep {
  readonly stepNumber: string;
  readonly title: string;
  readonly desc: string;
}

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export interface AboutCard {
  readonly title: string;
  readonly desc: string;
}

export interface HomeContent {
  readonly hero: {
    readonly badge: string;
    readonly title: string;
    readonly subtitle: string;
    readonly cta: string;
  };
  readonly about: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
    readonly body: readonly string[];
    readonly image: string;
    readonly founderName: string;
    readonly founderTitle: string;
  };
  readonly stats: readonly StatItem[];
  readonly whyUs: readonly WhyUsItem[];
  readonly testimonials: readonly TestimonialItem[];
  readonly processSteps: readonly ProcessStep[];
  readonly faqs: readonly FaqItem[];
  readonly aboutCards: readonly AboutCard[];
}

export interface SiteSocialLinks {
  readonly facebook: string;
  readonly linkedin: string;
  readonly twitter: string;
  readonly instagram: string;
  readonly youtube: string;
}

export interface SiteSettings {
  readonly siteName: string;
  readonly companyName: string;
  readonly email: string;
  readonly phone: string;
  readonly whatsapp: string;
  readonly address: string;
  readonly hours: string;
  readonly mapsLink: string;
  readonly socialLinks: SiteSocialLinks;
  readonly seoTitle: string;
  readonly seoDescription: string;
  readonly footerText: string;
  readonly copyright: string;
}

export interface ConsultationPayload {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  urgent?: boolean;
}
