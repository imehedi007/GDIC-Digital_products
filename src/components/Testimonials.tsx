import React from "react";
import { Star, BadgeCheck } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Tashfia Rahman",
      role: "Corporate Lead, Tech Solutions",
      insurance: "Nibedita Protection Plan",
      comment: "As a working mother, having Nibedita insurance gives me an immense sense of security. The trauma support features are progressive, and registering my policy online took less than 5 minutes.",
      rating: 5,
    },
    {
      name: "Imtiaz Ahmed",
      role: "Entrepreneur",
      insurance: "Motor & Health Combo",
      comment: "When my vehicle met with an accident last year, I expected long paper trails. Green Delta surprised me with their e-claims portal. The reimbursement was resolved in just 3 days directly to my bank.",
      rating: 5,
    },
    {
      name: "Samantha Paul",
      role: "Pet Owner & Veterinarian",
      insurance: "Pet Insurance (Dog)",
      comment: "GDIC's Pet Insurance is a lifesaver. It covered my Golden Retriever's surgery expenses smoothly. Having reliable pet coverage in Bangladesh is a huge milestone. Highly recommend!",
      rating: 5,
    },
  ];

  return (
    <section id="about" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="text-xs font-bold text-brand-green uppercase tracking-[0.2em]">Customer Testimonials</p>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-brand-blue tracking-tight leading-tight">
            Trusted By Thousands of <br />
            <span className="gradient-text-blue-green font-extrabold">Happy Families & Businesses</span>
          </h2>
          <p className="text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            Don&apos;t just take our word for it. Read the experiences of our policyholders who enjoy hassle-free protection every day.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white border border-slate-100 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Star Ratings */}
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>
              </div>

              {/* User Bio */}
              <div className="mt-8 pt-6 border-t border-slate-50 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-blue/5 border border-brand-blue/10 flex items-center justify-center font-bold text-brand-blue select-none">
                  {review.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-brand-blue">{review.name}</span>
                    <BadgeCheck className="w-3.5 h-3.5 text-brand-green" />
                  </div>
                  <span className="text-[10px] text-slate-400 block">{review.role}</span>
                  <span className="inline-block mt-1 text-[9px] font-extrabold text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                    {review.insurance}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
