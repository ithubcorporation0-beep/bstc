import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind classes safely with clsx and twMerge
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Creates a telephone URL href from any formatted phone string
 */
export function formatPhoneHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

/**
 * Generates an official WhatsApp click-to-chat URL with an optional pre-filled message
 */
export function formatWhatsAppHref(whatsappNumber: string, message?: string): string {
  const cleanNumber = whatsappNumber.replace(/[^\d]/g, "");
  const base = `https://wa.me/${cleanNumber}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Creates an email mailto link
 */
export function formatMailtoHref(email: string, subject?: string): string {
  const base = `mailto:${email}`;
  if (!subject) return base;
  return `${base}?subject=${encodeURIComponent(subject)}`;
}

/**
 * Formats a slug to title case if needed
 */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
