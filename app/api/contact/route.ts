import { NextResponse } from "next/server";
import { Resend } from "resend";
import { headers } from "next/headers";
import { contactFormSchema } from "@/lib/validations/contact";
import ContactFormEmail from "@/components/emails/ContactFormEmail";
import AutoReplyEmail from "@/components/emails/AutoReplyEmail";
import { BRAND } from "@/constants/brand";
import { rateLimit } from "@/lib/rate-limit";
import { prisma } from "@/lib/prisma";

const resend = new Resend(process.env.RESEND_API_KEY || "re_a1cKdd69_KFEVXvatcfd6w5VCyL2ppfQZ");

export async function POST(request: Request) {
  try {
    // Apply rate limiting
    await rateLimit("contact-form");

    const body = await request.json();
    
    // Validate request body
    const validatedData = contactFormSchema.parse(body);

    // Get site URL for email template
    const siteUrl = request.headers.get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "";

    // Store submission in database
    const headersList = headers();
    const submission = await prisma.contactSubmission.create({
      data: {
        ...validatedData,
        ipAddress: (await headersList).get("x-forwarded-for") || "unknown",
        userAgent: (await headersList).get("user-agent") || "unknown"
      }
    });

    // Send notification email to admin
    await resend.emails.send({
      from: `${BRAND.name} <contact@${BRAND.domain}>`,
      to: [BRAND.contact.email],
      reply_to: validatedData.email,
      subject: `New Contact Form Submission: ${validatedData.subject}`,
      react: ContactFormEmail({
        ...validatedData,
        siteUrl
      })
    });

    // Send auto-reply to user
    await resend.emails.send({
      from: `${BRAND.name} <contact@${BRAND.domain}>`,
      to: [validatedData.email],
      subject: `Thank you for contacting ${BRAND.name}`,
      react: AutoReplyEmail({
        name: validatedData.name,
        siteUrl
      })
    });

    return NextResponse.json({
      message: "Message sent successfully",
      id: submission.id
    });
  } catch (error) {
    console.error("Contact form error:", error);
    
    if (error instanceof Error) {
      return NextResponse.json(
        { error: error.message },
        { status: error.message.includes("Rate limit") ? 429 : 400 }
      );
    }

    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 400 }
    );
  }
} 