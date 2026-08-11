import type { Metadata } from "next";
import { DM_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import Chat from "../components/Chat";
import { LangProvider } from "../context/LangContext";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "@/components/Navbar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { headers } from "next/headers";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  preload: true,
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700", "800", "900"],
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "URIMPACT",
    template: "%s | URIMPACT",
  },
  description:
    "URIMPACT is an AI-powered sustainability platform helping enterprises across the Middle East measure GHG emissions (Scope 1, 2 & 3), manage ESG performance, automate sustainability reporting, and accelerate Net Zero — aligned with Saudi Vision 2030, GRI, IFRS S1/S2, and GHG Protocol.",
  keywords: [
    "ESG management platform",
    "GHG emissions tracking",
    "sustainability reporting software",
    "Net Zero planning",
    "carbon footprint measurement",
    "Scope 1 2 3 emissions",
    "decarbonization platform",
    "IFRS S1 S2 reporting",
    "GRI aligned software",
    "Saudi Vision 2030 sustainability",
    "carbon accounting",
    "nature-based solutions",
    "carbon credits MRV",
    "ESG software Middle East",
    "sustainability intelligence",
    "منصة ESG",
    "قياس انبعاثات الكربون",
    "تقارير الاستدامة",
  ],
  authors: [{ name: "URIMPACT", url: "https://urimpact.sa" }],
  creator: "URIMPACT",
  publisher: "URIMPACT",
  metadataBase: new URL("https://urimpact.sa"),
  alternates: {
    canonical: "https://urimpact.sa",
    languages: {
      "en-SA": "https://urimpact.sa",
      "ar-SA": "https://urimpact.sa",
    },
  },
  openGraph: {
    type: "website",
    url: "https://urimpact.sa",
    siteName: "URIMPACT",
    title: "URIMPACT — Measure. Manage. Mitigate.",
    description:
      "AI-powered sustainability platform for GHG accounting, ESG management, and Net Zero planning. Trusted by leading institutions across Saudi Arabia.",
    locale: "en_SA",
    alternateLocale: ["ar_SA"],
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "URIMPACT — Sustainability Intelligence Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "URIMPACT — Measure. Manage. Mitigate.",
    description:
      "AI-powered sustainability platform for GHG accounting, ESG management, and Net Zero planning across the Middle East.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3" },
      { url: "/favicon-16x16.png?v=3", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=3", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = headers().get("x-locale") === "ar" ? "ar" : "en";
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html suppressHydrationWarning lang={locale} dir={dir}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('urimpact-theme') || 'light';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
                document.documentElement.setAttribute('data-theme', theme);
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": "https://urimpact.sa/#organization",
                  name: "URIMPACT",
                  url: "https://urimpact.sa",
                  logo: "https://urimpact.sa/logo.png",
                  description:
                    "AI-powered sustainability platform for GHG accounting, ESG management, and Net Zero planning across the Middle East.",
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "SA",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    contactType: "customer support",
                    email: "info@urimpact.sa",
                  },
                  sameAs: ["https://www.linkedin.com/company/urimpact/"],
                },
                {
                  "@type": "WebSite",
                  "@id": "https://urimpact.sa/#website",
                  url: "https://urimpact.sa",
                  name: "URIMPACT",
                  publisher: {
                    "@id": "https://urimpact.sa/#organization",
                  },
                  inLanguage: ["en-SA", "ar-SA"],
                },
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${dmSans.variable} ${tajawal.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <LangProvider initialLang={locale}>
            <Navbar />
            {children}
            <Chat />
          </LangProvider>
        </ThemeProvider>
        <GoogleAnalytics gaId="G-VD5MLB1VG9" />
      </body>
    </html>
  );
}