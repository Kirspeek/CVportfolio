import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, to } = body;

    if (!name || !email || !message || !to) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailSubject = subject || "Contact Form Submission";
    const emailContent = `New contact form submission from your portfolio:

Name: ${name}
Email: ${email}${subject ? `\nSubject: ${subject}` : ''}

Message:
${message}

---
This email was sent from your portfolio contact form.
Reply directly to this email to respond to ${name} at ${email}.`;

    if (process.env.RESEND_API_KEY) {
      const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
      const fromName = process.env.RESEND_FROM_NAME || "Portfolio Contact";
      
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: `${fromName} <${fromEmail}>`,
          to: [to],
          subject: `Contact Form: ${emailSubject}`,
          text: emailContent,
          replyTo: email,
        }),
      });

      if (!response.ok) {
        let errorData;
        try {
          errorData = await response.json();
        } catch {
          const errorText = await response.text();
          errorData = { message: errorText };
        }
        console.error("Resend API error:", errorData);
        
        if (response.status === 403) {
          let errorMessage = "Email service configuration issue";
          if (errorData.message?.includes("testing emails")) {
            errorMessage = "Resend domain not verified. Please verify your domain at resend.com/domains and set RESEND_FROM_EMAIL to an email from that domain (e.g., noreply@yourdomain.com).";
          } else if (errorData.message?.includes("domain")) {
            errorMessage = "Domain verification required. Please verify your domain at resend.com/domains and use an email from that domain in RESEND_FROM_EMAIL.";
          }
          return NextResponse.json(
            { 
              error: errorMessage,
              message: errorData.message || "Please check your Resend configuration."
            },
            { status: 403 }
          );
        }
        
        return NextResponse.json(
          { error: "Failed to send email", details: errorData.message || "Unknown error" },
          { status: 500 }
        );
      }

      return NextResponse.json({ success: true }, { status: 200 });
    } else {
      console.log("Email would be sent:", {
        to,
        subject: `Contact Form: ${subject}`,
        from: email,
        body: emailContent,
      });
      
      return NextResponse.json(
        {
          error: "Email service not configured",
          message: "Please configure RESEND_API_KEY in your environment variables to enable email sending.",
        },
        { status: 503 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

