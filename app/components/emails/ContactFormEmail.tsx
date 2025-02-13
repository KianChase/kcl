import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from "@react-email/components";
import { ContactFormData } from "@/lib/validations/contact";
import { BRAND } from "@/constants/brand";

interface ContactFormEmailProps extends ContactFormData {
  siteUrl: string;
}

export default function ContactFormEmail({
  name,
  email,
  subject,
  message,
  siteUrl
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New contact form submission from {name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Subject:</strong> {subject}
            </Text>
            <Hr style={hr} />
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={text}>{message}</Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            This email was sent from the contact form on{" "}
            <a href={siteUrl} style={link}>
              {BRAND.name}
            </a>
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

// Styles
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const section = {
  padding: "0 48px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "40px 0",
  padding: "0",
  textAlign: "center" as const,
};

const text = {
  color: "#333",
  fontSize: "16px",
  margin: "24px 0",
};

const link = {
  color: "#e11d48",
  textDecoration: "underline",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "12px",
  textAlign: "center" as const,
}; 