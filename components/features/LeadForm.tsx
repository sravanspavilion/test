"use client";

import { useState } from "react";
import { API_URL } from "@/lib/config";
import { delay } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import {
  Checkbox,
  Field,
  Input,
  Select,
  TextArea,
} from "@/components/ui/form";
import { Icon } from "@/components/ui/icons";
import type {
  ContactInquiry,
  PartnershipInquiry,
} from "@/types";

export type LeadVariant = "contact" | "callback" | "partnership" | "delivery";

const variants: Record<
  LeadVariant,
  {
    heading: string;
    description: string;
    subjectOptions: string[];
  }
> = {
  contact: {
    heading: "Send us a message",
    description:
      "Questions, feedback or a request — we respond within one working day.",
    subjectOptions: [
      "General enquiry",
      "Feedback on a station",
      "Fuel delivery request",
      "Fleet enquiry",
      "Website feedback",
    ],
  },
  callback: {
    heading: "Request a call back",
    description:
      "Leave your number and a convenient time window — our team will call you.",
    subjectOptions: ["General enquiry", "Fleet enquiry", "Partnership enquiry", "Fuel delivery"],
  },
  partnership: {
    heading: "Become a partner",
    description:
      "Franchisees, fuel suppliers, fleet operators and land owners — tell us about your opportunity.",
    subjectOptions: [
      "Station / site ownership",
      "Franchise / licensee",
      "Fuel supply",
      "Fleet / corporate",
      "EV charging site",
    ],
  },
  delivery: {
    heading: "Request doorstep diesel",
    description:
      "Tell us about your site and consumption — our team will confirm scheduling and pricing.",
    subjectOptions: ["Generator / industrial", "Construction site", "Commercial complex"],
  },
};

