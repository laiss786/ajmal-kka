// Single source of content for the site.
//
// Anything still marked TODO is waiting on the client — drop the answers in
// here and the pages pick them up. Don't hardcode copy in components.

import type { ImageMetadata } from "astro";
import gulfOwnLogo from "../assets/logos/gulf-own.webp";
import goLakamanaLogo from "../assets/logos/go-lakamana.webp";
import kostaLogo from "../assets/logos/kosta.webp";
import royalWaveLogo from "../assets/logos/royal-wave.webp";

export type Company = {
  name: string;
  /** TODO(client): exact title — Founder / Director / Partner / Manager? */
  role: string | null;
  /** e.g. "2024 — 2026", or "2022 — Present" if still active */
  period: string | null;
  /** One line on what he did there */
  blurb: string | null;
  /** Optional deeper detail. Rendered only when present, so thin entries stay compact. */
  highlights: { title: string; detail: string }[];
  location: string;
  logo: ImageMetadata | null;
};

export type Project = {
  title: string;
  /** What it was */
  summary: string;
  /** What he personally did */
  role: string | null;
  /** TODO(client): outcome — revenue, growth %, bookings, reach. Rough is fine. */
  result: string | null;
  image: string | null;
};

export const site = {
  /**
   * Draft mode. While true the page renders visible "pending" markers wherever
   * client content is still missing, plus a corner badge. Set to false before
   * the site goes live — it is the guard against shipping placeholder copy.
   */
  draft: true,

  name: "Ajmal Komalam",
  /** TODO(client): confirm this is the title he wants under his name */
  title: "Marketing & Sales Strategist",
  tagline: "Sales & Business Development | Marketing Strategy | Client Acquisition | Revenue Growth",

  /** TODO(client): confirm final wording, or supply a rewrite */
  bio: [
    "I'm a marketing and sales strategist working at the intersection of travel, tourism and digital commerce, with a focus on digital storytelling and regional brand growth.",
    "I hold management roles across a group of travel, tourism and logistics companies, and serve as Media and Package Head for Aquaproandroth. My work connects three distinct markets — Dubai, Kochi, and my native Lakshadweep.",
    "From designing targeted marketing campaigns to spearheading the relaunch of Lakamana, Lakshadweep's first e-commerce platform, I build modern digital content, social media narratives and brand strategy that drive measurable business growth.",
  ],

  companies: [
    {
      name: "Go Lakamana Travel & Tourism",
      role: "Founding Operations & Growth Lead",
      // TODO(client): dates for this one
      period: null,
      blurb:
        "Took an unstructured startup idea to a cross-border travel business, building core operations from scratch in Lakshadweep and expanding into the UAE.",
      highlights: [
        {
          title: "Ground-zero setup",
          detail:
            "Designed the organisational framework, SOPs and operational workflows from scratch.",
        },
        {
          title: "International expansion",
          detail:
            "Led the move from Lakshadweep into the UAE, covering cross-border licensing, package positioning and operational readiness.",
        },
        {
          title: "Product & destination marketing",
          detail:
            "Curated and commercialised travel experiences positioning Lakshadweep as a premier destination.",
        },
        {
          title: "Business model & team",
          detail:
            "Built the initial sales, logistics and customer support frameworks that turned local channels into a revenue-generating business.",
        },
      ],
      location: "Lakshadweep · Dubai",
      logo: goLakamanaLogo,
    },
    {
      name: "Gulf Own Travel and Tourism LLC",
      role: "Cross-Border Operations & Sales Leader",
      period: "2024 — Aug 2026",
      blurb:
        "Scaled travel and tourism operations across the Gulf and India, running the Kochi branch end to end while aligning strategy and workflows with headquarters in Dubai.",
      highlights: [
        {
          title: "Cross-border leadership",
          detail:
            "Directed end-to-end operations for the Kochi branch, aligned to Dubai HQ.",
        },
        {
          title: "Product & go-to-market",
          detail:
            "Built customised travel packages and commercial products positioned for Gulf and Indian client bases.",
        },
        {
          title: "Sales & team leadership",
          detail:
            "Mentored sales teams and set performance KPIs, daily workflows and client conversion strategy.",
        },
        {
          title: "Marketing & growth",
          detail:
            "Ran integrated digital and traditional campaigns to lift package visibility and lead generation.",
        },
      ],
      location: "Dubai · Kochi",
      logo: gulfOwnLogo,
    },
    {
      name: "Kosta Shipping LLP",
      role: "Branch Operations & Sales Setup Lead",
      // TODO(client): dates for this one
      period: null,
      blurb:
        "Led regional expansion into Chennai for the Ernakulam-headquartered logistics firm, building sales frameworks, marketing strategy and ground-level teams from zero.",
      highlights: [
        {
          title: "Regional expansion",
          detail:
            "Established and led Chennai operations, driving South India market entry and footprint growth.",
        },
        {
          title: "Team recruitment & structuring",
          detail:
            "Built, trained and managed the regional sales team from scratch with structured pipelines, targets and acquisition workflows.",
        },
        {
          title: "Go-to-market strategy",
          detail:
            "Formulated localised marketing and business development strategy for Chennai's shipping and freight-forwarding ecosystem.",
        },
        {
          title: "Revenue & client acquisition",
          detail:
            "Negotiated and secured key B2B logistics accounts, aligned to company-wide growth targets.",
        },
      ],
      location: "Chennai · HQ Ernakulam",
      logo: kostaLogo,
    },
    {
      name: "Smash Travel and Tourism LLC",
      role: null,
      // TODO(client): title + dates for this one
      period: null,
      blurb:
        "Built and led B2B travel sales — luxury itineraries, corporate MICE, and desert safari packages — for international trade partners.",
      highlights: [
        {
          title: "Product packaging",
          detail:
            "Curated and launched customised B2B tour packages, luxury itineraries, corporate MICE solutions and desert safari experiences for diverse international client profiles.",
        },
        {
          title: "Sales team leadership",
          detail:
            "Managed and coached a dedicated B2B sales team, setting KPIs, optimising lead conversion pipelines and overseeing daily sales operations.",
        },
        {
          title: "Account management & retention",
          // TODO(client): retention % — his notes have "[X]%", not a real
          // number. Never fill this with an invented figure.
          detail:
            "Ran proactive key account management to retain top-tier travel agents and trade partners.",
        },
        {
          title: "Market trend adaptation",
          detail:
            "Tracked shifting Middle East travel demand and seasonal trends to adjust pricing, promotions and inventory allocation.",
        },
      ],
      location: "Dubai",
      logo: null,
    },
    {
      // Logo reads "Royal Wave Shipping & Logistics Pvt Ltd" — name updated to
      // match the artwork rather than the earlier "Royal Wave Logistics LLC".
      name: "Royal Wave Shipping & Logistics Pvt Ltd",
      role: null,
      // TODO(client): title + dates for this one
      period: null,
      blurb:
        "Architected and executed growth strategy to expand Royal Wave's market penetration across India, repositioning it as a one-stop shipping and logistics partner.",
      highlights: [
        {
          title: "Market expansion strategy",
          detail:
            "Developed multi-regional outreach targeting vessel owners, fleet operators and logistics management firms across Indian ports.",
        },
        {
          title: "Brand & positioning",
          detail:
            "Repositioned Royal Wave from a regional service provider to a trusted one-stop shipping and logistics partner, strengthening digital collateral and B2B communication.",
        },
        {
          title: "Sales enablement",
          detail:
            "Aligned sales workflows and lead acquisition with operational capabilities, improving response times for client inquiries and contract conversions.",
        },
      ],
      location: "Kochi",
      logo: royalWaveLogo,
    },
    { name: "Aquaproandroth", role: "Media and Package Head", period: null, blurb: null, highlights: [], location: "—", logo: null },
  ] satisfies Company[],

  // Not currently rendered — the Projects & Work section was removed from the
  // page. Left in place since it's real content (Lakamana) in case the
  // section comes back; nothing here needs to be deleted to bring it back.
  projects: [
    {
      title: "Lakamana Relaunch",
      summary:
        "Relaunch of Lakshadweep's first e-commerce platform, rebuilt around a modern digital storefront and social-first brand narrative.",
      role: null,
      result: null,
      image: null,
    },
  ] satisfies Project[],

  // Credibility strip. Every figure here is derived from what the client has
  // already told us — six named ventures, three named markets, and the
  // Lakamana claim from his own bio. Do not add invented numbers; the growth /
  // revenue figures are still outstanding.
  stats: [
    { value: 6, suffix: "", label: "Companies and ventures" },
    { value: 3, suffix: "", label: "Markets connected" },
    { value: 1, suffix: "st", label: "E-commerce platform in Lakshadweep" },
    // TODO(client): a growth or revenue figure belongs here once supplied.
  ] as { value: number; suffix: string; label: string }[],

  expertise: [
    "Marketing Strategy",
    "Brand Growth",
    "Digital Storytelling",
    "E-commerce Strategy",
    "Social Media Narratives",
    "Campaign Design",
    "Regional Market Expansion",
    "Sales Enablement",
  ],

  /** TODO(client): press mentions, interviews, awards. Section hides if empty. */
  press: [] as { outlet: string; title: string; url: string; date: string }[],

  contact: {
    /** TODO(client): which address to publish */
    email: null as string | null,
    /** TODO(client): publish phone/WhatsApp publicly, yes or no? */
    phone: null as string | null,
    /** TODO(client): profile URL */
    linkedin: null as string | null,
    instagram: null as string | null,
    locations: ["Dubai", "Kochi", "Lakshadweep"],
  },

  nav: [
    { label: "About", href: "#about" },
    { label: "Companies", href: "#companies" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ],
};
