import React from "react";
import { ShieldCheck, Users, BadgeDollarSign, Sparkles } from "lucide-react";

export default function StatsSection() {
  const stats = [
    {
      label: "Claims Settled Successfully",
      value: "99.2%",
      description: "Highest settlement efficiency in the private insurance sector.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-green" />,
    },
    {
      label: "Registered Customers",
      value: "3.5M+",
      description: "Trusted by millions of individuals and corporate partners nationwide.",
      icon: <Users className="w-6 h-6 text-brand-green" />,
    },
    {
      label: "Claims Disbursed",
      value: "BDT 4.8B+",
      description: "Delivering solid financial security exactly when it matters most.",
      icon: <BadgeDollarSign className="w-6 h-6 text-brand-green" />,
    },
    {
      label: "Corporate Standing",
      value: "25+ Years",
      description: "Pioneering non-life insurance innovation and excellence since 1986.",
      icon: <Sparkles className="w-6 h-6 text-brand-green" />,
    },
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Visual glowing layout */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-green/30 hover:bg-white/[0.07] transition-all duration-300 group"
            >
              <div className="p-3 bg-white/5 group-hover:bg-brand-green/10 w-fit rounded-xl transition-all">
                {stat.icon}
              </div>
              <div className="mt-6 space-y-2">
                <span className="text-3xl font-black tracking-tight text-white block group-hover:text-brand-green transition-colors">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-slate-350 block">
                  {stat.label}
                </span>
                <p className="text-[11px] text-slate-400 leading-relaxed pt-1">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
