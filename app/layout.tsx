import type { Metadata } from "next";
import { DM_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import Chat from "../components/Chat";
import { LangProvider } from "../context/LangContext";
import { ThemeProvider } from "../context/ThemeContext";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  preload: false,
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700", "800", "900"],
  preload: false,
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
      "ar-SA": "https://urimpact.sa/ar",
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
  return (
    <html suppressHydrationWarning lang="en" dir="ltr">
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
      </head>
      <body
        className={`${dmSans.variable} ${tajawal.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <LangProvider>
            <Navbar />
            {children}
            <Chat />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
