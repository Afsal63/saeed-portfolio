"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, TrendingUp, Zap, ShieldCheck, Globe } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function SelectedWorks() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Paid Ads", "Analytics & CAPI", "SEO & Web"];

  const works = [
    {
      title: "AIPSOFT Enterprise B2B SaaS",
      client: "Tadkeer Information Solution",
      category: "Analytics & CAPI",
      location: "Abu Dhabi, UAE",
      impact: "62 Leads • 10,199 Reached • 100/100 SEO",
      summary:
        "Deployed Meta Conversions API (CAPI) for server-side CRM lead events. Solved sitemap indexing issues (64 URLs, 3/3 rich results) and audited 100 PageSpeed SEO.",
      tags: ["Meta CAPI", "Meta Ads", "GA4", "Looker Studio", "SEO Score 100"],
      metricPrimary: "62 Leads",
      metricSecondary: "10,199 Reach",
      badgeColor: "bg-blue-50 text-blue-800 border-blue-200",
      accentBg: "from-blue-50/50 to-neutral-50",
    },
    {
      title: "24-Hour Acquisition Blitz",
      client: "Premier Travel Agency",
      category: "Paid Ads",
      location: "Kerala, India",
      impact: "90 Leads in 24 Hours • -42% CPL",
      summary:
        "Executed high-season holiday Meta ads with instant inquiry routing and negative targeting, generating 90 qualified traveler inquiries in a single 24-hour sprint.",
      tags: ["Meta Ads", "Lead Generation", "Canva", "CRM Routing"],
      metricPrimary: "90 Leads",
      metricSecondary: "24 Hours",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
      accentBg: "from-emerald-50/50 to-neutral-50",
    },
    {
      title: "390% Audience Reach & Views Surge",
      client: "Thanima Food Industries",
      category: "Paid Ads",
      location: "Kerala, India",
      impact: "208.5K → 816.2K Views • 86 Campaign Leads",
      summary:
        "Transformed regional FMCG digital presence through daily motion stories, Meta brand awareness, and targeted wholesale/retail buyer acquisition.",
      tags: ["Instagram Growth", "Meta Ads", "86 Leads", "Content Calendars"],
      metricPrimary: "816.2K",
      metricSecondary: "+390% Views",
      badgeColor: "bg-lime-50 text-lime-800 border-lime-200",
      accentBg: "from-lime-50/50 to-neutral-50",
    },
    {
      title: "Admissions Portal & Agency CRO",
      client: "Maco Media Campus & Motion Digital",
      category: "SEO & Web",
      location: "India & Remote",
      impact: "45 Messaging Conversations • Fast Load",
      summary:
        "Designed and SEO-optimized macomediacampus.com and motiondigitalads.com in WordPress and Elementor. Ran admission Meta messaging campaigns.",
      tags: ["WordPress", "Elementor", "Technical SEO", "Speed Audit"],
      metricPrimary: "45 Qualified",
      metricSecondary: "Conversations",
      badgeColor: "bg-purple-50 text-purple-800 border-purple-200",
      accentBg: "from-purple-50/50 to-neutral-50",
    },
  ];

  const filteredWorks = filter === "All" ? works : works.filter((w) => w.category === filter);

  return (
    <section id="works" className="py-16 sm:py-24 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neutral-200/80">
      
      {/* Header with Title and Filter Pills */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
            /Best Projects
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-sans">
            Selected Works
          </h2>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap items-center gap-1.5 bg-neutral-100 p-1 rounded-full border border-neutral-200/60 self-start md:self-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3.5 py-1 text-xs font-semibold rounded-full transition-all ${
                filter === cat
                  ? "bg-white text-neutral-950 shadow-xs"
                  : "text-neutral-600 hover:text-neutral-950"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2x2 Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredWorks.map((work, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white border border-neutral-200/90 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
          >
            {/* Top Mockup / Metric Preview Box */}
            <div className={`p-8 bg-gradient-to-br ${work.accentBg} border-b border-neutral-100 relative overflow-hidden`}>
              
              {/* Subtle background glow circle */}
              <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-lime-300/30 blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6 relative z-10">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${work.badgeColor}`}>
                  {work.category}
                </span>
                <span className="text-xs font-mono text-neutral-500">
                  {work.location}
                </span>
              </div>

              {/* Big KPI Display */}
              <div className="space-y-1 relative z-10">
                <div className="text-3xl sm:text-4xl font-extrabold text-neutral-950 font-mono tracking-tight">
                  {work.metricPrimary}
                </div>
                <div className="text-xs font-semibold text-neutral-600 uppercase tracking-wider">
                  {work.metricSecondary}
                </div>
              </div>

              {/* Verified pill */}
              <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs text-neutral-600">
                <CheckCircle2 className="w-3.5 h-3.5 text-lime-600" />
                <span className="font-medium">{work.impact}</span>
              </div>
            </div>

            {/* Bottom Card Body */}
            <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
              <div>
                <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-1">
                  {work.client}
                </div>
                <h3 className="text-xl font-bold text-neutral-950 tracking-tight group-hover:text-lime-700 transition-colors">
                  {work.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed mt-2 font-normal">
                  {work.summary}
                </p>
              </div>

              {/* Tags & Action */}
              <div className="pt-4 border-t border-neutral-100 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {work.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 text-[11px] rounded-md bg-neutral-100 text-neutral-700 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={PORTFOLIO_DATA.personal.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900 hover:text-lime-700 transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
