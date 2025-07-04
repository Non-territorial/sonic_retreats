import { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "SONIC reTREATS",
  description: "Immersive sound experiences in unique locations.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <head />
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}