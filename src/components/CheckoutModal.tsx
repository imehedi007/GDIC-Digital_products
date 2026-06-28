"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  Smartphone,
  KeyRound,
  Mail,
  Shield,
  CreditCard,
  CheckCircle2,
  Download,
  Send,
  Sparkles
} from "lucide-react";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  premiumAmount: number;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  planName,
  premiumAmount
}: CheckoutModalProps) {
  // Journey Steps:
  // 1: Mobile & OTP (Guest Checkout)
  // 2: Personal Registration details (with password)
  // 3: Payment Method
  // 4: Confirmation & Stepper
  const [step, setStep] = useState(1);

  // Form Fields
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [nid, setNid] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Instant Validation States
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [smsNotification, setSmsNotification] = useState("");
  const [emailNotification, setEmailNotification] = useState("");

  // Status Stepper checklist
  const [policyStatusStep, setPolicyStatusStep] = useState(1);
  const [policyNumber, setPolicyNumber] = useState("");
  const [trackingId, setTrackingId] = useState("");

  // AI assistant chat messages
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "ai" | "user"; text: string }>>([
    { sender: "ai", text: "Hello! I am your InsuMama AI Assistant. How can I help you with your purchase today?" }
  ]);
  const [chatInput, setChatInput] = useState("");

  // Reset steps on open
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setStep(1);
        setOtpSent(false);
        setOtp("");
        setSmsNotification("");
        setEmailNotification("");
        setPolicyStatusStep(1);
        setFirstName("");
        setLastName("");
        setEmail("");
        setNid("");
        setPassword("");
        setConfirmPassword("");
        setPolicyNumber("");
        setTrackingId("");
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Derived calculations
  const vat = Math.round(premiumAmount * 0.15);
  const totalCost = premiumAmount + vat;

  // SMS / Email Notification simulation timer
  useEffect(() => {
    if (step === 4) {
      // Simulate statuses checking off sequentially
      const timers = [
        setTimeout(() => setPolicyStatusStep(2), 1000), // Policy Processing
        setTimeout(() => {
          setPolicyStatusStep(3); // Policy Generated
          setPolicyNumber(`GD-POL-2026-${Math.floor(100000 + Math.random() * 900000)}`);
          setTrackingId(`GD-TRK-${Math.floor(100000 + Math.random() * 900000)}`);
        }, 2200),
        setTimeout(() => {
          setPolicyStatusStep(4); // Email Sent
          setSmsNotification(`SMS Confirmation sent to ${mobile}!`);
          setEmailNotification(`Policy documentation sent to ${email || "user@example.com"}!`);
        }, 3500),
        setTimeout(() => setPolicyStatusStep(5), 4500) // Policy Active
      ];
      return () => timers.forEach(t => clearTimeout(t));
    }
  }, [step, mobile, email]);

  if (!isOpen) return null;

  // Field validations
  const validateStep1 = () => {
    const errs: Record<string, string> = {};
    const mobileRegex = /^(?:\+88)?01[3-9]\d{8}$/;
    if (!mobile) {
      errs.mobile = "Mobile number is required.";
    } else if (!mobileRegex.test(mobile)) {
      errs.mobile = "Invalid mobile. Must be 11 digits (e.g. 017XXXXXXXX) or +8801XXXXXXXX.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSendOtp = () => {
    if (validateStep1()) {
      setOtpSent(true);
      // Pre-fill valid dummy OTP
      setOtp("1234");
      setErrors({});
    }
  };

  const handleVerifyOtp = () => {
    if (otp === "1234") {
      setErrors({});
      // If mobile number matches a mock user (e.g. 01711223344), bypass step 2 (existing database case)
      if (mobile === "01711223344") {
        setFirstName("Imran");
        setLastName("Mehedi");
        setEmail("imran.mehedi@green-delta.com");
        setNid("19922615602500000");
        setStep(3); // Move directly to payment!
      } else {
        setStep(2); // New registration
      }
    } else {
      setErrors({ otp: "Incorrect OTP code. Enter '1234' to verify." });
    }
  };

  // Instant registration validations
  const handleRegFieldChange = (field: string, val: string) => {
    const errs = { ...errors };
    if (field === "email") {
      setEmail(val);
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (val && !emailRegex.test(val)) {
        errs.email = "Invalid email format.";
      } else {
        delete errs.email;
      }
    } else if (field === "nid") {
      setNid(val);
      const nidRegex = /^\d{10}$|^\d{13}$|^\d{17}$/;
      if (val && !nidRegex.test(val)) {
        errs.nid = "NID must be 10, 13, or 17 numeric digits.";
      } else {
        delete errs.nid;
      }
    } else if (field === "confirmPassword") {
      setConfirmPassword(val);
      if (password && val !== password) {
        errs.confirmPassword = "Passwords do not match.";
      } else {
        delete errs.confirmPassword;
      }
    }
    setErrors(errs);
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: Record<string, string> = {};
    if (!firstName) errs.firstName = "First name is required.";
    if (!lastName) errs.lastName = "Last name is required.";
    if (!email) errs.email = "Email is required.";
    if (!nid) errs.nid = "National ID is required.";
    if (!password) errs.password = "Password is required.";
    if (password !== confirmPassword) errs.confirmPassword = "Passwords do not match.";

    if (Object.keys(errs).length === 0 && Object.keys(errors).length === 0) {
      setStep(3);
    } else {
      setErrors({ ...errors, ...errs });
    }
  };

  // Simulated AI Chat replies
  const handleSendMessage = () => {
    if (!chatInput.trim()) return;
    const userMsg = chatInput.trim();
    setChatMessages(prev => [...prev, { sender: "user", text: userMsg }]);
    setChatInput("");

    setTimeout(() => {
      let reply = "I'm sorry, I'm still learning. Can I help you calculate quotes?";
      const msgLower = userMsg.toLowerCase();

      if (msgLower.includes("which insurance") || msgLower.includes("right for me")) {
        reply = "We offer 6 distinct plans: Pet Insurance (Cats/Dogs), Health (All Rounder/365), Nibedita (Women Protection), PPA (Accident Cover), Travel (Overseas Mediclaim), and Motor Insurance.";
      } else if (msgLower.includes("cover")) {
        reply = `The selected policy "${planName}" covers medical emergencies, hospitalization, accidents, or transit damages as described in the policy benefits section.`;
      } else if (msgLower.includes("cost") || msgLower.includes("price") || msgLower.includes("premium")) {
        reply = `The base premium for this plan is BDT ${premiumAmount.toLocaleString()}. Including 15% VAT, the grand total is BDT ${totalCost.toLocaleString()}/year.`;
      } else if (msgLower.includes("document") || msgLower.includes("paper")) {
        reply = "Required documents vary. Generally: Claim form, medical prescriptions, bills, NID card, or police reports (for accidents/trauma).";
      }

      setChatMessages(prev => [...prev, { sender: "ai", text: reply }]);
    }, 800);
  };

  // File Download Simulator
  const handleDownloadPolicy = () => {
    const docContent = `
=============================================
GREEN DELTA INSURANCE COMPANY LIMITED
OFFICIAL ELECTRONIC POLICY RECEIPT
=============================================
Policy Number: ${policyNumber}
Tracking Number: ${trackingId}
Assured Client: ${firstName} ${lastName}
Registered Mobile: ${mobile}
Selected Plan Name: ${planName}
=============================================
Payment Status: RECEIVED (BDT ${totalCost.toLocaleString()})
Coverage Period: 1 Year (Renewable)
Transaction Date: ${new Date().toLocaleDateString()}
=============================================
Thank you for choosing Green Delta.
For emergency claims, contact 16266 or email info@green-delta.com
    `;
    const element = document.createElement("a");
    const file = new Blob([docContent], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `${policyNumber || "Policy_Receipt"}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 max-w-2xl w-full overflow-hidden relative flex flex-col md:flex-row max-h-[90vh]">
        
        {/* Main Checkout Area */}
        <div className="flex-1 flex flex-col overflow-y-auto">
          
          {/* Header */}
          <div className="p-5 bg-brand-blue text-white flex items-center justify-between flex-shrink-0">
            <div>
              <h3 className="font-display font-bold text-base">E-Checkout Portal</h3>
              <p className="text-[10px] text-slate-350 mt-0.5">Recommended Purchase Journey Sim</p>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-white/10 rounded-lg text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 flex-1 space-y-6">
            
            {/* Step Breadcrumbs */}
            {step < 4 && (
              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 pb-3">
                <span className={step === 1 ? "text-brand-green" : ""}>1. OTP verification</span>
                <span className="text-slate-300">/</span>
                <span className={step === 2 ? "text-brand-green" : ""}>2. Registration</span>
                <span className="text-slate-300">/</span>
                <span className={step === 3 ? "text-brand-green" : ""}>3. Payment</span>
              </div>
            )}

            {/* STEP 1: MOBILE & OTP (GUEST VERIFICATION) */}
            {step === 1 && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-display font-bold text-brand-blue text-sm">Guest Checkout Verification</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Provide your mobile number to instantly verify. If your number exists in our system, you will bypass registration directly to payment.
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Mobile Number</label>
                    <div className="relative">
                      <span className="absolute left-3 top-3.5 text-slate-400">
                        <Smartphone className="w-4 h-4" />
                      </span>
                      <input
                        type="tel"
                        placeholder="e.g. 01711223344"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        disabled={otpSent}
                        className={`w-full text-xs p-3.5 pl-10 border rounded-xl focus:outline-hidden font-medium ${
                          errors.mobile ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-green"
                        }`}
                      />
                    </div>
                    {errors.mobile && (
                      <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.mobile}</span>
                    )}
                  </div>

                  {otpSent && (
                    <div className="animate-slide-up space-y-2">
                      <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1.5">Enter Verification Code (OTP)</label>
                      <div className="relative">
                        <span className="absolute left-3 top-3.5 text-slate-400">
                          <KeyRound className="w-4 h-4" />
                        </span>
                        <input
                          type="text"
                          placeholder="Mock OTP is 1234"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                          className={`w-full text-xs p-3.5 pl-10 border rounded-xl focus:outline-hidden font-medium ${
                            errors.otp ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-green"
                          }`}
                        />
                      </div>
                      {errors.otp && (
                        <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.otp}</span>
                      )}
                      <span className="text-[10px] text-slate-400 block italic">Verification code sent via SMS. Enter <strong>1234</strong> to proceed.</span>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  {!otpSent ? (
                    <button
                      onClick={handleSendOtp}
                      className="w-full bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      Send Verification Code
                    </button>
                  ) : (
                    <button
                      onClick={handleVerifyOtp}
                      className="w-full bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      Verify Code & Continue
                    </button>
                  )}
                  <p className="text-center text-[10px] text-slate-400 mt-3">
                    Already registered? Try mobile: <strong>01711223344</strong> (bypasses to Step 3).
                  </p>
                </div>
              </div>
            )}

            {/* STEP 2: REGISTRATION DETAILS */}
            {step === 2 && (
              <form onSubmit={handleRegisterSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-brand-blue text-sm">Register Personal Information</h4>
                  <p className="text-[10px] text-slate-450 leading-relaxed">
                    First-time purchase registration. All fields are verified instantly.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">First Name</label>
                    <input
                      type="text"
                      placeholder="Tanzila"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:outline-hidden focus:border-brand-green font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Last Name</label>
                    <input
                      type="text"
                      placeholder="Rahman"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:outline-hidden focus:border-brand-green font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Email Address</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3.5 text-slate-400">
                      <Mail className="w-3.5 h-3.5" />
                    </span>
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => handleRegFieldChange("email", e.target.value)}
                      className={`w-full text-xs p-3 pl-9 border rounded-xl focus:outline-hidden font-medium ${
                        errors.email ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-green"
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">National ID (NID)</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3.5 text-slate-400">
                      <Shield className="w-3.5 h-3.5" />
                    </span>
                    <input
                      type="text"
                      placeholder="10, 13 or 17 digit NID"
                      value={nid}
                      onChange={(e) => handleRegFieldChange("nid", e.target.value)}
                      className={`w-full text-xs p-3 pl-9 border rounded-xl focus:outline-hidden font-medium ${
                        errors.nid ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-green"
                      }`}
                    />
                  </div>
                  {errors.nid && (
                    <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.nid}</span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full text-xs p-3 border border-slate-200 rounded-xl focus:outline-hidden focus:border-brand-green font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-slate-500 uppercase mb-1">Confirm Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => handleRegFieldChange("confirmPassword", e.target.value)}
                      className={`w-full text-xs p-3 border rounded-xl focus:outline-hidden font-medium ${
                        errors.confirmPassword ? "border-red-500 focus:border-red-500" : "border-slate-200 focus:border-brand-green"
                      }`}
                    />
                  </div>
                </div>
                {errors.confirmPassword && (
                  <span className="text-[10px] text-red-500 font-semibold mt-1 block">{errors.confirmPassword}</span>
                )}

                <button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-brand-green-hover text-white text-xs font-bold py-3.5 rounded-xl transition-all duration-300 cursor-pointer mt-4"
                >
                  Verify Details & Pay
                </button>
              </form>
            )}

            {/* STEP 3: PAYMENT METHOD */}
            {step === 3 && (
              <div className="space-y-5">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-brand-blue text-sm">Select Payment Gateway</h4>
                  <p className="text-[10px] text-slate-450">
                    Grand Total Premium: <strong className="text-brand-green">BDT {totalCost.toLocaleString()}</strong> (incl. 15% VAT)
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setStep(4)}
                    className="p-4 bg-white border border-slate-200 hover:border-brand-green hover:shadow-xs rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-black text-sm">b</span>
                    <span className="text-xs font-bold text-slate-700">bKash Payment</span>
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="p-4 bg-white border border-slate-200 hover:border-brand-green hover:shadow-xs rounded-2xl flex flex-col items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-black text-sm">N</span>
                    <span className="text-xs font-bold text-slate-700">Nagad Payment</span>
                  </button>
                  <button
                    onClick={() => setStep(4)}
                    className="col-span-2 p-4 bg-white border border-slate-200 hover:border-brand-green hover:shadow-xs rounded-2xl flex items-center justify-center gap-3 cursor-pointer transition-all"
                  >
                    <CreditCard className="w-5 h-5 text-slate-500" />
                    <span className="text-xs font-bold text-slate-700">Credit / Debit Card Gateway</span>
                  </button>
                </div>

                <button
                  onClick={() => setStep(step - 1)}
                  className="w-full text-center text-xs font-bold text-slate-500 py-3 hover:bg-slate-50 rounded-xl transition-colors cursor-pointer"
                >
                  Go Back
                </button>
              </div>
            )}

            {/* STEP 4: SUCCESS POST-PURCHASE STEPPER */}
            {step === 4 && (
              <div className="space-y-6">
                
                {/* Verified success banner */}
                <div className="text-center space-y-2.5">
                  <div className="w-12 h-12 bg-emerald-100 text-brand-green rounded-full flex items-center justify-center mx-auto shadow-md animate-bounce">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-black text-lg text-brand-blue">Payment Received Successfully!</h4>
                  <p className="text-xs text-slate-450 leading-relaxed max-w-sm mx-auto">
                    Your policy is currently being mapped and generated in our database. You can track status live.
                  </p>
                </div>

                {/* Status Stepper Checklist */}
                <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl space-y-4">
                  <span className="text-[10px] font-bold text-slate-400 block uppercase tracking-wider">Live Processing Steps:</span>
                  
                  <div className="space-y-3.5 text-xs font-semibold">
                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        policyStatusStep >= 1 ? "bg-brand-green text-white" : "bg-slate-200 text-slate-500"
                      }`}>
                        ✓
                      </span>
                      <span className={policyStatusStep >= 1 ? "text-slate-700" : "text-slate-400"}>Payment Received</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        policyStatusStep >= 2 ? "bg-brand-green text-white animate-pulse" : "bg-slate-200 text-slate-500"
                      }`}>
                        {policyStatusStep >= 2 ? "✓" : "2"}
                      </span>
                      <span className={policyStatusStep >= 2 ? "text-slate-700" : "text-slate-400"}>Policy Processing</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        policyStatusStep >= 3 ? "bg-brand-green text-white" : "bg-slate-200 text-slate-500"
                      }`}>
                        {policyStatusStep >= 3 ? "✓" : "3"}
                      </span>
                      <div className="flex flex-col">
                        <span className={policyStatusStep >= 3 ? "text-slate-700" : "text-slate-400"}>Policy Generated</span>
                        {policyNumber && (
                          <span className="text-[10px] text-brand-green font-bold font-mono mt-0.5 animate-fade-in">
                            Number: {policyNumber} (Tracking: {trackingId})
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        policyStatusStep >= 4 ? "bg-brand-green text-white" : "bg-slate-200 text-slate-500"
                      }`}>
                        {policyStatusStep >= 4 ? "✓" : "4"}
                      </span>
                      <span className={policyStatusStep >= 4 ? "text-slate-700" : "text-slate-400"}>Email & SMS Sent</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                        policyStatusStep >= 5 ? "bg-brand-green text-white" : "bg-slate-200 text-slate-500"
                      }`}>
                        {policyStatusStep >= 5 ? "✓" : "5"}
                      </span>
                      <span className={policyStatusStep >= 5 ? "text-slate-700" : "text-slate-400"}>Policy Active</span>
                    </div>
                  </div>
                </div>

                {/* SMS & Email notice visual popup alerts */}
                {policyStatusStep >= 4 && (
                  <div className="animate-fade-in space-y-2">
                    {smsNotification && (
                      <div className="p-2.5 bg-emerald-50 border border-emerald-100 rounded-xl text-[10px] text-emerald-850 font-bold flex items-center gap-2">
                        <span>📱</span> <span>{smsNotification}</span>
                      </div>
                    )}
                    {emailNotification && (
                      <div className="p-2.5 bg-blue-50 border border-blue-100 rounded-xl text-[10px] text-blue-850 font-bold flex items-center gap-2">
                        <span>✉️</span> <span>{emailNotification}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Action buttons */}
                <div className="pt-2 flex gap-3">
                  <button
                    disabled={policyStatusStep < 3}
                    onClick={handleDownloadPolicy}
                    className="flex-1 bg-brand-green hover:bg-brand-green-hover disabled:bg-slate-200 disabled:text-slate-400 text-white text-xs font-bold py-3.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Policy Receipt</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-brand-blue hover:bg-brand-blue-light text-white text-xs font-bold py-3.5 px-6 rounded-xl transition-all cursor-pointer"
                  >
                    Close Portal
                  </button>
                </div>

              </div>
            )}

          </div>
        </div>

        {/* AI Chatbot Assistant Side Panel */}
        <div className="w-full md:w-64 bg-slate-50 border-t md:border-t-0 md:border-l border-slate-100 flex flex-col h-[300px] md:h-auto overflow-hidden">
          
          {/* AI Panel Header */}
          <div className="p-4 bg-slate-100 border-b border-slate-200 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="text-xs font-black text-brand-blue uppercase tracking-wider">InsuMama Helper</span>
            </div>
            <span className="px-1.5 py-0.5 bg-emerald-500/10 text-emerald-600 rounded-md text-[8px] font-bold uppercase tracking-wider animate-pulse">
              AI Active
            </span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2.5 text-[11px] leading-normal min-h-0 flex flex-col">
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[85%] p-2.5 rounded-xl mb-1 ${
                  msg.sender === "ai"
                    ? "bg-white text-slate-700 border border-slate-100 self-start"
                    : "bg-brand-green text-white ml-auto self-end"
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
              </div>
            ))}
          </div>

          {/* Quick preset question buttons */}
          <div className="p-2 border-t border-slate-200 bg-slate-100/50 flex flex-wrap gap-1 flex-shrink-0">
            <button
              type="button"
              onClick={() => { setChatInput("Which insurance is right for me?"); }}
              className="text-[9px] font-semibold bg-white border border-slate-200 hover:border-brand-green text-slate-600 hover:text-brand-green px-2 py-1 rounded-lg transition-colors cursor-pointer"
            >
              Which plan fits?
            </button>
            <button
              type="button"
              onClick={() => { setChatInput("What does this policy cover?"); }}
              className="text-[9px] font-semibold bg-white border border-slate-200 hover:border-brand-green text-slate-600 hover:text-brand-green px-2 py-1 rounded-lg transition-colors cursor-pointer"
            >
              What is covered?
            </button>
            <button
              type="button"
              onClick={() => { setChatInput("How much will it cost?"); }}
              className="text-[9px] font-semibold bg-white border border-slate-200 hover:border-brand-green text-slate-600 hover:text-brand-green px-2 py-1 rounded-lg transition-colors cursor-pointer"
            >
              What is cost?
            </button>
          </div>

          {/* Input Chat Area */}
          <div className="p-2 border-t border-slate-200 bg-slate-100 flex gap-1.5 flex-shrink-0">
            <input
              type="text"
              placeholder="Ask InsuMama..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 text-[10px] p-2 border border-slate-200 rounded-lg focus:outline-hidden focus:border-brand-green bg-white font-medium"
            />
            <button
              onClick={handleSendMessage}
              className="p-2 bg-brand-blue text-white rounded-lg hover:bg-brand-blue-light transition-colors cursor-pointer flex items-center justify-center"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
