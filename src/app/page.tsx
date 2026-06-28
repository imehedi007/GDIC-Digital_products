import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import QuoteCalculator from "@/components/QuoteCalculator";
import StatsSection from "@/components/StatsSection";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow pt-[70px]">
        {/* Hero Section with Quick Finder */}
        <Hero />

        {/* Dynamic Portfolios Grid */}
        <ServiceCard />

        {/* Live Estimation Calculator */}
        <QuoteCalculator />

        {/* Brand Metrics Section */}
        <StatsSection />

        {/* Customer Social Proof Reviews */}
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
