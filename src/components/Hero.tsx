"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Search, Shield, Zap, Heart, Car, AlertCircle } from "lucide-react";

export default function Hero() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const router = useRouter();

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProduct) {
      if (selectedProduct === "pet") {
        router.push("/pet-insurance");
      } else if (selectedProduct === "health") {
        router.push("/health-insurance");
      } else if (selectedProduct === "nibedita") {
        router.push("/nibedita-insurance");
      } else if (selectedProduct === "ppa") {
        router.push("/ppa-insurance");
      } else if (selectedProduct === "overseas") {
        router.push("/travel-insurance");
      } else {
        const targetElement = document.getElementById(selectedProduct);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      }
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden gradient-bg-hero">
      {/* Background soft glow blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 gradient-green-glow rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] gradient-blue-glow rounded-full translate-x-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content / Action */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-green/10 border border-brand-green/20 rounded-full text-xs font-bold text-brand-green animate-float">
              <Shield className="w-3.5 h-3.5" />
              <span>AAA Rated Insurer in Bangladesh</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight text-brand-blue leading-[1.1]">
                One Stop Solution <br />
                For Your Everyday <br />
                <span className="gradient-text-blue-green">Insurance Needs</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Avail comprehensive non-life insurance services seamlessly online. Green Delta brings instant digital claims, custom-tailored policies, and 24/7 security to protect what you love.
              </p>
            </div>

            {/* Quick Policy Finder Widget */}
            <form
              onSubmit={handleSearchSubmit}
              className="bg-white p-2 rounded-2xl shadow-xl shadow-brand-blue/5 border border-slate-100 max-w-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-2"
            >
              <div className="flex-1 flex items-center gap-2 px-3 py-2 sm:py-0 border-b sm:border-b-0 sm:border-r border-slate-100">
                <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(e.target.value)}
                  className="w-full text-slate-700 bg-transparent font-medium focus:outline-hidden text-sm cursor-pointer"
                >
                  <option value="">What would you like to protect?</option>
                  <option value="pet">My Cats & Dogs (Pet Insurance)</option>
                  <option value="health">My Family&apos;s Health (Health Insurance)</option>
                  <option value="nibedita">Women&apos;s Dedicated Cover (Nibedita)</option>
                  <option value="ppa">Accident Protection (PPA)</option>
                  <option value="overseas">My Travel plans (Overseas Mediclaim)</option>
                  <option value="motor">My Vehicle (Motor Insurance)</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] cursor-pointer"
              >
                <span>Find Policy</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Trust factors */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-brand-green" />
                <span className="text-xs font-semibold text-slate-500">10-Min Claims Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-brand-green" />
                <span className="text-xs font-semibold text-slate-500">No Hidden Costs</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="w-5 h-5 text-brand-green" />
                <span className="text-xs font-semibold text-slate-500">Digital Copy Delivery</span>
              </div>
            </div>
          </div>

          {/* Visual Presentation (Interactive Floating Cards / Mock Dashboard) */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[350px] sm:min-h-[450px]">
            {/* Centered Graphic - Glowing Orb */}
            <div className="w-[300px] h-[300px] bg-linear-to-tr from-brand-blue/10 to-brand-green/20 rounded-full blur-2xl animate-pulse-slow absolute" />

            {/* Premium Dashboard Card 1 */}
            <div className="absolute top-10 left-6 sm:left-12 glass-card rounded-2xl p-4 w-[240px] shadow-lg border border-white/40 hover:scale-105 transition-all duration-500 z-20 animate-float">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-brand-green/10 text-brand-green rounded-xl">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-brand-blue">Active Protection</h3>
                  <p className="text-[10px] text-slate-500">Secure digital certificates</p>
                </div>
              </div>
              <div className="mt-3.5 space-y-2">
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="w-4/5 bg-brand-green h-full rounded-full" />
                </div>
                <div className="flex justify-between items-center text-[10px] font-bold text-slate-600">
                  <span>Coverage Rate</span>
                  <span className="text-brand-green">98.4%</span>
                </div>
              </div>
            </div>

            {/* Premium Dashboard Card 2 */}
            <div className="absolute bottom-16 right-4 sm:right-10 glass-card rounded-2xl p-5 w-[260px] shadow-xl border border-white/40 hover:scale-105 transition-all duration-500 z-10 [animation-delay:2s] animate-float">
              <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-400">Premium Calc</span>
                <span className="text-[10px] bg-slate-100 text-brand-blue font-bold px-2 py-0.5 rounded-full">Monthly</span>
              </div>
              <div className="py-4 space-y-1">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block">Health Protection Quote</span>
                <span className="text-2xl font-black text-brand-blue">BDT 1,250<span className="text-xs font-normal text-slate-500">/mo</span></span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-semibold text-brand-green bg-brand-green/10 p-2 rounded-lg">
                <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                <span>Save 15% on online registration today!</span>
              </div>
            </div>

            {/* Central Circle - Green Delta Brand Element */}
            <div className="w-64 h-64 border-2 border-brand-green/20 rounded-full flex items-center justify-center p-6 border-dashed z-0">
              <div className="w-full h-full border border-brand-blue/10 rounded-full flex items-center justify-center p-6 animate-pulse-slow">
                <div className="w-full h-full bg-linear-to-tr from-brand-blue to-brand-green rounded-full shadow-lg shadow-brand-blue/20 flex items-center justify-center text-white text-3xl font-extrabold select-none">
                  GD
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
