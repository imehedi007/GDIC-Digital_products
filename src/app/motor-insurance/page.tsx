"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import {
  Car,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Check,
  PhoneCall,
  Mail,
  Zap
} from "lucide-react";

export default function MotorInsurancePage() {
  const [vehicleType, setVehicleType] = useState<"car" | "bike" | "commercial">("car");
  const [marketValue, setMarketValue] = useState<number>(1500000); // Default BDT 1,500,000
  const [mfgYear, setMfgYear] = useState<number>(2024);
  const [ncb, setNcb] = useState<number>(0.2); // Default 20% No Claim Bonus
  const [activeTab, setActiveTab] = useState<"coverages" | "ncb">("coverages");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Simulation Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Motor Tariff Premium calculations
  const baseRate = vehicleType === "car" ? 0.015 : vehicleType === "bike" ? 0.02 : 0.025;
  const depreciationFactor = Math.max(0, (2026 - mfgYear) * 0.02);
  const rawPremium = marketValue * baseRate * (1 - depreciationFactor);
  const ncbDiscount = rawPremium * ncb;
  const thirdPartyCover = 500;
  
  const netPremium = Math.round(Math.max(1000, rawPremium - ncbDiscount + thirdPartyCover));
  const vat = Math.round(netPremium * 0.15);
  const stamp = 50;
  const grandTotal = netPremium + vat + stamp;

  const handleBuyPolicy = () => {
    setIsModalOpen(true);
  };

  // Coverages list
  const coverages = [
    { label: "Own Damage / Accessories Damage", desc: "Coverage against physical loss/damage to the vehicle and fitted accessories from accidental collision." },
    { label: "Fire & Explosion", desc: "Reimbursement for damages caused by fire, internal explosion, self-ignition, or lightning strikes." },
    { label: "Burglary & Theft", desc: "Complete vehicle replacement cover in the event of burglary, housebreaking, or malicious theft." },
    { label: "Riot, Strike & Malicious Act", desc: "Covers repair costs resulting from civil strikes, violent riots, or malicious vandalism." },
    { label: "Earthquake & Calamities", desc: "Comprehensive cover against natural disasters like earthquakes (fire & shock), cyclonic storms, and floods." },
    { label: "Transit Damages", desc: "Covers accidental damages sustained while the vehicle is in transit by road, rail, inland waterway, or elevator." },
    { label: "Third Party Act Liability", desc: "Covers legal liabilities for third-party accidental death, bodily injury, or external property damages." }
  ];

  // NCB rules
  const ncbRules = [
    "No Claim Bonus (NCB) is a discount on the own damage premium for claim-free years.",
    "Entitled steps: 1 year claim-free = 20% off, 2 consecutive years = 30% off, 3 consecutive years = 40% off, 4+ consecutive years = 50% off.",
    "Calculated as per the official Motor Tariff Bangladesh guidelines.",
    "If a claim is filed during the policy term, the NCB resets to 0% for the next renewal year."
  ];

  // FAQs
  const faqs = [
    {
      q: "What does Green Delta Comprehensive Motor Insurance cover?",
      a: "Comprehensive insurance covers both third-party legal liability and physical damages to your own vehicle resulting from accidents, fire, theft, malicious acts, transit, or natural disasters like floods and earthquakes."
    },
    {
      q: "What is a 'No Claim Bonus' (NCB) and how do I select it?",
      a: "NCB is a reward discount on renewal premiums if you file zero claims in the previous year. Select your percentage (20% to 50%) based on your previous policy document to reduce your calculated rate."
    },
    {
      q: "What details do I need to intimate for claims?",
      a: "In the event of an accident, call 16457 immediately. Or email claims@green-delta.com with the Accident Date, Time, Place, and Current Car Location, along with registration, tax token, and fitness certificates."
    },
    {
      q: "How is the vehicle premium rate calculated?",
      a: "Calculations are aligned with the Motor Tariff Bangladesh. Rates start at 1.5% for Private Cars, 2.0% for Motorbikes, and 2.5% for Commercial Vehicles, adjusted for vehicle value, manufacture year depreciation, and NCB discounts."
    },
    {
      q: "Is third-party act liability included?",
      a: "Yes, all our comprehensive motor policies automatically include BDT 500 third-party act liability coverage, securing you against accidental third-party body injury, death, or property damage."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      <Navbar />

      <main className="relative">
        
        {/* Neon decorative background blobs */}
        <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-blue-500/5 blur-3xl pointer-events-none" />
        <div className="absolute top-[40%] right-10 w-96 h-96 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

        {/* Hero Section */}
        <section className="relative pt-32 pb-16 bg-linear-to-b from-blue-50 to-slate-50 border-b border-slate-100">
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
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-brand-blue">
                  <Car className="w-3.5 h-3.5" />
                  <span>Motor Insurance Portal</span>
                </div>
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-blue tracking-tight leading-[1.1]">
                  Comprehensive <br />
                  <span className="gradient-text-blue-green font-extrabold">Motor Insurance</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
                  Safeguard your vehicle against collisions, theft, third-party act liabilities, and natural calamities. Calibrated dynamically to the official Motor Tariff Bangladesh guidelines.
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
                    href="#partners"
                    className="bg-white border border-slate-200 hover:border-brand-green/30 text-slate-700 hover:text-brand-green font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300"
                  >
                    Partner Discounts
                  </a>
                </div>
              </div>

              {/* Right Illustration Column */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-blue-500/5 to-transparent rounded-full pointer-events-none" />
                  
                  {/* Vehicle SVG Vector Illustration */}
                  <div className="relative w-full h-44 bg-linear-to-tr from-blue-50 to-emerald-50/50 rounded-2xl flex items-center justify-center border border-slate-50">
                    <svg viewBox="0 0 200 120" fill="none" className="w-44 h-28 text-brand-blue" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="60" r="40" fill="#e0f2fe" />
                      <circle cx="100" cy="60" r="30" fill="#d1fae5" />
                      {/* Car Body representation */}
                      <path d="M50 75h100v10H50V75zm15-18l10-15h50l10 15H65z" fill="#0369a1" className="opacity-90" />
                      <circle cx="75" cy="85" r="10" fill="#1e293b" />
                      <circle cx="125" cy="85" r="10" fill="#1e293b" />
                    </svg>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-center font-display font-black text-base text-brand-blue">
                      No Claim Bonus Rewards
                    </h4>
                    <p className="text-[11px] text-slate-450 text-center leading-relaxed">
                      Entitled to up to 50% premium discount on consecutive years of claim-free driving in Bangladesh.
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
                Motor Insurance Premium <br />
                <span className="gradient-text-blue-green font-extrabold">Tariff Estimator</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                Estimate your exact first-party premium according to vehicle classification, age, and No Claim Bonus (NCB) records.
              </p>
            </div>

            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Slider Input Column */}
              <div className="lg:col-span-7 p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-8">
                
                {/* Vehicle Type selector */}
                <div className="space-y-3">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">1. Select Vehicle Type</label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: "car", label: "Private Car", desc: "Tariff: 1.5% base" },
                      { id: "bike", label: "Motorbike", desc: "Tariff: 2.0% base" },
                      { id: "commercial", label: "Commercial Vehicle", desc: "Tariff: 2.5% base" }
                    ].map((type) => (
                      <button
                        key={type.id}
                        onClick={() => setVehicleType(type.id as "car" | "bike" | "commercial")}
                        className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                          vehicleType === type.id
                            ? "bg-white border-brand-green shadow-xs scale-[1.01]"
                            : "bg-white/50 border-slate-100 hover:border-slate-200"
                        }`}
                      >
                        <span className="text-xs font-bold text-brand-blue block">{type.label}</span>
                        <span className="text-[10px] text-slate-400 mt-1 block font-medium">{type.desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Market Value Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">2. Vehicle Market Value</span>
                    <div>
                      <span className="text-xl font-black text-brand-blue">BDT {marketValue.toLocaleString()}</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="5000000"
                    step="50000"
                    value={marketValue}
                    onChange={(e) => setMarketValue(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-1">
                    <span>BDT 50K</span>
                    <span>Max: BDT 50 Lakh</span>
                  </div>
                </div>

                {/* Grid for Year and NCB */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Manufacture Year */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">3. Manufacture Year</label>
                    <select
                      value={mfgYear}
                      onChange={(e) => setMfgYear(Number(e.target.value))}
                      className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-hidden focus:border-brand-green font-semibold"
                    >
                      {Array.from({ length: 17 }, (_, idx) => 2026 - idx).map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>

                  {/* No Claim Bonus selection */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">4. No Claim Bonus (NCB)</label>
                    <select
                      value={ncb}
                      onChange={(e) => setNcb(Number(e.target.value))}
                      className="w-full text-xs p-3.5 bg-white border border-slate-200 rounded-2xl focus:outline-hidden focus:border-brand-green font-semibold"
                    >
                      <option value={0}>0% NCB discount</option>
                      <option value={0.2}>1 Year (20% discount)</option>
                      <option value={0.3}>2 Years (30% discount)</option>
                      <option value={0.4}>3 Years (40% discount)</option>
                      <option value={0.5}>4+ Years (50% discount)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Premium Breakdown Receipt Column */}
              <div className="lg:col-span-5 p-8 bg-white rounded-3xl border border-slate-150 shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[380px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-blue-500/10 to-transparent rounded-full pointer-events-none" />
                
                <div className="space-y-6">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Estimated Premium Invoice</span>
                  
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Base Net Rate ({baseRate * 100}%):</span>
                      <span className="font-bold text-slate-800">BDT {Math.round(marketValue * baseRate).toLocaleString()}</span>
                    </div>
                    {depreciationFactor > 0 && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">Depreciation ({Math.round(depreciationFactor * 100)}%):</span>
                        <span className="font-bold text-slate-800">- BDT {Math.round(marketValue * baseRate * depreciationFactor).toLocaleString()}</span>
                      </div>
                    )}
                    {ncb > 0 && (
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">NCB Discount ({Math.round(ncb * 100)}%):</span>
                        <span className="font-bold text-slate-800">- BDT {Math.round(ncbDiscount).toLocaleString()}</span>
                      </div>
                    )}
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500 font-medium">Third Party Liability Cover:</span>
                      <span className="font-bold text-slate-800">BDT {thirdPartyCover}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-1 border-t border-slate-100">
                      <span className="text-slate-500">Net Premium:</span>
                      <span className="font-bold text-slate-800">BDT {netPremium.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">VAT (15%):</span>
                      <span className="font-bold text-slate-800">BDT {vat.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Revenue Stamp:</span>
                      <span className="font-bold text-slate-800">BDT {stamp.toLocaleString()}</span>
                    </div>
                    <div className="pt-4 border-t border-slate-205 flex justify-between items-baseline">
                      <span className="text-xs font-bold text-slate-700 font-display">Gross Premium:</span>
                      <div className="text-right">
                        <span className="text-3xl font-black text-brand-blue">BDT {grandTotal.toLocaleString()}</span>
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
                    Buy Motor Policy Online
                  </button>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Dynamic Coverages and NCB Tabs */}
        <section className="py-24 bg-slate-50 border-b border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Guidelines</p>
              <h2 className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight">
                Policy Coverages <span className="gradient-text-blue-green font-extrabold">& NCB Rules</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              {/* Tabs list */}
              <div className="flex border-b border-slate-100 bg-slate-50 p-2">
                <button
                  onClick={() => setActiveTab("coverages")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "coverages"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  Comprehensive Coverages
                </button>
                <button
                  onClick={() => setActiveTab("ncb")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "ncb"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  No Claim Bonus Guidelines
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-8">
                {activeTab === "coverages" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-brand-blue flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-brand-green" />
                      Comprehensive (1st Party) Cover Details
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {coverages.map((row, i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                          <h4 className="text-xs font-bold text-brand-blue">{row.label}</h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">{row.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "ncb" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-brand-blue flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-brand-green" />
                      Entitled NCB Reward Guidelines
                    </h3>
                    <ul className="space-y-4 text-xs text-slate-600">
                      {ncbRules.map((rule, i) => (
                        <li key={i} className="flex items-start gap-2.5 leading-relaxed">
                          <Check className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span>{rule}</span>
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
                  Rapid Claims <br />
                  <span className="gradient-text-blue-green font-extrabold">Verification Hotline</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Start the claim process instantly by calling our dedicated claim center hotline or emailing the details. A surveyor will assess the accidental damage to calculate proper payouts.
                </p>
                
                <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-3.5 text-xs text-slate-650">
                  <div className="flex items-start gap-2.5">
                    <PhoneCall className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold block text-slate-800">Phone Hotline:</span>
                      <span className="font-medium text-brand-green">16457</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold block text-slate-800">Email Intimation:</span>
                      <span className="font-medium text-brand-green">claims@green-delta.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Claims Submission Details */}
              <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-150">
                <h3 className="font-display font-bold text-base text-brand-blue mb-4">
                  Required Email Documents Checklist
                </h3>
                <p className="text-[11px] text-slate-400 mb-6 italic">
                  When intimating via email, please include the Accident Date, Time, Place, and Current Car Location, along with copies of:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="font-semibold text-slate-700">Repairing cost estimate</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="font-semibold text-slate-700">Vehicle Registration copy</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="font-semibold text-slate-700">Valid Tax Token copy</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="font-semibold text-slate-700">Fitness Certificate</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="font-semibold text-slate-700">Motor Certificate</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-100 flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                    <span className="font-semibold text-slate-700">General Diary (GD) copy</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Partner Offers Section */}
        <section id="partners" className="py-24 bg-white border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Exclusives</p>
              <h2 className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight">
                Motor Insurance <span className="gradient-text-blue-green font-extrabold">Partner Benefits</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                Avail special tracking device and car servicing deals with our verified tech and service partners.
              </p>
            </div>

            {/* Partners Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Finder */}
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-10 flex items-center">
                    <span className="font-display font-black text-xl text-brand-blue uppercase">Finder GPS</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-pink-500/10 rounded-full text-[10px] font-bold text-pink-650 uppercase">
                    30% off all products
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Get premium tracking hardware and subscriptions. Safeguard your vehicle with Finder GPS trackers.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 text-xs">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">How to avail?</span>
                  <span className="text-slate-650">Use promo code <strong className="text-brand-blue">FINDERGD</strong> at <a href="https://finder-lbs.com/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">finder-lbs.com</a></span>
                </div>
              </div>

              {/* Autonemo */}
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-10 flex items-center">
                    <span className="font-display font-black text-xl text-brand-blue uppercase">Autonemo GPS</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 rounded-full text-[10px] font-bold text-brand-blue uppercase">
                    20% Device Off + Free Months
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    2 months free subscription on 6-month payments, or 3 months free subscription on 12-month payments.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 text-xs">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">How to avail?</span>
                  <span className="text-slate-650">Use promo code <strong className="text-brand-blue">AUTONEMOGD</strong> at <a href="https://autonemogps.com/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">autonemogps.com</a></span>
                </div>
              </div>

              {/* Zantrik */}
              <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="h-10 flex items-center">
                    <span className="font-display font-black text-xl text-brand-blue uppercase">Zantrik Servicing</span>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 rounded-full text-[10px] font-bold text-brand-green uppercase">
                    40% Driver Off & Servicing discounts
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Enjoy servicing, detailing, and digital drivers at discounted rates via Zantrik app platforms.
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200/80 text-xs">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block mb-1">How to avail?</span>
                  <span className="text-slate-650">Use promo code <strong className="text-brand-blue">ZANTRIKGD</strong> at <a href="https://www.zantrik.com/" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:underline">zantrik.com</a></span>
                </div>
              </div>

            </div>

            {/* InsuMama App Promotion */}
            <div className="mt-16 p-8 bg-linear-to-r from-brand-blue to-brand-blue-dark rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-brand-green/20 to-transparent rounded-full pointer-events-none" />
              <div className="space-y-2 max-w-lg relative">
                <div className="flex items-center gap-1.5 text-xs font-bold text-brand-green">
                  <Zap className="w-3.5 h-3.5 fill-brand-green" />
                  <span>APP EXCLUSIVE OFFERS</span>
                </div>
                <h3 className="font-display font-black text-xl sm:text-2xl leading-snug">
                  Download the InsuMama App to access motor partner benefits instantly!
                </h3>
              </div>
              <div className="flex gap-3 flex-shrink-0 relative">
                <a href="https://lnkd.in/g3B4WEa" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.02] transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://green-delta.com/wp-content/themes/GDITheme/images/insumama-app-store-logo.png" alt="App Store" className="h-10 rounded-lg shadow-sm" />
                </a>
                <a href="https://lnkd.in/gEFQaE7" target="_blank" rel="noopener noreferrer" className="hover:scale-[1.02] transition-transform">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="https://green-delta.com/wp-content/themes/GDITheme/images/google-play-logo.png" alt="Google Play" className="h-10 rounded-lg shadow-sm" />
                </a>
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
        planName={`Comprehensive Motor Cover (${vehicleType.toUpperCase()} - ${Math.round(ncb * 100)}% NCB)`}
        premiumAmount={netPremium}
      />

      <Footer />
    </div>
  );
}
