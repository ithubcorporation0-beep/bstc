import { services } from "@/data/services";

export interface ConsultationFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  service: string;
  message?: string;
  /**
   * Anti-spam Honeypot field. Must be empty for legitimate human submissions.
   */
  company?: string;
}

export type FormValidationErrors = {
  [K in keyof ConsultationFormData]?: string;
};

export interface ValidationResult {
  isValid: boolean;
  errors: FormValidationErrors;
  sanitizedData?: ConsultationFormData;
}

/**
 * Valid service slugs extracted from data layer, including "other".
 */
export const VALID_SERVICE_SLUGS = [
  ...services.map((s) => s.slug),
  "other",
] as const;

/**
 * Pakistani phone regular expression.
 * Accepts:
 *  - 03001234567
 *  - +923001234567
 *  - 00923001234567
 *  - 0300-1234567
 *  - +92-300-1234567
 */
export const PAKISTAN_PHONE_REGEX =
  /^(?:\+92|0092|0)?(?:3\d{2}[-\s]?\d{7}|3\d{9})$/;

/**
 * Standard email format regex.
 */
export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

/**
 * Validates consultation form submissions on both client and server.
 */
export function validateConsultationForm(raw: unknown): ValidationResult {
  const errors: FormValidationErrors = {};

  if (!raw || typeof raw !== "object") {
    return {
      isValid: false,
      errors: { firstName: "Invalid form payload." },
    };
  }

  const data = raw as Record<string, unknown>;

  // 1. First Name (2-50 chars)
  const firstName = typeof data.firstName === "string" ? data.firstName.trim() : "";
  if (!firstName) {
    errors.firstName = "First name is required.";
  } else if (firstName.length < 2) {
    errors.firstName = "First name must be at least 2 characters.";
  } else if (firstName.length > 50) {
    errors.firstName = "First name cannot exceed 50 characters.";
  }

  // 2. Last Name (2-50 chars)
  const lastName = typeof data.lastName === "string" ? data.lastName.trim() : "";
  if (!lastName) {
    errors.lastName = "Last name is required.";
  } else if (lastName.length < 2) {
    errors.lastName = "Last name must be at least 2 characters.";
  } else if (lastName.length > 50) {
    errors.lastName = "Last name cannot exceed 50 characters.";
  }

  // 3. Phone (Pakistani format required)
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  if (!phone) {
    errors.phone = "Phone number is required.";
  } else if (!PAKISTAN_PHONE_REGEX.test(phone)) {
    errors.phone =
      "Please enter a valid Pakistani mobile number (e.g. 03001234567 or +923001234567).";
  }

  // 4. Email (Optional, must be valid if provided)
  const email = typeof data.email === "string" ? data.email.trim() : undefined;
  if (email && email.length > 0) {
    if (!EMAIL_REGEX.test(email) || email.length > 100) {
      errors.email = "Please enter a valid email address.";
    }
  }

  // 5. Service (Required, must match known slug or 'other')
  const service = typeof data.service === "string" ? data.service.trim() : "";
  if (!service) {
    errors.service = "Please select a service.";
  } else if (!VALID_SERVICE_SLUGS.includes(service as any)) {
    errors.service = "Selected service is not recognized.";
  }

  // 6. Message (Optional, max 1000 chars)
  const message = typeof data.message === "string" ? data.message.trim() : undefined;
  if (message && message.length > 1000) {
    errors.message = "Message cannot exceed 1,000 characters.";
  }

  // 7. Honeypot (Company must be empty)
  const company = typeof data.company === "string" ? data.company.trim() : undefined;

  const isValid = Object.keys(errors).length === 0;

  return {
    isValid,
    errors,
    sanitizedData: isValid
      ? {
          firstName,
          lastName,
          phone,
          email: email || undefined,
          service,
          message: message || undefined,
          company: company || undefined,
        }
      : undefined,
  };
}
