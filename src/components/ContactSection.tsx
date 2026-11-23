"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Download,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ArrowUpRight,
} from "lucide-react";
import { LinkedinIcon } from "@/components/Icons";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "$3,000 - $10,000 / mo",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    const subject = encodeURIComponent(`Growth Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nBudget: ${formData.budget}\n\nProject Scope:\n${formData.message}`
    );
    window.open(`mailto:${PORTFOLIO_DATA.personal.email}?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 max-w-5xl mx-auto border-t border-neutral-200/80">
      
      {/* Header */}
      <div className="text-center space-y-2 mb-14">
        <div className="text-xs font-mono text-neutral-400 uppercase tracking-widest">
          /Initiate Collaboration
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-neutral-900 font-sans">
          Let&apos;s Connect
        </h2>
        <p className="text-sm text-neutral-600 max-w-md mx-auto">
          Available for performance marketing roles, full-funnel Meta CAPI setups, and growth contracts across Dubai, GCC, and remote.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Direct Contact Info */}
        <div className="md:col-span-5 space-y-3">
          
          {/* WhatsApp Card */}
          <a
            href={PORTFOLIO_DATA.personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl bg-neutral-950 text-white flex items-center justify-between shadow-xs hover:bg-neutral-800 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-lime-400 text-neutral-950 flex items-center justify-center font-bold">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-lime-400 font-semibold">
                  Fastest Response
                </div>
                <div className="text-sm font-bold">
                  Chat on WhatsApp
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
          </a>

          {/* Phone Card */}
          <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-neutral-400 font-mono">Phone (Dubai)</div>
                <a
                  href={`tel:${PORTFOLIO_DATA.personal.phone.replace(/\s+/g, "")}`}
                  className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-lime-700 font-mono"
                >
                  {PORTFOLIO_DATA.personal.phone}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyPhone}
              className="p-1.5 text-neutral-400 hover:text-neutral-900"
              title="Copy phone"
            >
              {copiedPhone ? <Check className="w-4 h-4 text-lime-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* Email Card */}
          <div className="p-4 rounded-2xl bg-white border border-neutral-200/90 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-700">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-neutral-400 font-mono">Email Address</div>
                <a
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  className="text-xs sm:text-sm font-bold text-neutral-900 hover:text-lime-700 font-mono break-all"
                >
                  {PORTFOLIO_DATA.personal.email}
                </a>
              </div>
            </div>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 text-neutral-400 hover:text-neutral-900"
              title="Copy email"
            >
              {copiedEmail ? <Check className="w-4 h-4 text-lime-600" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>

          {/* LinkedIn Card */}
          <a
            href={PORTFOLIO_DATA.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white border border-neutral-200/90 flex items-center justify-between hover:border-neutral-300 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-neutral-400 font-mono">LinkedIn</div>
                <div className="text-xs sm:text-sm font-bold text-neutral-900 group-hover:text-blue-600">
                  linkedin.com/in/muhammedsaeedtk
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
          </a>

          {/* Download Resume Card */}
          <a
            href={PORTFOLIO_DATA.personal.resumeUrl}
            download="Muhammed_Saeed_TK_Resume.pdf"
            className="p-4 rounded-2xl bg-white border border-neutral-200/90 flex items-center justify-between hover:border-neutral-300 transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-neutral-100 text-neutral-700 flex items-center justify-center">
                <Download className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] text-neutral-400 font-mono">Official Resume</div>
                <div className="text-xs sm:text-sm font-bold text-neutral-900">
                  Download CV (PDF)
                </div>
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
          </a>

        </div>

        {/* Right Column: Clean Inquiry Form */}
        <div className="md:col-span-7 bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 shadow-xs">
          <h3 className="text-lg font-bold text-neutral-900 mb-1">
            Send a Direct Brief
          </h3>
          <p className="text-xs text-neutral-500 mb-6">
            Share your goals or challenges below and I will reply with initial audit observations.
          </p>

          {formSubmitted ? (
            <div className="p-6 rounded-2xl bg-lime-50 border border-lime-200 text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-lime-600 mx-auto" />
              <div className="text-sm font-bold text-neutral-950">Email Draft Opened!</div>
              <p className="text-xs text-neutral-600">
                Your email client was opened with your message. You can also chat with me directly on WhatsApp.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Name / Company *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah / Tech Agency"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@company.com"
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Monthly Ad Budget
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900"
                >
                  <option value="Under $3,000 / mo">Under $3,000 / mo</option>
                  <option value="$3,000 - $10,000 / mo">$3,000 - $10,000 / mo</option>
                  <option value="$10,000 - $30,000 / mo">$10,000 - $30,000 / mo</option>
                  <option value="$30,000+ / mo">$30,000+ / mo</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-600 uppercase tracking-wider mb-1">
                  Message / Goal *
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your campaign objectives..."
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-2.5 text-sm text-neutral-900 focus:outline-none focus:border-neutral-900 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-neutral-950 text-white font-medium text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Send Inquiry</span>
              </button>
            </form>
          )}

        </div>

      </div>

    </section>
  );
}
