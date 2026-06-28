"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import {
  Venus,
  ShieldCheck,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Check,
  X,
  FileText
} from "lucide-react";

export default function NibeditaInsurancePage() {
  const [sumInsured, setSumInsured] = useState<number>(300000); // Default BDT 300,000
  const [activeTab, setActiveTab] = useState<"compensation" | "limitations" | "exclusions">("compensation");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Simulation Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Premium Calculations based on Selected Sum Insured
  const netPremium = Math.round(sumInsured * 0.005);
  const vat = Math.round(netPremium * 0.15);
  const stamp = Math.round((sumInsured / 100000) * 5);
  const grandTotal = netPremium + vat + stamp;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSumInsured(Number(e.target.value));
  };

  const handleBuyPolicy = () => {
    setIsModalOpen(true);
  };

  // Compensation Schedule Data
  const compensationSchedule = [
    { label: "Accidental Death (standard, insect bites, snake/animal bites, childbirth or caesarean operation, civil commotion/riots)", value: "100% Capital Sum Insured" },
    { label: "Permanent total loss of sight of both eyes / Total loss of use of two limbs", value: "100% Capital Sum Insured" },
    { label: "Loss or damage to household goods/personal effects due to fire, lightning, storms, floods, typhoons, cyclones, earthquakes", value: "25% of Capital Sum Insured" },
    { label: "Trauma Allowance (in case of Rape, Road bully, robbery, acid victim)", value: "Trauma Recovery Allowance" },
    { label: "Total loss or permanent total loss of use of right arm", value: "75% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of thigh / left arm", value: "60% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of right forearm", value: "65% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of left forearm", value: "55% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of right hand / leg at or below knee / sight of one eye / total deafness in both ears", value: "50% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of left hand", value: "40% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of thumb on right hand", value: "25% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of thumb on left hand / index finger on right hand", value: "20% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of index finger on left hand / deafness in one ear", value: "15% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of middle finger on right hand", value: "12% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of middle finger on left hand / third (ring) finger on right hand", value: "10% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of third (ring) finger on left hand / little finger on right hand", value: "8% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of little finger on left hand", value: "6% of Sum Insured" },
    { label: "Total loss or permanent total loss of use of big toe", value: "5% of Sum Insured" }
  ];

  // Exclusions List
  const exclusions = [
    "Pre-existing physical or mental disability.",
    "Death, injury, or disablement arising whilst under the influence of alcohol, liquor, or narcotics.",
    "Suicide, attempted suicide, or intentional self-inflicted injuries.",
    "Death or injury caused directly or indirectly by insanity.",
    "War, invasion, foreign army hostilities (whether declared or not), and civil war.",
    "Rebellion, revolution, insurrection, mutiny, lockout, or usurped power.",
    "Destruction or damage by order of any government or public authority.",
    "Nuclear reaction, nuclear radiation, or radioactive contamination."
  ];

  // Limitations List
  const limitations = [
    "Available exclusively for all sections of women in the age group of 18-65 years.",
    "1-year coverage duration starting from the date of premium payment.",
    "Applies to sum insured starting from a minimum BDT 100,000 up to BDT 1,000,000 (in BDT 100k increments).",
    "Net premium rate fixed at 0.50% per annum.",
    "Claims can be filed individually or as part of a registered corporate group."
  ];

  // FAQs
  const faqs = [
    {
      q: "What is 'Nibedita' Insurance?",
      a: "Nibedita is an exclusive personal accident insurance scheme designed specifically to provide economic security and financial independence to women, irrespective of their income, occupation, or location (urban/rural)."
    },
    {
      q: "Who is eligible to buy this policy?",
      a: "All women in the age group of 18 to 65 years are eligible to purchase this policy."
    },
    {
      q: "Why do we need an insurance product exclusively for women?",
      a: "Women are exposed to unique risks, including social challenges and specific healthcare events. This policy features special extensions like trauma allowances for victims of violence (rape, road bullying, acid violence) and compensation for death during childbirth, which standard policies do not cover."
    },
    {
      q: "How does the premium slider work?",
      a: "You can drag the selector to choose a Sum Insured limit between BDT 100,000 and BDT 1,000,000. The net premium rate is calculated at 0.50% per annum, with 15% VAT and BDT 5 stamp fee per 100k included automatically in the total."
    },
    {
      q: "What documents are required to file a claim?",
      a: "For accidental death/disability: Completed claim form, medical reports, doctor declaration, post-mortem report, death certificate, and succession certificate. For Rape/Road Bully/Acid victim trauma: Doctors report/viscera report and a copy of the police FIR."
    },
    {
      q: "Can I buy this policy if I am under 18?",
      a: "No, this policy is strictly available for women between 18 and 65 years of age."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      <main className="relative">
        
        {/* Neon decorative background blobs */}
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-pink-500/5 blur-3xl pointer-events-none" />
        <div className="absolute top-[40%] right-10 w-96 h-96 rounded-full bg-purple-500/5 blur-3xl pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-linear-to-b from-pink-50 to-slate-50 border-b border-slate-100">
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
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-pink-500/10 border border-pink-500/20 rounded-full text-xs font-bold text-pink-650">
                  <Venus className="w-3.5 h-3.5" />
                  <span>Nibedita Women Special Cover</span>
                </div>
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-blue tracking-tight leading-[1.1]">
                  Nibedita Women <br />
                  <span className="gradient-text-blue-green font-extrabold">Economic Security</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
                  A personalized protection package offering financial independence and support for women. Coverage includes accidental protection, household safety damage, childbirth risks, and trauma allowances.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#calculator"
                    className="bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-lg shadow-brand-green/10 hover:scale-[1.01] transition-all duration-300 flex items-center gap-1.5"
                  >
                    <span>Premium Estimator</span>
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
                  <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-pink-500/5 to-transparent rounded-full pointer-events-none" />
                  
                  {/* Decorative Women Illustration SVG */}
                  <div className="relative w-full h-44 bg-linear-to-tr from-pink-50 to-purple-50/50 rounded-2xl flex items-center justify-center border border-slate-50">
                    <svg viewBox="0 0 200 120" fill="none" className="w-44 h-28 text-brand-blue" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="60" r="40" fill="#fdf2f8" />
                      <circle cx="100" cy="60" r="30" fill="#f3e8ff" />
                      {/* Female sign */}
                      <path d="M100 25a18 18 0 100 36 18 18 0 000-36zm0 41v14M92 73h16" stroke="#db2777" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="100" cy="43" r="5" fill="#db2777" />
                    </svg>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-center font-display font-black text-base text-brand-blue">
                      Designed for Independence
                    </h4>
                    <p className="text-[11px] text-slate-450 text-center leading-relaxed">
                      Ensuring financial stability for women in both urban and rural regions across Bangladesh. Net premiums start from just BDT 580/year.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Premium Estimator Calculator */}
        <section id="calculator" className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Calculator</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
                Nibedita Premium <br />
                <span className="gradient-text-blue-green font-extrabold">Slider Estimator</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                Drag the slider to adjust your desired Maximum Coverage Limit (Sum Insured). Rates are set at 0.50% per annum.
              </p>
            </div>

            {/* Three Packages Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { name: "NIBEDITA ECO", coverage: 100000, premium: 500, vat: 75, stamp: 5, total: 580 },
                { name: "NIBEDITA REGULAR", coverage: 300000, premium: 1500, vat: 225, stamp: 15, total: 1740 },
                { name: "NIBEDITA PLUS", coverage: 500000, premium: 2500, vat: 375, stamp: 25, total: 2900, bestValue: true }
              ].map((pkg, i) => {
                const isSelected = sumInsured === pkg.coverage;
                return (
                  <div
                    key={i}
                    onClick={() => setSumInsured(pkg.coverage)}
                    className={`rounded-3xl border-2 p-6 flex flex-col justify-between relative transition-all duration-300 cursor-pointer hover:shadow-lg ${
                      isSelected
                        ? "border-pink-500 bg-pink-50/20 shadow-pink-500/5 scale-[1.02]"
                        : "border-slate-100 bg-white hover:border-slate-200"
                    }`}
                  >
                    {pkg.bestValue && (
                      <div className="absolute top-0 right-0 bg-pink-500 text-white text-[9px] font-bold tracking-widest uppercase py-1 px-4 rounded-bl-xl">
                        Popular
                      </div>
                    )}
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? "border-pink-500 bg-pink-500 text-white" : "border-slate-300 bg-white"
                        }`}>
                          {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                        </span>
                        <span className="text-xs font-black text-slate-400 block uppercase tracking-wider">{pkg.name}</span>
                      </div>
                      
                      <div className="space-y-1">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Maximum Coverage Limit</span>
                        <span className="text-2xl font-black text-brand-blue">BDT {pkg.coverage.toLocaleString()}</span>
                      </div>

                      <div className="space-y-2 pt-4 border-t border-slate-100 text-xs">
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Base Net Premium:</span>
                          <span className="font-bold text-slate-800">BDT {pkg.premium.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">VAT (15%):</span>
                          <span className="font-bold text-slate-800">BDT {pkg.vat.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-500">Stamp:</span>
                          <span className="font-bold text-slate-800">BDT {pkg.stamp.toLocaleString()}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-baseline">
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Grand Total:</span>
                      <div>
                        <span className="text-lg font-black text-brand-blue">BDT {pkg.total.toLocaleString()}</span>
                        <span className="text-[9px] text-slate-400">/year</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom slider heading */}
            <div className="text-center max-w-xl mx-auto mb-10">
              <span className="text-xs font-bold text-slate-400 block uppercase tracking-widest">Or Configure a Custom Limit</span>
              <div className="h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full mt-3" />
            </div>

            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Slider Input Column */}
              <div className="lg:col-span-7 p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-8">
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Choose Maximum Coverage Limit (Sum Insured)</span>
                    <div>
                      <span className="text-2xl font-black text-brand-blue">BDT {sumInsured.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  {/* Slider Control */}
                  <div className="pt-4">
                    <input
                      type="range"
                      min="100000"
                      max="1000000"
                      step="100000"
                      value={sumInsured}
                      onChange={handleSliderChange}
                      className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-2">
                      <span>Min: 1 Lakh</span>
                      <span>Max: 10 Lakh</span>
                    </div>
                  </div>
                </div>

                {/* Key specs row */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-200/80 text-center text-xs">
                  <div className="bg-white p-3 rounded-2xl border border-slate-100">
                    <span className="text-slate-400 block mb-0.5">Premium Rate</span>
                    <span className="font-bold text-slate-700">@0.50% p.a.</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100">
                    <span className="text-slate-400 block mb-0.5">Policy Term</span>
                    <span className="font-bold text-slate-700">1 Year</span>
                  </div>
                  <div className="bg-white p-3 rounded-2xl border border-slate-100">
                    <span className="text-slate-400 block mb-0.5">Eligibility</span>
                    <span className="font-bold text-slate-700">18 - 65 Yrs</span>
                  </div>
                </div>
              </div>

              {/* Premium Breakdown Receipt Column */}
              <div className="lg:col-span-5 p-8 bg-white rounded-3xl border border-slate-150 shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[350px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-pink-500/10 to-transparent rounded-full pointer-events-none" />
                
                <div className="space-y-6">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Net Premium Invoice</span>
                  
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Net Premium (0.50%):</span>
                      <span className="font-bold text-slate-800">BDT {netPremium.toLocaleString()}.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">VAT (15%):</span>
                      <span className="font-bold text-slate-800">BDT {vat.toLocaleString()}.00</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Revenue Stamp:</span>
                      <span className="font-bold text-slate-800">BDT {stamp.toLocaleString()}.00</span>
                    </div>
                    <div className="pt-4 border-t border-slate-100 flex justify-between items-baseline">
                      <span className="text-xs font-bold text-slate-700">Grand Total Premium:</span>
                      <div className="text-right">
                        <span className="text-3xl font-black text-brand-blue">BDT {grandTotal.toLocaleString()}.00</span>
                        <span className="text-[10px] text-slate-400 block mt-0.5">including all taxes</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={handleBuyPolicy}
                    className="w-full text-center text-xs font-bold bg-brand-green hover:bg-brand-green-hover text-white py-3.5 px-4 rounded-xl shadow-lg shadow-brand-green/10 hover:scale-[1.01] transition-all duration-300 cursor-pointer"
                  >
                    Buy BDT {sumInsured.toLocaleString()} Policy Online
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
                Policy Schedule <span className="gradient-text-blue-green font-extrabold">& Exclusions</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              {/* Tabs list */}
              <div className="flex border-b border-slate-100 bg-slate-50 p-2">
                <button
                  onClick={() => setActiveTab("compensation")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "compensation"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  Compensation Schedule
                </button>
                <button
                  onClick={() => setActiveTab("limitations")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "limitations"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  Limitations & Terms
                </button>
                <button
                  onClick={() => setActiveTab("exclusions")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "exclusions"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  Key Exclusions
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-8">
                {activeTab === "compensation" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-brand-blue flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-brand-green" />
                      Scope of Compensation Coverage
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="border-b border-slate-150 text-slate-400 font-extrabold uppercase">
                            <th className="pb-3 pr-4">Scope of Cover</th>
                            <th className="pb-3 pl-4 text-right">Compensation Rate</th>
                          </tr>
                        </thead>
                        <tbody>
                          {compensationSchedule.map((row, i) => (
                            <tr key={i} className="border-b border-slate-50 last:border-b-0 hover:bg-slate-50/50 transition-colors">
                              <td className="py-3.5 pr-4 text-slate-700 font-medium leading-relaxed">{row.label}</td>
                              <td className="py-3.5 pl-4 text-right font-bold text-slate-800 whitespace-nowrap">{row.value}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {activeTab === "limitations" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-brand-blue flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-brand-green" />
                      Limitations & Policy Parameters
                    </h3>
                    <ul className="space-y-4 text-xs text-slate-600">
                      {limitations.map((lim, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <Check className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span>{lim}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeTab === "exclusions" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-red-650 flex items-center gap-2 mb-4">
                      <ShieldAlert className="w-5 h-5 text-red-500" />
                      What is NOT Covered (General Exclusions)
                    </h3>
                    <p className="text-[11px] text-slate-400 italic mb-2">
                      No compensation shall be paid under this policy for claims arising from:
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
                  Seamless Claims <br />
                  <span className="gradient-text-blue-green font-extrabold">Verification Process</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Submit claim documents directly to the claims department for evaluation. Providing exact reports helps ensure quick and hassle-free settlements.
                </p>
                <div className="p-4 bg-brand-green/5 border border-brand-green/10 rounded-xl flex items-start gap-2.5">
                  <FileText className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-brand-blue block">Submit claims via any official:</span>
                    <span className="text-sm font-bold text-brand-green">Green Delta Insurance Branch</span>
                  </div>
                </div>
              </div>

              {/* Required Documents Checklist */}
              <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-150">
                <h3 className="font-display font-bold text-base text-brand-blue mb-6">
                  Required Claims Paperwork Checklist
                </h3>
                <div className="space-y-5 text-xs text-slate-600">
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 space-y-2">
                    <h4 className="font-bold text-brand-blue">1. Basic Documents (All Claims):</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      Duly completed and signed claim form accompanied by NID or identification records.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 space-y-2">
                    <h4 className="font-bold text-brand-blue">2. Accidental Death or Bodily Injury:</h4>
                    <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-500 leading-relaxed">
                      <li>Detailed medical papers and diagnostic reports.</li>
                      <li>Registered doctor&apos;s declaration and certificate.</li>
                      <li>Post-mortem report and official Death Certificate (in case of death).</li>
                      <li>Succession Certificate.</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded-2xl border border-slate-100 space-y-2">
                    <h4 className="font-bold text-brand-blue">3. Trauma Victims (Rape / Road Bully / Acid / Robbery):</h4>
                    <ul className="list-disc pl-4 space-y-1 text-[11px] text-slate-500 leading-relaxed">
                      <li>Doctors certificate / medical evaluation report.</li>
                      <li>Viscera report (if applicable).</li>
                      <li>Official Police report (copy of FIR / General Diary).</li>
                    </ul>
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
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        planName="Nibedita Protection Plan"
        premiumAmount={netPremium + stamp}
      />

      <Footer />
    </div>
  );
}
