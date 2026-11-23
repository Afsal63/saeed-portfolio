"use client";

import { Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-t border-neutral-200/80">
      
      {/* Header */}
      <div className="text-center space-y-2 mb-14">
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
          /Career &amp; Background
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-sans">
          Experience &amp; Track Record
        </h2>
        <p className="text-sm text-neutral-600 max-w-md mx-auto">
          From fast-paced advertising agencies in India to software product growth in the UAE, backed by formal corporate accounting.
        </p>
      </div>

      {/* Timeline Cards */}
      <div className="space-y-6">
        {PORTFOLIO_DATA.experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`rounded-3xl p-6 sm:p-8 border transition-all ${
              exp.isCurrent
                ? "bg-white border-lime-400 shadow-sm"
                : "bg-white/70 border-neutral-200/80 hover:border-neutral-300"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-950">
                    {exp.role}
                  </h3>
                  {exp.isCurrent && (
                    <span className="px-2.5 py-0.5 text-[10px] font-mono font-bold bg-lime-100 text-lime-800 rounded-full">
                      CURRENT
                    </span>
                  )}
                </div>
                
                <div className="flex items-center gap-2 text-sm text-neutral-600 font-medium mt-1">
                  <Building2 className="w-4 h-4 text-neutral-400" />
                  <span>{exp.company}</span>
                  <span className="text-neutral-300">•</span>
                  <span className="text-xs text-neutral-500 font-mono">
                    {exp.type}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:items-end text-xs text-neutral-500 font-mono space-y-0.5">
                <span className="flex items-center gap-1.5 text-neutral-700">
                  <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5 text-neutral-500">
                  <MapPin className="w-3.5 h-3.5 text-neutral-400" />
                  {exp.location}
                </span>
              </div>
            </div>

            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              {exp.description}
            </p>

            <div className="space-y-1.5 mb-4">
              {exp.achievements.map((item, aIdx) => (
                <div key={aIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700">
                  <CheckCircle2 className="w-4 h-4 text-lime-600 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-neutral-100">
              {exp.skills.map((s) => (
                <span
                  key={s}
                  className="px-2 py-0.5 text-[11px] rounded-md bg-neutral-100 text-neutral-600 font-mono"
                >
                  {s}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
