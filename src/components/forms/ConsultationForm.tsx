"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { services } from "@/data/services";
import { validateConsultationForm, type ConsultationFormData } from "@/lib/validation";
import { Button } from "@/components/ui/Button";

export interface ConsultationFormProps {
  preselectedService?: string;
  className?: string;
}

export function ConsultationForm({ preselectedService, className }: ConsultationFormProps) {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: "",
    email: "",
    phone: "",
    service: preselectedService || "",
    message: "",
    urgent: false,
    honeypot: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    const validation = validateConsultationForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Failed to submit inquiry. Please try again.");
      }

      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        urgent: false,
        honeypot: "",
      });
    } catch (err: unknown) {
      setServerError(err instanceof Error ? err.message : "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className={`p-8 rounded-3xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-center animate-in fade-in zoom-in-95 duration-300 ${className || ""}`}>
        <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
          Consultation Request Received!
        </h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
          Thank you for reaching out to BSTC. One of our registered tax consultants will review your case and contact you via phone/WhatsApp within standard business hours.
        </p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-6 px-5 py-2 rounded-xl bg-emerald-600 text-white font-semibold text-xs hover:bg-emerald-700 transition-colors cursor-pointer"
        >
          Submit Another Request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-5 ${className || ""}`}>
      {serverError && (
        <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Honeypot anti-spam */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="form-name" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Full Name <span className="text-rose-500">*</span>
          </label>
          <input
            id="form-name"
            name="name"
            type="text"
            required
            placeholder="e.g. Muhammad Usman"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
              errors.name ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
            }`}
          />
          {errors.name && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.name}</p>}
        </div>

        {/* Email Address */}
        <div>
          <label htmlFor="form-email" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Email Address <span className="text-rose-500">*</span>
          </label>
          <input
            id="form-email"
            name="email"
            type="email"
            required
            placeholder="usman@example.com"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
              errors.email ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
            }`}
          />
          {errors.email && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone / WhatsApp */}
        <div>
          <label htmlFor="form-phone" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Phone / WhatsApp <span className="text-rose-500">*</span>
          </label>
          <input
            id="form-phone"
            name="phone"
            type="tel"
            required
            placeholder="+92 300 1234567"
            value={formData.phone}
            onChange={handleChange}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all ${
              errors.phone ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
            }`}
          />
          {errors.phone && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.phone}</p>}
        </div>

        {/* Service of Interest */}
        <div>
          <label htmlFor="form-service" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
            Service Required
          </label>
          <select
            id="form-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer"
          >
            <option value="">-- Select a Service --</option>
            {services.map((svc) => (
              <option key={svc.slug} value={svc.title}>
                {svc.title}
              </option>
            ))}
            <option value="General Consultancy / Other">General Consultancy / Other</option>
          </select>
        </div>
      </div>

      {/* Inquiry Message */}
      <div>
        <label htmlFor="form-message" className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1.5">
          Brief Details of Your Requirement <span className="text-rose-500">*</span>
        </label>
        <textarea
          id="form-message"
          name="message"
          rows={4}
          required
          placeholder="Please describe your company type, annual filing year, or specific corporate question..."
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-xl border text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-y ${
            errors.message ? "border-rose-500" : "border-slate-200 dark:border-slate-800"
          }`}
        />
        {errors.message && <p className="mt-1 text-xs text-rose-500 font-medium">{errors.message}</p>}
      </div>

      {/* Urgent Callback Checkbox */}
      <div className="flex items-center gap-2.5 pt-1">
        <input
          id="form-urgent"
          name="urgent"
          type="checkbox"
          checked={formData.urgent}
          onChange={handleChange}
          className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 cursor-pointer"
        />
        <label htmlFor="form-urgent" className="text-xs text-slate-600 dark:text-slate-400 cursor-pointer select-none">
          Urgent matter / FBR statutory deadline approaching
        </label>
      </div>

      {/* Submit CTA */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Consultation Request...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Submit Consultation Request</span>
          </>
        )}
      </Button>

      <p className="text-[11px] text-center text-slate-500 dark:text-slate-400">
        🔒 Your information is confidential under professional client privilege.
      </p>
    </form>
  );
}
