"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";

type InsuranceType = "pet" | "health" | "nibedita" | "overseas" | "motor";

export default function QuoteCalculator() {
  const [activeTab, setActiveTab] = useState<InsuranceType>("health");
  // Form states
  // Pet
  const [petType, setPetType] = useState("dog");
  const [petAge, setPetAge] = useState(3);
  const [petCoverage, setPetCoverage] = useState(50000);
  
  // Health
  const [members, setMembers] = useState(1);
  const [healthCoverage, setHealthCoverage] = useState(200000);
  const [healthTier, setHealthTier] = useState("premium");

  // Nibedita
  const [nibeditaTier, setNibeditaTier] = useState("standard");
  const [nibeditaAge, setNibeditaAge] = useState(30);

  // Travel (Overseas)
  const [travelRegion, setTravelRegion] = useState("europe");
  const [travelDuration, setTravelDuration] = useState(15);
  const [travelAge, setTravelAge] = useState(35);

  // Motor
  const [vehicleValue, setVehicleValue] = useState(1500000);
  const [vehicleAge, setVehicleAge] = useState(2);
  const [motorTier, setMotorTier] = useState("comprehensive");

  // Calculate premium on render (pure logic derived from state)
  const getPremium = () => {
    let price = 0;
    if (activeTab === "pet") {
      // Base BDT 300 for cats, 400 for dogs
      const base = petType === "dog" ? 400 : 300;
      const coverageMultiplier = petCoverage / 10000; // e.g. 5
      const agePenalty = petAge > 5 ? (petAge - 5) * 50 : 0;
      price = base * 2.5 + coverageMultiplier * 80 + agePenalty;
    } else if (activeTab === "health") {
      const base = healthTier === "elite" ? 2200 : healthTier === "premium" ? 1200 : 600;
      const memberMultiplier = members === 1 ? 1 : members === 2 ? 1.8 : members === 3 ? 2.5 : 3.2;
      const coverageBonus = (healthCoverage / 100000) * 150;
      price = base * memberMultiplier + coverageBonus;
    } else if (activeTab === "nibedita") {
      const base = nibeditaTier === "elite" ? 1500 : nibeditaTier === "standard" ? 800 : 400;
      const agePenalty = nibeditaAge > 45 ? 150 : 0;
      price = base + agePenalty;
    } else if (activeTab === "overseas") {
      const regionMultiplier = travelRegion === "worldwide" ? 2.2 : travelRegion === "europe" ? 1.6 : 1.0;
      const durationCost = travelDuration * 45;
      const ageFactor = travelAge > 60 ? 1.5 : 1.0;
      price = (500 + durationCost) * regionMultiplier * ageFactor;
    } else if (activeTab === "motor") {
      const baseRate = motorTier === "comprehensive" ? 0.015 : 0.005; // percentage of value
      const depreciation = Math.max(0.6, 1 - vehicleAge * 0.05); // age deduction
      const annualPremium = vehicleValue * baseRate * depreciation;
      price = Math.round(annualPremium / 12); // monthly equivalent
    }
    return Math.round(price);
  };

  const premium = getPremium();

  return (
    <section id="calculator" className="py-24 bg-white relative">
      {/* Visual grids in bg */}
      <div className="absolute top-10 left-10 w-48 h-48 bg-linear-to-tr from-brand-green/5 to-transparent rounded-full blur-xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-linear-to-bl from-brand-blue/5 to-transparent rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Premium Calculator</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
            Estimate Your <span className="gradient-text-blue-green font-extrabold">Insurance Premium</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Get an instant, transparent quote for your protection plan. Adjust sliders and details to fit your budget.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          {/* Navigation Tabs */}
          <div className="flex flex-wrap border-b border-slate-100 bg-slate-50 p-2">
            {[
              { id: "health", label: "Health Insurance" },
              { id: "motor", label: "Motor Insurance" },
              { id: "pet", label: "Pet Insurance" },
              { id: "nibedita", label: "Nibedita" },
              { id: "overseas", label: "Travel Cover" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as InsuranceType)}
                className={`flex-1 min-w-[120px] text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold tracking-tight transition-all duration-300 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-white text-brand-blue shadow-xs border border-slate-100/50"
                    : "text-slate-500 hover:text-brand-blue"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Input Forms */}
            <div className="md:col-span-7 p-8 sm:p-10 space-y-6">
              
              {/* Pet Insurance Form */}
              {activeTab === "pet" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-2">Pet Category</label>
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setPetType("dog")}
                          className={`py-2.5 text-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                            petType === "dog"
                              ? "border-brand-green bg-brand-green/5 text-brand-green"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          Dog
                        </button>
                        <button
                          type="button"
                          onClick={() => setPetType("cat")}
                          className={`py-2.5 text-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                            petType === "cat"
                              ? "border-brand-green bg-brand-green/5 text-brand-green"
                              : "border-slate-200 text-slate-600 hover:bg-slate-50"
                          }`}
                        >
                          Cat
                        </button>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-2">Pet Age: <span className="text-brand-blue font-extrabold">{petAge} Years</span></label>
                      <input
                        type="range"
                        min="1"
                        max="12"
                        value={petAge}
                        onChange={(e) => setPetAge(Number(e.target.value))}
                        className="w-full accent-brand-green cursor-pointer mt-3"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2">Desired Medical Limit (BDT)</label>
                    <select
                      value={petCoverage}
                      onChange={(e) => setPetCoverage(Number(e.target.value))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-white focus:outline-hidden focus:border-brand-green"
                    >
                      <option value="30000">BDT 30,000</option>
                      <option value="50000">BDT 50,000 (Recommended)</option>
                      <option value="80000">BDT 80,000</option>
                      <option value="120000">BDT 120,000</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Health Insurance Form */}
              {activeTab === "health" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-2">Number of Members</label>
                      <select
                        value={members}
                        onChange={(e) => setMembers(Number(e.target.value))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-white focus:outline-hidden focus:border-brand-green"
                      >
                        <option value="1">Individual (1 Person)</option>
                        <option value="2">Couple (2 People)</option>
                        <option value="3">Family of 3</option>
                        <option value="4">Family of 4+</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-2">Hospitalization Tier</label>
                      <div className="flex gap-2">
                        {["basic", "premium", "elite"].map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setHealthTier(tier)}
                            className={`flex-1 py-2.5 text-center text-xs font-bold rounded-lg border uppercase transition-all cursor-pointer ${
                              healthTier === tier
                                ? "border-brand-green bg-brand-green/5 text-brand-green"
                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2">Annual Hospitalization Cover Limit (BDT)</label>
                    <select
                      value={healthCoverage}
                      onChange={(e) => setHealthCoverage(Number(e.target.value))}
                      className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-white focus:outline-hidden focus:border-brand-green"
                    >
                      <option value="100000">BDT 100,000</option>
                      <option value="200000">BDT 200,000</option>
                      <option value="350000">BDT 350,000 (Recommended)</option>
                      <option value="500000">BDT 500,000</option>
                    </select>
                  </div>
                </div>
              )}

              {/* Nibedita Form */}
              {activeTab === "nibedita" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-2">Age of Insured: <span className="text-brand-blue font-extrabold">{nibeditaAge} Years</span></label>
                      <input
                        type="range"
                        min="18"
                        max="65"
                        value={nibeditaAge}
                        onChange={(e) => setNibeditaAge(Number(e.target.value))}
                        className="w-full accent-brand-green cursor-pointer mt-3"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-2">Coverage Level</label>
                      <div className="grid grid-cols-3 gap-1">
                        {["budget", "standard", "elite"].map((tier) => (
                          <button
                            key={tier}
                            type="button"
                            onClick={() => setNibeditaTier(tier)}
                            className={`py-2 text-center text-xs font-bold rounded-lg border uppercase transition-all cursor-pointer ${
                              nibeditaTier === tier
                                ? "border-brand-green bg-brand-green/5 text-brand-green"
                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {tier}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="p-3.5 bg-brand-light border border-slate-100 rounded-xl flex items-start gap-2.5">
                    <HelpCircle className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      *Nibedita protection program includes dynamic trauma support and severe accidental allowances, exclusively engineered for female empowerment and financial security.
                    </p>
                  </div>
                </div>
              )}

              {/* Overseas Travel Form */}
              {activeTab === "overseas" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2">
                      <label className="text-xs font-bold text-slate-500 block mb-2">Destination Region</label>
                      <div className="grid grid-cols-3 gap-1.5">
                        {[
                          { id: "asia", label: "Asia" },
                          { id: "europe", label: "Schengen/USA" },
                          { id: "worldwide", label: "Worldwide" },
                        ].map((region) => (
                          <button
                            key={region.id}
                            type="button"
                            onClick={() => setTravelRegion(region.id)}
                            className={`py-2.5 text-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                              travelRegion === region.id
                                ? "border-brand-green bg-brand-green/5 text-brand-green"
                                : "border-slate-200 text-slate-600 hover:bg-slate-50"
                            }`}
                          >
                            {region.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-2">Traveler&apos;s Age</label>
                      <input
                        type="number"
                        min="1"
                        max="85"
                        value={travelAge}
                        onChange={(e) => setTravelAge(Number(e.target.value))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 bg-white focus:outline-hidden focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2">Travel Duration: <span className="text-brand-blue font-extrabold">{travelDuration} Days</span></label>
                    <input
                      type="range"
                      min="1"
                      max="180"
                      value={travelDuration}
                      onChange={(e) => setTravelDuration(Number(e.target.value))}
                      className="w-full accent-brand-green cursor-pointer mt-3"
                    />
                  </div>
                </div>
              )}

              {/* Motor Insurance Form */}
              {activeTab === "motor" && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-2">Approx Vehicle Value (BDT)</label>
                      <select
                        value={vehicleValue}
                        onChange={(e) => setVehicleValue(Number(e.target.value))}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 bg-white focus:outline-hidden focus:border-brand-green"
                      >
                        <option value="800000">BDT 800,000</option>
                        <option value="1500000">BDT 1,500,000 (Recommended)</option>
                        <option value="3000000">BDT 3,000,000</option>
                        <option value="5000000">BDT 5,000,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-2">Vehicle Age: <span className="text-brand-blue font-extrabold">{vehicleAge} Years</span></label>
                      <input
                        type="range"
                        min="0"
                        max="10"
                        value={vehicleAge}
                        onChange={(e) => setVehicleAge(Number(e.target.value))}
                        className="w-full accent-brand-green cursor-pointer mt-3"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-2">Coverage Type</label>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setMotorTier("comprehensive")}
                        className={`py-3 text-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          motorTier === "comprehensive"
                            ? "border-brand-green bg-brand-green/5 text-brand-green"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        Comprehensive Plan
                      </button>
                      <button
                        type="button"
                        onClick={() => setMotorTier("thirdparty")}
                        className={`py-3 text-center text-xs font-bold rounded-lg border transition-all cursor-pointer ${
                          motorTier === "thirdparty"
                            ? "border-brand-green bg-brand-green/5 text-brand-green"
                            : "border-slate-200 text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        Third Party Only
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Secure statement */}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100 text-slate-400 text-xs">
                <ShieldCheck className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>Premium rates are indicative, based on regulatory policies approved by IDRA.</span>
              </div>
            </div>

            {/* Price Output Display */}
            <div className="md:col-span-5 bg-brand-blue p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
              {/* Background circles */}
              <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-white/5 rounded-full pointer-events-none" />
              <div className="absolute top-10 right-10 w-20 h-20 bg-white/5 rounded-full pointer-events-none" />

              <div className="space-y-6">
                <div className="flex items-center gap-2 text-xs font-bold text-brand-green tracking-widest uppercase">
                  <Calculator className="w-4 h-4" />
                  <span>Estimated Premium</span>
                </div>

                <div className="space-y-1">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Monthly Subscription</span>
                  <div className="flex items-baseline">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight text-white transition-all duration-300">
                      BDT {premium.toLocaleString()}
                    </span>
                    <span className="text-slate-400 text-xs ml-1.5 font-semibold">/ month</span>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-white/10 text-xs text-slate-300 leading-relaxed">
                  <div className="flex justify-between">
                    <span>Tax & VAT (15%):</span>
                    <span className="text-white font-bold">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Claim Settling Speed:</span>
                    <span className="text-brand-green font-bold">Instant (99.2% ratio)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Option:</span>
                    <span className="text-white font-bold">E-Policy (PDF)</span>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  className="w-full bg-brand-green hover:bg-brand-green-hover text-white font-bold text-sm py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] shadow-lg shadow-brand-green/20 hover:shadow-brand-green/45 cursor-pointer"
                >
                  <span>Buy Policy Online</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  className="w-full text-center text-xs font-bold text-slate-400 hover:text-white mt-4 py-2 transition-colors cursor-pointer"
                >
                  Speak to an Expert agent
                </button>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
