export interface Metric {
  value: string;
  label: string;
  sublabel: string;
  iconName: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: "Paid Ads" | "Analytics & CAPI" | "SEO & Web" | "Social Growth";
  location: string;
  period: string;
  overview: string;
  challenge: string;
  solution: string[];
  metrics: { label: string; value: string }[];
  tools: string[];
  featured?: boolean;
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  isCurrent?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: { name: string; level: number; highlight?: string }[];
}

export interface Certification {
  name: string;
  issuer: string;
  badgeColor: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Muhammed Saeed TK",
    tagline: "Performance Marketing Specialist & Growth Strategist",
    subheadline:
      "Turning ad spend into predictable revenue across the UAE, Saudi Arabia, and India. Combining technical paid acquisition (Meta Ads, Google Ads, Meta CAPI) with the financial discipline of an accounting background.",
    location: "Dubai, UAE",
    phone: "+971 502478377",
    email: "saeedrashidtk@gmail.com",
    linkedin: "https://linkedin.com/in/muhammedsaeedtk",
    whatsapp: "https://wa.me/971502478377?text=Hi%20Muhammed%20Saeed,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
    resumeUrl: "/Muhammed_Saeed_TK_Resume.pdf",
    experienceYears: "1.5+",
    status: "Available for Hire & Growth Contracts",
    aboutMe:
      "I am a results-oriented Performance Marketing Specialist with extensive hands-on experience driving high-velocity lead generation, paid acquisition, and conversion rate optimization across the UAE, GCC, and Indian markets. Having an academic and practical foundation in Accounting (BBA, Tally, Zoho Books) gives me a unique competitive edge: I don't treat marketing as an expense line or chase vanity metrics—I treat every campaign as a financial investment engineered for maximum ROAS, minimal CAC, and verified CRM lead quality.",
  },

  heroMetrics: [
    {
      value: "90",
      suffix: " Leads",
      timeframe: "In 24 Hours",
      label: "Single-day Meta Ads blitz for Travel Agency",
      iconName: "Zap",
    },
    {
      value: "390%",
      suffix: " Reach Surge",
      timeframe: "3 Months",
      label: "Instagram views from 208.5K to 816.2K",
      iconName: "TrendingUp",
    },
    {
      value: "100",
      suffix: "/100",
      timeframe: "PageSpeed SEO",
      label: "Perfect technical SEO & 95 Accessibility",
      iconName: "ShieldCheck",
    },
    {
      value: "86",
      suffix: " B2B/B2C Leads",
      timeframe: "Single Campaign",
      label: "Thanima Food Industries campaign launch",
      iconName: "Target",
    },
  ],

  caseStudies: [
    {
      id: "aipsoft-saas",
      title: "B2B Software Lead Engine & Full-Funnel CAPI Integration",
      client: "AIPSOFT (Tadkeer Information Solution)",
      category: "Analytics & CAPI",
      location: "Remote (Abu Dhabi, UAE)",
      period: "06/2026 – Present",
      overview:
        "Engineered a high-intent Meta Lead Generation system for enterprise software, backed by server-side Meta Conversions API (CAPI) for lossless CRM tracking and real-time sales pipeline visibility.",
      challenge:
        "Software buyer journeys require high trust and qualified leads without ad wastage or signal loss caused by browser-side tracking drop-offs.",
      solution: [
        "Architected and deployed custom Meta Instant Forms optimized for B2B software decision-makers.",
        "Implemented server-side Meta Conversions API (CAPI) sending CRM lead events to the AIPSOFT Leads dataset.",
        "Verified server events in Meta Test Events and structured the sales funnel for post-lead quality analysis.",
        "Audited technical infrastructure: fixed sitemap.xml indexing (64 URLs discovered, 3/3 rich results validated) and achieved 100/100 PageSpeed SEO score.",
        "Built executive reporting dashboards in Looker Studio, Google Analytics 4, and Microsoft Clarity.",
      ],
      metrics: [
        { label: "High-Intent Leads", value: "62 Qualified" },
        { label: "Audience Reach", value: "10,199 People" },
        { label: "Discovered URLs", value: "64 Indexed" },
        { label: "PageSpeed SEO Score", value: "100 / 100" },
      ],
      tools: ["Meta Ads Manager", "Meta CAPI", "GA4", "GTM", "Looker Studio", "Microsoft Clarity", "Search Console"],
      featured: true,
    },
    {
      id: "travel-lead-blitz",
      title: "24-Hour Acquisition Blitz: 90 High-Intent Travel Leads",
      client: "Premier Travel Agency Client",
      category: "Paid Ads",
      location: "Guruvayoor, Kerala, India",
      period: "Motion Digital Ads",
      overview:
        "Designed and executed an aggressive rapid-response Meta ad campaign to capture high-season holiday travelers with laser-targeted creative and dynamic instant inquiry hooks.",
      challenge:
        "Travel market ad costs can skyrocket rapidly without immediate ad fatigue management and rapid lead qualification.",
      solution: [
        "Tested multi-angle video & carousel creatives showcasing tailored holiday packages and transparent pricing.",
        "Used tight audience segmentation combining interest clusters with recent travel intent signals.",
        "Streamlined lead form fields to balance frictionless completion with qualification questions.",
        "Routed leads instantaneously to the agency's sales desk for sub-15 minute follow-ups.",
      ],
      metrics: [
        { label: "Leads in 24 Hours", value: "90 Leads" },
        { label: "Average CPL Reduction", value: "-42%" },
        { label: "Lead Response Time", value: "< 15 Mins" },
        { label: "Booking Conversion", value: "High ROI" },
      ],
      tools: ["Meta Ads Manager", "Facebook & Instagram Ads", "Lead Forms", "Canva", "CRM Automation"],
      featured: true,
    },
    {
      id: "thanima-food-growth",
      title: "390% Audience Reach & Views Explosion for Food Manufacturer",
      client: "Thanima Food Industries",
      category: "Social Growth",
      location: "Pattambi, Kerala, India",
      period: "07/2025 – 12/2025 (Maco Ads)",
      overview:
        "Transformed a regional food manufacturer's digital footprint through structured Meta brand awareness, high-frequency motion graphics, and a breakthrough lead campaign.",
      challenge:
        "Standing out in a saturated FMCG/food marketplace where consumer attention is fleeting and organic reach alone is insufficient.",
      solution: [
        "Created a 90-day organic and paid synergy strategy using daily stories, short-form Reels, and motion graphics.",
        "Launched focused Meta brand awareness campaigns paired with location-specific distribution targeting.",
        "Executed a specialized lead generation campaign in October 2025 capturing wholesale & retail buyers.",
        "Delivered detailed monthly performance reports with cost per engagement and impression frequency controls.",
      ],
      metrics: [
        { label: "Instagram Views", value: "208.5K → 816.2K" },
        { label: "Instagram Reach", value: "112.5K → 516.6K" },
        { label: "Facebook Views", value: "295.3K → 809.5K" },
        { label: "Campaign Leads", value: "86 In 1 Month" },
      ],
      tools: ["Meta Ads", "Instagram Growth", "Motion Graphics", "Content Calendars", "Meta Business Suite"],
      featured: true,
    },
    {
      id: "maco-campus-web",
      title: "Full-Funnel Student Admission Engine & Website Optimization",
      client: "Maco Media Campus",
      category: "SEO & Web",
      location: "Kerala, India",
      period: "Maco Ads",
      overview:
        "Designed and built the institute's primary portal (macomediacampus.com) and led a direct Meta messaging campaign resulting in 45 high-intent admission conversations.",
      challenge:
        "Prospective digital marketing students require comprehensive course transparency, trust signals, and direct WhatsApp/DM interaction channels before enrolling.",
      solution: [
        "Designed and deployed macomediacampus.com using WordPress and Elementor, optimized for mobile speed and UX.",
        "Structured technical on-page SEO to capture regional search intent for digital marketing academies.",
        "Launched December 2025 Meta messaging ads connected directly to admissions advisors.",
        "Personally produced and appeared in short-form Reels to boost authentic engagement and campus credibility.",
      ],
      metrics: [
        { label: "Direct Conversations", value: "45 Qualified" },
        { label: "Website Architecture", value: "100% Custom" },
        { label: "On-Page SEO", value: "Top Rankings" },
        { label: "Creative Output", value: "Multi-Reel Series" },
      ],
      tools: ["WordPress", "Elementor", "Technical SEO", "Meta Messaging Ads", "Video Production"],
      featured: false,
    },
    {
      id: "motion-digital-portal",
      title: "Agency Website Architecture & High-Conversion Landing Pages",
      client: "Motion Digital Ads",
      category: "SEO & Web",
      location: "Guruvayoor, Kerala, India",
      period: "Motion Digital Ads",
      overview:
        "Engineered the official agency website (motiondigitalads.com) and high-speed client landing pages focused on fast loading, conversion copywriting, and client acquisition.",
      challenge:
        "Agencies must practice what they preach: their own website must load fast, look modern, and demonstrate conversion engineering.",
      solution: [
        "Built responsive, mobile-first pages with WordPress and Elementor.",
        "Implemented strict speed optimizations: image compression, asset minification, and canonical hygiene.",
        "Integrated direct WhatsApp booking buttons, lead forms, and GA4 tracking.",
        "Coordinated professional video shoots to generate bespoke client assets.",
      ],
      metrics: [
        { label: "Load Speed", value: "< 1.4s" },
        { label: "On-Page SEO", value: "Comprehensive" },
        { label: "Brand Presence", value: "Global Standard" },
      ],
      tools: ["WordPress", "Elementor", "PageSpeed Insights", "GA4", "GTM"],
      featured: false,
    },
    {
      id: "adzpire-freelance",
      title: "Multi-Client Paid Media & Local SEO Growth Strategy",
      client: "Diverse SME Portfolio (Adzpire)",
      category: "Paid Ads",
      location: "Remote / UAE & India",
      period: "Ongoing",
      overview:
        "Managed Google Search, Display, and Meta campaigns for clients in education, healthcare, salon services, and trading across Jonito Crown, Al-fitrah, Britcare, Shalco, and Zuhoor.",
      challenge:
        "Each SME had distinct unit economics, localized audiences, and strict budget constraints requiring zero ad waste.",
      solution: [
        "Conducted thorough keyword research and negative keyword pruning for Google Search campaigns.",
        "Optimized Google Business Profiles and localized social media to capture high-intent 'near me' queries.",
        "Designed tailored creatives in Canva and produced ad shoots for local businesses (Lyra Salon).",
        "Provided transparent monthly ROI reporting with actionable budget allocation recommendations.",
      ],
      metrics: [
        { label: "Client Verticals", value: "6+ Industries" },
        { label: "CTR Improvement", value: "+35% Avg" },
        { label: "Local Visibility", value: "Top 3 Map Pack" },
      ],
      tools: ["Google Search Ads", "Google Display Ads", "Google Business Profile", "Canva", "Meta Ads"],
      featured: false,
    },
  ],

  experiences: [
    {
      role: "Digital Marketing Specialist",
      company: "Tadkeer Information Solution",
      location: "Remote (Abu Dhabi, UAE)",
      period: "06/2026 – Present",
      type: "Full-Time",
      isCurrent: true,
      description:
        "Leading growth marketing, paid acquisition, and conversion tracking infrastructure for software and tech products including AIPSOFT.",
      achievements: [
        "Generated 62 qualified B2B leads reaching 10,199 target people via optimized Meta lead-form campaigns.",
        "Deployed Meta CAPI to push CRM lead events directly to Aipsoft Leads dataset; verified events and built sales funnel lead quality analysis.",
        "Resolved pricing page indexing bottleneck via sitemap.xml restructure: 64 URLs discovered and 3/3 rich result types validated.",
        "Audited website speed with PageSpeed Insights, achieving SEO score 100 and Accessibility score 95 with image delivery and render-blocking fixes.",
        "Built full enterprise tracking stack: GA4, GTM, Microsoft Clarity, Looker Studio dashboards, and Google Search Console.",
        "Implemented SEO infrastructure: www/non-www redirects, canonical tags, title/description reviews, and Yellow Pages UAE backlink submissions.",
      ],
      skills: ["Meta Ads", "Meta CAPI", "Google Tag Manager", "GA4", "Looker Studio", "Technical SEO", "Speed Optimization"],
    },
    {
      role: "Digital Marketing Executive",
      company: "Motion Digital Ads",
      location: "Guruvayoor, Kerala, India",
      period: "01/2026 – 06/2026",
      type: "Agency",
      description:
        "Managed high-impact client accounts across travel, education, hospitality, and logistics, steering paid ads, landing pages, and creative shoots.",
      achievements: [
        "Delivered a single-day breakthrough of 90 qualified leads for a travel agency client via Meta Ads.",
        "Ran end-to-end paid lead generation and engagement campaigns across education, hospitality, and logistics sectors.",
        "Built and maintained client websites and landing pages using WordPress and Elementor (including motiondigitalads.com) focused on conversion rate optimization.",
        "Served as primary client contact: conducted discovery calls, client status briefings, and ongoing project management.",
        "Scheduled and directed professional video shoots ensuring creative deliverables aligned with performance campaign KPIs.",
        "Delivered Meta Ads and content for clients: La Ray Glass and Deco, Bhasuri Inn, Audio Miqueas Recording Studio, and Cargofam Logistics.",
      ],
      skills: ["Meta Ads", "Lead Generation", "WordPress", "Elementor", "Client Management", "Creative Direction"],
    },
    {
      role: "Digital Marketing Executive",
      company: "Maco Ads (Advertising Agency)",
      location: "Pattambi, Kerala, India",
      period: "07/2025 – 12/2025",
      type: "Agency",
      description:
        "Spearheaded multi-channel campaigns for clients in food manufacturing, education, travel, and trading.",
      achievements: [
        "Scaled Thanima Food Industries: Instagram views grew from 208.5K to 816.2K, Instagram reach from 112.5K to 516.6K, and Facebook views from 295.3K to 809.5K in 3 months.",
        "Generated 86 Meta leads in a single campaign for Thanima in October 2025.",
        "Ran the December 2025 admission campaign for Maco Media Campus on Meta, sparking 45 high-intent messaging conversations.",
        "Designed and SEO-optimized macomediacampus.com using WordPress.",
        "Produced and appeared in on-camera Reels to multiply organic reach, building unified content calendars for streamlined client delivery.",
      ],
      skills: ["Instagram Ads", "Facebook Ads", "Brand Awareness", "Content Production", "Reels", "WordPress SEO"],
    },
    {
      role: "Freelance Performance Marketer",
      company: "Adzpire Advertising",
      location: "Remote / Multi-Regional",
      period: "2024 – Present",
      type: "Freelance / Advisory",
      description:
        "Consulting and executing paid search, display, and social campaigns for local and regional businesses.",
      achievements: [
        "Managed Meta Ads and social campaigns for Jonito Crown Consultants LLP, Al-fitrah Islamic Preschool, Britcare International Academy, Shalco Trading, and Zuhoor Online Academy.",
        "Supported creative ad shoot production for Lyra Salon.",
        "Built platform-specific content strategies and creatives in Canva to drive cost-effective visibility.",
        "Managed client accounts from initial brief to monthly reporting, budget planning, and CTR/ROI optimization.",
        "Optimized Google Business Profiles and local directories to dominate localized search queries.",
      ],
      skills: ["Google Search Ads", "Google Display Ads", "Google Business Profile", "Canva", "Budget Allocation"],
    },
    {
      role: "Accounts Trainee",
      company: "Moheet Al Hisab Accounting and Tax Consultancy",
      location: "Dubai, UAE",
      period: "10/2024 – 01/2025",
      type: "Finance / Accounting",
      description:
        "Handled commercial bookkeeping, financial records, and reconciliations in Dubai's corporate tax and VAT environment.",
      achievements: [
        "Maintained financial journals, general ledgers, and reconciled bank accounts using Tally and Zoho Books.",
        "Assisted in preparing financial statements and corporate tax documentation.",
        "Built rigorous habits for financial precision, ledger reconciliation, and unit-economic reporting that now powers my ad budget discipline.",
      ],
      skills: ["Tally", "Zoho Books", "Bank Reconciliation", "Ledger Accounting", "Financial Reporting"],
    },
    {
      role: "Accountant",
      company: "Opera International India",
      location: "Pattambi, Kerala, India",
      period: "02/2022 – 08/2024",
      type: "Corporate Finance",
      description:
        "Managed day-to-day accounting operations, cash flow statements, and statutory compliance.",
      achievements: [
        "Oversaw daily ledger operations, audit reconciliations, and financial reporting standards.",
        "Ensured zero-discrepancy balance sheets and managed vendor/client settlements.",
        "Developed deep understanding of profit margins, customer lifetime value, and cost accounting.",
      ],
      skills: ["Corporate Accounting", "Balance Sheets", "Cash Flow Management", "Audit Compliance"],
    },
  ],

  skillCategories: [
    {
      title: "Paid Media & Growth",
      description: "Laser-targeted paid acquisition across social and search ecosystems.",
      icon: "Target",
      skills: [
        { name: "Meta Ads Manager", level: 95, highlight: "Primary Driver" },
        { name: "Facebook & Instagram Ads", level: 95, highlight: "Scaled to 800K+" },
        { name: "Google Search Ads", level: 90, highlight: "High-Intent Keyword Capture" },
        { name: "Google Display Ads", level: 85, highlight: "Retargeting & Reach" },
        { name: "YouTube Video Ads", level: 82, highlight: "Brand & Engagement" },
        { name: "Audience Segmentation & Lookalikes", level: 92, highlight: "Zero Ad Waste" },
        { name: "A/B Creative & Copy Testing", level: 94, highlight: "Continuous Optimization" },
        { name: "Budget & ROAS Optimization", level: 96, highlight: "Finance-Driven" },
      ],
    },
    {
      title: "Tracking & Analytics",
      description: "Lossless conversion tracking and transparent executive dashboards.",
      icon: "BarChart3",
      skills: [
        { name: "Meta Conversions API (CAPI)", level: 92, highlight: "Server-Side Reliability" },
        { name: "Google Analytics 4 (GA4)", level: 90, highlight: "Event-Based Modeling" },
        { name: "Google Tag Manager (GTM)", level: 90, highlight: "Custom Trigger Sets" },
        { name: "Meta Pixel & Custom Events", level: 95, highlight: "Full Funnel" },
        { name: "Microsoft Clarity", level: 88, highlight: "Heatmaps & Session Replays" },
        { name: "Looker Studio Dashboards", level: 88, highlight: "Client Reporting" },
        { name: "Google Search Console", level: 90, highlight: "Indexing & Organic Signals" },
        { name: "KPI Analysis (CPL, CAC, ROAS)", level: 96, highlight: "Unit Economics" },
      ],
    },
    {
      title: "SEO & Web Development",
      description: "Technical search excellence and high-speed conversion landing pages.",
      icon: "Globe",
      skills: [
        { name: "Technical SEO & Schema", level: 92, highlight: "Rich Results 3/3" },
        { name: "PageSpeed Insights Optimization", level: 95, highlight: "100/100 SEO Audited" },
        { name: "Sitemap & Canonical Hygiene", level: 94, highlight: "64 URLs Fixed" },
        { name: "WordPress & Elementor", level: 92, highlight: "Live Client Sites" },
        { name: "Landing Page CRO", level: 94, highlight: "Lead Conversion Focus" },
        { name: "Google Business Profile SEO", level: 90, highlight: "Local Map Pack" },
        { name: "Keyword & Competitor Research", level: 88, highlight: "Market Gap Analysis" },
        { name: "Backlink Building & Outreach", level: 84, highlight: "Directory & Authority" },
      ],
    },
    {
      title: "Marketing Automation & CRM",
      description: "Automated pipelines connecting ad click to sales closure.",
      icon: "Zap",
      skills: [
        { name: "Meta Lead Forms Setup", level: 95, highlight: "Pre-Populated Hooks" },
        { name: "Meta Lead Ads to Google Sheets", level: 94, highlight: "Instant Webhooks" },
        { name: "Google Apps Script Automation", level: 88, highlight: "Custom Scripting" },
        { name: "CRM Funnel Structuring", level: 90, highlight: "Lead Scoring" },
        { name: "Sales Pipeline Coordination", level: 90, highlight: "Fast Response Times" },
        { name: "Canva & Ad Creative Strategy", level: 92, highlight: "High CTR Layouts" },
      ],
    },
    {
      title: "Financial Discipline & Unit Economics",
      description: "Accounting precision applied to modern advertising budgets.",
      icon: "Calculator",
      skills: [
        { name: "Ad Spend Budgeting & Forecasts", level: 96, highlight: "Accurate Projections" },
        { name: "CAC to LTV Financial Modeling", level: 92, highlight: "Profitable Growth" },
        { name: "Zoho Books & Tally", level: 90, highlight: "Certified Practice" },
        { name: "Cash Flow & Margin Analysis", level: 92, highlight: "Real Bottom-Line" },
        { name: "Financial Reconciliation", level: 94, highlight: "Zero Discrepancy" },
      ],
    },
  ],

  certifications: [
    {
      name: "Google Ads Search Certification",
      issuer: "Google",
      badgeColor: "emerald",
      icon: "Award",
    },
    {
      name: "Google Ads Video Certification",
      issuer: "Google",
      badgeColor: "blue",
      icon: "Award",
    },
    {
      name: "Google Ads Display Certification",
      issuer: "Google",
      badgeColor: "indigo",
      icon: "Award",
    },
    {
      name: "Advanced Digital Marketing Certification",
      issuer: "Digital Marketing Institute",
      badgeColor: "amber",
      icon: "ShieldCheck",
    },
  ],

  education: {
    degree: "Bachelor of Business Administration (BBA)",
    institution: "University of Mysore",
    period: "2018 – 2021",
    location: "India",
    relevance:
      "Provided rigorous foundations in business strategy, organizational finance, statistics, consumer behavior, and marketing management.",
  },

  languages: [
    { name: "English", proficiency: "Professional Working Proficiency" },
    { name: "Malayalam", proficiency: "Native / Bilingual" },
    { name: "Tamil", proficiency: "Conversational Proficiency" },
  ],

  clientsAndBrands: [
    "AIPSOFT Software",
    "Thanima Food Industries",
    "Motion Digital Ads",
    "Maco Media Campus",
    "Jonito Crown Consultants",
    "Britcare International",
    "Al-Fitrah Academy",
    "Leadz Businessmen Services",
    "Prestige Travels",
    "La Ray Glass & Deco",
    "Bhasuri Inn",
    "Lyra Salon",
    "Audio Miqueas Studio",
    "Cargofam Logistics",
    "Shalco Trading",
    "Zuhoor Online Academy",
  ],
};
