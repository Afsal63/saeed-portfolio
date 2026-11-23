"use client";

import Image from "next/image";
import {
  User,
  GraduationCap,
  Award,
  Globe2,
  Download,
  CheckCircle2,
  Sparkles,
  MapPin,
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 relative bg-[#080c16] border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            Background &amp; Credentials
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient-emerald">Muhammed Saeed TK</span>
          </h2>
          <p className="text-slate-400 text-base">
            Growth strategist, technical ad buyer, and business graduate focused on unit-economic scale.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Portrait & Quick Bio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl p-6 bg-slate-900/80 border border-white/10 shadow-2xl relative overflow-hidden backdrop-blur-xl">
              
              {/* Image Frame */}
              <div className="relative w-full h-[360px] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center mb-6 border border-white/5">
                <Image
                  src="/images/saeed-portrait.png"
                  alt="Muhammed Saeed TK Portrait"
                  fill
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-slate-200 font-mono font-semibold">Dubai, UAE</span>
                  </div>
                  <span className="text-slate-400 font-mono">DOB: 2000-08-24</span>
                </div>
              </div>

              {/* Bio summary */}
              <div className="space-y-3 text-sm text-slate-300 leading-relaxed">
                <p>
                  I bridge the gap between creative storytelling and analytical precision. Having lived and executed campaigns across India and the United Arab Emirates, I understand how cultural nuances dictate consumer click behavior and conversion funnels.
                </p>
                <p>
                  Whether scaling enterprise B2B SaaS pipelines with Meta CAPI or generating rapid-fire leads for hospitality and FMCG, my focus is always rooted in the P&amp;L statement: <strong>cost efficiency, lead quality, and measurable cash flow</strong>.
                </p>
              </div>

              {/* Download Resume Button */}
              <div className="pt-5 mt-5 border-t border-white/10">
                <a
                  href={PORTFOLIO_DATA.personal.resumeUrl}
                  download="Muhammed_Saeed_TK_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-white/10 hover:border-emerald-500/40 transition-all shadow-md"
                >
                  <Download className="w-4 h-4 text-emerald-400" />
                  <span>Download Official Resume (PDF)</span>
                </a>
              </div>

            </div>

            {/* Languages Card */}
            <div className="p-6 rounded-3xl bg-slate-900/60 border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
                <Globe2 className="w-4 h-4 text-cyan-400" />
                Languages
              </div>
              <div className="grid grid-cols-3 gap-2">
                {PORTFOLIO_DATA.languages.map((lang, lIdx) => (
                  <div key={lIdx} className="p-2.5 rounded-xl bg-slate-950/60 border border-white/5 text-center">
                    <div className="text-sm font-bold text-white">{lang.name}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{lang.proficiency.split(" ")[0]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Education, Certifications & Values */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Certifications Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 shadow-xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Professional Certifications</h3>
                    <p className="text-xs text-slate-400">Verified credentials &amp; platform accreditations</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 px-2.5 py-1 rounded">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {PORTFOLIO_DATA.certifications.map((cert, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 flex items-start gap-3 hover:border-emerald-500/30 transition-colors"
                  >
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0 mt-0.5">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-white leading-snug">
                        {cert.name}
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-0.5">
                        Issuer: {cert.issuer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formal Education Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 shadow-xl space-y-4">
              <div className="flex items-center gap-2.5 border-b border-white/10 pb-4">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Academic Foundation</h3>
                  <p className="text-xs text-slate-400">Business administration &amp; commercial strategy</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/60 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-base font-bold text-white">
                    {PORTFOLIO_DATA.education.degree}
                  </div>
                  <div className="text-xs text-cyan-400 font-mono mt-0.5">
                    {PORTFOLIO_DATA.education.institution} • {PORTFOLIO_DATA.education.location}
                  </div>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {PORTFOLIO_DATA.education.relevance}
                  </p>
                </div>
                <div className="text-xs font-mono font-bold text-slate-400 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 self-start sm:self-center">
                  {PORTFOLIO_DATA.education.period}
                </div>
              </div>
            </div>

            {/* Core Operating Principles */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/80 border border-white/10 shadow-xl space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                My Core Operating Principles
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Attribution First:</strong> Never spend money until GTM, GA4, and Meta CAPI are verified to prevent tracking black holes.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>Creative As The Targeting:</strong> In modern algorithmic ads, creative velocity and angle testing do 80% of the heavy lifting.
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span>
                    <strong>P&amp;L Alignment:</strong> Marketing metrics must align with actual bank deposits, unit margins, and sales rep pipeline velocity.
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
