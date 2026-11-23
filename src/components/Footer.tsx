"use client";

import { ArrowUp, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-white text-neutral-500 text-xs border-t border-neutral-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="font-serif italic font-bold text-neutral-900 text-base">Saeed TK</span>
          <span className="text-neutral-300">•</span>
          <span>Performance Marketing Specialist • Dubai, UAE</span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download="Muhammed_Saeed_TK_Resume.pdf"
            className="hover:text-neutral-900 transition-colors"
          >
            Download Resume (PDF)
          </a>
          <span className="text-neutral-300">•</span>
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-neutral-900 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
