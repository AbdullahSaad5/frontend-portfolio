import type { Metadata } from "next";
import { DM_Sans, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Eisha Kamran — Technical Project Manager | AI & Automation | Remote",
  description:
    "Technical Project Manager with a CS degree, building AI & automation systems for US clients. 1.5+ years of cross-timezone, fully remote delivery from Pakistan. Open to TPM and engineering roles.",
  keywords: [
    "Technical Project Manager",
    "TPM",
    "Remote",
    "AI Automation",
    "Agentic AI",
    "Pakistan",
    "Software Engineer",
    "Agile",
    "Scrum",
    "SaaS",
  ],
  openGraph: {
    title: "Eisha Kamran — Technical Project Manager",
    description:
      "Building AI & automation systems for US clients. Bridging timezones, shipping products remotely from Pakistan.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eisha Kamran — Technical Project Manager",
    description:
      "Building AI & automation systems for US clients. Bridging timezones, shipping products remotely from Pakistan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${playfair.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
