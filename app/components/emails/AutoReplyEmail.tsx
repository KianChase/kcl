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
import { BRAND } from "@/constants/brand";

interface AutoReplyEmailProps {
  name: string;
  siteUrl: string;
}

export default function AutoReplyEmail({
  name,
  siteUrl
}: AutoReplyEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting {BRAND.name}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>Thank You for Contacting Us</Heading>
          <Section style={section}>
            <Text style={text}>Dear {name},</Text>
            <Text style={text}>
              Thank you for reaching out to {BRAND.name}. We have received your message and will get back to you as soon as possible.
            </Text>
            <Text style={text}>
              Our typical response time is within 24-48 business hours.
            </Text>
            <Hr style={hr} />
            <Text style={text}>
              Best regards,<br />
              The {BRAND.name} Team
            </Text>
          </Section>
          <Hr style={hr} />
          <Text style={footer}>
            This is an automated response to your message sent through{" "}
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
  lineHeight: "1.5",
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