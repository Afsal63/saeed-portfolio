"use client";

import { useState, useMemo } from "react";
import { Calculator, Sliders, ArrowRight, ShieldCheck, Target } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

type Currency = "AED" | "USD" | "INR";

interface IndustryData {
  name: string;
  avgCplUsd: number;
  conversionRate: number;
  avgDealValueUsd: number;
  cpmUsd: number;
  desc: string;
}

const INDUSTRIES: Record<string, IndustryData> = {
  saas: {
    name: "B2B Software & SaaS",
    avgCplUsd: 38,
    conversionRate: 0.12,
    avgDealValueUsd: 1200,
    cpmUsd: 18,
    desc: "Targeting enterprise decision-makers with Meta CAPI CRM qualification (like AIPSOFT).",
  },
  travel: {
    name: "Travel & Hospitality",
    avgCplUsd: 12,
    conversionRate: 0.15,
    avgDealValueUsd: 450,
    cpmUsd: 9,
    desc: "High-volume inquiry funnels with fast sales turnaround (like our 90 leads/day blitz).",
  },
  fmcg: {
    name: "Food, FMCG & Retail",
    avgCplUsd: 9,
    conversionRate: 0.18,
    avgDealValueUsd: 180,
    cpmUsd: 6,
    desc: "Broad brand reach + distributor lead acquisition (like Thanima 816K reach).",
  },
  services: {
    name: "Consulting & Professional Services",
    avgCplUsd: 26,
    conversionRate: 0.14,
    avgDealValueUsd: 850,
    cpmUsd: 14,
    desc: "Google Search & Meta intent ads capturing ready-to-buy clients.",
  },
};

const CURRENCY_RATES: Record<Currency, { symbol: string; rate: number; step: number; min: number; max: number; defaultSpend: number }> = {
  AED: { symbol: "AED", rate: 3.67, step: 500, min: 3500, max: 150000, defaultSpend: 15000 },
  USD: { symbol: "$", rate: 1.0, step: 250, min: 1000, max: 40000, defaultSpend: 4000 },
  INR: { symbol: "₹", rate: 85.0, step: 10000, min: 50000, max: 3000000, defaultSpend: 300000 },
};

export default function RoiCalculator() {
  const [currency, setCurrency] = useState<Currency>("AED");
  const [industryKey, setIndustryKey] = useState<string>("saas");
  const [spend, setSpend] = useState<number>(CURRENCY_RATES.AED.defaultSpend);

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency);
    setSpend(CURRENCY_RATES[newCurrency].defaultSpend);
  };

  const curr = CURRENCY_RATES[currency];
  const industry = INDUSTRIES[industryKey];

  const stats = useMemo(() => {
    const cpl = industry.avgCplUsd * curr.rate;
    const projectedLeads = Math.max(1, Math.round(spend / cpl));
    const estimatedDeals = Math.max(1, Math.round(projectedLeads * industry.conversionRate));
    const pipelineRevenue = estimatedDeals * (industry.avgDealValueUsd * curr.rate);
    const roas = spend > 0 ? (pipelineRevenue / spend).toFixed(1) : "0.0";

    return {
      cpl: Math.round(cpl),
      projectedLeads,
      estimatedDeals,
      pipelineRevenue: Math.round(pipelineRevenue),
      roas,
    };
  }, [spend, curr, industry]);

  const whatsappMessage = encodeURIComponent(
    `Hi Muhammed Saeed, I calculated my campaign projections: Monthly Ad Spend ${curr.symbol} ${spend.toLocaleString()} in ${industry.name}. Projected leads: ~${stats.projectedLeads}. Let's discuss!`
  );

  return (
    <section id="calculator" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-t border-neutral-200/80">
      
      {/* Header */}
      <div className="text-center space-y-2 mb-12">
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
          /Planning Tool
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-sans">
          Campaign ROI Estimator
        </h2>
        <p className="text-sm text-neutral-600 max-w-md mx-auto">
          Simple, transparent estimates based on our verified agency benchmarks across UAE and India.
        </p>
      </div>

      {/* Main Calculator Box */}
      <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-10 shadow-xs grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Controls Column */}
        <div className="md:col-span-7 space-y-6">
          
          {/* Currency Toggle */}
          <div>
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Select Currency
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(["AED", "USD", "INR"] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => handleCurrencyChange(c)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold font-mono transition-all border ${
                    currency === c
                      ? "bg-neutral-950 text-white border-neutral-950 shadow-xs"
                      : "bg-neutral-50 border-neutral-200 text-neutral-600 hover:bg-neutral-100"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* Industry Dropdown */}
          <div>
            <label className="block text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2">
              Select Industry
            </label>
            <select
              value={industryKey}
              onChange={(e) => setIndustryKey(e.target.value)}
              className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm font-medium text-neutral-900 focus:outline-none focus:border-neutral-950 cursor-pointer"
            >
              {Object.entries(INDUSTRIES).map(([k, ind]) => (
                <option key={k} value={k}>
                  {ind.name}
                </option>
              ))}
            </select>
            <p className="text-xs text-neutral-500 mt-1.5 italic">
              {industry.desc}
            </p>
          </div>

          {/* Spend Slider */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                Monthly Ad Spend
              </span>
              <span className="text-base font-bold font-mono text-neutral-950">
                {curr.symbol} {spend.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={curr.min}
              max={curr.max}
              step={curr.step}
              value={spend}
              onChange={(e) => setSpend(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-neutral-950"
            />
            <div className="flex justify-between text-[11px] text-neutral-400 font-mono mt-1">
              <span>{curr.symbol} {curr.min.toLocaleString()}</span>
              <span>{curr.symbol} {curr.max.toLocaleString()}</span>
            </div>
          </div>

        </div>

        {/* Output Results Card */}
        <div className="md:col-span-5 bg-[#fbfcf8] border border-neutral-200 rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between">
          
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-neutral-500">
              Projected Monthly Leads
            </div>
            <div className="text-4xl sm:text-5xl font-extrabold text-neutral-950 font-mono mt-1">
              ~{stats.projectedLeads}{" "}
              <span className="text-base font-semibold text-lime-700">Leads</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-2 border-t border-neutral-200/60">
            <div>
              <div className="text-[11px] text-neutral-500 font-mono">Est. Cost / Lead</div>
              <div className="text-lg font-bold font-mono text-neutral-900">
                ~{curr.symbol} {stats.cpl}
              </div>
            </div>

            <div>
              <div className="text-[11px] text-neutral-500 font-mono">Projected ROAS</div>
              <div className="text-lg font-bold font-mono text-lime-700">
                {stats.roas}x Return
              </div>
            </div>
          </div>

          <a
            href={`https://wa.me/971502478377?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-neutral-950 text-white font-medium text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-xs"
          >
            <span>Book Strategy Call</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>

        </div>

      </div>

    </section>
  );
}
