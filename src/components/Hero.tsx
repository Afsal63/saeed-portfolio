"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  const [photoMode, setPhotoMode] = useState<"portrait" | "standing" | "workspace">("portrait");

  const photos = {
    portrait: {
      src: "/images/saeed-portrait.png",
      alt: "Muhammed Saeed TK - Performance Marketing Specialist",
      label: "Portrait",
      containerClass: "w-[260px] sm:w-[300px] lg:w-[330px] h-[340px] sm:h-[400px] lg:h-[430px]",
    },
    standing: {
      src: "/images/saeed-standing.png",
      alt: "Muhammed Saeed TK standing",
      label: "Full Stance",
      containerClass: "w-[260px] sm:w-[300px] lg:w-[330px] h-[340px] sm:h-[400px] lg:h-[430px]",
    },
    workspace: {
      src: "/images/saeed-workspace.png",
      alt: "Muhammed Saeed TK at laptop workspace",
      label: "Growth Desk",
      containerClass: "w-[300px] sm:w-[360px] lg:w-[400px] h-[280px] sm:h-[340px] lg:h-[370px]",
    },
  };

  const currentPhoto = photos[photoMode];

  return (
    <section id="overview" className="pt-2 pb-10 sm:pt-6 sm:pb-14 px-3 sm:px-6 max-w-6xl mx-auto">
      
      {/* Main Hero Card Container */}
      <div className="relative rounded-[28px] sm:rounded-[40px] bg-[#fbfcf8] border border-neutral-200/90 shadow-xs overflow-hidden px-5 py-6 sm:px-10 sm:py-10 lg:px-12 lg:pt-10 lg:pb-0 min-h-[580px] sm:min-h-[640px] lg:min-h-[670px] flex flex-col justify-between">
        
        {/* Soft Lime Glow Aura behind the center */}
        <div className="absolute top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[480px] lg:w-[540px] h-[320px] sm:h-[480px] lg:h-[540px] hero-glow rounded-full pointer-events-none -z-0" />

        {/* Top Header Group: Award Pill + Headline */}
        <div className="relative z-20 text-center max-w-3xl mx-auto space-y-3">
          
          {/* Award / Credibility Badge */}
          <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-medium text-neutral-600 bg-white/90 backdrop-blur-xs px-3.5 py-1 rounded-full border border-neutral-200/90 shadow-2xs">
            <span className="text-neutral-400">( ✦ )</span>
            <span className="font-semibold text-neutral-900">Performance Marketing Specialist</span>
            <span className="text-neutral-400">•</span>
            <span>Dubai, UAE</span>
          </div>

          {/* Headline with Clean Spacing - No Overlap */}
          <div className="pt-1">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-950 font-sans leading-tight">
              Hi I&apos;m Saeed
            </h1>
            <p className="font-serif italic font-normal text-4xl sm:text-6xl lg:text-7xl text-neutral-950 leading-snug tracking-tight mt-1 sm:mt-2">
              Performance Marketer
            </p>
          </div>
        </div>

        {/* Desktop Layout (lg+): Left Block | Center Cutout | Right Block */}
        <div className="relative z-10 hidden lg:grid grid-cols-12 items-end mt-4">
          
          {/* Left Block: Available pill, Social Proof, and Photo Mode Switcher */}
          <div className="col-span-4 pb-8 space-y-6 max-w-[270px]">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs text-xs font-medium text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
              <span>Available for new opportunities</span>
            </div>

            {/* Social Proof Avatars */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-900 text-white text-[10px] font-bold flex items-center justify-center shadow-xs">
                  90L
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-lime-500 text-neutral-950 text-[10px] font-bold flex items-center justify-center shadow-xs">
                  816K
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-200 text-neutral-700 text-[10px] font-bold flex items-center justify-center shadow-xs">
                  100%
                </div>
              </div>
              <div className="text-xs text-neutral-600 leading-tight">
                <span className="font-semibold text-neutral-900 block">Proven Multi-Market Results</span>
                <span>UAE, Saudi Arabia &amp; India</span>
              </div>
            </div>

            {/* Photo mode selector */}
            <div className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-xs p-1 rounded-full border border-neutral-200 text-[11px] font-medium text-neutral-600 shadow-2xs">
              {(["portrait", "standing", "workspace"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setPhotoMode(mode)}
                  className={`px-2.5 py-0.5 rounded-full transition-all ${
                    photoMode === mode
                      ? "bg-neutral-900 text-white font-semibold"
                      : "hover:text-neutral-950"
                  }`}
                >
                  {photos[mode].label}
                </button>
              ))}
            </div>
          </div>

          {/* Center Column: Cutout Photo with Smooth Mask Blending */}
          <div className="col-span-4 flex justify-center items-end relative">
            <div className={`relative ${currentPhoto.containerClass} blend-cutout`}>
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                priority
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 300px, 340px"
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-sm"
              />
            </div>
          </div>

          {/* Right Block: Bio Description & Black Pill CTA */}
          <div className="col-span-4 pb-8 flex flex-col items-end space-y-6 text-right max-w-[270px] ml-auto">
            <p className="text-sm text-neutral-600 leading-relaxed font-normal">
              passionate about creating data-driven paid acquisition that connects brands with high-intent customers and real revenue.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-neutral-950 text-white font-medium text-xs uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-md group"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

        </div>

        {/* Mobile / Tablet Layout (< lg): Clean Vertical Flow Without Overlaps */}
        <div className="lg:hidden flex flex-col items-center pt-4 space-y-6 relative z-10">
          
          {/* Photo in Center with Smooth Mask Blending */}
          <div className="relative flex justify-center items-end">
            <div className={`relative ${currentPhoto.containerClass} blend-cutout`}>
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                priority
                sizes="300px"
                className="object-contain object-bottom select-none pointer-events-none drop-shadow-sm"
              />
            </div>
          </div>

          {/* Info & Actions */}
          <div className="w-full flex flex-col items-center text-center space-y-4 pt-2">
            
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 shadow-2xs text-xs font-medium text-neutral-800">
              <span className="w-2 h-2 rounded-full bg-lime-500 animate-pulse"></span>
              <span>Available for new opportunities</span>
            </div>

            {/* Bio Description */}
            <p className="text-sm text-neutral-600 leading-relaxed max-w-sm">
              passionate about creating data-driven paid acquisition that connects brands with high-intent customers and real revenue.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-neutral-950 text-white font-medium text-xs uppercase tracking-wider hover:bg-neutral-800 shadow-md"
              >
                <span>Get in Touch</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Photo Mode Switcher */}
              <div className="inline-flex items-center gap-1 bg-white p-1 rounded-full border border-neutral-200 text-[11px] font-medium text-neutral-600 shadow-2xs">
                {(["portrait", "standing", "workspace"] as const).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setPhotoMode(mode)}
                    className={`px-2.5 py-0.5 rounded-full transition-all ${
                      photoMode === mode
                        ? "bg-neutral-900 text-white font-semibold"
                        : "hover:text-neutral-950"
                    }`}
                  >
                    {photos[mode].label}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="pt-2 text-xs text-neutral-500">
              <span className="font-semibold text-neutral-900">Proven Multi-Market Results:</span> UAE, Saudi Arabia &amp; India
            </div>

          </div>

        </div>

      </div>

      {/* Client / Brand Logo Row Below Hero */}
      <div className="mt-8 pt-4 pb-2 border-b border-neutral-200/80">
        <div className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 text-center mb-4">
          Campaign Experience &amp; Client Collaborations
        </div>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
          <span className="hover:text-neutral-900 transition-colors">Tadkeer Info</span>
          <span className="text-neutral-300">•</span>
          <span className="hover:text-neutral-900 transition-colors">AIPSOFT Software</span>
          <span className="text-neutral-300">•</span>
          <span className="hover:text-neutral-900 transition-colors">Thanima Food</span>
          <span className="text-neutral-300">•</span>
          <span className="hover:text-neutral-900 transition-colors">Motion Digital</span>
          <span className="text-neutral-300">•</span>
          <span className="hover:text-neutral-900 transition-colors">Maco Media</span>
          <span className="text-neutral-300">•</span>
          <span className="hover:text-neutral-900 transition-colors">Adzpire</span>
          <span className="text-neutral-300">•</span>
         
        </div>
      </div>

    </section>
  );
}
