export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message: string;
  urgent?: boolean;
  honeypot?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

/**
 * Validates consultation form submissions on both client and server
 */
export function validateConsultationForm(data: Partial<ConsultationFormData>): ValidationResult {
  const errors: Record<string, string> = {};

  // Honeypot spam trap
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = "Spam detection triggered";
  }

  // Name validation
  if (!data.name || data.name.trim().length < 2) {
    errors.name = "Please enter your full name (minimum 2 characters)";
  } else if (data.name.length > 80) {
    errors.name = "Name must not exceed 80 characters";
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email.trim())) {
    errors.email = "Please enter a valid email address";
  }

  // Phone validation (Pakistani phone numbers and international format supported)
  const phoneClean = (data.phone || "").replace(/[\s\-\(\)]/g, "");
  if (!phoneClean || phoneClean.length < 9) {
    errors.phone = "Please enter a valid phone or WhatsApp number";
  } else if (!/^\+?[0-9]{9,16}$/.test(phoneClean)) {
    errors.phone = "Phone number contains invalid characters";
  }

  // Message validation
  if (!data.message || data.message.trim().length < 10) {
    errors.message = "Please provide a brief description of your inquiry (minimum 10 characters)";
  } else if (data.message.length > 2000) {
    errors.message = "Message must not exceed 2000 characters";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
