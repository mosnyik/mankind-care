import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, phone, email, interest, message } = (body ?? {}) as Record<string, unknown>;

  const cleanName = String(name ?? "").trim();
  const cleanPhone = String(phone ?? "").trim();
  const cleanEmail = String(email ?? "").trim();
  const cleanInterest = String(interest ?? "").trim();
  const cleanMessage = String(message ?? "").trim();

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(cleanEmail)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured.");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  const to = process.env.CONTACT_EMAIL_TO || site.email;
  const from = process.env.CONTACT_EMAIL_FROM || "Mankind Care Website <onboarding@resend.dev>";

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: cleanEmail,
    subject: `Website inquiry from ${cleanName}`,
    text: [
      `Name: ${cleanName}`,
      `Phone: ${cleanPhone || "Not provided"}`,
      `Email: ${cleanEmail}`,
      `Interested in: ${cleanInterest || "Not specified"}`,
      "",
      "Message:",
      cleanMessage,
    ].join("\n"),
    html: [
      `<p><strong>Name:</strong> ${escapeHtml(cleanName)}</p>`,
      `<p><strong>Phone:</strong> ${escapeHtml(cleanPhone || "Not provided")}</p>`,
      `<p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>`,
      `<p><strong>Interested in:</strong> ${escapeHtml(cleanInterest || "Not specified")}</p>`,
      `<p><strong>Message:</strong><br />${escapeHtml(cleanMessage).replace(/\n/g, "<br />")}</p>`,
    ].join("\n"),
  });

  if (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json({ error: "Failed to send your message. Please try again." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
