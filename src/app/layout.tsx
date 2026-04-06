import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clintindossites.com.br"),
  title: {
    default: "Clintin dos Sites - Criação de Sites e Google Ads",
    template: "%s | Clintin dos Sites",
  },
  description:
    "Criação de sites profissionais, landing pages e gestão de tráfego pago para empresas e prestadores de serviço.",
  keywords: [
    "criação de sites em bh",
    "criação de sites em sp",
    "preço site para empresas",
    "criação de sites",
    "desenvolvedor web",
    "landing page",
    "site one page",
    "sites para construtores",
    "sites para restaurantes",
    "gestor de tráfego pago",
    "manutenção de computadores",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Clintin dos Sites",
    image: "https://clintindossites.com.br/logo.svg",
    url: "https://clintindossites.com.br",
    telephone: "+55 38 99136-9873",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Belo Horizonte",
      addressRegion: "MG",
      addressCountry: "BR",
    },
    areaServed: ["BR", "US"],
    priceRange: "$$",
    sameAs: [
      "https://share.google/lL3lkI65xBwKyXSPH",
      "https://github.com/Domclinton1",
      "https://www.linkedin.com/in/clintin-dos-sites/",
      "https://www.facebook.com/profile.php?id=61576133499522",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "7",
    },
  };

  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        <CookieConsent />
        <Footer />
      </body>
    </html>
  );
}
