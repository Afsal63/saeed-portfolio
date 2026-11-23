"use client";

import { useState } from "react";
import Image from "next/image";
import { Download, Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Approach", href: "#approach" },
    { name: "Process", href: "#process" },
    { name: "Selected Works", href: "#works" },
    { name: "Calculator", href: "#calculator" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full bg-[#fafaf9]/80 backdrop-blur-md sticky top-0 z-50 border-b border-neutral-200/60 py-3.5 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand / Signature Logo */}
        <a href="#overview" className="flex items-center gap-2 group">
          <span className="font-serif italic text-2xl font-bold tracking-tight text-neutral-900 group-hover:text-lime-700 transition-colors">
            Saeed TK
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-lime-500"></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-medium uppercase tracking-wider text-neutral-600 hover:text-neutral-950 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download="Muhammed_Saeed_TK_Resume.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-700 hover:text-neutral-950 bg-white border border-neutral-200 rounded-full shadow-xs hover:border-neutral-300 transition-all"
          >
            <Download className="w-3.5 h-3.5 text-neutral-600" />
            <span>Resume</span>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-neutral-950 hover:bg-neutral-800 rounded-full transition-all shadow-xs"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-neutral-700 hover:text-neutral-950 bg-white border border-neutral-200 rounded-full shadow-xs"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-6 py-5 space-y-4 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-1.5 text-sm font-medium text-neutral-700 hover:text-neutral-950"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-neutral-100 flex flex-col gap-2">
            <a
              href={PORTFOLIO_DATA.personal.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-white bg-neutral-950 rounded-full"
            >
              <span>Get in Touch on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.resumeUrl}
              download="Muhammed_Saeed_TK_Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-neutral-800 bg-neutral-100 rounded-full"
            >
              <Download className="w-3.5 h-3.5 text-neutral-600" />
              <span>Download CV (PDF)</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
