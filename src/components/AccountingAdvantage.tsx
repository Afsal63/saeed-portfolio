"use client";

import Image from "next/image";
import {
  Calculator,
  ShieldCheck,
  TrendingDown,
  TrendingUp,
  Receipt,
  Scale,
  CheckCircle2,
  XCircle,
  FileSpreadsheet,
} from "lucide-react";

export default function AccountingAdvantage() {
  const comparisons = [
    {
      factor: "Budget Management",
      traditional: "Treats ad budget as a burn rate, focusing on vanity impressions & clicks.",
      saeed: "Treats ad budget as a capital investment with strict ROAS, CAC, and margin controls.",
    },
    {
      factor: "Tracking & Attribution",
      traditional: "Relies solely on browser cookies, losing 20-30% of conversions on iOS & Safari.",
      saeed: "Deploys server-side Meta CAPI and GA4 to ensure zero data drop-off and verified CRM leads.",
    },
    {
      factor: "Lead Quality",
      traditional: "Celebrates cheap lead forms regardless of whether sales teams ever close them.",
      saeed: "Configures CRM lead stages and feedback loops into Meta to optimize for closed revenue.",
    },
    {
      factor: "Reporting & Auditing",
      traditional: "Sends opaque screenshots of ad platform dashboards with complex jargon.",
      saeed: "Builds transparent Looker Studio dashboards reconciling ad spend against actual cash flow.",
    },
  ];

  return (
    <section id="advantage" className="py-20 relative bg-[#060a12] border-b border-white/5 overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5" />
            The Competitive Edge
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why a Marketer With an <span className="text-gradient-emerald">Accounting Mindset</span> Outperforms
          </h2>
          <p className="text-slate-400 text-base">
            Before scaling campaigns, I managed general ledgers, audited balance sheets, and reconciled company cash flows in Dubai and India. That financial discipline is baked into every campaign I launch.
          </p>
        </div>

        {/* Feature Grid: Image & Story on Left, Comparison on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Image with Glass Overlay */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-slate-800/40 to-slate-900/80 shadow-2xl p-4">
              
              <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden bg-slate-950/60 flex items-center justify-center">
                <Image
                  src="/images/saeed-workspace.png"
                  alt="Muhammed Saeed TK at laptop desk"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-contain object-center drop-shadow-xl"
                />
                
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Stat card on top of image card */}
              <div className="mt-3 p-4 rounded-xl bg-slate-900/90 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400">Financial Rigor</div>
                    <div className="text-sm font-bold text-white">Tally • Zoho Books • BBA</div>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-400 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20">
                  Zero Ad Waste
                </span>
              </div>
            </div>

            {/* Quick statement quote */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-300 italic leading-relaxed">
              &ldquo;In accounting, you cannot hide behind vanity metrics because the ledger must balance at the end of the month. I manage paid ad spend with that exact same scrutiny.&rdquo;
            </div>
          </div>

          {/* Right Column: Traditional Marketer vs. Saeed Comparison Table */}
          <div className="lg:col-span-7 space-y-4">
            
            <div className="rounded-2xl border border-white/10 bg-slate-900/70 overflow-hidden shadow-xl backdrop-blur-md">
              
              {/* Header row */}
              <div className="grid grid-cols-12 bg-slate-950/80 p-4 border-b border-white/10 text-xs font-mono font-bold uppercase tracking-wider">
                <div className="col-span-4 text-slate-400">Dimension</div>
                <div className="col-span-4 text-slate-500 flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5 text-rose-400" />
                  Typical Agency
                </div>
                <div className="col-span-4 text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  My Approach
                </div>
              </div>

              {/* Rows */}
              <div className="divide-y divide-white/5">
                {comparisons.map((c, idx) => (
                  <div key={idx} className="grid grid-cols-12 p-4 text-xs gap-3 items-center hover:bg-white/[0.02] transition-colors">
                    <div className="col-span-4 font-bold text-white font-mono flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {c.factor}
                    </div>
                    <div className="col-span-4 text-slate-400 leading-relaxed pr-2">
                      {c.traditional}
                    </div>
                    <div className="col-span-4 text-emerald-300 font-medium leading-relaxed bg-emerald-950/20 p-2.5 rounded-lg border border-emerald-500/20">
                      {c.saeed}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Bottom 3 Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 text-center">
                <div className="text-emerald-400 font-mono font-bold text-sm">CAC : LTV Focus</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Sustainable acquisition unit economics</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 text-center">
                <div className="text-cyan-400 font-mono font-bold text-sm">Lossless CAPI</div>
                <div className="text-[11px] text-slate-400 mt-0.5">Server-side verified data pipeline</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-900/40 border border-white/5 text-center">
                <div className="text-indigo-400 font-mono font-bold text-sm">Dubai &amp; GCC Tax Aware</div>
               
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