export function LeadForm({
  variant,
  compact = false,
}: {
  variant: LeadVariant;
  compact?: boolean;
}) {
  const cfg = variants[variant];
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );
  const [values, setValues] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const set = (key: string) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: "" }));
  };

  const validate = () => {
    const er: Record<string, string> = {};
    if (!values.name?.trim()) er.name = "Please enter your name";
    if (!/^\S+@\S+\.\S+$/.test(values.email ?? "")) er.email = "Enter a valid email";
    if (variant !== "contact" || !compact) {
      if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone ?? ""))
        er.phone = "Enter a valid phone number";
    }
    if (variant === "partnership" || variant === "delivery") {
      if (!values.city?.trim()) er.city = "City is required";
      if (!values.state?.trim()) er.state = "State is required";
    }
    if (variant !== "callback" && !values.message?.trim())
      er.message = "Please add a short message";
    if (!values.consent) er.consent = "Please confirm the consent";
    return er;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er = validate();
    setErrors(er);
    if (Object.keys(er).length > 0) return;

    setStatus("submitting");

    // Simulate latency so loading states are visible in demo mode
    if (!API_URL) await delay(900);

    try {
      if (API_URL) {
        const payload =
          variant === "partnership"
            ? ({
                fullName: values.name,
                companyName: values.company,
                email: values.email,
                phone: values.phone,
                city: values.city,
                state: values.state,
                partnershipType: values.subject,
                message: values.message,
                consent: true,
              } satisfies Partial<PartnershipInquiry>)
            : ({
                name: values.name,
                email: values.email,
                phone: values.phone || undefined,
                subject:
                  variant === "callback" ? `Call back — ${values.subject}` : values.subject,
                message: values.message,
                category: variant.toUpperCase(),
                consent: true,
              } satisfies Partial<ContactInquiry>);
        const res = await fetch(`${API_URL}/api/v1/leads`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`API ${res.status}`);
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center" role="status">
        <Icon name="check-circle" className="mx-auto size-12 text-green-600" />
        <h3 className="mt-4 text-lg font-bold text-slate-900">Thank you, {values.name?.split(" ")[0] ?? "friend"}!</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Your request has been received{variant === "callback" ? " — we will call you in the requested window" : " and a team member will respond within one working day"}.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setValues({});
          }}
          className="mt-5 text-sm font-bold text-brand-700 underline-offset-4 hover:underline"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-extrabold text-slate-900">{cfg.heading}</h3>
        <p className="mt-1 text-sm text-slate-500">{cfg.description}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full name" htmlFor={`${variant}-name`} required error={errors.name}>
          <Input
            id={`${variant}-name`}
            name="name"
            autoComplete="name"
            value={values.name ?? ""}
            onChange={set("name")}
            placeholder="Your name"
          />
        </Field>
        <Field label="Email" htmlFor={`${variant}-email`} required error={errors.email}>
          <Input
            id={`${variant}-email`}
            name="email"
            type="email"
            autoComplete="email"
            value={values.email ?? ""}
            onChange={set("email")}
            placeholder="you@example.com"
          />
        </Field>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Phone" htmlFor={`${variant}-phone`} required error={errors.phone}>
          <Input
            id={`${variant}-phone`}
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone ?? ""}
            onChange={set("phone")}
            placeholder="+91 98xxx xxxxx"
          />
        </Field>
        <Field label="Subject" htmlFor={`${variant}-subject`}>
          <Select
            id={`${variant}-subject`}
            name="subject"
            value={values.subject ?? ""}
            onChange={set("subject")}
          >
            <option value="">Select a topic…</option>
            {cfg.subjectOptions.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </Select>
        </Field>
      </div>

      {(variant === "partnership" || variant === "delivery") && (
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="City" htmlFor={`${variant}-city`} required error={errors.city}>
            <Input
              id={`${variant}-city`}
              name="city"
              value={values.city ?? ""}
              onChange={set("city")}
              placeholder="City"
            />
          </Field>
          <Field label="State" htmlFor={`${variant}-state`} required error={errors.state}>
            <Input
              id={`${variant}-state`}
              name="state"
              value={values.state ?? ""}
              onChange={set("state")}
              placeholder="State"
            />
          </Field>
        </div>
      )}

      {variant !== "callback" && (
        <Field
          label="Message"
          htmlFor={`${variant}-message`}
          required
          error={errors.message}
        >
          <TextArea
            id={`${variant}-message`}
            name="message"
            value={values.message ?? ""}
            onChange={set("message")}
            placeholder={
              variant === "delivery"
                ? "Site type, fuel requirement, frequency…"
                : "How can we help?"
            }
          />
        </Field>
      )}

      {variant === "callback" && (
        <Field label="Preferred time" htmlFor={`${variant}-time`}>
          <Select
            id={`${variant}-time`}
            name="time"
            value={values.time ?? ""}
            onChange={set("time")}
          >
            <option value="">Any time</option>
            <option>Morning (9 am – 12 pm)</option>
            <option>Afternoon (12 pm – 5 pm)</option>
            <option>Evening (5 pm – 8 pm)</option>
          </Select>
        </Field>
      )}

      <Checkbox
        label="I agree to be contacted about my enquiry and to the processing of this information. (Demo form — no data is stored.)"
        required
        checked={Boolean(values.consent)}
        onChange={(e) =>
          setValues((v) => ({ ...v, consent: e.target.checked ? "yes" : "" }))
        }
      />
      {errors.consent ? (
        <p className="text-xs font-medium text-red-600" role="alert">
          {errors.consent}
        </p>
      ) : null}

      <Button
        type="submit"
        variant="primary"
        size="lg"
        fullWidth
        disabled={status === "submitting"}
        iconRight={status === "submitting" ? undefined : "arrow-right"}
      >
        {status === "submitting" ? "Submitting…" : "Submit request"}
      </Button>

      {status === "error" ? (
        <p
          className="inline-flex items-center gap-2 rounded-lg bg-red-50 px-3 py-2 text-sm font-medium text-red-700"
          role="alert"
        >
          <Icon name="alert" className="size-4" />
          Something went wrong. Please try again.
        </p>
      ) : null}
    </form>
  );
}