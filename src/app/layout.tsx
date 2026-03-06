import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "תומר ניר — נגן ומורה לעוּד | Tomer Nir — Oud Teacher",
  description:
    "שיעורי עוד פרטיים בירושלים ובתל אביב. למדו טכניקה, מקאם, אלתור והלחנה — בדגש על הסגנונות הערבי והטורקי. Private oud lessons in Jerusalem & Tel Aviv.",
  keywords: [
    "עוד",
    "oud",
    "מורה לעוד",
    "oud teacher",
    "שיעורי עוד",
    "oud lessons",
    "ירושלים",
    "Jerusalem",
    "תל אביב",
    "Tel Aviv",
    "מקאם",
    "maqam",
    "תומר ניר",
    "Tomer Nir",
  ],
  openGraph: {
    title: "תומר ניר — נגן ומורה לעוּד",
    description: "שיעורי עוד פרטיים בירושלים ובתל אביב",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl" className={`${heebo.variable} ${inter.variable}`}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=AW-17997418632`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'AW-17997418632');
            `,
          }}
        />
      </head>
      <body className="font-[family-name:var(--font-heebo)] antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
