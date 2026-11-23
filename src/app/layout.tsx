import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://muhammedsaeedtk.com"),
  title: "Muhammed Saeed TK | Performance Marketing Specialist",
  description:
    "Performance Marketing Specialist based in Dubai, UAE. Scaling paid acquisition across Meta Ads, Google Ads, Meta CAPI, and technical SEO with accounting-level budget discipline.",
  keywords: [
    "Muhammed Saeed TK",
    "Performance Marketing Specialist",
    "Dubai Digital Marketer",
    "Meta Ads Specialist",
    "Google Ads Expert",
    "Meta CAPI Implementation",
    "Technical SEO UAE",
    "ROAS Optimization",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#fafaf9] text-neutral-900 selection:bg-lime-300 selection:text-neutral-950 font-sans">
        {children}
      </body>
    </html>
  );
}
