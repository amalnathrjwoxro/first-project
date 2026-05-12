import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Welcome to woxro",
  description: "Woxro is a leading Microsoft Dynamics 365 partner, specializing in ERP and CRM implementation, customization, integration, and Power BI-driven business insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} h-full antialiased`}
    >
      <body className={`${ibmPlexSans.className} min-h-full flex flex-col`}>{children}</body>
    </html>
  );
}
