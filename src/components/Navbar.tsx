"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown, User, PhoneCall, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-brand-blue flex items-center gap-1 leading-none">
                GREEN DELTA
              </span>
              <span className="text-[9px] font-bold tracking-[0.2em] text-brand-green uppercase leading-none mt-1">
                Insurance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors py-2">
                Insurance Products <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-blue transition-colors" />
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[480px] p-4 bg-white rounded-2xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mt-2 grid grid-cols-2 gap-2">
                <div className="p-3 hover:bg-brand-light rounded-xl transition-colors">
                  <p className="font-semibold text-sm text-brand-blue">Personal Insurance</p>
                  <div className="flex flex-wrap gap-x-2 gap-y-1 mt-1 text-xs text-slate-500">
                    <Link href="/pet-insurance" className="hover:text-brand-green font-semibold">Pet Cover</Link>
                    <span>•</span>
                    <Link href="/health-insurance" className="hover:text-brand-green font-semibold">Health</Link>
                    <span>•</span>
                    <Link href="/nibedita-insurance" className="hover:text-brand-green font-semibold">Nibedita</Link>
                    <span>•</span>
                    <Link href="/ppa-insurance" className="hover:text-brand-green font-semibold">Accident (PPA)</Link>
                    <span>•</span>
                    <Link href="/travel-insurance" className="hover:text-brand-green font-semibold">Travel</Link>
                    <span>•</span>
                    <Link href="/motor-insurance" className="hover:text-brand-green font-semibold">Motor</Link>
                  </div>
                </div>
                <div className="p-3 hover:bg-brand-light rounded-xl transition-colors">
                  <p className="font-semibold text-sm text-brand-blue">Corporate Solutions</p>
                  <p className="text-xs text-slate-500 mt-0.5">Industrial, Aviation, Marine & Cyber</p>
                </div>
                <div className="p-3 hover:bg-brand-light rounded-xl transition-colors">
                  <p className="font-semibold text-sm text-brand-blue">Micro Insurance</p>
                  <p className="text-xs text-slate-500 mt-0.5">Agriculture, Livestock & Weather-index</p>
                </div>
                <Link href="/nibedita-insurance" className="block p-3 hover:bg-brand-light rounded-xl transition-colors">
                  <p className="font-semibold text-sm text-brand-blue">Nibedita Protection</p>
                  <p className="text-xs text-slate-500 mt-0.5">Comprehensive plan tailored for women</p>
                </Link>
              </div>
            </div>
            <Link href="#claims" className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors">
              Claims Center
            </Link>
            <Link href="#calculator" className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors">
              Premium Estimator
            </Link>
            <Link href="#about" className="text-sm font-semibold text-slate-700 hover:text-brand-blue transition-colors">
              About Us
            </Link>
            <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-brand-green" />
              <span>Digital Services</span>
            </div>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <Link href="tel:+16266" className="flex items-center gap-1.5 text-xs font-bold text-brand-blue hover:text-brand-green transition-colors px-3 py-2">
              <PhoneCall className="w-4 h-4" />
              <span>16266</span>
            </Link>
            <Link
              href="#portal"
              className="whitespace-nowrap flex items-center gap-1.5 text-sm font-semibold text-brand-blue hover:text-brand-green border border-slate-200 hover:border-brand-green/30 px-4 py-2 rounded-xl transition-all duration-300"
            >
              <User className="w-4 h-4" />
              <span>Customer Portal</span>
            </Link>
            <Link
              href="#calculator"
              className="whitespace-nowrap relative text-sm font-semibold text-white bg-brand-green hover:bg-brand-green-hover px-5 py-2.5 rounded-xl shadow-md shadow-brand-green/20 hover:shadow-lg hover:shadow-brand-green/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-600 lg:hidden transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[70px] bg-white border-b border-slate-100 shadow-xl transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-y-100 visible" : "opacity-0 scale-y-95 invisible h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-3">
          <div className="py-2 border-b border-slate-50 font-bold text-xs text-slate-400 tracking-wider uppercase">Insurance Products</div>
          <Link
            href="/pet-insurance"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-brand-green hover:bg-slate-50"
          >
            Pet Insurance 🐾
          </Link>
          <Link
            href="/health-insurance"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-brand-green hover:bg-slate-50"
          >
            Health Insurance 🏥
          </Link>
          <Link
            href="/nibedita-insurance"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-brand-green hover:bg-slate-50"
          >
            Nibedita (Women) 🌸
          </Link>
          <Link
            href="/ppa-insurance"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-brand-green hover:bg-slate-50"
          >
            Accident Protection (PPA) 🛡️
          </Link>
          <Link
            href="/travel-insurance"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-brand-green hover:bg-slate-50"
          >
            Travel Insurance ✈️
          </Link>
          <Link
            href="/motor-insurance"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-brand-green hover:bg-slate-50"
          >
            Motor Insurance 🚗
          </Link>
          <Link
            href="#corporate"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
          >
            Corporate Solutions
          </Link>
          <div className="py-2 border-b border-slate-50 font-bold text-xs text-slate-400 tracking-wider uppercase">Quick Links</div>
          <Link
            href="#claims"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
          >
            Claims Center
          </Link>
          <Link
            href="#calculator"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
          >
            Premium Estimator
          </Link>
          <Link
            href="#about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-blue"
          >
            About Us
          </Link>
          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="#portal"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-center text-sm font-semibold text-brand-blue border border-slate-200 py-3 rounded-xl hover:bg-slate-50"
            >
              <User className="w-4 h-4" />
              Customer Portal
            </Link>
            <Link
              href="#calculator"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center text-sm font-semibold text-white bg-brand-green py-3 rounded-xl shadow-md hover:bg-brand-green-hover"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
