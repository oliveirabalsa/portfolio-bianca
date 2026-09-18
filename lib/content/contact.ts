/**
 * Copy for the Contato page, transcribed from the Figma "Contato — Desktop"
 * frame (`36:2`). Desktop is the source of truth for wording: the mobile frame
 * (`38:2`) is older and still shows a stale `@hotmail` address and a shorter
 * headline.
 */

import { contact, mailto } from "~/lib/content/site";

export const marquees = {
  /** Band 1 — terracotta, tilting down to the right. */
  primary: "✦ VAMOS CONVERSAR",
  /** Band 2 — ink, tilting up to the right, drawn over band 1. */
  secondary: "CONTATO ✦",
} as const;

export const intro = {
  kicker: "oi! que bom te ver por aqui",
  title: "Vamos trabalhar juntos para criar algo memorável.",
  text: "Disponível para novos projetos e colaborações criativas. Sinta-se à vontade para entrar em contato.",
} as const;

export const emailCard = {
  label: "e-mail profissional",
  value: contact.email,
  href: mailto,
  primaryCta: "Escrever agora",
  copyCta: "Copiar e-mail",
  copiedCta: "Copiado!",
  /** Shown when the Clipboard API is unavailable or blocked by policy. */
  copyFailedCta: "Copie manualmente",
} as const;

export const polaroid = {
  caption: "bora conversar?",
  src: "/img/contact-phone.jpg",
  alt: "Bianca abraçando um telefone público vermelho",
} as const;

export interface Channel {
  key: string;
  icon: "whatsapp" | "linkedin" | "instagram";
  tone: "sage" | "sky" | "blush";
  label: string;
  value: string;
  href: string;
  cta: string;
}

/** The three coloured sticky notes, in Figma stacking order. */
export const channels: Channel[] = [
  {
    key: "whatsapp",
    icon: "whatsapp",
    tone: "sage",
    label: "whatsapp",
    value: contact.phoneLabel,
    href: contact.whatsapp,
    cta: "Chamar no WhatsApp",
  },
  {
    key: "linkedin",
    icon: "linkedin",
    tone: "sky",
    label: "linkedin",
    value: contact.linkedinHandle,
    href: contact.linkedin,
    cta: "Ver perfil",
  },
  {
    key: "instagram",
    icon: "instagram",
    tone: "blush",
    label: "instagram",
    value: contact.instagramHandle,
    href: contact.instagram,
    cta: "Seguir",
  },
];

export const locationCard = {
  label: "onde estou",
  city: contact.city,
  mode: contact.workMode,
} as const;

export const signoff = "até logo!";
