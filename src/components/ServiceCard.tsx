"use client";

import React from "react";
import Link from "next/link";
import { Dog, HeartPulse, Venus, ShieldAlert, Plane, Car, ArrowRight, ShieldCheck } from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  badge?: string;
  description: string;
  icon: React.ReactNode;
  accentColor: string;
  details: string[];
  illustration: React.ReactNode;
}

export default function ServiceCard() {
  const services: ServiceItem[] = [
    {
      id: "pet",
      title: "PET INSURANCE",
      badge: "Cat & Dog",
      description: "Covers accidental injury and critical disease expenses for cats & dogs.",
      icon: <Dog className="w-8 h-8 text-brand-blue" />,
      accentColor: "from-blue-500/20 to-cyan-500/20",
      details: ["Accidental Injury Cover", "Critical Illness Cover", "Vet Consultation Discount"],
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center bg-linear-to-tr from-sky-50 to-blue-50/50">
          <div className="absolute top-6 right-6 w-16 h-16 bg-white/60 rounded-full blur-md" />
          <svg viewBox="0 0 200 150" fill="none" className="w-40 h-32 text-blue-500" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="140" height="90" rx="16" fill="white" className="shadow-xs" />
            <circle cx="70" cy="85" r="25" fill="#e0f2fe" />
            {/* Pet paw SVG */}
            <circle cx="70" cy="75" r="5" fill="#0284c7" />
            <circle cx="58" cy="80" r="4" fill="#0284c7" />
            <circle cx="82" cy="80" r="4" fill="#0284c7" />
            <circle cx="70" cy="92" r="10" fill="#0284c7" />
            
            <rect x="110" y="70" width="45" height="6" rx="3" fill="#cbd5e1" />
            <rect x="110" y="82" width="30" height="6" rx="3" fill="#cbd5e1" />
            <rect x="110" y="94" width="40" height="6" rx="3" fill="#38bdf8" />
          </svg>
        </div>
      ),
    },
    {
      id: "health",
      title: "HEALTH INSURANCE",
      badge: "Family & Individual",
      description: "Health Insurance provides reimbursement of In Patient / Hospitalization, Out-Patient / Diagnostic Bill, Medicine Bill.",
      icon: <HeartPulse className="w-8 h-8 text-brand-blue" />,
      accentColor: "from-emerald-500/20 to-teal-500/20",
      details: ["Hospitalization Reimbursement", "Out-Patient Cover", "Diagnostic Bill Cash Back", "Medicine Allowance"],
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center bg-linear-to-tr from-emerald-50 to-teal-50/50">
          <div className="absolute bottom-6 left-6 w-20 h-20 bg-white/60 rounded-full blur-md" />
          <svg viewBox="0 0 200 150" fill="none" className="w-40 h-32 text-emerald-500" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="140" height="90" rx="16" fill="white" />
            <circle cx="130" cy="85" r="25" fill="#d1fae5" />
            {/* Heartbeat pulse */}
            <path d="M112 85h10l5-12 5 24 5-18 3 6h10" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            
            <rect x="50" y="70" width="45" height="6" rx="3" fill="#cbd5e1" />
            <rect x="50" y="82" width="35" height="6" rx="3" fill="#cbd5e1" />
            <rect x="50" y="94" width="55" height="6" rx="3" fill="#10b981" />
          </svg>
        </div>
      ),
    },
    {
      id: "nibedita",
      title: "NIBEDITA",
      badge: "Women Special",
      description: "Comprehensive insurance coverage specially designed for women in the event of accidental death, disability & trauma allowance.",
      icon: <Venus className="w-8 h-8 text-brand-blue" />,
      accentColor: "from-purple-500/20 to-pink-500/20",
      details: ["Accidental Death Cover", "Permanent Disability cover", "Trauma & Stress Allowance", "Maternity Support discounts"],
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center bg-linear-to-tr from-pink-50 to-purple-50/50">
          <div className="absolute top-8 left-8 w-16 h-16 bg-white/60 rounded-full blur-md" />
          <svg viewBox="0 0 200 150" fill="none" className="w-40 h-32 text-purple-500" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="140" height="90" rx="16" fill="white" />
            <circle cx="70" cy="85" r="22" fill="#f3e8ff" />
            {/* Female sign styled icon */}
            <circle cx="70" cy="80" r="8" stroke="#7c3aed" strokeWidth="2.5" />
            <path d="M70 88v12M65 94h10" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
            
            <rect x="110" y="70" width="40" height="6" rx="3" fill="#cbd5e1" />
            <rect x="110" y="82" width="45" height="6" rx="3" fill="#cbd5e1" />
            <rect x="110" y="94" width="30" height="6" rx="3" fill="#d946ef" />
          </svg>
        </div>
      ),
    },
    {
      id: "ppa",
      title: "PPA",
      badge: "Personal Accident",
      description: "PPA insurance provides compensation up to BDT 100,000 in the event of an accident causing injury.",
      icon: <ShieldAlert className="w-8 h-8 text-brand-blue" />,
      accentColor: "from-amber-500/20 to-orange-500/20",
      details: ["Up to BDT 100,000 Payout", "Accidental Medical Reimbursement", "Hospital cash allowance"],
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center bg-linear-to-tr from-amber-50 to-orange-50/50">
          <div className="absolute bottom-6 right-6 w-16 h-16 bg-white/60 rounded-full blur-md" />
          <svg viewBox="0 0 200 150" fill="none" className="w-40 h-32 text-amber-500" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="140" height="90" rx="16" fill="white" />
            <circle cx="130" cy="85" r="22" fill="#fef3c7" />
            {/* Shield with check mark */}
            <path d="M130 73.5l10 4v8c0 6.6-4.4 12-10 14-5.6-2-10-7.4-10-14v-8l10-4z" fill="#d97706" />
            <path d="M127 84.5l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            
            <rect x="50" y="70" width="50" height="6" rx="3" fill="#cbd5e1" />
            <rect x="50" y="82" width="35" height="6" rx="3" fill="#cbd5e1" />
            <rect x="50" y="94" width="40" height="6" rx="3" fill="#f59e0b" />
          </svg>
        </div>
      ),
    },
    {
      id: "overseas",
      title: "OVERSEAS MEDICLAIM",
      badge: "Travel Safe",
      description: "It is a comprehensive travel insurance program. It covers emergency hospitalization, accidental death & disability.",
      icon: <Plane className="w-8 h-8 text-brand-blue" />,
      accentColor: "from-indigo-500/20 to-violet-500/20",
      details: ["Emergency Medical Cover", "Trip Delay & Cancellation Reimbursement", "Baggage Loss Coverage", "Worldwide Network"],
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center bg-linear-to-tr from-indigo-50 to-violet-50/50">
          <div className="absolute top-6 left-6 w-16 h-16 bg-white/60 rounded-full blur-md" />
          <svg viewBox="0 0 200 150" fill="none" className="w-40 h-32 text-indigo-500" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="140" height="90" rx="16" fill="white" />
            <circle cx="70" cy="85" r="22" fill="#e0e7ff" />
            {/* Plane takeoff outline */}
            <path d="M58 92l4-2 12-4 12 1 4-2-6-8h4l8 8 8 2 2-3 2 1-3 5-1 4-38 6z" fill="#4f46e5" />
            
            <rect x="110" y="70" width="45" height="6" rx="3" fill="#cbd5e1" />
            <rect x="110" y="82" width="30" height="6" rx="3" fill="#cbd5e1" />
            <rect x="110" y="94" width="50" height="6" rx="3" fill="#6366f1" />
          </svg>
        </div>
      ),
    },
    {
      id: "motor",
      title: "MOTOR INSURANCE",
      badge: "Vehicle Cover",
      description: "Comprehensive motor insurance that covers accidental damage & theft, riot & strike risk, earthquake risk, flood & cyclone risk.",
      icon: <Car className="w-8 h-8 text-brand-blue" />,
      accentColor: "from-rose-500/20 to-red-500/20",
      details: ["Third-Party Liability", "Accidental Damage & Theft", "Riot, Strike & Storm Protection", "Roadside Assistance"],
      illustration: (
        <div className="relative w-full h-full flex items-center justify-center bg-linear-to-tr from-rose-50 to-red-50/50">
          <div className="absolute bottom-6 left-6 w-18 h-18 bg-white/60 rounded-full blur-md" />
          <svg viewBox="0 0 200 150" fill="none" className="w-40 h-32 text-rose-500" xmlns="http://www.w3.org/2000/svg">
            <rect x="30" y="40" width="140" height="90" rx="16" fill="white" />
            <circle cx="130" cy="85" r="22" fill="#ffe4e6" />
            {/* Car icon simplified */}
            <path d="M116 88l3-6a3 3 0 013-2h16a3 3 0 013 2l3 6v6a2 2 0 01-2 2h-1v2a2 2 0 01-4 0v-2h-10v2a2 2 0 01-4 0v-2h-1a2 2 0 01-2-2v-6zm5-3a1 1 0 100-2 1 1 0 000 2zm18 0a1 1 0 100-2 1 1 0 000 2z" fill="#e11d48" />
            
            <rect x="50" y="70" width="40" height="6" rx="3" fill="#cbd5e1" />
            <rect x="50" y="82" width="55" height="6" rx="3" fill="#cbd5e1" />
            <rect x="50" y="94" width="45" height="6" rx="3" fill="#f43f5e" />
          </svg>
        </div>
      ),
    },
  ];

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Our Insurance Portfolios</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
            Services You Can Avail Through The <br className="hidden sm:inline" />
            <span className="gradient-text-blue-green font-extrabold">Green Delta Website</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Choose from our broad spectrum of personal and commercial packages designed to ensure financial security and absolute peace of mind.
          </p>
        </div>

        {/* Services Grid (Double column style like the original design) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="group overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-xs transition-all duration-300 hover:shadow-xl hover:border-brand-green/20"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 h-full">
                
                {/* Left Side: Deep Brand Blue Information block */}
                <div className="md:col-span-7 bg-brand-blue p-8 flex flex-col justify-between text-white relative">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-white/5 to-transparent rounded-full pointer-events-none" />
                  
                  {/* Top: Card Header */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-white rounded-xl flex items-center justify-center shadow-md">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold text-brand-green tracking-widest uppercase block">
                          {item.badge}
                        </span>
                        <h3 className="font-display font-black text-lg sm:text-xl tracking-tight mt-0.5">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-xs text-slate-350 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>

                  {/* Bottom: Feature checkmarks & Action */}
                  <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                    <div className="space-y-2">
                      {item.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[11px] text-slate-300">
                          <ShieldCheck className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={
                        item.id === "pet"
                          ? "/pet-insurance"
                          : item.id === "health"
                          ? "/health-insurance"
                          : item.id === "nibedita"
                          ? "/nibedita-insurance"
                          : item.id === "ppa"
                          ? "/ppa-insurance"
                          : item.id === "overseas"
                          ? "/travel-insurance"
                          : "#calculator"
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-green hover:text-white transition-colors group/btn pt-2 cursor-pointer"
                    >
                      <span>
                        {(item.id === "pet" || item.id === "health" || item.id === "nibedita" || item.id === "ppa" || item.id === "overseas")
                          ? "View Details & Plans"
                          : "Estimate Premium"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Modern Vector Illustration background */}
                <div className="md:col-span-5 relative min-h-[220px] md:min-h-full">
                  {item.illustration}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
