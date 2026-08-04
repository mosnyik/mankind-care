"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import Button from "@/components/button";
import { site } from "@/lib/site";

const interestOptions = [
  "Adult Day Habilitation",
  "Home Care",
  "Respite Care",
  "Another DDD Service",
  "General Inquiry",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "ready">("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const phone = String(form.get("phone") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const interest = String(form.get("interest") ?? "");
    const message = String(form.get("message") ?? "").trim();

    const subject = `Website inquiry from ${name || "a website visitor"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Phone: ${phone || "Not provided"}`,
      `Email: ${email || "Not provided"}`,
      `Interested in: ${interest}`,
      "",
      "Message:",
      message,
    ];

    const mailto = `${site.emailHref}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    setStatus("ready");
    window.location.href = mailto;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 rounded-4xl border border-line bg-white p-8 shadow-[0_30px_80px_-40px_rgba(26,67,191,0.2)] sm:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-primary-dark">
            Full name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-primary-dark outline-none transition-colors placeholder:text-slate-400 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20"
            placeholder="Jane Doe"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-primary-dark">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-primary-dark outline-none transition-colors placeholder:text-slate-400 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20"
            placeholder="(555) 555-5555"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-primary-dark">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-primary-dark outline-none transition-colors placeholder:text-slate-400 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20"
          placeholder="you@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="interest" className="text-sm font-medium text-primary-dark">
          I am interested in
        </label>
        <select
          id="interest"
          name="interest"
          defaultValue={interestOptions[0]}
          className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-primary-dark outline-none transition-colors focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20"
        >
          {interestOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-primary-dark">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="resize-none rounded-xl border border-line bg-white px-4 py-3 text-sm text-primary-dark outline-none transition-colors placeholder:text-slate-400 focus:border-primary-accent focus:ring-2 focus:ring-primary-accent/20"
          placeholder="Tell us a little about who needs care and how we can help."
        />
      </div>

      <div className="flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
        <Button type="submit" variant="gold">
          Send Message
          <Send className="h-4 w-4" strokeWidth={2} />
        </Button>
        <p className="text-xs leading-relaxed text-slate-400">
          Submitting opens your email app with this message ready to send to
          our team.
        </p>
      </div>
      {status === "ready" && (
        <p className="text-sm font-medium text-primary" role="status">
          Almost done. Send the email that just opened and we will get back
          to you soon.
        </p>
      )}
    </form>
  );
}
