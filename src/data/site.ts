// Single source of content for the site.
//
// Anything still marked TODO is waiting on the client — drop the answers in
// here and the pages pick them up. Don't hardcode copy in components.

export type Company = {
  name: string;
  /** TODO(client): exact title — Founder / Director / Partner / Manager? */
  role: string | null;
  /** TODO(client): one line on what the business actually does */
  blurb: string | null;
  location: string;
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

  /** Empty slots are drawn up to this count so the grid keeps its rhythm. */
  minProjectSlots: 3,

  name: "Ajmal Komalam",
  /** TODO(client): confirm this is the title he wants under his name */
  title: "Marketing & Sales Strategist",
  tagline: "Connecting markets across Dubai, Kochi and Lakshadweep.",

  /** TODO(client): confirm final wording, or supply a rewrite */
  bio: [
    "I'm a marketing and sales strategist working at the intersection of travel, tourism and digital commerce, with a focus on digital storytelling and regional brand growth.",
    "I hold management roles across a group of travel, tourism and logistics companies, and serve as Media and Package Head for Aquaproandroth. My work connects three distinct markets — Dubai, Kochi, and my native Lakshadweep.",
    "From designing targeted marketing campaigns to spearheading the relaunch of Lakamana, Lakshadweep's first e-commerce platform, I build modern digital content, social media narratives and brand strategy that drive measurable business growth.",
  ],

  companies: [
    { name: "Go Lakamana Travel and Tourism LLC", role: null, blurb: null, location: "Dubai" },
    { name: "Smash Travel and Tourism LLC", role: null, blurb: null, location: "Dubai" },
    { name: "Gulf Own Travel and Tourism LLC", role: null, blurb: null, location: "UAE" },
    { name: "Royal Wave Logistics LLC", role: null, blurb: null, location: "Kochi" },
    { name: "Kosta Shipping LLC", role: null, blurb: null, location: "Kochi" },
    { name: "Aquaproandroth", role: "Media and Package Head", blurb: null, location: "—" },
  ] satisfies Company[],

  // TODO(client): 3–6 projects, each with a result. This section is the one
  // that actually converts high-value clients — it needs numbers.
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
    { label: "Projects", href: "#projects" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ],
};
