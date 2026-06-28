"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Check,
  X,
  PhoneCall
} from "lucide-react";

export default function PpaInsurancePage() {
  const [activeTab, setActiveTab] = useState<"benefits" | "terms">("benefits");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Simulation Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [nidNumber, setNidNumber] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [nomineeMobile, setNomineeMobile] = useState("");
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const basePremium = 60;
  const vat = 9;
  const grandTotal = 69;

  const handleBuyPolicy = () => {
    setCheckoutComplete(false);
    setIsModalOpen(true);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName && nidNumber && mobileNumber && nomineeMobile) {
      setTransactionId(`GD-PPA-${Math.floor(100000 + Math.random() * 900000)}`);
      setCheckoutComplete(true);
    }
  };

  // Benefits & Coverages
  const benefits = [
    { label: "Accidental Death", desc: "BDT 100,000 compensation in the event of accidental death occurring within 6 calendar months of the injury." },
    { label: "Double Limb or Sight Loss", desc: "BDT 100,000 compensation for total permanent loss of sight of both eyes, total permanent loss of both hands/feet, or one eye and one limb/hand/foot within 6 calendar months of the injury." },
    { label: "Single Limb or Sight Loss", desc: "BDT 50,000 compensation for total permanent loss of sight of one eye, or total permanent loss of one hand or one foot within 6 calendar months of the injury." },
    { label: "Permanent Total Disablement", desc: "BDT 100,000 compensation for permanent total and absolute disablement caused by injury within 12 calendar months of the injury." }
  ];

  // Exclusions List
  const exclusions = [
    "Any death or disablement resulting from natural causes, disease, or illness.",
    "Pre-existing physical defects, illnesses, or disabilities.",
    "Injuries sustained while under the influence of intoxicating alcohol or drugs.",
    "Suicide, attempted suicide, or intentional self-inflicted bodily injury.",
    "Injuries or death resulting directly or indirectly from insanity.",
    "War, invasion, foreign hostilities (whether declared or not), and civil war.",
    "Rebellion, mutiny, conspiracy, or order of public government authorities.",
    "Nuclear fission, radiation, or radioactive contamination.",
    "Participating in unlawful activities."
  ];

  // FAQs
  const faqs = [
    {
      q: "What is People's Personal Accident (PPA) Insurance?",
      a: "PPA is a highly affordable accident protection scheme providing compensation of up to BDT 100,000 in the event of accidental death, double/single limb loss, sight loss, or permanent total disablement resulting from accidental bodily injury."
    },
    {
      q: "Who is eligible to purchase this plan?",
      a: "Any Bangladeshi citizen between the ages of 16 and 65 years is eligible to purchase the PPA policy."
    },
    {
      q: "How much does PPA cost?",
      a: "The base annual premium is BDT 60. With 15% VAT (BDT 9) applied, the total grand premium is only BDT 69 per year."
    },
    {
      q: "Is natural death or disease covered?",
      a: "No, this policy is strictly a personal accident cover. It only provides compensation for death or disablement resulting directly from accidental bodily injury. Natural deaths, illnesses, or infections are excluded."
    },
    {
      q: "How do I submit a claim under this policy?",
      a: "To file a claim, snapshot clear photos of all required documents (medical reports, doctor declarations, police FIR, or death certificates) and send them along with your Name, Mobile, and Policy Number via WhatsApp to +8801617666888."
    },
    {
      q: "What is the policy tenure?",
      a: "The policy tenure is 1 year and can be renewed annually to maintain protection."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      <main className="relative">
        
        {/* Neon decorative background blobs */}
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />
        <div className="absolute top-[40%] right-10 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-linear-to-b from-sky-50 to-slate-50 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Info Column */}
              <div className="lg:col-span-7 space-y-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-green transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Home</span>
                </Link>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-brand-green">
                  <Shield className="w-3.5 h-3.5" />
                  <span>Personal Accident Cover Portal</span>
                </div>
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-blue tracking-tight leading-[1.1]">
                  People&apos;s Personal <br />
                  <span className="gradient-text-blue-green font-extrabold">Accident Protection</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
                  Protect yourself against the financial impacts of unexpected accidents. Green Delta&apos;s PPA plan offers BDT 100,000 of comprehensive accidental protection at an ultra-low premium rate of only BDT 69 per year.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#calculator"
                    className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-brand-green/10 hover:scale-[1.01] transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span>View Pricing & Buy</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#claims"
                    className="bg-white border border-slate-200 hover:border-brand-green/30 text-slate-700 hover:text-brand-green font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300"
                  >
                    Claims Guide
                  </a>
                </div>
              </div>

              {/* Right Illustration Column */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-brand-green/5 to-transparent rounded-full pointer-events-none" />
                  
                  {/* PPA Vector Illustration */}
                  <div className="relative w-full h-44 bg-linear-to-tr from-sky-50 to-emerald-50/50 rounded-2xl flex items-center justify-center border border-slate-50">
                    <svg viewBox="0 0 200 120" fill="none" className="w-44 h-28 text-brand-blue" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="60" r="40" fill="#e0f2fe" />
                      <circle cx="100" cy="60" r="30" fill="#d1fae5" />
                      {/* Shield representation */}
                      <path d="M100 35l18 6v14c0 10-7 20-18 24-11-4-18-14-18-24V41l18-6z" fill="#059669" className="opacity-90" />
                      <path d="M95 54l3 3 7-7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-center font-display font-black text-base text-brand-blue">
                      Personal Accident Protection
                    </h4>
                    <p className="text-[11px] text-slate-450 text-center leading-relaxed">
                      Securing up to BDT 100,000 for permanent absolute disablement and death resulting from accidental bodily injury.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Pricing Matrix Section */}
        <section id="calculator" className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Package Rate</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
                PPA Annual Premium <br />
                <span className="gradient-text-blue-green font-extrabold">Pricing Breakdown</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                Enjoy fixed, budget-friendly accidental security with straightforward annual premium values.
              </p>
            </div>

            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
              
              {/* Product Features Summary */}
              <div className="lg:col-span-7 p-8 sm:p-10 bg-slate-50/50 rounded-3xl border border-slate-100 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-brand-green tracking-wider bg-emerald-500/10 px-3.5 py-1.5 rounded-full">
                      PPA Policy
                    </span>
                    <span className="text-xs font-bold text-slate-455">Term: 1 Year (Renewable)</span>
                  </div>

                  <div>
                    <h3 className="font-display font-black text-2xl text-brand-blue">
                      People&apos;s Personal Accident
                    </h3>
                    <p className="text-xs text-brand-green font-bold uppercase tracking-wider mt-1">
                      BDT 100,000 Maximum Cover Limit
                    </p>
                    <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mt-3">
                      Green Delta PPA provides immediate compensation payouts for accidental death and permanent disablement. Protect yourself for less than BDT 6 per month.
                    </p>
                  </div>

                  <div className="pt-6 border-t border-slate-200/80 space-y-3">
                    <h4 className="font-display font-bold text-sm text-brand-blue">Eligibility Requirements</h4>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <span>Insured Age Limit: <strong>16 to 65 years</strong></span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-slate-600">
                      <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                      <span>Valid for any Bangladeshi citizen</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-emerald-500/5 border border-emerald-500/10 rounded-2xl flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-green flex-shrink-0" />
                  <span className="text-xs text-slate-600 font-medium leading-relaxed">
                    Coverage starts immediately as soon as premium payment is confirmed.
                  </span>
                </div>
              </div>

              {/* Premium Breakdown Receipt Card */}
              <div className="lg:col-span-5 p-8 bg-white rounded-3xl border border-slate-150 shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[350px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-brand-green/10 to-transparent rounded-full pointer-events-none" />
                
                <div className="space-y-6">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Premium Invoice</span>
                  
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Base Net Premium:</span>
                      <span className="font-bold text-slate-800">BDT {basePremium.toLocaleString()}.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">VAT (15%):</span>
                      <span className="font-bold text-slate-800">BDT {vat.toLocaleString()}.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Stamp Fee:</span>
                      <span className="font-bold text-slate-800">BDT 0.00</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex justify-between items-baseline">
                      <span className="text-xs font-bold text-slate-700">Grand Total Premium:</span>
                      <div className="text-right">
                        <span className="text-3xl font-black text-brand-blue">BDT {grandTotal.toLocaleString()}.00</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">including 15% VAT</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <h4 className="text-xs font-bold text-brand-blue uppercase tracking-wider">Delivery and Access</h4>
                    <ul className="space-y-2 text-[11px] text-slate-500">
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                        <span>Instant E-Policy sent within 10 minutes</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-green" />
                        <span>3-7 days doorstep physical copy shipping</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={handleBuyPolicy}
                    className="w-full text-center text-xs font-bold bg-brand-green hover:bg-brand-green-hover text-white py-3.5 px-4 rounded-xl shadow-lg shadow-brand-green/10 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                  >
                    Buy PPA Policy Online
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Dynamic Compensation and Exclusions Tabs */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Guidelines</p>
              <h2 className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight">
                Policy Benefits <span className="gradient-text-blue-green font-extrabold">& Exclusions</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              {/* Tabs list */}
              <div className="flex border-b border-slate-100 bg-slate-50 p-2">
                <button
                  onClick={() => setActiveTab("benefits")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "benefits"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  Coverages & Benefits
                </button>
                <button
                  onClick={() => setActiveTab("terms")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "terms"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  Exclusions & Limitations
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-8">
                {activeTab === "benefits" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-brand-blue flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-brand-green" />
                      Scope of Compensation Coverage
                    </h3>
                    <div className="space-y-4">
                      {benefits.map((row, i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-start gap-4">
                          <div className="space-y-1">
                            <h4 className="text-xs font-bold text-brand-blue">{row.label}</h4>
                            <p className="text-[11px] text-slate-500 leading-relaxed">{row.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "terms" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-red-650 flex items-center gap-2 mb-4">
                      <ShieldAlert className="w-5 h-5 text-red-500" />
                      Exclusions & Limitations
                    </h3>
                    <p className="text-[11px] text-slate-450 leading-relaxed mb-4">
                      Anything that falls outside the defined accidental coverage section is excluded. Key specific exclusions include:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-500">
                      {exclusions.map((exc, i) => (
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
                  <span className="gradient-text-blue-green font-extrabold">Hotline Guide</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Green Delta makes healthcare claims easy. Snapshot and submit clear photos of required documents to the claims hotline for rapid evaluation and hassle-free settlements.
                </p>
                <div className="p-4 bg-brand-green/5 border border-brand-green/10 rounded-xl flex items-start gap-2.5">
                  <PhoneCall className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-brand-blue block">Submit claims via WhatsApp only:</span>
                    <span className="text-sm font-bold text-brand-green">+8801617666888</span>
                  </div>
                </div>
              </div>

              {/* Required Documents Checklist */}
              <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-150 relative">
                <h3 className="font-display font-bold text-base text-brand-blue mb-8">
                  Checklist of Submission Documents
                </h3>
                <div className="space-y-6 relative border-l border-slate-200 pl-6 ml-2 text-xs">
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 bg-brand-green text-white w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs">
                      1
                    </span>
                    <h4 className="font-bold text-brand-blue">Duly Completed Claim form</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Download and fill out the official PPA claim form with policyholder credentials.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 bg-brand-green text-white w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs">
                      2
                    </span>
                    <h4 className="font-bold text-brand-blue">Proof of Identity & Details</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Submit the covered person&apos;s NID card or Passport copy along with registered mobile number and policy number.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 bg-brand-green text-white w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs">
                      3
                    </span>
                    <h4 className="font-bold text-brand-blue">Medical Papers and Receipts</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Provide doctor prescriptions, discharge certificates, hospital bill receipts, and pharmaceutical receipts.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 bg-brand-green text-white w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs">
                      4
                    </span>
                    <h4 className="font-bold text-brand-blue">Police FIR or Accident Reports</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Provide a copy of the official police report (FIR) or general diary documenting the accident details.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* FAQs Section */}
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
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden relative">
            
            {/* Modal header */}
            <div className="p-6 bg-brand-blue text-white flex items-center justify-between">
              <div>
                <h3 className="font-display font-bold text-base">E-Checkout Portal</h3>
                <p className="text-[10px] text-slate-300 mt-0.5">Green Delta PPA Protection Portal</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal body */}
            <div className="p-6 space-y-6">
              {!checkoutComplete ? (
                <form onSubmit={handleCheckoutSubmit} className="space-y-4">
                  
                  {/* Selected Plan overview */}
                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-between text-xs">
                    <div>
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">Selected Sum Insured:</span>
                      <span className="font-bold text-brand-blue text-sm">BDT 100,000</span>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] text-slate-400 block font-bold uppercase">Annual Premium:</span>
                      <span className="font-black text-brand-green text-sm">BDT {grandTotal}</span>
                    </div>
                  </div>

                  {/* Form inputs */}
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Insured Full Name</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Imran Mehedi"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:outline-hidden focus:border-brand-green font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">NID Card Number</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. 19922615602500000"
                        value={nidNumber}
                        onChange={(e) => setNidNumber(e.target.value)}
                        className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:outline-hidden focus:border-brand-green font-medium"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Registered Mobile</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 01711223344"
                          value={mobileNumber}
                          onChange={(e) => setMobileNumber(e.target.value)}
                          className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:outline-hidden focus:border-brand-green font-medium"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Nominee Mobile</label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. 01911223344"
                          value={nomineeMobile}
                          onChange={(e) => setNomineeMobile(e.target.value)}
                          className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:outline-hidden focus:border-brand-green font-medium"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full text-center text-xs font-bold bg-brand-green hover:bg-brand-green-hover text-white py-3.5 px-4 rounded-xl shadow-md shadow-brand-green/20 transition-all duration-300 cursor-pointer mt-4"
                  >
                    Proceed to Simulated Payment
                  </button>

                </form>
              ) : (
                <div className="text-center py-6 space-y-6">
                  
                  {/* Verified badge */}
                  <div className="w-16 h-16 bg-emerald-100 text-brand-green rounded-full flex items-center justify-center mx-auto shadow-md">
                    <Check className="w-8 h-8 stroke-[3]" />
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-display font-black text-xl text-brand-blue">Simulated Purchase Successful!</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto">
                      Thank you for choosing Green Delta. Your transaction has processed successfully. An email with policy documentation is on its way.
                    </p>
                  </div>

                  {/* Mock Invoice details */}
                  <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl text-left space-y-2.5 max-w-sm mx-auto text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Transaction ID:</span>
                      <span className="font-bold text-slate-800">{transactionId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Policyholder Name:</span>
                      <span className="font-bold text-slate-800">{fullName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Policy Capital Sum Insured:</span>
                      <span className="font-bold text-slate-800">BDT 100,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Base Net Premium:</span>
                      <span className="font-bold text-slate-800">BDT {basePremium.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">VAT (15%):</span>
                      <span className="font-bold text-slate-800">BDT {vat.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between pt-1.5 border-t border-slate-200">
                      <span className="text-slate-500 font-bold">Amount Paid:</span>
                      <span className="font-bold text-brand-green">BDT {grandTotal.toLocaleString()}</span>
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      Close Checkout
                    </button>
                  </div>

                </div>
              )}
            </div>

          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
