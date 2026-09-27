"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";
import Reveal from "@/components/ui/reveal";
import { Underline } from "@/components/ui/doodles";
import { Button, Container, Eyebrow, HandNote } from "@/components/ui/primitives";
import { ArrowRightIcon } from "@/components/ui/icons";

const field =
  "w-full rounded-full border border-black/10 bg-white px-5 py-3 text-[15px] text-ink outline-none " +
  "transition-[border-color,box-shadow] duration-200 placeholder:text-black/35 " +
  "focus:border-ink/60 focus:ring-4 focus:ring-ink/[0.06]";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setMessage("");

    const data = Object.fromEntries(new FormData(event.currentTarget).entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(body.error ?? "Something went wrong. Try again?");
        return;
      }

      setStatus("sent");
      setMessage("Thanks — that landed. I’ll get back to you shortly.");
      event.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Network error. Try again, or email me directly.");
    }
  }

  return (
    <section id="contact" className="bg-white py-28 md:py-36">
      <Container>
        <Reveal className="text-center">
          <div className="flex justify-center">
            <Eyebrow>{contact.eyebrow}</Eyebrow>
          </div>
          <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(2.25rem,5.4vw,3.5rem)] font-bold leading-[1.08] tracking-[-0.03em]">
            {contact.headingBefore}
            <span className="relative inline-block whitespace-nowrap">
              {contact.headingUnderlined}
              <Underline />
            </span>
            .
          </h2>
          <HandNote className="mt-6 -rotate-1 text-xl text-accent-ink">{contact.aside}</HandNote>
          <p className="mx-auto mt-6 max-w-xl leading-[1.75] text-muted">{contact.body}</p>
        </Reveal>

        <Reveal delay={80}>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-12 max-w-2xl rounded-[28px] border border-black/[0.06] bg-mist p-5 text-left shadow-float sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block pl-1 text-sm font-medium text-ink/80">Your name</span>
                <input name="name" type="text" required placeholder="Jane Doe" className={field} />
              </label>
              <label className="block">
                <span className="mb-2 block pl-1 text-sm font-medium text-ink/80">
                  Email or phone
                </span>
                <input
                  name="contact"
                  type="text"
                  required
                  placeholder="email@example.com or phone number"
                  className={field}
                />
              </label>
            </div>

            <label className="mt-5 block">
              <span className="mb-2 block pl-1 text-sm font-medium text-ink/80">
                Reason for message
              </span>
              <span className="relative block">
                <select name="reason" defaultValue="" className={`${field} appearance-none pr-12`}>
                  <option value="" disabled>
                    Select a reason
                  </option>
                  {contact.reasons.map((reason) => (
                    <option key={reason}>{reason}</option>
                  ))}
                </select>
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="pointer-events-none absolute right-5 top-1/2 size-3.5 -translate-y-1/2 text-ink/40"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </label>

            <label className="mt-5 block">
              <span className="mb-2 block pl-1 text-sm font-medium text-ink/80">Message</span>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell me more about your idea…"
                className={`${field} resize-none rounded-[20px] leading-relaxed`}
              />
            </label>

            {/* Honeypot — real people never see it, bots fill it in. */}
            <div className="hidden" aria-hidden="true">
              <label>
                Leave this empty
                <input name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Button type="submit" disabled={status === "sending"} className="disabled:opacity-60">
                {status === "sending" ? "Sending…" : "Send message"}
                <ArrowRightIcon className="size-[15px]" />
              </Button>
              {message && (
                <p
                  aria-live="polite"
                  className={`text-sm ${status === "error" ? "text-[#bf000f]" : "text-muted"}`}
                >
                  {message}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
