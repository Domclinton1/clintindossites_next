import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Image from "next/image";
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
      <head>
        {/* Google Adsense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3870849326523534"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3P5VRB3EH9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-3P5VRB3EH9');
      `}
        </Script>

        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1253175769645630');
        fbq('track', 'PageView');
      `}
        </Script>
      </head>
      <body className={`${inter.variable} ${poppins.variable}`}>
        <Header />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        <CookieConsent />
        <Footer />
        {/* Meta Pixel fallback */}
        <noscript>
          <Image
            height={1}
            width={1}
            alt="Meta Pixel Fallback"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1253175769645630&ev=PageView&noscript=1"
          />
        </noscript>
      </body>
    </html>
  );
}
