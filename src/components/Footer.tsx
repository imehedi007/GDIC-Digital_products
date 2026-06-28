"use client";

import React from "react";
import Link from "next/link";
import { Shield, PhoneCall, Mail, MapPin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-slate-300 border-t border-slate-800">
      {/* Top Banner: Quick support call */}
      <div className="border-b border-slate-800 bg-brand-blue/30 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-brand-green/10 text-brand-green rounded-xl">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Need immediate assistance?</p>
              <p className="text-xl font-extrabold text-white">Call 16266 <span className="text-xs font-normal text-slate-400">(Toll-Free in Bangladesh)</span></p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="#hospitals"
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-800 hover:bg-slate-750 text-xs font-bold text-white rounded-xl transition-all duration-300"
            >
              <span>Find Network Hospitals</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </Link>
            <Link
              href="#claims"
              className="flex items-center gap-1.5 px-4 py-2 bg-brand-green hover:bg-brand-green-hover text-xs font-bold text-white rounded-xl transition-all duration-300"
            >
              <span>Initiate Claim Online</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo & Company info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-linear-to-tr from-brand-blue to-brand-green p-0.5 shadow-md">
                <div className="w-full h-full bg-brand-blue-dark rounded-[10px] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-brand-green" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3L2 21H22L12 3Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                  GREEN DELTA
                </span>
                <span className="text-[9px] font-bold tracking-[0.2em] text-brand-green uppercase leading-none mt-1">
                  Insurance
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Green Delta Insurance Company Limited (GDIC) is one of the leading private non-life insurance companies in Bangladesh, committed to providing secure digital solutions and reliable support.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-brand-green" />
                <span className="text-slate-350">info@greendelta.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-brand-green mt-1 flex-shrink-0" />
                <span className="text-slate-350 leading-relaxed">
                  Green Delta Aims Tower (6th Floor), 51-52 Mohakhali C/A, Dhaka-1212
                </span>
              </div>
            </div>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              <Link href="https://facebook.com" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-green text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Link>
              <Link href="https://twitter.com" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-green text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300" aria-label="Twitter">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </Link>
              <Link href="https://linkedin.com" className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-brand-green text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300" aria-label="LinkedIn">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </Link>
            </div>
          </div>

          {/* Column 1: Insurance Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Products</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#pet" className="hover:text-brand-green transition-colors">Pet Insurance</Link></li>
              <li><Link href="#health" className="hover:text-brand-green transition-colors">Health Insurance</Link></li>
              <li><Link href="#nibedita" className="hover:text-brand-green transition-colors">Nibedita (Women)</Link></li>
              <li><Link href="#ppa" className="hover:text-brand-green transition-colors">Personal Accident (PPA)</Link></li>
              <li><Link href="#overseas" className="hover:text-brand-green transition-colors">Overseas Travel</Link></li>
              <li><Link href="#motor" className="hover:text-brand-green transition-colors">Motor Insurance</Link></li>
            </ul>
          </div>

          {/* Column 2: Digital Utilities */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Actions</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="#claims" className="hover:text-brand-green transition-colors">Register a Claim</Link></li>
              <li><Link href="#calculator" className="hover:text-brand-green transition-colors">Calculate Premium</Link></li>
              <li><Link href="#portal" className="hover:text-brand-green transition-colors">Client Portal</Link></li>
              <li><Link href="#downloads" className="hover:text-brand-green transition-colors">Policy Downloads</Link></li>
              <li><Link href="#faq" className="hover:text-brand-green transition-colors">Help & FAQ</Link></li>
            </ul>
          </div>

          {/* Column 3: Newsletter */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Newsletter</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Subscribe to stay updated with Green Delta&apos;s latest products, features, and circulars.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-hidden focus:border-brand-green transition-colors"
                required
              />
              <button
                type="submit"
                className="w-full bg-brand-green hover:bg-brand-green-hover text-xs font-semibold text-white py-2.5 rounded-xl transition-all duration-300 cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-slate-800 bg-slate-950 py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1">
            <span>© {new Date().getFullYear()} Green Delta Insurance Company Ltd. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span className="flex items-center gap-1 text-slate-400">
              <Shield className="w-3.5 h-3.5 text-brand-green" /> Approved by IDRA, Govt of Bangladesh.
            </span>
          </div>
          <div className="flex gap-6">
            <Link href="#privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="#terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
            <Link href="#sitemap" className="hover:text-slate-400 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
