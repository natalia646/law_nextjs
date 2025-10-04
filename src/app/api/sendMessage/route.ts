import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, action, message } = await req.json();

  const TELEGRAM_TOKEN = process.env.TELEGRAM_TOKEN!;
  const TELEGRAM_ID = process.env.TELEGRAM_ID!;
  const BASE_URL = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;

  const telegramMessage = `
  Name: ${name}
  Email: ${email}
  Phone: ${phone}
  Service: ${action}
  Message: ${message}
  `;

  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: TELEGRAM_ID,
      text: telegramMessage,
    }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
