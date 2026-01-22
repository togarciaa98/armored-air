import type { NavLink } from "@/types";

export const SITE_NAME = "Armored & Air";
export const SITE_DESCRIPTION =
  "Premium armored vehicle rental for FIFA World Cup 2026 in Mexico. Executive protection, luxury fleet, and complete discretion.";

export const NAV_LINKS: NavLink[] = [
  { label: "Fleet", href: "/fleet" },
  { label: "Pricing", href: "/pricing" },
  { label: "Services", href: "/services" },
  { label: "World Cup 2026", href: "/world-cup-2026" },
  { label: "Cities", href: "/cities" },
];

export const CONTACT_INFO = {
  phone: "+52 55 XXXX XXXX",
  email: "secure@armoredandair.com",
  responseTime: "4 hours",
};

export const WORLD_CUP_2026 = {
  startDate: "June 11, 2026",
  endDate: "July 19, 2026",
  hostCountries: ["Mexico", "United States", "Canada"],
  mexicoCities: ["Mexico City", "Guadalajara", "Monterrey"],
};

export const TRUST_INDICATORS = [
  {
    title: "24/7 Secure Operations",
    description: "Round-the-clock monitoring and support",
  },
  {
    title: "Certified Specialists",
    description: "Background-verified protection professionals",
  },
  {
    title: "Absolute Discretion",
    description: "Your privacy is our highest priority",
  },
  {
    title: "15+ Years Excellence",
    description: "Serving the global elite since 2009",
  },
];
