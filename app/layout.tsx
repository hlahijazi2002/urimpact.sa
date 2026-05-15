import type { Metadata } from "next";
import { DM_Sans, Tajawal } from "next/font/google";
import "./globals.css";
import { LangProvider } from "../context/LangContext";
import Navbar from "@/components/Navbar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const tajawal = Tajawal({
  subsets: ["arabic"],
  variable: "--font-tajawal",
  weight: ["300", "400", "500", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "URIMPACT",
  description:
    "URIMPACT enables organizations to measure GHG emissions, manage ESG performance, automate sustainability reporting, and accelerate decarbonization through AI-driven insights.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${tajawal.variable} font-sans antialiased`}
      >
        <LangProvider>
          <Navbar />
          {children}
        </LangProvider>
      </body>
    </html>
  );
}
