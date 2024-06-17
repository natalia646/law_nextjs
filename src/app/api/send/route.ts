import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "../../../components/form/EmailTemplate";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const { name, email, phone, action, message } = body;

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      from: `Tedalini <info@tedalini.com>`, 
      to: email,
      subject: "Tedalini Consulting LTD",
      react: EmailTemplate({ name, email, phone, action, message })
    });

    if (error) {
      return NextResponse.json(
        { message: "Email sending failed", error },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Email sent successfully", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email", error },
      { status: 500 }
    );
  }
}
