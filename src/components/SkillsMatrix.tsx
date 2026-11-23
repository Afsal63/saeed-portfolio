"use client";

import { useState } from "react";
import {
  Target,
  BarChart3,
  Globe,
  Zap,
  Calculator,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SkillsMatrix() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const icons = [Target, BarChart3, Globe, Zap, Calculator];

  return (
    <section id="skills" className="py-20 relative bg-slate-950/70 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Core Competencies &amp; Tech Stack
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Full-Funnel <span className="text-gradient-emerald">Technical Arsenal</span>
          </h2>
          <p className="text-slate-400 text-base">
            From server-side conversion pipelines and high-ROAS creative testing to financial ledger reconciliations, here is the full scope of my capabilities.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 max-w-4xl mx-auto">
          {PORTFOLIO_DATA.skillCategories.map((cat, idx) => {
            const Icon = icons[idx] || Target;
            const isActive = activeTab === idx;

            return (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold tracking-wider transition-all border ${
                  isActive
                    ? "bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border-emerald-400/80 text-emerald-300 shadow-lg shadow-emerald-500/10"
                    : "bg-slate-900/50 text-slate-400 border-white/5 hover:text-white hover:bg-slate-800"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-emerald-400" : "text-slate-400"}`} />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Content */}
        <div className="max-w-4xl mx-auto bg-slate-900/80 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                {PORTFOLIO_DATA.skillCategories[activeTab].title}
              </h3>
              <p className="text-sm text-slate-400 mt-1">
                {PORTFOLIO_DATA.skillCategories[activeTab].description}
              </p>
            </div>
            <div className="text-xs font-mono font-bold text-emerald-400 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 self-start sm:self-center">
              Audited Hands-On Skills
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PORTFOLIO_DATA.skillCategories[activeTab].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 hover:border-emerald-500/30 transition-all space-y-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    {skill.name}
                  </span>
                  {skill.highlight && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-cyan-300 border border-white/10">
                      {skill.highlight}
                    </span>
                  )}
                </div>

                {/* Proficiency Visual Bar */}
                <div className="space-y-1">
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-slate-500">
                    <span>Proficiency</span>
                    <span className="text-slate-400">{skill.level}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Brands Worked With Ticker / Pills */}
        <div className="mt-16 text-center">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Trusted Experience Across Regional Brands &amp; Sectors
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-5xl mx-auto">
            {PORTFOLIO_DATA.clientsAndBrands.map((brand, bIdx) => (
              <span
                key={bIdx}
                className="px-3.5 py-1.5 text-xs font-medium rounded-full bg-slate-900/60 border border-white/5 text-slate-300 hover:border-emerald-500/30 hover:text-white transition-all"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
