"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutModal from "@/components/CheckoutModal";
import {
  Globe,
  ShieldCheck,
  ShieldAlert,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Check,
  X,
  FileText,
  PhoneCall,
  Mail
} from "lucide-react";

export default function TravelInsurancePage() {
  const [selectedCountries, setSelectedCountries] = useState<string[]>(["USA", "Canada", "Germany"]);
  const [duration, setDuration] = useState<number>(14); // Default to 14 days to match the user screenshot
  const [age, setAge] = useState<number>(26); // Default to 26 years to match the user screenshot
  const [activeTab, setActiveTab] = useState<"benefits" | "exclusions">("benefits");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

  const countriesList = [
    { name: "USA", zone: "worldwide" },
    { name: "Canada", zone: "worldwide" },
    { name: "Germany", zone: "schengen" },
    { name: "France", zone: "schengen" },
    { name: "Italy", zone: "schengen" },
    { name: "Spain", zone: "schengen" },
    { name: "United Kingdom", zone: "worldwide" },
    { name: "Australia", zone: "worldwide" },
    { name: "Japan", zone: "worldwide" },
    { name: "India", zone: "asia" },
    { name: "Thailand", zone: "asia" },
    { name: "Malaysia", zone: "asia" },
    { name: "Singapore", zone: "asia" }
  ];

  // Determine active zone based on selected countries
  let activeZone: "worldwide" | "schengen" | "asia" = "asia";
  if (selectedCountries.some(c => countriesList.find(x => x.name === c)?.zone === "worldwide")) {
    activeZone = "worldwide";
  } else if (selectedCountries.some(c => countriesList.find(x => x.name === c)?.zone === "schengen")) {
    activeZone = "schengen";
  } else if (selectedCountries.length === 0) {
    activeZone = "schengen"; // Fallback
  }

  const planName = activeZone === "worldwide"
    ? "Schengen Countries Worldwide Including USA and Canada"
    : activeZone === "schengen"
    ? "Schengen Countries / Europe Plan"
    : "Asia-Pacific Cover Plan";

  // Calculations matching the exact BDT 2553 rate for 14 days Worldwide
  let baseRate = 60;
  let basePlus = 200;
  if (activeZone === "worldwide") {
    baseRate = 150;
    basePlus = 453;
  } else if (activeZone === "schengen") {
    baseRate = 100;
    basePlus = 300;
  }

  const ageFactor = age > 75 ? 2.0 : age > 60 ? 1.5 : 1.0;
  const netPremium = Math.round((baseRate * duration + basePlus) * ageFactor);
  const vat = parseFloat((netPremium * 0.15).toFixed(2));
  const stamp = 20; // BDT 20 stamp fee from the screenshot
  const grandTotal = parseFloat((netPremium + vat + stamp).toFixed(2));

  // Simulation Modal States
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBuyPolicy = () => {
    setIsModalOpen(true);
  };

  // Benefits
  const benefits = [
    { label: "Medical Expense Coverage", desc: "Up to USD 50,000 (€30,000 for Schengen Countries) covering physician service, surgery, and hospital stays." },
    { label: "Emergency Assistance", desc: "24/7 medical emergency help and local medical transport services operated via global assistance partners." },
    { label: "Medical Evacuation & Repatriation", desc: "Fully covers emergency medical evacuation costs to transport you to the nearest medical hub or back home." },
    { label: "Trip Cancellation & Delays", desc: "Reimburse hotel and flight costs if your trip is delayed or cancelled due to unforeseen circumstances." },
    { label: "Worldwide Coverage", desc: "Choose global travel protection, ensuring financial security across Schengen, Asia-Pacific, or the Americas." },
    { label: "Baggage Loss & Theft protection", desc: "Covers financial loss resulting from checked-in baggage loss, robberies, or flight delays." }
  ];

  // Exclusions List
  const exclusions = [
    "Pre-existing medical conditions diagnosed prior to travel.",
    "Travel undertaken against the advice of a registered physician.",
    "Injuries sustained while participating in hazardous sports or adventure activities.",
    "Pregnancy and childbirth complications beyond the 36th week.",
    "Treatments which can be reasonably delayed until returning to Bangladesh.",
    "Losses caused by suicide, self-inflicted injuries, or mental illnesses.",
    "Losses resulting from war, terrorism, mutiny, or political strikes.",
    "Routine physical checks or cosmetic surgeries overseas."
  ];

  // FAQs
  const faqs = [
    {
      q: "What is Green Delta Overseas Mediclaim Travel Insurance?",
      a: "It is a comprehensive medical and travel assistance plan covering travelers abroad for physician fees, hospitalization, local emergency medical transportation, trip delays, baggage losses, and evacuations."
    },
    {
      q: "Which region option should I choose?",
      a: "Choose 'Schengen Countries' if you are traveling to Europe (provides €30,000 / USD 50,000 cover). Choose 'Worldwide' if you are traveling to the US, Americas, or multi-continental destinations. Choose 'Asia-Pacific' for regional travels within Asia (excluding Japan/Australia if worldwide limits are needed)."
    },
    {
      q: "Who is Crisis 24?",
      a: "Crisis 24 is Green Delta's global claim handling agent based in London, UK. In case of an overseas medical emergency, contact them immediately at +44 207 902 7131 or opsassist@crisis24.com for direct settlement coordination."
    },
    {
      q: "How will I receive the policy document?",
      a: "You will receive an instant digital E-Policy via email as soon as payment is completed. Physical hard copies are shipped via courier within 3-5 days in Dhaka and 5-7 days outside Dhaka."
    },
    {
      q: "What is the maximum coverage duration?",
      a: "This policy covers travel periods for up to 180 consecutive days."
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
                  <Globe className="w-3.5 h-3.5" />
                  <span>Overseas Mediclaim Portal</span>
                </div>
                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-blue tracking-tight leading-[1.1]">
                  Global Travel <br />
                  <span className="gradient-text-blue-green font-extrabold">Medical Security</span>
                </h1>
                <p className="text-sm sm:text-base text-slate-500 max-w-xl leading-relaxed">
                  Explore the world with peace of mind. Green Delta&apos;s Travel Insurance covers overseas medical services, physician bills, evacuations, baggage loss, and cancellations up to USD 50,000.
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
                    href="https://green-delta.com/wp-content/uploads/2024/03/BH-Policy-Wording_-Including-19-Covid-Cover-2.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white border border-slate-200 hover:border-brand-green/30 text-slate-700 hover:text-brand-green font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300 flex items-center gap-1.5"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Policy Wording</span>
                  </a>
                </div>
              </div>

              {/* Right Illustration Column */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-blue-500/5 to-transparent rounded-full pointer-events-none" />
                  
                  {/* Decorative Travel Vector Illustration SVG */}
                  <div className="relative w-full h-44 bg-linear-to-tr from-blue-50 to-emerald-50/50 rounded-2xl flex items-center justify-center border border-slate-50">
                    <svg viewBox="0 0 200 120" fill="none" className="w-44 h-28 text-brand-blue" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="100" cy="60" r="40" fill="#e0f2fe" />
                      <circle cx="100" cy="60" r="30" fill="#ccfbf1" />
                      {/* Airplane representation */}
                      <path d="M70 70l20-15h40l10-15h10l-5 15h20l5-10h5l-2 10 2 10h-5l-5-10h-20l5 15h-10l-10-15H90l-20 15v-5z" fill="#0369a1" className="opacity-90" />
                    </svg>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-center font-display font-black text-base text-brand-blue">
                      Crisis 24 Claims Handling
                    </h4>
                    <p className="text-[11px] text-slate-450 text-center leading-relaxed">
                      All overseas emergencies are handled immediately via our coordination center based in London, UK.
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
                Travel Cover Premium <br />
                <span className="gradient-text-blue-green font-extrabold">Instant Estimator</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                Configure your destination, duration, and traveler details to calculate your custom plan rates.
              </p>
            </div>

            {/* Split layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Slider Input Column */}
              <div className="lg:col-span-7 p-8 bg-slate-50 rounded-3xl border border-slate-100 space-y-8">
                
                {/* Multi-Select Country Dropdown */}
                <div className="space-y-3 relative">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                    1. Traveling Country / Countries
                  </label>
                  
                  {/* Select box wrapper */}
                  <div
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="min-h-[50px] p-2.5 bg-white border border-slate-200 rounded-2xl cursor-pointer flex flex-wrap gap-1.5 items-center justify-between shadow-xs"
                  >
                    <div className="flex flex-wrap gap-1.5">
                      {selectedCountries.length === 0 ? (
                        <span className="text-xs text-slate-400 pl-1">Search & select countries...</span>
                      ) : (
                        selectedCountries.map((c) => (
                          <span
                            key={c}
                            className="inline-flex items-center gap-1 bg-slate-100 hover:bg-slate-200 text-slate-750 font-semibold text-xs px-2.5 py-1 rounded-xl transition-colors"
                          >
                            <span>{c}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedCountries(selectedCountries.filter((x) => x !== c));
                              }}
                              className="text-slate-400 hover:text-slate-650 font-black cursor-pointer ml-1"
                            >
                              ×
                            </button>
                          </span>
                        ))
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </div>

                  {/* Dropdown Options Panel */}
                  {isDropdownOpen && (
                    <div className="absolute z-10 top-full left-0 w-full mt-2 bg-white border border-slate-150 rounded-2xl shadow-xl max-h-60 overflow-y-auto p-2 space-y-1">
                      <div className="px-2 py-1.5">
                        <input
                          type="text"
                          placeholder="Search countries..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="w-full text-xs p-2 border border-slate-200 rounded-xl focus:outline-hidden focus:border-brand-green"
                        />
                      </div>
                      
                      <div className="h-[1px] bg-slate-100 my-1" />

                      {countriesList
                        .filter((c) => c.name.toLowerCase().includes(countrySearch.toLowerCase()))
                        .map((c) => {
                          const isChecked = selectedCountries.includes(c.name);
                          return (
                            <button
                              key={c.name}
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                if (isChecked) {
                                  setSelectedCountries(selectedCountries.filter((x) => x !== c.name));
                                } else {
                                  setSelectedCountries([...selectedCountries, c.name]);
                                }
                              }}
                              className="w-full text-left text-xs px-3 py-2 hover:bg-slate-50 rounded-xl flex items-center justify-between cursor-pointer"
                            >
                              <span className="font-semibold text-slate-700">{c.name}</span>
                              <div className="flex items-center gap-1.5">
                                <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-bold mr-1">
                                  {c.zone === "worldwide" ? "Worldwide" : c.zone === "schengen" ? "Schengen" : "Asia"}
                                </span>
                                <span className={`w-4 h-4 rounded-md border flex items-center justify-center ${
                                  isChecked ? "border-brand-green bg-brand-green text-white" : "border-slate-300"
                                }`}>
                                  {isChecked && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                                </span>
                              </div>
                            </button>
                          );
                        })}
                      
                      {countriesList.filter((c) => c.name.toLowerCase().includes(countrySearch.toLowerCase())).length === 0 && (
                        <p className="text-center text-xs text-slate-400 py-3">No countries found.</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Duration Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">2. Choose Travel Duration</span>
                    <div>
                      <span className="text-xl font-black text-brand-blue">{duration} Days</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="180"
                    step="1"
                    value={duration}
                    onChange={(e) => setDuration(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-1">
                    <span>1 Day</span>
                    <span>Max: 180 Days</span>
                  </div>
                </div>

                {/* Age Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between items-baseline">
                    <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">3. Traveler Age</span>
                    <div>
                      <span className="text-xl font-black text-brand-blue">{age} Years</span>
                    </div>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="85"
                    step="1"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-1">
                    <span>1 Year</span>
                    <span>Max: 85 Years</span>
                  </div>
                </div>

              </div>

              {/* Premium Breakdown Receipt Column */}
              <div className="lg:col-span-5 p-8 bg-white rounded-3xl border border-slate-150 shadow-xl relative overflow-hidden flex flex-col justify-between h-full min-h-[350px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-blue-500/10 to-transparent rounded-full pointer-events-none" />
                
                <div className="space-y-6">
                  <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">Estimated Premium Invoice</span>
                  
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-start text-xs border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-medium">Selected Countries:</span>
                      <span className="font-bold text-slate-800 text-right max-w-[200px] leading-relaxed">
                        {selectedCountries.join(", ") || "None"}
                      </span>
                    </div>
                    <div className="flex justify-between items-start text-xs border-b border-slate-100 pb-2">
                      <span className="text-slate-500 font-medium">Plan Name:</span>
                      <span className="font-bold text-brand-green text-right max-w-[200px] leading-relaxed">
                        {planName}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Traveler Age:</span>
                      <span className="font-bold text-slate-800">{age} Years</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-500">Coverage Period:</span>
                      <span className="font-bold text-slate-800">{duration} Days</span>
                    </div>
                    <div className="flex justify-between items-center text-xs pt-2 border-t border-slate-100">
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
                    <div className="pt-4 border-t border-slate-200 flex justify-between items-baseline">
                      <span className="text-xs font-bold text-slate-700">Gross Premium:</span>
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
                    Buy Travel Policy Online
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
                  onClick={() => setActiveTab("benefits")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "benefits"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  Key Benefits & Coverages
                </button>
                <button
                  onClick={() => setActiveTab("exclusions")}
                  className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    activeTab === "exclusions"
                      ? "bg-white text-brand-blue shadow-xs"
                      : "text-slate-500 hover:text-brand-blue"
                  }`}
                >
                  General Exclusions
                </button>
              </div>

              {/* Tab Contents */}
              <div className="p-8">
                {activeTab === "benefits" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-brand-blue flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-brand-green" />
                      Scope of Benefits & Protections
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {benefits.map((row, i) => (
                        <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
                          <h4 className="text-xs font-bold text-brand-blue">{row.label}</h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">{row.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === "exclusions" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-red-650 flex items-center gap-2 mb-4">
                      <ShieldAlert className="w-5 h-5 text-red-500" />
                      What is NOT Covered (General Exclusions)
                    </h3>
                    <p className="text-[11px] text-slate-400 italic mb-2">
                      No medical payments or reimbursements shall be settled for claims arising from:
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
                  Emergency Medical <br />
                  <span className="gradient-text-blue-green font-extrabold">Assistance (Crisis 24)</span>
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  In case of sickness or accidental injury during your journey, contact our international claims handling manager immediately for direct hospital settlement coordination.
                </p>
                
                <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <PhoneCall className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold block text-slate-800">Phone Contact:</span>
                      <span className="font-medium text-slate-500">+44 207 902 7131 (UK assistance)</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Mail className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-bold block text-slate-800">Email Assistance:</span>
                      <span className="font-medium text-slate-500">opsassist@crisis24.com</span>
                      <span className="block text-[10px] text-slate-400">CC: corporateteam@crisis24.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Steps timeline */}
              <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-150 relative">
                <h3 className="font-display font-bold text-base text-brand-blue mb-8">
                  Steps to coordinate overseas claims
                </h3>
                <div className="space-y-6 relative border-l border-slate-200 pl-6 ml-2 text-xs">
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 bg-brand-green text-white w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs">
                      1
                    </span>
                    <h4 className="font-bold text-brand-blue">Contact Crisis 24 immediately</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Always contact Crisis 24 prior to hospital admission to coordinate direct billing with the healthcare clinic.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 bg-brand-green text-white w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs">
                      2
                    </span>
                    <h4 className="font-bold text-brand-blue">Provide policy details</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Give them your policy number, passport details, name of the overseas hospital, and symptoms/accident conditions.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-[35px] top-0 bg-brand-green text-white w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs">
                      3
                    </span>
                    <h4 className="font-bold text-brand-blue">Submit papers post-treatment</h4>
                    <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">Send doctor invoices, diagnosis papers, local ambulance bills, and receipts via mail to 2 London Bridge, London, SE19RA, UK if reimbursement is needed.</p>
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
        planName={`Overseas Mediclaim (${planName} - ${selectedCountries.join(", ")})`}
        premiumAmount={netPremium}
      />

      <Footer />
    </div>
  );
}
