"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dog,
  Cat,
  ShieldCheck,
  ShieldAlert,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  Mail,
  Info,
  Clock,
  Heart,
  ChevronDown,
  CheckCircle2,
  AlertTriangle,
  Check,
  X,
  Stethoscope
} from "lucide-react";

export default function PetInsurancePage() {
  const [petType, setPetType] = useState<"cat" | "dog">("cat");
  const [activeCoverageTab, setActiveCoverageTab] = useState<"coverage" | "illness" | "exclusions">("coverage");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  
  // Simulation Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlanName, setSelectedPlanName] = useState("");
  const [selectedPlanPrice, setSelectedPlanPrice] = useState(0);
  const [petFormName, setPetFormName] = useState("");
  const [petFormBreed, setPetFormBreed] = useState("");
  const [petFormAge, setPetFormAge] = useState("1");
  const [checkoutComplete, setCheckoutComplete] = useState(false);

  interface PetPlan {
    name: string;
    coverage: number;
    premium: number;
    accident: number;
    illness: number;
    detailText?: string;
  }

  // Cat plans
  const catPlans: PetPlan[] = [
    { name: "Plan A", coverage: 10000, premium: 500, accident: 10000, illness: 10000, detailText: "At actual but not more than BDT 3,000 per occasion and in aggregate not more than BDT 10,000" },
    { name: "Plan B", coverage: 20000, premium: 1000, accident: 20000, illness: 20000, detailText: "At actual but not more than BDT 4,000 per occasion and in aggregate not more than BDT 20,000" },
    { name: "Plan C", coverage: 30000, premium: 1500, accident: 30000, illness: 30000, detailText: "At actual but not more than BDT 5,000 per occasion and in aggregate not more than BDT 30,000" }
  ];

  // Dog plans
  const dogPlans: PetPlan[] = [
    { name: "Plan A", coverage: 20000, premium: 1000, accident: 20000, illness: 20000, detailText: "At actual but not more than BDT 5,000 per occasion and in aggregate not more than BDT 20,000" },
    { name: "Plan B", coverage: 40000, premium: 2000, accident: 40000, illness: 40000, detailText: "At actual but not more than BDT 7,000 per occasion and in aggregate not more than BDT 40,000" },
    { name: "Plan C", coverage: 80000, premium: 4000, accident: 80000, illness: 80000, detailText: "At actual but not more than BDT 10,000 per occasion and in aggregate not more than BDT 80,000" }
  ];

  const currentPlans = petType === "cat" ? catPlans : dogPlans;

  // Cat Coverages list
  const catCoverages = [
    "Accidents and injuries (e.g., broken bones, bite wounds, swallowing objects or toxins, poisoning etc)",
    "Diagnostic tests (e.g., x-rays, lab tests)",
    "Illnesses (List is attached below)",
    "Prescription medication, Vet Fee",
    "Surgeries needed for Accidental Injury and the diseases covered here",
    "Hospitalization (if needed)"
  ];

  // Dog Coverages list (now identical to Cat Coverages as per user's document)
  const dogCoverages = [
    "Accidents and injuries (e.g., broken bones, bite wounds, swallowing objects or toxins, poisoning etc)",
    "Diagnostic tests (e.g., x-rays, lab tests)",
    "Illnesses (List is attached below)",
    "Prescription medication, Vet Fee",
    "Surgeries needed for Accidental Injury and the diseases covered here",
    "Hospitalization (if needed)"
  ];

  // Cat Critical Illnesses
  const catCriticalIllnesses = [
    "All types of Cancer",
    "Chronic Kidney failure/Urolithiasis",
    "Liver Diseases",
    "Cardiac Dysfunctions",
    "Feline Distemper",
    "Feline Leukemia Virus",
    "FIP (Feline Infectious Peritonitis)",
    "Feline Paralysis"
  ];

  // Dog Critical Illnesses
  const dogCriticalIllnesses = [
    "All types of Cancer",
    "Chronic Kidney failure",
    "Liver Diseases",
    "Cardiac Dysfunctions",
    "Canine Distemper",
    "Canine Viral Diahorrea",
    "Canine Parvovirus",
    "Coagulation Disorders"
  ];

  // Cat Exclusions
  const catExclusions = [
    "Transportation to the clinic/Hospital",
    "Breeding, pregnancy, neuter",
    "Vaccination",
    "Cosmetic procedures (e.g., ear cropping, tail docking)",
    "Regular diagnostic tests/ Checkups",
    "Food, dietary and nutritional supplements",
    "Pre-existing conditions",
    "Training",
    "Fight wound",
    "Dental Condition",
    "Neurological / Behavioral conditions",
    "Diseases that are not listed in the Policy"
  ];

  // Dog Exclusions (now identical to Cat Exclusions as per user's document)
  const dogExclusions = [
    "Transportation to the clinic/Hospital",
    "Breeding, pregnancy, neuter",
    "Vaccination",
    "Cosmetic procedures (e.g., ear cropping, tail docking)",
    "Regular diagnostic tests/ Checkups",
    "Food, dietary and nutritional supplements",
    "Pre-existing conditions",
    "Training",
    "Fight wound",
    "Dental Condition",
    "Neurological / Behavioral conditions",
    "Diseases that are not listed in the Policy"
  ];

  // Claim Checklist Steps
  const claimSteps = [
    {
      title: "1. Complete Claim Form",
      desc: (
        <span>
          Duly completed Claim form.{" "}
          <a
            href="https://green-delta.com/wp-content/uploads/2025/02/Pet_Insurance_Claim_Form.docx"
            className="text-brand-green font-bold underline hover:text-brand-green-hover"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download claim form
          </a>
          .
        </span>
      )
    },
    {
      title: "2. Vaccination Certificates",
      desc: "Up-to-date vaccine certificates for the pet."
    },
    {
      title: "3. Vet Medical Papers and Bills",
      desc: "Detailed medical paper and prescriptions from a registered vet (in case of Claims under Surgery Expenses & Hospitalisation Cover)."
    },
    {
      title: "4. Hospital Bills",
      desc: "Original invoice and breakdown bill (in case of Claim under Hospitalization)."
    },
    {
      title: "5. Diagnostic Reports",
      desc: "Original diagnostic reports (in case of Claim under Terminal Diseases Cover, Long Term Care Cover)."
    },
    {
      title: "6. Additional Documents",
      desc: "Any other files or photo ID proofs if required by the Company to process the Claim."
    }
  ];

  // Benefits
  const benefits = [
    {
      title: "Accident & Injuries Coverage",
      desc: "Covers fracture, lacerations, internal injury, poisoning, and foreign body ingestion.",
      icon: <AlertTriangle className="w-6 h-6 text-brand-green" />
    },
    {
      title: "Critical Disease Coverage",
      desc: "Covers cancer, kidney failure, heart disease, paralysis, liver disease, and major infections.",
      icon: <Heart className="w-6 h-6 text-brand-green" />
    },
    {
      title: "Hospitalization Coverage",
      desc: "Covers vet consultation fees, ICU charges, boarding, and surgery expenses.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-green" />
    },
    {
      title: "Diagnostic Test Coverage",
      desc: "Covers X-Ray, Blood, Urine, and other critical diagnostic tests recommended by registered veterinarians.",
      icon: <Stethoscope className="w-6 h-6 text-brand-green" />
    }
  ];

  // FAQs
  const faqs = [
    {
      q: "What is covered under Green Delta's Pet Insurance Plan?",
      a: "Green Delta's Pet Insurance covers accidental injuries and critical illnesses. It includes veterinary consultations, hospitalization, surgeries, and prescribed medications, but only for treatments related to critical illnesses and accidental injuries."
    },
    {
      q: "Which pets are eligible for coverage?",
      a: "Cats and dogs aged between 6 months and 8 years with proper vaccination records are fully eligible for our insurance plans."
    },
    {
      q: "Are pre-existing conditions covered?",
      a: "No, pre-existing conditions (any injury, illness, or physical condition noticed before the policy period starts) are excluded."
    },
    {
      q: "What is the process for filing a claim?",
      a: "Filing a claim is simple! Email claims@greendelta.com with your Claim Form, Vet Prescription, Diagnostic Reports, Original Invoices, and Photo ID/microchip markings of your pet."
    },
    {
      q: "Is there a waiting period before the coverage begins?",
      a: "Yes, there is a standard waiting period of 30 days for critical illness coverage. However, accidental injury claims are active and covered immediately from day one."
    },
    {
      q: "Can I choose any veterinarian for my pet's treatment?",
      a: "Absolutely! You can choose any registered veterinary practitioner or animal hospital in Bangladesh."
    },
    {
      q: "Are routine check-ups and vaccinations covered?",
      a: "No, routine check-ups, preventative care, vaccinations, grooming, and cosmetic treatments are not covered under the plan."
    },
    {
      q: "Is there a maximum age limit for enrolling my pet?",
      a: "Yes, the entry age limit is 8 years. Once enrolled, the policy can be renewed annually subject to a health review."
    },
    {
      q: "What is the policy renewal process?",
      a: "You can renew your policy annually before the expiry date. We will send you a reminder email with renewal instructions 30 days prior to policy termination."
    },
    {
      q: "Are there exclusions I should be aware of?",
      a: "Yes, standard exclusions include congenital/hereditary defects, dental scaling/cosmetic care, intentional negligence, pet food/supplements, breeding/pregnancy, and war/terrorism."
    }
  ];

  const handleBuyPlan = (planName: string, price: number) => {
    setSelectedPlanName(planName);
    setSelectedPlanPrice(price);
    setCheckoutComplete(false);
    setIsModalOpen(true);
  };

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutComplete(true);
  };

  return (
    <>
      <Navbar />

      <main className="flex-grow pt-[70px]">
        {/* Hero Section */}
        <section className="relative bg-linear-to-b from-sky-50/70 via-white to-slate-50 py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 gradient-green-glow rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-96 h-96 gradient-blue-glow rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Column: Heading */}
              <div className="lg:col-span-7 space-y-6 text-left">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-brand-blue transition-colors group mb-2"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                  <span>Back to Landing Page</span>
                </Link>
                
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-green/10 border border-brand-green/20 rounded-full text-xs font-bold text-brand-green">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Interactive Product Portal</span>
                </div>

                <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-brand-blue tracking-tight leading-[1.1]">
                  Green Delta <br />
                  <span className="gradient-text-blue-green font-extrabold">Pet Insurance</span>
                </h1>
                
                <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
                  The first comprehensive protection plan in Bangladesh for your beloved cats & dogs. Cover medical, diagnostic, and accidental hospitalization expenses seamlessly online.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  <a
                    href="#plans"
                    className="bg-brand-blue hover:bg-brand-blue-light text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all duration-300 flex items-center gap-2 hover:scale-[1.01]"
                  >
                    <span>Compare Insurance Plans</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <a
                    href="#how-to-claim"
                    className="bg-white border border-slate-200 hover:border-brand-green/30 text-slate-700 hover:text-brand-green font-bold text-sm px-6 py-3.5 rounded-xl transition-all duration-300"
                  >
                    Claims Guide
                  </a>
                </div>
              </div>

              {/* Right Column: Illustration + Toggle Widget */}
              <div className="lg:col-span-5 flex flex-col items-center">
                <div className="w-full max-w-md bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-brand-green/5 to-transparent rounded-full" />
                  
                  {/* Brand Vector illustration */}
                  <div className="relative w-full h-44 bg-linear-to-tr from-sky-50 to-blue-50/50 rounded-2xl flex items-center justify-center border border-slate-50">
                    <svg viewBox="0 0 200 120" fill="none" className="w-44 h-28 text-brand-blue" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="70" cy="65" r="30" fill="#e0f2fe" />
                      <circle cx="130" cy="65" r="28" fill="#d1fae5" />
                      {/* Cat face path outline */}
                      <path d="M55 70a15 15 0 0130 0v5H55v-5z" fill="#0284c7" className="opacity-80" />
                      <path d="M58 55l4 6M82 55l-4 6" stroke="#0284c7" strokeWidth="2" strokeLinecap="round" />
                      {/* Dog face path outline */}
                      <path d="M115 70a15 15 0 0130 0v5h-30v-5z" fill="#059669" className="opacity-80" />
                      <path d="M110 65l6-6M150 65l-6-6" stroke="#059669" strokeWidth="2" strokeLinecap="round" />
                      <path d="M125 78v5" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" />
                      <circle cx="130" cy="74" r="2" fill="#111827" />
                    </svg>
                  </div>

                  {/* Toggle Selector */}
                  <div className="space-y-4">
                    <h3 className="text-center font-display font-black text-lg text-brand-blue">
                      Choose Your Pet Type
                    </h3>
                    <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-50 rounded-2xl border border-slate-100">
                      <button
                        onClick={() => setPetType("cat")}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                          petType === "cat"
                            ? "bg-white text-brand-blue shadow-md"
                            : "text-slate-500 hover:text-brand-blue"
                        }`}
                      >
                        <Cat className="w-4 h-4" />
                        <span>Cat Plans</span>
                      </button>
                      <button
                        onClick={() => setPetType("dog")}
                        className={`flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                          petType === "dog"
                            ? "bg-white text-brand-blue shadow-md"
                            : "text-slate-500 hover:text-brand-blue"
                        }`}
                      >
                        <Dog className="w-4 h-4" />
                        <span>Dog Plans</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Comparison Tables Section */}
        <section id="plans" className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Select Policy Option</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
                Compare <span className="gradient-text-blue-green font-extrabold">{petType === "cat" ? "Cat" : "Dog"} Insurance Plans</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                Choose the coverage limit that matches your financial preference. Simple, fixed, and transparent annual premiums.
              </p>
            </div>

            {/* Plans Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {currentPlans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`rounded-3xl border p-8 flex flex-col justify-between relative transition-all duration-300 overflow-hidden ${
                    plan.name === "Plan B"
                      ? "border-brand-green bg-slate-50/50 shadow-xl shadow-brand-green/5 md:-translate-y-2"
                      : "border-slate-100 bg-white hover:border-slate-200"
                  }`}
                >
                  {plan.name === "Plan B" && (
                    <div className="absolute top-0 right-0 bg-brand-green text-white text-[9px] font-bold tracking-widest uppercase py-1 px-4 rounded-bl-xl">
                      Best Value
                    </div>
                  )}

                  <div className="space-y-6">
                    <span className="text-xs font-bold text-slate-400 block uppercase tracking-wider">{plan.name} Package</span>
                    
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block">Total Coverage Limit</span>
                      <span className="text-3xl font-black text-brand-blue">
                        BDT {plan.coverage.toLocaleString()}
                      </span>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-slate-100">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">Accidental Injury Limit:</span>
                        <span className="font-bold text-slate-800">BDT {plan.accident.toLocaleString()}</span>
                      </div>
                      {plan.detailText && (
                        <div className="text-[10px] text-slate-400 bg-slate-50 p-2 rounded-lg leading-relaxed">
                          <strong>Accident Limit Detail:</strong> {plan.detailText}
                        </div>
                      )}
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">Critical Illness Limit:</span>
                        <span className="font-bold text-slate-800">BDT {plan.illness.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-500">E-Delivery Speed:</span>
                        <span className="font-bold text-brand-green">10 Minutes</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-xs text-slate-400 font-bold">Annual Premium:</span>
                      <div>
                        <span className="text-xl font-extrabold text-brand-blue">BDT {plan.premium.toLocaleString()}</span>
                        <span className="text-[10px] text-slate-400">/year</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleBuyPlan(`${petType === "cat" ? "Cat" : "Dog"} - ${plan.name}`, plan.premium)}
                      className={`w-full text-center text-xs font-bold py-3.5 px-4 rounded-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
                        plan.name === "Plan B"
                          ? "bg-brand-green text-white hover:bg-brand-green-hover shadow-md shadow-brand-green/20"
                          : "bg-brand-blue text-white hover:bg-brand-blue-light"
                      }`}
                    >
                      Buy Policy Online
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Explanatory notes under comparison */}
            <div className="mt-8 p-5 bg-linear-to-r from-brand-blue/5 to-transparent border border-slate-100 rounded-2xl space-y-2 text-xs text-slate-650">
              <p className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>One policy will cover either accidental injury or critical illness coverage in a policy year.</span>
              </p>
              <p className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>The policy will cease after availing the full Sum Insured/ Defined Coverage.</span>
              </p>
              <p className="flex items-center gap-2">
                <Check className="w-4 h-4 text-brand-green flex-shrink-0" />
                <span>The Policy will cover vet fee with Prescription.</span>
              </p>
            </div>

            {/* Instant Delivery Banner */}
            <div className="mt-12 p-6 bg-slate-900 text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-brand-green/10 to-transparent rounded-full pointer-events-none" />
              <div className="flex items-center gap-4">
                <div className="p-3 bg-brand-green/10 text-brand-green rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">Get Instant Access to Your Policy!</h4>
                  <p className="text-xs text-slate-400 mt-1 max-w-xl leading-relaxed">
                    You will receive the digital copy of the policy document in your registered email within 10 minutes. You&apos;ll also receive a hard copy in your provided address within 3-5 business days if you&apos;re located in Dhaka, or 5-7 business days outside Dhaka. Your coverage starts as soon as payment is confirmed.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                  Physical & Digital Delivery
                </span>
              </div>
            </div>

          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Product Advantages</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
                Key Benefits Of <span className="gradient-text-blue-green font-extrabold">Pet Insurance</span>
              </h2>
              <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
                Enjoy complete peace of mind knowing that unexpected accidents and critical health threats to your cat or dog are covered.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-100/50 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="p-3 bg-brand-green/10 w-fit rounded-xl">
                      {benefit.icon}
                    </div>
                    <h3 className="font-display font-bold text-base text-brand-blue leading-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* About Section */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight">
                  About Green Delta <br />
                  <span className="gradient-text-blue-green font-extrabold">Pet Insurance</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-6">
                  Green Delta&apos;s Pet Insurance Plan provides comprehensive coverage for your beloved pets (cat & dog only), ensuring they receive the best care during times of need. The plan includes protection against accidental injuries and critical illnesses, offering peace of mind for pet owners.
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mt-4">
                  Whether it&apos;s an unexpected accident or a serious health condition, Green Delta&apos;s Pet Insurance helps cover the costs of veterinary care, hospitalization, and necessary treatments. This plan is designed to alleviate the financial burden on pet owners, allowing them to focus on their pets&apos; recovery and well-being.
                </p>
              </div>
              <div className="p-6 sm:p-10 bg-slate-50 rounded-3xl border border-slate-100 flex flex-col justify-center">
                <div className="flex items-center gap-3.5 pb-6 border-b border-slate-200">
                  <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl">
                    <Info className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-brand-blue">Important Notice</h4>
                    <span className="text-[10px] text-slate-400 block font-semibold uppercase mt-0.5">Eligibility Condition</span>
                  </div>
                </div>
                <ul className="space-y-4 pt-6 text-xs text-slate-600">
                  {petType === "cat" ? (
                    <>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>Pet must be between <strong>8 weeks and 10 years</strong> old at entry.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>Cat vaccination requirements: Rabies, Feline Panleukopenia, Calicivirus, Rhinotracheitis.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>Identification via marking or microchip records accompanied by a high-resolution photo ID.</span>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>Pet must be between <strong>8 weeks and 15 years</strong> old at entry.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>Dog vaccination requirements: Rabies, DHPPiL.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                        <span>Identification via marking or microchip records.</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage vs. Exclusions Section */}
        <section className="py-24 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Policy Guidelines</p>
              <h2 className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight">
                Policy Coverage <span className="gradient-text-blue-green font-extrabold">& Exclusions</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              {/* Tabs */}
              <div className="flex border-b border-slate-100 bg-slate-50 p-2">
                {([
                  { id: "coverage", label: "Accident Coverage" },
                  { id: "illness", label: "Critical Illness" },
                  { id: "exclusions", label: "Exclusions" }
                ] as const).map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCoverageTab(tab.id)}
                    className={`flex-1 text-center py-3.5 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                      activeCoverageTab === tab.id
                        ? "bg-white text-brand-blue shadow-xs"
                        : "text-slate-500 hover:text-brand-blue"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Contents */}
              <div className="p-8">
                {activeCoverageTab === "coverage" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-brand-blue flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-brand-green" />
                      What is Covered under Accidental Protection
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-600">
                      {(petType === "cat" ? catCoverages : dogCoverages).map((cov, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span>{cov}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeCoverageTab === "illness" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-brand-blue flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-5 h-5 text-brand-green" />
                      Critical Illness Cover (Policy Limit Applies)
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-600">
                      {(petType === "cat" ? catCriticalIllnesses : dogCriticalIllnesses).map((ill, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-brand-green mt-0.5 flex-shrink-0" />
                          <span>{ill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {activeCoverageTab === "exclusions" && (
                  <div className="space-y-4">
                    <h3 className="font-display font-bold text-base text-red-600 flex items-center gap-2 mb-4">
                      <ShieldAlert className="w-5 h-5 text-red-600" />
                      What is Not Covered (Key Exclusions)
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-500">
                      {(petType === "cat" ? catExclusions : dogExclusions).map((exc, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <X className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                          <span>{exc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Definitions details */}
            <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-100 space-y-4">
              <h4 className="font-display font-bold text-sm text-brand-blue flex items-center gap-1.5">
                <Info className="w-4 h-4 text-slate-400" />
                Key Definitions to Keep in Mind
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2 text-xs">
                <div>
                  <span className="font-bold text-slate-700 block mb-1">Pre-existing condition</span>
                  <p className="text-slate-500 leading-relaxed">
                    Any injury, illness, or condition that arose, or was noticed, before the start of the policy coverage period.
                  </p>
                </div>
                <div>
                  <span className="font-bold text-slate-700 block mb-1">Recurring condition</span>
                  <p className="text-slate-500 leading-relaxed">
                    A condition or symptom that disappears under medical treatment but re-appears during the policy term.
                  </p>
                </div>
                <div>
                  <span className="font-bold text-slate-700 block mb-1">Vet / Practitioner</span>
                  <p className="text-slate-500 leading-relaxed">
                    A veterinary physician registered under Bangladesh Veterinary Council holding a valid practicing license.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Claim Procedure Section */}
        <section id="how-to-claim" className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-5 space-y-6">
                <h2 className="font-display font-black text-3xl text-brand-blue tracking-tight leading-tight">
                  Fast & Seamless <br />
                  <span className="gradient-text-blue-green font-extrabold">E-Claims Settlement</span>
                </h2>
                <p className="text-slate-650 text-sm leading-relaxed">
                  We know medical emergencies can be stressful. That is why we provide a direct, digital email filing system with no long paper trails or hospital queues.
                </p>
                <div className="p-4 bg-brand-green/5 border border-brand-green/10 rounded-xl flex items-start gap-2.5">
                  <Mail className="w-5 h-5 text-brand-green mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="text-xs font-bold text-brand-blue block">Submit Claim documents to:</span>
                    <span className="text-sm font-bold text-brand-green">claims@greendelta.com</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-50 p-8 sm:p-10 rounded-3xl border border-slate-150 relative">
                <h3 className="font-display font-bold text-base text-brand-blue mb-8">
                  Required Documents Checklist
                </h3>
                <div className="space-y-6 relative border-l border-slate-200 pl-6 ml-2">
                  {claimSteps.map((step, idx) => (
                    <div key={idx} className="relative">
                      {/* circle check */}
                      <span className="absolute -left-[35px] top-0 bg-brand-green text-white w-5.5 h-5.5 rounded-full flex items-center justify-center text-[10px] font-bold shadow-xs">
                        {idx + 1}
                      </span>
                      <h4 className="text-xs font-bold text-brand-blue">{step.title}</h4>
                      <div className="text-[11px] text-slate-500 mt-1 leading-relaxed">{step.desc}</div>
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
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-slate-100 shadow-xs overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full flex items-center justify-between text-left p-5 font-semibold text-xs sm:text-sm text-brand-blue hover:text-brand-green transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${
                        openFaqIndex === idx ? "rotate-180 text-brand-green" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 origin-top ${
                      openFaqIndex === idx ? "max-h-[250px] border-t border-slate-50 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                    }`}
                  >
                    <p className="p-5 text-xs text-slate-500 leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      </main>

      {/* Simulator Purchase Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-fade-in">
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-md w-full p-6 sm:p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg hover:bg-slate-50 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!checkoutComplete ? (
              <form onSubmit={handleCheckoutSubmit} className="space-y-5">
                <div className="text-center pb-4 border-b border-slate-100">
                  <span className="text-[10px] font-bold text-brand-green tracking-widest uppercase">E-Checkout Simulator</span>
                  <h3 className="font-display font-black text-xl text-brand-blue mt-1">
                    Buy {selectedPlanName}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Configure your pet details to complete mock purchase
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-500 block mb-1.5">Pet Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Leo / Luna"
                      value={petFormName}
                      onChange={(e) => setPetFormName(e.target.value)}
                      className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-hidden focus:border-brand-green"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1.5">Pet Age (Years)</label>
                      <select
                        value={petFormAge}
                        onChange={(e) => setPetFormAge(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 bg-white focus:outline-hidden focus:border-brand-green"
                      >
                        <option value="0.5">6 Months - 1 Year</option>
                        <option value="1">1 Year</option>
                        <option value="2">2 Years</option>
                        <option value="3">3 Years</option>
                        <option value="4">4 Years</option>
                        <option value="5">5 Years</option>
                        <option value="6">6 Years</option>
                        <option value="7">7 Years</option>
                        <option value="8">8 Years</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-bold text-slate-500 block mb-1.5">Pet Breed</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Persian / Retriever"
                        value={petFormBreed}
                        onChange={(e) => setPetFormBreed(e.target.value)}
                        className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-hidden focus:border-brand-green"
                      />
                    </div>
                  </div>

                  <div className="p-3 bg-brand-light border border-slate-100 rounded-xl space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold block uppercase tracking-wider">Premium Invoice</span>
                    <div className="flex justify-between items-baseline text-xs text-brand-blue font-bold">
                      <span>Annual Cost:</span>
                      <span>BDT {selectedPlanPrice.toLocaleString()} / year</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="flex-1 border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-600 py-3 rounded-xl transition-all cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold py-3 rounded-xl transition-all shadow-md shadow-brand-green/10 hover:shadow-brand-green/35 cursor-pointer"
                  >
                    Confirm Purchase
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-6 space-y-5">
                <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div className="space-y-2">
                  <h3 className="font-display font-black text-xl text-brand-blue">
                    Policy Issued Successfully!
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-xs mx-auto">
                    Congratulations! The policy cover for your pet <strong>{petFormName}</strong> has been simulation issued. E-Certificate has been emailed to you.
                  </p>
                </div>

                <div className="p-4 bg-brand-light rounded-xl text-left border border-slate-100 space-y-2 text-[11px] text-slate-600">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Policy Holder Name:</span>
                    <span className="font-bold text-slate-700">Client Portal User</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Insured Pet:</span>
                    <span className="font-bold text-slate-700">{petFormName} ({petFormBreed})</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Policy limit:</span>
                    <span className="font-bold text-slate-700">{selectedPlanName}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t border-slate-200/60 pt-2">
                    <span className="text-slate-500">Premium Paid:</span>
                    <span className="text-brand-green">BDT {selectedPlanPrice.toLocaleString()} (Paid)</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="w-full bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold py-3.5 rounded-xl transition-all cursor-pointer"
                >
                  Close & View Dashboard
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
