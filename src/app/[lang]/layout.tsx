import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { IBM_Plex_Mono, Noto_Sans_JP } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
  weight: "300",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-ibm-plex-mono",
});

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "SONIC reTREATS",
  description: "Immersive sound experiences in unique locations.",
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className={`${ibmPlexMono.variable} ${lang === "jp" ? notoSansJP.variable : ""}`}>
      <head />
      <body>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}