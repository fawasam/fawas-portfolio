import { NextResponse } from "next/server";
import { site } from "@/lib/content";

/**
 * Contact endpoint.
 *
 * Two delivery paths, tried in order. Set either one and the form works:
 *
 *   RESEND_API_KEY   — sends a real email via Resend. Optionally set
 *                      CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL; the from
 *                      address must be on a domain verified with Resend,
 *                      or Resend's own onboarding@resend.dev for testing.
 *   CONTACT_WEBHOOK_URL — posts to Slack or Discord instead. Quickest path.
 *
 * With neither set the route answers 501 and `configured: false`, and the
 * form falls back to opening the visitor's mail client, so it is never a
 * dead end.
 */

type Payload = {
  name?: string;
  contact?: string;
  reason?: string;
  message?: string;
  company?: string; // honeypot
};

type Message = { name: string; contact: string; reason: string; message: string };

const looksLikeEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function plainText({ name, contact, reason, message }: Message) {
  return [
    `From: ${name}`,
    `Reply to: ${contact}`,
    `Reason: ${reason || "—"}`,
    "",
    message,
  ].join("\n");
}

async function sendViaResend(msg: Message): Promise<boolean> {
  const key = process.env.RESEND_API_KEY;
  if (!key) return false;

  const body: Record<string, unknown> = {
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>",
    to: [process.env.CONTACT_TO_EMAIL ?? site.email],
    subject: `Portfolio — ${msg.reason || "new message"} from ${msg.name}`,
    text: plainText(msg),
  };

  // So hitting reply in the inbox goes straight back to them.
  if (looksLikeEmail(msg.contact)) body.reply_to = msg.contact;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => "");
    throw new Error(`resend ${res.status}: ${detail.slice(0, 200)}`);
  }

  // The provider's id, so a delivery can be traced in the Resend dashboard.
  const sent = (await res.json().catch(() => null)) as { id?: string } | null;
  console.log(`[contact] resend accepted${sent?.id ? ` id=${sent.id}` : ""}`);
  return true;
}

async function sendViaWebhook(msg: Message): Promise<boolean> {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return false;

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    // `text` suits both Slack and Discord
    body: JSON.stringify({ text: plainText(msg) }),
  });

  if (!res.ok) {
    throw new Error(`webhook ${res.status}`);
  }
  return true;
}

export async function POST(request: Request) {
  let payload: Payload;

  try {
    payload = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Malformed request." }, { status: 400 });
  }

  // Bots fill the hidden field. Accept silently so they stop retrying.
  if (payload.company) return NextResponse.json({ ok: true });

  const name = payload.name?.trim();
  const contact = payload.contact?.trim();
  const message = payload.message?.trim();

  if (!name || !contact || !message) {
    return NextResponse.json(
      { error: "Name, contact and message are all required." },
      { status: 400 },
    );
  }

  if (message.length > 5000 || name.length > 200 || contact.length > 200) {
    return NextResponse.json({ error: "That is longer than I can accept." }, { status: 400 });
  }

  const msg: Message = { name, contact, reason: payload.reason?.trim() ?? "", message };

  try {
    const delivered = (await sendViaResend(msg)) || (await sendViaWebhook(msg));

    if (!delivered) {
      return NextResponse.json(
        {
          configured: false,
          error: "Email is not wired up on this deployment yet.",
        },
        { status: 501 },
      );
    }
  } catch (error) {
    console.error("[contact] delivery failed:", error);
    return NextResponse.json(
      { error: "The message could not be sent. Try again, or email me directly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
