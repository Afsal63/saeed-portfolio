"use client";

import { Sparkles } from "lucide-react";

export default function PhilosophySection() {
  const pills = [
    { label: "Meta Ads Manager", color: "bg-orange-50 border-orange-200 text-orange-800", dot: "bg-orange-500" },
    { label: "Meta CAPI & GA4", color: "bg-blue-50 border-blue-200 text-blue-800", dot: "bg-blue-500" },
    { label: "Google Search & YouTube", color: "bg-purple-50 border-purple-200 text-purple-800", dot: "bg-purple-500" },
    { label: "Technical SEO 100/100", color: "bg-emerald-50 border-emerald-200 text-emerald-800", dot: "bg-emerald-500" },
    { label: "CRM & Funnel Tracking", color: "bg-amber-50 border-amber-200 text-amber-800", dot: "bg-amber-500" },
    { label: "Financial Budget Discipline", color: "bg-lime-50 border-lime-200 text-lime-900", dot: "bg-lime-500" },
  ];

  return (
    <section id="approach" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto text-center">
      
      {/* Hello! label in elegant serif italic */}
      <div className="font-serif italic text-2xl sm:text-3xl text-neutral-400 mb-4">
        Hello!
      </div>

      {/* Main statement with playful serif accent */}
      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium text-neutral-800 tracking-tight leading-[1.3] max-w-4xl mx-auto">
        focus is on blending <span className="font-bold text-neutral-950">clear strategy</span>,{" "}
        <span className="font-bold text-neutral-950">thoughtful data</span>, and{" "}
        <span className="font-bold text-neutral-950">financial discipline</span> to{" "}
        <span className="font-serif italic text-3xl sm:text-5xl lg:text-6xl text-neutral-950 font-normal">
          craft campaigns
        </span>{" "}
        that solve real problems
      </h2>

      {/* Floating Badges */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10 max-w-3xl mx-auto">
        {pills.map((pill, idx) => (
          <div
            key={idx}
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-medium shadow-2xs ${pill.color}`}
          >
            <span className={`w-2 h-2 rounded-full ${pill.dot}`} />
            <span>{pill.label}</span>
          </div>
        ))}
      </div>

    </section>
  );
}
