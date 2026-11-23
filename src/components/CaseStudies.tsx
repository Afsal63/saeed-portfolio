"use client";

import { useState } from "react";
import {
  FolderGit2,
  TrendingUp,
  Zap,
  Globe,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  BarChart3,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { PORTFOLIO_DATA, CaseStudy } from "@/data/portfolioData";

type CategoryFilter = "All" | "Paid Ads" | "Analytics & CAPI" | "SEO & Web" | "Social Growth";

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>("All");
  const [expandedId, setExpandedId] = useState<string | null>("aipsoft-saas");

  const categories: CategoryFilter[] = [
    "All",
    "Paid Ads",
    "Analytics & CAPI",
    "SEO & Web",
    "Social Growth",
  ];

  const filteredCaseStudies = PORTFOLIO_DATA.caseStudies.filter((study) => {
    if (selectedCategory === "All") return true;
    return study.category === selectedCategory;
  });

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="case-studies" className="py-20 relative bg-slate-950/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            Selected Case Studies &amp; Campaigns
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Drive <span className="text-gradient-emerald">Measurable Growth</span>
          </h2>
          <p className="text-slate-400 text-base">
            Detailed breakdowns of lead generation engines, server-side attribution setups, and multi-channel scale across UAE and India.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                  selectedCategory === cat
                    ? "bg-emerald-500 text-slate-950 border-emerald-400 shadow-md shadow-emerald-500/25"
                    : "bg-slate-900/60 text-slate-300 border-white/5 hover:bg-slate-800 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {filteredCaseStudies.map((study) => {
            const isExpanded = expandedId === study.id;

            return (
              <div
                key={study.id}
                className={`rounded-2xl transition-all duration-300 border overflow-hidden backdrop-blur-md ${
                  isExpanded
                    ? "bg-slate-900/90 border-emerald-500/50 shadow-2xl shadow-emerald-500/10"
                    : "bg-slate-900/50 border-white/10 hover:border-white/20 hover:bg-slate-900/70"
                }`}
              >
                {/* Header Summary Row */}
                <div
                  onClick={() => toggleExpand(study.id)}
                  className="p-6 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 font-mono font-medium border border-emerald-500/20">
                        {study.category}
                      </span>
                      <span className="text-slate-400 font-medium">
                        {study.client}
                      </span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400">
                        {study.location}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-300">
                      {study.title}
                    </h3>

                    <p className="text-sm text-slate-300 line-clamp-2">
                      {study.overview}
                    </p>
                  </div>

                  {/* Highlights & Toggle */}
                  <div className="flex items-center gap-4 flex-shrink-0">
                    {/* First 2 Key Metrics */}
                    <div className="hidden sm:flex items-center gap-3">
                      {study.metrics.slice(0, 2).map((m, mIdx) => (
                        <div
                          key={mIdx}
                          className="px-3 py-1.5 rounded-lg bg-slate-950/60 border border-white/5 text-right font-mono"
                        >
                          <div className="text-[11px] text-slate-400">{m.label}</div>
                          <div className="text-sm font-bold text-emerald-400">{m.value}</div>
                        </div>
                      ))}
                    </div>

                    <button
                      className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                      aria-label="Toggle details"
                    >
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/10 space-y-6 bg-slate-950/40">
                    
                    {/* Metrics Grid on Mobile / Full */}
                    <div>
                      <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
                        Key Campaign Metrics &amp; Achievements
                      </h4>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {study.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-500/20 text-center font-mono"
                          >
                            <div className="text-xs text-slate-400">{metric.label}</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-400 mt-1">
                              {metric.value}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Challenge & Solution Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                        <div className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                          The Challenge
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {study.challenge}
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-900/60 border border-white/5 space-y-2">
                        <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                          Execution Strategy &amp; Architecture
                        </div>
                        <ul className="space-y-1.5 text-sm text-slate-300">
                          {study.solution.map((step, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span>{step}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Tools and Stack */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span className="text-xs font-mono text-slate-400 mr-2">Tech Stack:</span>
                        {study.tools.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-slate-300 border border-white/10 font-mono"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <a
                        href={`https://wa.me/971502478377?text=Hi%20Muhammed%20Saeed,%20I%20would%20like%20to%20discuss%20results%20similar%20to%20your%20${encodeURIComponent(
                          study.title
                        )}%20campaign.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                      >
                        <span>Discuss this case study</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
