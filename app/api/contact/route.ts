import { NextResponse } from "next/server";

/**
 * Contact endpoint.
 *
 * There is no mail provider wired up — pick one and fill in `deliver()`:
 *   • Resend / Postmark / SendGrid  → POST to their API with your key
 *   • Slack or Discord              → set CONTACT_WEBHOOK_URL and you are done
 *   • A database                    → write the row here
 *
 * Until CONTACT_WEBHOOK_URL is set (or you replace `deliver()`), this route
 * answers 501 and the form tells the visitor so, rather than pretending to send.
 */

type Payload = {
  name?: string;
  contact?: string;
  reason?: string;
  message?: string;
  company?: string; // honeypot
};

async function deliver(payload: Payload) {
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) return false;

  await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      text: [
        `New message from ${payload.name}`,
        `Reply to: ${payload.contact}`,
        `Reason: ${payload.reason || "—"}`,
        "",
        payload.message,
      ].join("\n"),
    }),
  });

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
  if (payload.company) {
    return NextResponse.json({ ok: true });
  }

  const name = payload.name?.trim();
  const reply = payload.contact?.trim();
  const message = payload.message?.trim();

  if (!name || !reply || !message) {
    return NextResponse.json({ error: "Name, contact and message are all required." }, { status: 400 });
  }

  if (message.length > 5000) {
    return NextResponse.json({ error: "That message is a little long — trim it down?" }, { status: 400 });
  }

  const delivered = await deliver({ ...payload, name, contact: reply, message });

  if (!delivered) {
    return NextResponse.json(
      { error: "This form is not connected yet — set CONTACT_WEBHOOK_URL in your env." },
      { status: 501 },
    );
  }

  return NextResponse.json({ ok: true });
}
