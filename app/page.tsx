import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Partners from "../components/Partners";
import Problem from "../components/Problem";
import Platform from "../components/Platform";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Frameworks from "../components/Frameworks";
import AIAnalytics from "../components/AIAnalytics";
import NBS from "../components/NBS";
import BusinessValue from "../components/BusinessValue";
import CaseStudies from "../components/CaseStudies";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import DashboardShowcase from "@/components/Dashboardshowcase";
import SatelliteComparison from "@/components/Satellitecomparison";
import dynamic from "next/dynamic";

const Webinars = dynamic(() => import("@/components/Webinars"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <main className="bg-[#050D0A] min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <Problem />
      <Platform />
      <Services />
      <HowItWorks />
      <Frameworks />
      <AIAnalytics />
      <NBS />
      <DashboardShowcase />
      <SatelliteComparison />
      <BusinessValue />
      <CaseStudies />
       <Webinars />
      <About />
     
      <CTA />
      <Footer />
    </main>
  );
}
