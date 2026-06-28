"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import {
  HeartPulse,
  Activity,
  PhoneCall,
  CheckCircle2,
  ShieldCheck,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  Info,
  Sparkles,
  ChevronDown,
  Check,
  X
} from "lucide-react";

export default function HealthInsurancePage() {
  const [activePlan, setActivePlan] = useState<"rounder" | "365">("rounder");
  const [activeCoverageTab, setActiveCoverageTab] = useState<"limitations" | "exclusions">("limitations");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Simulation Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState("");
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(0);

  // Plan Details
  const planData = {
    rounder: {
      name: "Shurokkha All Rounder",
      headline: "OPD + Hospitalization Coverage",
      premium: 290,
      vat: 44,
      total: 334,
      limit: "BDT 22,000 Total Limit",
      desc: "Perfect all-around policy covering diagnostics, doctor consultations, medicine expenses, alongside hospitalization and surgery protection.",
    },
    365: {
      name: "Shurokkha 365",
      headline: "High-Limit Cashback & COVID Protection",
      premium: 204,
      vat: 31,
      total: 235,
      limit: "Up to BDT 1,00,000 limit",
      desc: "Designed for premium cashback protection during hospital stay for accidents, illnesses, and full COVID-19 coverage.",
    }
  };

  const handleBuyPlan = (name: string, premium: number) => {
    setSelectedPlanName(name);
    setSelectedPlanPrice(premium);
    setIsModalOpen(true);
  };

  const activePlanDetails = planData[activePlan];

  // Exclusions List
  const healthExclusions = [
    "Any congenital infirmity or genetic condition diagnosed early.",
    "Pre-existing medical conditions (diagnosed before the enrollment).",
    "Mental, emotional or psychiatric disorders, alcoholism or narcotic addiction.",
    "Prophylactic treatments and routine immunization procedures.",
    "Experimental procedures not accepted by BMDC (e.g., acupuncture).",
    "Cosmetic/plastic surgery (unless reconstructive due to accident or burns).",
    "Rest cures, convalescence, rejuvenation cures, or beauty spa visits.",
    "Family planning, sterility, or abortion within the first 12 weeks of conception.",
    "Self-inflicted injuries, attempted suicide, or unlawful activities.",
    "Routine vision/hearing tests, glasses, or hearing aids fitting/replacement.",
    "Chemotherapy, radiotherapy, or diagnostic tests without doctor prescription.",
    "Maternity claims (pregnancy or childbirth) in both IPD & OPD segments.",
    "Waiting periods (30 days) apply separately for family members.",
    "Health toiletries, anti-lice shampoo, energy drinks, and attendant meals."
  ];

  // Limitations List
  const healthLimitations = [
    "1-year coverage duration starting from the date of policy registration.",
    "Valid for 1 Bangladeshi adult in good health (age limit: 18 to 65 years).",
    "MBBS or above qualified doctor's written recommendation required for hospitalization.",
    "Hospital must be registered with the government health authority.",
    "Outpatient (OPD) service diagnostic tests/consultations must be prescribed by an MBBS doctor.",
    "Minimum of 24 consecutive hours stay is required for a hospitalization claim.",
    "Claims must be submitted within 15 days of treatment or hospital discharge."
  ];

  // Claims Steps
  const claimSubmissionSteps = [
    {
      title: "1. Prepare Claim Information",
      desc: "Collect your Policy Number, Policyholder NID, registered mobile number, and nominee mobile number."
    },
    {
      title: "2. Gather Medical Documents",
      desc: "Collect discharge certificates, diagnostic test prescription copies, treatment sheets, hospital bill receipts, and pharmacy bills."
    },
    {
      title: "3. WhatsApp Submission",
      desc: "Send clear scanned photos of all documents to the GDIC hotline +8801617666888 (WhatsApp only)."
    },
    {
      title: "4. Verification & Settlement",
      desc: "Once verified, the GDIC team will validate your credentials and contact you or your nominee for claim settlement."
    }
  ];

  // FAQ List
  const faqs = [
    {
      q: "What is Shurokkha All Rounder?",
      a: "Shurokkha All Rounder is a comprehensive health package offering BDT 20,000 for disability, hospitalization, and surgery, along with BDT 2,000 OPD cover (which includes BDT 800 doctor fees, BDT 800 diagnostics, and BDT 400 medicines)."
    },
    {
      q: "What benefits does Shurokkha 365 provide?",
      a: "Shurokkha 365 provides up to BDT 100,000 in coverage per year for accidents, illnesses, and COVID-19. It offers BDT 1,000 per night cashback for hospitalization (maximum 5 nights per episode, minimum 24 hours stay required). COVID-19 claims require a positive RT-PCR report."
    },
    {
      q: "What is the age limit for enrollment?",
      a: "The entry age limit for both Shurokkha health insurance policies is between 18 and 65 years."
    },
    {
      q: "Can I submit claims for dental or optical checks?",
      a: "No, dental and optical treatments, routine health check-ups, cosmetic procedures, and pre-existing medical conditions are excluded from both plans."
    },
    {
      q: "How long do I have to file a claim?",
      a: "All health claims must be submitted to our WhatsApp channel (+8801617666888) within 15 days of your treatment completion or hospital discharge."
    },
    {
      q: "Is there a waiting period for new family members?",
      a: "Yes. A 30-day waiting period applies separately for each family member from the date they are added to the package."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      {/* Main Content Area */}
      <main className="relative">
        
        {/* Decorative Neon Blobs */}
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute top-[40%] right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        {/* Hero Banner Section */}
        <section className="relative pt-32 pb-16 bg-linear-to-b from-sky-50 to-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading Info */}
              <div className="lg:col-span-7 space-y-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-green transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-brand-green">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Shurokkha Health Protection portal</span>
                </div>
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-blue tracking-tight leading-[1.1]">
                  Green Delta <br />
                  <span className="gradient-text-blue-green font-extrabold">Shurokkha Health Cover</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
                  Protect yourself and your family with affordable, high-limit medical protection. From outpatient diagnostic fees to dedicated COVID-19 cashbacks, Shurokkha keeps you prepared.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#plans"
                    className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-brand-green/10 hover:scale-[1.01] transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span>Explore Health Plans</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#claims"
                    className="bg-white border border-slate-200 hover:border-brand-green/30 text-slate-700 hover:text-brand-green font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300"
                  >
                    Claims Settlement
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Option Selector */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-brand-green/5 to-transparent rounded-full pointer-events-none" />
                  
                  {/* Medical Illustration Vector */}
                  <div className="relative w-full h-44 bg-linear-to-tr from-emerald-50 to-blue-50/50 rounded-2xl flex items-center justify-center border border-slate-50">
                    <svg viewBox="0 0 200 120" fill="none" className="w-44 h-28 text-brand-blue" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="60" r="40" fill="#d1fae5" />
                      <circle cx="100" cy="60" r="30" fill="#e0f2fe" />
                      {/* Heartbeat pulse path */}
                      <path d="M75 60h15l5-12 5 24 5-18 3 6h15" stroke="#059669" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      {/* Shield sign */}
                      <path d="M100 25l12 4v10c0 8-5 14-12 17-7-3-12-9-12-17V29l12-4z" fill="#0284c7" className="opacity-90" />
                      <path d="M96 38l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  {/* Selector Header */}
                  <div className="space-y-4">
                    <h3 className="text-center font-display font-black text-lg text-brand-blue">
                      Choose Coverage Type
                    </h3>
                    <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
                      <button
                        onClick={() => setActivePlan("rounder")}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                          activePlan === "rounder"
                            ? "bg-white text-brand-blue shadow-md"
                            : "text-slate-500 hover:text-brand-blue"
                        }`}
                      >
                        <HeartPulse className="w-4 h-4" />
                        <span>All Rounder</span>
                      </button>
                      <button
                        onClick={() => setActivePlan("365")}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                          activePlan === "365"
                            ? "bg-white text-brand-blue shadow-md"
                            : "text-slate-500 hover:text-brand-blue"
                        }`}
                      >
                        <Activity className="w-4 h-4" />
                        <span>Shurokkha 365</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Plan Breakdown & Coverage Matrix */}
        <section id="plans" className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Select Health Package</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
                Compare <span className="gradient-text-blue-green font-extrabold">Shurokkha Policy Details</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                We offer simple, transparent pricing structures with fixed yearly rates. No hidden registration fees.
              </p>
            </div>

            {/* Split Grid based on active selection */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              
              {/* Left Side: Policy Details Card */}
              <div className="lg:col-span-7 flex flex-col justify-between p-8 sm:p-10 bg-slate-50/50 rounded-3xl border border-slate-100">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-brand-green tracking-wider bg-emerald-500/10 px-3.5 py-1.5 rounded-full">
                      Active Selection
                    </span>
                    <span className="text-xs font-bold text-slate-400">Policy Term: 1 Year</span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-brand-blue">
                      {activePlanDetails.name}
                    </h3>
                    <p className="text-xs text-brand-green font-bold uppercase tracking-wider mt-1.5">
                      {activePlanDetails.headline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-3">
                      {activePlanDetails.desc}
                    </p>
                  </div>

                  {/* Coverage Limits details */}
                  <div className="pt-6 border-t border-slate-200/80 space-y-4">
                    <h4 className="font-display font-bold text-sm text-brand-blue">Coverage Matrix Breakdown</h4>
                    
                    {activePlan === "rounder" ? (
                      <div className="space-y-3.5">
                        <div className="flex justify-between items-center p-3 bg-white border border-slate-100 rounded-xl text-xs">
                          <span className="text-slate-500 font-medium">IPD Hospitalization, Surgery & Disability limit:</span>
                          <span className="font-bold text-slate-800">BDT 20,000 / year</span>
                        </div>
                        <div className="p-4 bg-white border border-slate-100 rounded-xl space-y-2">
                          <div className="flex justify-between items-center text-xs font-semibold pb-2 border-b border-slate-100">
                            <span className="text-slate-700">OPD Coverage Limit:</span>
                            <span className="text-brand-green">BDT 2,000 / year</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 pt-1 text-[10px] text-center text-slate-500 font-medium">
                            <div className="bg-slate-50 p-2 rounded-lg">
                              <span className="block text-slate-400">Doctor Fees</span>
                              <span className="font-bold text-slate-700 text-xs mt-0.5">BDT 800</span>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-lg">
                              <span className="block text-slate-400">Diagnostics</span>
                              <span className="font-bold text-slate-700 text-xs mt-0.5">BDT 800</span>
                            </div>
                            <div className="bg-slate-50 p-2 rounded-lg">
                              <span className="block text-slate-400">Medicine</span>
                              <span className="font-bold text-slate-700 text-xs mt-0.5">BDT 400</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-3.5">
                        <div className="flex justify-between items-center p-3 bg-white border border-slate-100 rounded-xl text-xs">
                          <span className="text-slate-500 font-medium">Annual Accidents, Diseases & COVID-19 limit:</span>
                          <span className="font-bold text-slate-800">BDT 1,00,000 / year</span>
                        </div>
                        <div className="flex justify-between items-start p-3 bg-white border border-slate-100 rounded-xl text-xs gap-3">
                          <span className="text-slate-500 font-medium leading-relaxed">Accident & Disease Hospital stay Cashback:</span>
                          <span className="font-bold text-slate-850 text-right flex-shrink-0">
                            BDT 1,000 / night <br />
                            <span className="text-[10px] text-slate-400 block font-normal">(Max 5 nights per episode)</span>
                          </span>
                        </div>
                        <div className="flex justify-between items-start p-3 bg-white border border-slate-100 rounded-xl text-xs gap-3">
                          <span className="text-slate-500 font-medium leading-relaxed">COVID-19 Positive Hospital stay Cashback:</span>
                          <span className="font-bold text-slate-850 text-right flex-shrink-0">
                            BDT 1,000 / night <br />
                            <span className="text-[10px] text-slate-400 block font-normal">(Max 5 nights, RT-PCR required)</span>
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-400 p-2.5 bg-blue-50/40 rounded-lg flex items-start gap-1.5">
                          <Info className="w-3.5 h-3.5 text-slate-400 mt-0.5 flex-shrink-0" />
                          <span>Max 20 total claims (cashback and accident limits up to BDT 100,000) per 12-month subscription period.</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-green" />
                  <span className="text-xs text-slate-600 font-medium leading-relaxed">
                    Once sum insured limits are reached, the policy ceases for the current subscription year.
                  </span>
                </div>
              </div>

              {/* Right Side: Premium Calculation & Purchase */}
              <div className="lg:col-span-5 flex flex-col justify-between p-8 bg-white rounded-3xl border border-slate-150 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-brand-green/10 to-transparent rounded-full pointer-events-none" />
                
                <div className="space-y-6">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Premium Calculation</span>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Insurance Base Premium:</span>
                      <span className="font-bold text-slate-800">BDT {activePlanDetails.premium}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">VAT (15%):</span>
                      <span className="font-bold text-slate-800">BDT {activePlanDetails.vat}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Revenue Stamp Fee:</span>
                      <span className="font-bold text-slate-800">BDT 0</span>
                    </div>
                    <div className="pt-3 border-t border-slate-100 flex justify-between items-baseline">
                      <span className="text-xs font-bold text-slate-700">Total Premium / year:</span>
                      <div className="text-right">
                        <span className="text-2xl font-black text-brand-blue">BDT {activePlanDetails.total}</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">including all taxes</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-brand-blue uppercase tracking-wider">Instant Access Benefits</h4>
                    <ul className="space-y-2 text-[11px] text-slate-500">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                        <span>Instant digital copy sent to email</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                        <span>3-7 days doorstep physical copy delivery</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                        <span>Active right after payment approval</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8">
                      <button
                        onClick={() => handleBuyPlan(activePlanDetails.name, activePlanDetails.premium, activePlanDetails.vat, activePlanDetails.total)}
                        className="w-full text-center text-xs font-bold bg-brand-green hover:bg-brand-green-hover text-white py-3.5 px-4 rounded-xl shadow-lg shadow-brand-green/10 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                      >
                        Buy {activePlanDetails.name} Online
                      </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Policy Guidelines: Terms vs Exclusions */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Guidelines</p>
              <h2 className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight">
                Terms, Conditions <span className="gradient-text-blue-green font-extrabold">& Exclusions</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              {/* Tabs header */}
              <div className="flex border-b border-slate-100 bg-slate-50 p-2">
                <button
                  onClick={() => setActiveCoverageTab("limitations")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeCoverageTab === "limitations"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  Terms & Limitations
                </button>
                <button
                  onClick={() => setActiveCoverageTab("exclusions")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeCoverageTab === "exclusions"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  Key Exclusions
                </button>
              </div>

              {/* Tab Body */}
              <div className="p-8">
                {activeCoverageTab === "limitations" ? (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-brand-blue flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-brand-green" />
                      Policy Limitations & Requirements
                    </h3>
                    <ul className="grid grid-cols-1 gap-3.5 text-xs text-slate-600">
                      {healthLimitations.map((lim, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span>{lim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-red-600 flex items-center gap-2 mb-4">
                      <ShieldAlert className="w-5 h-5 text-red-500" />
                      What is NOT Covered (General Exclusions)
                    </h3>
                    <p className="text-[11px] text-slate-400 italic mb-2">
                      No benefit shall be paid under this policy for expenses resulting from or incurred in consequence of:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-500">
                      {healthExclusions.map((exc, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <X className="w-3.5 h-3.5 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

          </div>
        </section>

        {/* Claim Procedure Section */}
        <section id="claims" className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Info Column */}
              <div className="lg:col-span-5 space-y-6">
                <h2 className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight">
                  WhatsApp Claim <br />
                  <span className="gradient-text-blue-green font-extrabold">Settlement Process</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Green Delta makes healthcare claims easy. No need to visit our offices—simply snapshot and submit all records to our WhatsApp portal for validation.
                </p>
                <div className="p-4 bg-brand-green/5 border border-brand-green/10 rounded-xl flex items-start gap-2.5">
                  <PhoneCall className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-brand-blue block">Submit Claim Docs to (WhatsApp Only):</span>
                    <span className="text-sm font-bold text-brand-green">+8801617666888</span>
                  </div>
                </div>
              </div>

              {/* Steps Checklist */}
              <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-155 relative">
                <h3 className="font-display font-bold text-base text-brand-blue mb-8">
                  Step-by-Step Claim Guidelines
                </h3>
                <div className="space-y-6 relative border-l border-slate-200 pl-6 ml-2">
                  {claimSubmissionSteps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* step indicator */}
                      <span className="absolute -left-[35px] top-0 bg-brand-green text-white w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs">
                        {idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-brand-blue">{step.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Clarifications</p>
              <h2 className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight">
                Frequently Asked <span className="gradient-text-blue-green font-extrabold">Questions</span>
              </h2>
            </div>

            {/* Accordion container */}
            <div className="space-y-3">
              {faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-xs"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-display font-bold text-sm text-brand-blue leading-snug">
                        {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 border-t border-slate-50">
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>
        </section>

      </main>

      {/* Checkout Simulator Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName={selectedPlanName}
        premiumAmount={selectedPlanPrice}
      />

      <Footer />
    </div>
  );
}
