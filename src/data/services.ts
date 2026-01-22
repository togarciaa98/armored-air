import type { Service, PricingTier, WorldCupPackage } from "@/types";

export const services: Service[] = [
  {
    id: "protection-personnel",
    title: "Protection Personnel",
    description:
      "Elite security drivers and protection specialists trained to the highest international standards.",
    features: [
      "Certified executive protection drivers",
      "Background-verified specialists",
      "Multi-lingual capabilities (EN/ES/PT/FR)",
      "Defensive driving certification",
      "First responder medical training",
      "Situational awareness expertise",
    ],
    icon: "shield",
  },
  {
    id: "security-coordination",
    title: "Security Coordination",
    description:
      "Seamless integration with your existing security infrastructure and protocols.",
    features: [
      "Integration with private security teams",
      "Escort vehicle coordination",
      "Advance route reconnaissance",
      "Threat assessment briefings",
      "Counter-surveillance measures",
      "Emergency extraction planning",
    ],
    icon: "radar",
  },
  {
    id: "concierge-services",
    title: "Concierge Services",
    description:
      "Comprehensive support that anticipates every need throughout your journey.",
    features: [
      "Airport arrivals & departures",
      "Hotel liaison and coordination",
      "Stadium access management",
      "Restaurant reservations",
      "Private event logistics",
      "Medical facility coordination",
    ],
    icon: "concierge",
  },
  {
    id: "operations-center",
    title: "24/7 Operations Center",
    description:
      "Round-the-clock monitoring and support from our secure command center.",
    features: [
      "Real-time vehicle monitoring",
      "GPS tracking and geofencing",
      "Instant response protocols",
      "Emergency coordination",
      "Weather and traffic updates",
      "Direct line to operations team",
    ],
    icon: "headset",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    id: "low-profile",
    name: "Low Profile",
    armorRange: "VR4 - VR5",
    priceFrom: 1400,
    description: "Discreet protection for sophisticated travelers who value subtlety.",
    features: [
      "Standard armoring certification",
      "Professional chauffeur",
      "24/7 support line",
      "Airport meet & greet",
      "Basic route planning",
    ],
  },
  {
    id: "executive",
    name: "Executive",
    armorRange: "VR6",
    priceFrom: 2000,
    description: "Enhanced security for high-value principals and corporate executives.",
    features: [
      "Advanced ballistic protection",
      "Certified security driver",
      "Route planning & reconnaissance",
      "Dedicated account manager",
      "Secure communication integration",
      "Backup vehicle availability",
    ],
  },
  {
    id: "high-risk",
    name: "High Risk",
    armorRange: "VR7",
    priceFrom: 2400,
    description: "Maximum protection for elevated threat profiles and VIP principals.",
    features: [
      "Highest-grade armoring available",
      "Elite protection specialist",
      "Full security protocol integration",
      "Counter-surveillance support",
      "Medical response coordination",
      "Multi-vehicle convoy capability",
      "24/7 operations center access",
    ],
  },
];

export const worldCupPackages: WorldCupPackage[] = [
  {
    id: "match-day",
    name: "Match Day Transfer",
    priceFrom: 800,
    description: "Hotel to stadium secure transport for individual matches.",
  },
  {
    id: "tournament-week",
    name: "Tournament Week",
    priceFrom: 9800,
    description: "Full week coverage including all match days and city movement.",
  },
  {
    id: "group-stage",
    name: "Group Stage Package",
    priceFrom: 18500,
    description: "Complete group stage coverage with dedicated vehicle and driver.",
  },
  {
    id: "full-tournament",
    name: "Full Tournament Access",
    priceFrom: null,
    description: "Comprehensive coverage from opening match to final. Custom quoted.",
  },
];

export const additionalServices = [
  "Security coordination",
  "Airport transfers",
  "Multi-city logistics",
  "Convoy operations",
  "24/7 on-call driver",
  "Private event transport",
  "Family protection",
  "Luggage handling",
];
