"use client";

import { ArrowRight, Quote } from "lucide-react";

export default function ProcessSection() {
  const steps = [
    {
      step: "01",
      title: "Discover & Audit",
      desc: "Auditing conversion infrastructure, setting up server-side Meta CAPI, GA4, GTM, and identifying site speed or indexing bottlenecks.",
    },
    {
      step: "02",
      title: "Design & Launch",
      desc: "Developing high-intent ad creatives, audience segmentation, landing page CRO in WordPress/Elementor, and instant lead form hooks.",
    },
    {
      step: "03",
      title: "Scale & Deliver",
      desc: "Continuous A/B testing, lowering cost per lead (CPL), CRM webhook syncing, and executive Looker Studio performance dashboards.",
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-neutral-200/80">
      
      {/* Header */}
      <div className="text-center space-y-2 mb-14">
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
          /Our Process Explained
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-sans">
          Here&apos;s how it works
        </h2>
      </div>

      {/* 3 Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
        {steps.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white border border-neutral-200/90 p-8 shadow-xs hover:border-lime-400 hover:shadow-md transition-all duration-300 relative group"
          >
            {/* Step Number in Serif */}
            <div className="text-3xl sm:text-4xl font-serif italic text-neutral-300 group-hover:text-lime-600 transition-colors mb-6">
              {item.step}
            </div>

            <h3 className="text-xl font-bold text-neutral-950 mb-3 tracking-tight">
              {item.title}
            </h3>

            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              {item.desc}
            </p>

            <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-semibold text-lime-700">
              <span>Phase {idx + 1} Execution</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>
        ))}
      </div>

      {/* 2 Clean Client Quote Snippets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 pt-8">
        
        <div className="p-6 rounded-2xl bg-neutral-100/60 border border-neutral-200/60 space-y-3">
          <p className="text-sm text-neutral-700 italic leading-relaxed">
            &ldquo;Working with Saeed was seamless. He understood our travel campaign goals quickly, tested targeted creative hooks, and delivered 90 qualified leads in a single day.&rdquo;
          </p>
          <div className="text-xs font-semibold text-neutral-900">
            Travel Agency Campaign Partner <span className="font-normal text-neutral-500">• Motion Digital</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-neutral-100/60 border border-neutral-200/60 space-y-3">
          <p className="text-sm text-neutral-700 italic leading-relaxed">
            &ldquo;Saeed brought our brand reach to life. Our Instagram views exploded from 208K to 816K in 3 months, and his lead sprint yielded 86 leads in a single campaign.&rdquo;
          </p>
          <div className="text-xs font-semibold text-neutral-900">
            FMCG Campaign Representative <span className="font-normal text-neutral-500">• Thanima Food Industries</span>
          </div>
        </div>

      </div>

    </section>
  );
}
