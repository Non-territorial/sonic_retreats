import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SONIC reTREATS",
  description: "Immersive sound experiences in unique locations across Italy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}