"use client";

import {
  TrendingUp,
  Zap,
  Target,
  ShieldCheck,
  CheckCircle2,
  Users,
  Search,
  Globe2,
} from "lucide-react";

export default function MetricsTicker() {
  const highlights = [
    {
      metric: "90",
      suffix: " Leads",
      tag: "Single Day",
      title: "Rapid Travel Agency Blitz",
      desc: "Delivered 90 high-intent Meta ad leads in 24 hours with negative keyword pruning and instant hooks.",
      icon: Zap,
      accent: "from-emerald-500 to-teal-400",
      textColor: "text-emerald-400",
    },
    {
      metric: "390%",
      suffix: " Reach Surge",
      tag: "3 Months",
      title: "Thanima Food Industries",
      desc: "Scaled Instagram views from 208.5K to 816.2K and Facebook views from 295.3K to 809.5K through daily motion creatives.",
      icon: TrendingUp,
      accent: "from-cyan-500 to-blue-400",
      textColor: "text-cyan-400",
    },
    {
      metric: "100",
      suffix: "/100",
      tag: "PageSpeed SEO",
      title: "AIPSOFT SaaS Technical Audit",
      desc: "Achieved perfect 100 SEO & 95 Accessibility scores on PageSpeed Insights; discovered 64 URLs with 3/3 rich results.",
      icon: ShieldCheck,
      accent: "from-indigo-500 to-purple-400",
      textColor: "text-indigo-400",
    },
    {
      metric: "86",
      suffix: " Leads",
      tag: "1 Campaign",
      title: "FMCG / Food Manufacturing",
      desc: "Acquired 86 high-volume wholesale and consumer leads in a single promotional sprint for Thanima.",
      icon: Target,
      accent: "from-amber-500 to-orange-400",
      textColor: "text-amber-400",
    },
    {
      metric: "10,199",
      suffix: " Reached",
      tag: "B2B Software",
      title: "Meta CAPI CRM Lead Pipeline",
      desc: "Generated 62 qualified enterprise leads for AIPSOFT, tracking CRM events server-side via Meta CAPI.",
      icon: Users,
      accent: "from-rose-500 to-pink-400",
      textColor: "text-rose-400",
    },
    {
      metric: "3",
      suffix: " Markets",
      tag: "GCC & India",
      title: "Multi-Regional Expertise",
      desc: "Running campaigns compliant with local consumer psychology across UAE (Dubai, Abu Dhabi), Saudi Arabia, and India.",
      icon: Globe2,
      accent: "from-teal-500 to-emerald-400",
      textColor: "text-teal-400",
    },
  ];

  return (
    <section id="impact" className="py-20 relative bg-slate-950/60 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            Verified Results &amp; Data Points
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proof in <span className="text-gradient-emerald">Hard Numbers</span>
          </h2>
          <p className="text-slate-400 text-base">
            No fluff, no vague promises. Every campaign is tracked, audited, and optimized for measurable return on ad spend (ROAS) and revenue impact.
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative group p-6 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/40 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-500/10 backdrop-blur-md"
              >
                {/* Header: Tag & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-0.5 text-[11px] font-mono font-semibold rounded-md bg-white/5 border border-white/10 text-slate-300">
                    {item.tag}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-300 group-hover:text-emerald-400 group-hover:bg-emerald-500/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Big Metric Display */}
                <div className="mb-2">
                  <span className={`text-4xl sm:text-5xl font-black font-mono tracking-tight ${item.textColor}`}>
                    {item.metric}
                  </span>
                  <span className="text-lg font-bold text-slate-200 ml-1">
                    {item.suffix}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>

                {/* Subtle bottom indicator */}
                <div className="mt-5 pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-slate-500 font-mono">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Audited Campaign Data</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
