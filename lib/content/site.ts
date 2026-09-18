/**
 * Site-wide facts: navigation, identity and the contact channels that are
 * repeated across the Home, Sobre, Contato and case-study pages.
 */

export interface NavItem {
  label: string;
  to: string;
}

export const nav: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Sobre", to: "/about" },
  { label: "Projetos", to: "/#projetos" },
  { label: "Contato", to: "/contact" },
];

export const identity = {
  name: "Bianca Karoline",
  initials: "BK",
  role: "Product Designer · UX/UI",
  location: "Bertioga, SP · Brasil",
  status: "Disponível para projetos",
  statusShort: "Disponível",
  copyright: "Designer UI/UX · © 2026",
} as const;

export const contact = {
  email: "bk.biancakaroline@gmail.com",
  phoneLabel: "+55 11 95450-0665",
  whatsapp: "https://wa.me/5511954500665",
  linkedin: "https://www.linkedin.com/in/biancakaroline-uxui",
  linkedinHandle: "/in/biancakaroline-uxui",
  instagram: "https://instagram.com/ibiancakaroline",
  instagramHandle: "@ibiancakaroline",
  city: "Bertioga - SP, BR",
  workMode: "Trabalho remoto",
} as const;

export const mailto = `mailto:${contact.email}`;

/** The three-button stack reused by every "Vamos trabalhar juntos?" block. */
export const contactChannels = [
  { label: "WhatsApp", href: contact.whatsapp, icon: "whatsapp", primary: true },
  { label: "E-mail", href: mailto, icon: "mail", primary: false },
  { label: "LinkedIn", href: contact.linkedin, icon: "linkedin", primary: false },
] as const;

export const footerLinks: NavItem[] = [
  { label: "Sobre", to: "/about" },
  { label: "Projetos", to: "/#projetos" },
  { label: "Instagram", to: contact.instagram },
  { label: "LinkedIn", to: contact.linkedin },
];
