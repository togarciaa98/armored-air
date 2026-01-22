import type { Vehicle } from "@/types";

export const vehicles: Vehicle[] = [
  {
    id: "1",
    slug: "cadillac-escalade-esv",
    name: "Cadillac Escalade ESV",
    category: "SUV",
    armorLevel: "VR7",
    profile: "High Risk",
    images: {
      hero: "/images/vehicles/escalade-hero.jpg",
      gallery: [
        "/images/vehicles/escalade-1.jpg",
        "/images/vehicles/escalade-2.jpg",
        "/images/vehicles/escalade-3.jpg",
        "/images/vehicles/escalade-4.jpg",
      ],
    },
    specs: {
      engine: "6.2L V8 Super Cruise",
      drivetrain: "All-Wheel Drive",
      capacity: 7,
      protection: "VR7 certified ballistic protection",
    },
    character:
      "Commanding presence that dominates any environment. The Escalade ESV offers supreme protection without compromising the comfort expected at the highest levels.",
    idealFor: [
      "Executive convoys",
      "High-profile family transport",
      "Multi-city itineraries",
      "Stadium arrivals",
    ],
    protectionDetails: [
      "Ballistic-resistant glass (VR7 certified)",
      "Reinforced body structure",
      "Run-flat tire system",
      "Emergency escape protocols",
      "360° armor protection",
    ],
    availability: ["mexico-city", "guadalajara", "monterrey"],
    pricing: {
      daily: 2800,
      weekly: 16800,
    },
    featured: true,
  },
  {
    id: "2",
    slug: "mercedes-benz-s-class",
    name: "Mercedes-Benz S-Class",
    category: "Sedan",
    armorLevel: "VR6",
    profile: "Executive",
    images: {
      hero: "/images/vehicles/s-class-hero.jpg",
      gallery: [
        "/images/vehicles/s-class-1.jpg",
        "/images/vehicles/s-class-2.jpg",
        "/images/vehicles/s-class-3.jpg",
        "/images/vehicles/s-class-4.jpg",
      ],
    },
    specs: {
      engine: "3.0L Inline-6 Turbo",
      drivetrain: "4MATIC All-Wheel Drive",
      capacity: 4,
      protection: "VR6 certified ballistic protection",
    },
    character:
      "The benchmark of executive luxury. Refined elegance meets comprehensive protection in a silhouette that commands respect without drawing attention.",
    idealFor: [
      "Executive meetings",
      "VIP airport transfers",
      "Corporate delegations",
      "Discrete city movement",
    ],
    protectionDetails: [
      "VR6 ballistic glass",
      "Armored floor protection",
      "Run-flat tires",
      "Secure communication system",
      "Fire suppression capability",
    ],
    availability: ["mexico-city", "guadalajara", "monterrey"],
    pricing: {
      daily: 2200,
      weekly: 13200,
    },
    featured: true,
  },
  {
    id: "3",
    slug: "bmw-7-series-protection",
    name: "BMW 7 Series Protection",
    category: "Sedan",
    armorLevel: "VR6",
    profile: "Executive",
    images: {
      hero: "/images/vehicles/7-series-hero.jpg",
      gallery: [
        "/images/vehicles/7-series-1.jpg",
        "/images/vehicles/7-series-2.jpg",
        "/images/vehicles/7-series-3.jpg",
        "/images/vehicles/7-series-4.jpg",
      ],
    },
    specs: {
      engine: "4.4L V8 Twin Turbo",
      drivetrain: "xDrive All-Wheel Drive",
      capacity: 4,
      protection: "VR6 certified ballistic protection",
    },
    character:
      "German engineering precision meets world-class protection. The 7 Series delivers dynamic performance within an impenetrable sanctuary.",
    idealFor: [
      "Business executives",
      "Dynamic city routes",
      "Time-sensitive transfers",
      "High-speed corridor movement",
    ],
    protectionDetails: [
      "Factory-integrated VR6 armor",
      "Blast-resistant underbody",
      "Self-sealing fuel tank",
      "Emergency fresh air system",
      "Intercom communication",
    ],
    availability: ["mexico-city", "monterrey"],
    pricing: {
      daily: 2100,
      weekly: 12600,
    },
    featured: true,
  },
  {
    id: "4",
    slug: "chevrolet-suburban",
    name: "Chevrolet Suburban",
    category: "SUV",
    armorLevel: "VR7",
    profile: "High Risk",
    images: {
      hero: "/images/vehicles/suburban-hero.jpg",
      gallery: [
        "/images/vehicles/suburban-1.jpg",
        "/images/vehicles/suburban-2.jpg",
        "/images/vehicles/suburban-3.jpg",
        "/images/vehicles/suburban-4.jpg",
      ],
    },
    specs: {
      engine: "6.2L V8",
      drivetrain: "Four-Wheel Drive",
      capacity: 7,
      protection: "VR7 certified ballistic protection",
    },
    character:
      "Proven reliability in the most demanding security environments. The Suburban is the vehicle of choice for protection details worldwide.",
    idealFor: [
      "Security convoys",
      "Family protection",
      "Long-distance transfers",
      "Support vehicle operations",
    ],
    protectionDetails: [
      "Maximum VR7 protection rating",
      "Reinforced suspension",
      "Armored roof structure",
      "Emergency egress system",
      "Multi-threat certified",
    ],
    availability: ["mexico-city", "guadalajara", "monterrey"],
    pricing: {
      daily: 2400,
      weekly: 14400,
    },
    featured: false,
  },
  {
    id: "5",
    slug: "lincoln-navigator",
    name: "Lincoln Navigator",
    category: "SUV",
    armorLevel: "VR5",
    profile: "Executive",
    images: {
      hero: "/images/vehicles/navigator-hero.jpg",
      gallery: [
        "/images/vehicles/navigator-1.jpg",
        "/images/vehicles/navigator-2.jpg",
        "/images/vehicles/navigator-3.jpg",
        "/images/vehicles/navigator-4.jpg",
      ],
    },
    specs: {
      engine: "3.5L V6 Twin Turbo",
      drivetrain: "All-Wheel Drive",
      capacity: 7,
      protection: "VR5 certified ballistic protection",
    },
    character:
      "American luxury redefined. The Navigator combines spacious comfort with substantial protection for those who refuse to compromise.",
    idealFor: [
      "Executive family travel",
      "VIP group transport",
      "Extended city tours",
      "Hotel-to-venue transfers",
    ],
    protectionDetails: [
      "VR5 ballistic protection",
      "Laminated security glass",
      "Armored door panels",
      "Run-flat capability",
      "Enhanced fire protection",
    ],
    availability: ["mexico-city", "guadalajara"],
    pricing: {
      daily: 1800,
      weekly: 10800,
    },
    featured: false,
  },
  {
    id: "6",
    slug: "mercedes-maybach-s680",
    name: "Mercedes-Maybach S 680",
    category: "Sedan",
    armorLevel: "VR6",
    profile: "Executive",
    images: {
      hero: "/images/vehicles/maybach-hero.jpg",
      gallery: [
        "/images/vehicles/maybach-1.jpg",
        "/images/vehicles/maybach-2.jpg",
        "/images/vehicles/maybach-3.jpg",
        "/images/vehicles/maybach-4.jpg",
      ],
    },
    specs: {
      engine: "6.0L V12 Biturbo",
      drivetrain: "4MATIC All-Wheel Drive",
      capacity: 4,
      protection: "VR6 certified ballistic protection",
    },
    character:
      "The pinnacle of automotive luxury. For principals who demand the absolute finest, the Maybach delivers unparalleled refinement within complete security.",
    idealFor: [
      "Head of state transport",
      "Ultra-high-net-worth individuals",
      "Diplomatic functions",
      "Prestigious arrivals",
    ],
    protectionDetails: [
      "VR6 integrated protection",
      "Rear executive seating",
      "Acoustic isolation",
      "Champagne cooler integration",
      "Massage and climate seats",
    ],
    availability: ["mexico-city"],
    pricing: {
      daily: 3200,
      weekly: 19200,
    },
    featured: true,
  },
  {
    id: "7",
    slug: "audi-a8-l-security",
    name: "Audi A8 L Security",
    category: "Sedan",
    armorLevel: "VR6",
    profile: "Low Profile",
    images: {
      hero: "/images/vehicles/a8-hero.jpg",
      gallery: [
        "/images/vehicles/a8-1.jpg",
        "/images/vehicles/a8-2.jpg",
        "/images/vehicles/a8-3.jpg",
        "/images/vehicles/a8-4.jpg",
      ],
    },
    specs: {
      engine: "4.0L V8 TFSI",
      drivetrain: "quattro All-Wheel Drive",
      capacity: 4,
      protection: "VR6 certified ballistic protection",
    },
    character:
      "Understated excellence. The A8 Security offers sophisticated protection that blends seamlessly into any executive environment without announcing itself.",
    idealFor: [
      "Discrete high-security transport",
      "Corporate executives",
      "Financial sector principals",
      "Low-visibility operations",
    ],
    protectionDetails: [
      "Factory VR6 certification",
      "Aluminum space frame armor",
      "Discrete appearance",
      "Night vision system",
      "Emergency exit system",
    ],
    availability: ["mexico-city", "monterrey"],
    pricing: {
      daily: 2000,
      weekly: 12000,
    },
    featured: false,
  },
  {
    id: "8",
    slug: "toyota-land-cruiser",
    name: "Toyota Land Cruiser",
    category: "SUV",
    armorLevel: "VR5",
    profile: "Low Profile",
    images: {
      hero: "/images/vehicles/land-cruiser-hero.jpg",
      gallery: [
        "/images/vehicles/land-cruiser-1.jpg",
        "/images/vehicles/land-cruiser-2.jpg",
        "/images/vehicles/land-cruiser-3.jpg",
        "/images/vehicles/land-cruiser-4.jpg",
      ],
    },
    specs: {
      engine: "3.5L V6 Twin Turbo",
      drivetrain: "Four-Wheel Drive",
      capacity: 7,
      protection: "VR5 certified ballistic protection",
    },
    character:
      "Legendary reliability meets comprehensive protection. The Land Cruiser goes anywhere while keeping occupants secure in any environment.",
    idealFor: [
      "Versatile protection needs",
      "Mixed terrain movement",
      "Family travel",
      "Long-term assignments",
    ],
    protectionDetails: [
      "VR5 ballistic protection",
      "Proven reliability record",
      "All-terrain capability",
      "Run-flat system",
      "360° camera system",
    ],
    availability: ["mexico-city", "guadalajara", "monterrey"],
    pricing: {
      daily: 1600,
      weekly: 9600,
    },
    featured: false,
  },
  {
    id: "9",
    slug: "range-rover",
    name: "Range Rover",
    category: "SUV",
    armorLevel: "VR5",
    profile: "Low Profile",
    images: {
      hero: "/images/vehicles/range-rover-hero.jpg",
      gallery: [
        "/images/vehicles/range-rover-1.jpg",
        "/images/vehicles/range-rover-2.jpg",
        "/images/vehicles/range-rover-3.jpg",
        "/images/vehicles/range-rover-4.jpg",
      ],
    },
    specs: {
      engine: "4.4L V8 Twin Turbo",
      drivetrain: "All-Wheel Drive",
      capacity: 5,
      protection: "VR5 certified ballistic protection",
    },
    character:
      "British refinement meets world-class capability. The Range Rover delivers protection with an elegance that transcends its armored nature.",
    idealFor: [
      "Lifestyle-conscious principals",
      "Fashion and entertainment industry",
      "Discrete luxury transport",
      "Urban to rural transitions",
    ],
    protectionDetails: [
      "VR5 protection integration",
      "Air suspension retained",
      "Luxury interior preserved",
      "Wade sensing capability",
      "Terrain response system",
    ],
    availability: ["mexico-city", "guadalajara"],
    pricing: {
      daily: 1900,
      weekly: 11400,
    },
    featured: false,
  },
  {
    id: "10",
    slug: "porsche-panamera",
    name: "Porsche Panamera",
    category: "Performance",
    armorLevel: "VR4",
    profile: "Low Profile",
    images: {
      hero: "/images/vehicles/panamera-hero.jpg",
      gallery: [
        "/images/vehicles/panamera-1.jpg",
        "/images/vehicles/panamera-2.jpg",
        "/images/vehicles/panamera-3.jpg",
        "/images/vehicles/panamera-4.jpg",
      ],
    },
    specs: {
      engine: "4.0L V8 Twin Turbo",
      drivetrain: "All-Wheel Drive",
      capacity: 4,
      protection: "VR4 certified ballistic protection",
    },
    character:
      "Performance without compromise. For principals who value dynamics alongside security, the Panamera delivers both in absolute measure.",
    idealFor: [
      "Performance-oriented principals",
      "Quick city movement",
      "Individual executive transport",
      "Time-critical operations",
    ],
    protectionDetails: [
      "VR4 lightweight armor",
      "Performance retained",
      "Sport exhaust maintained",
      "Enhanced braking system",
      "PASM air suspension",
    ],
    availability: ["mexico-city"],
    pricing: {
      daily: 1700,
      weekly: 10200,
    },
    featured: false,
  },
  {
    id: "11",
    slug: "genesis-g90",
    name: "Genesis G90",
    category: "Sedan",
    armorLevel: "VR4",
    profile: "Low Profile",
    images: {
      hero: "/images/vehicles/g90-hero.jpg",
      gallery: [
        "/images/vehicles/g90-1.jpg",
        "/images/vehicles/g90-2.jpg",
        "/images/vehicles/g90-3.jpg",
        "/images/vehicles/g90-4.jpg",
      ],
    },
    specs: {
      engine: "3.5L V6 Twin Turbo",
      drivetrain: "All-Wheel Drive",
      capacity: 4,
      protection: "VR4 certified ballistic protection",
    },
    character:
      "Modern luxury with thoughtful protection. The G90 offers exceptional value in the armored sedan category without sacrificing refinement.",
    idealFor: [
      "Corporate executives",
      "Business travel",
      "Extended rentals",
      "Multi-vehicle fleets",
    ],
    protectionDetails: [
      "VR4 protection standard",
      "Modern safety technology",
      "Executive rear seating",
      "Advanced noise isolation",
      "Highway driving assist",
    ],
    availability: ["mexico-city", "guadalajara", "monterrey"],
    pricing: {
      daily: 1400,
      weekly: 8400,
    },
    featured: false,
  },
  {
    id: "12",
    slug: "lexus-lx-600",
    name: "Lexus LX 600",
    category: "SUV",
    armorLevel: "VR5",
    profile: "Low Profile",
    images: {
      hero: "/images/vehicles/lx600-hero.jpg",
      gallery: [
        "/images/vehicles/lx600-1.jpg",
        "/images/vehicles/lx600-2.jpg",
        "/images/vehicles/lx600-3.jpg",
        "/images/vehicles/lx600-4.jpg",
      ],
    },
    specs: {
      engine: "3.5L V6 Twin Turbo",
      drivetrain: "Four-Wheel Drive",
      capacity: 7,
      protection: "VR5 certified ballistic protection",
    },
    character:
      "Japanese precision meets luxury SUV excellence. The LX 600 combines renowned reliability with comprehensive protection capabilities.",
    idealFor: [
      "Family protection",
      "Long-term assignments",
      "Reliability-focused operations",
      "Mixed-use scenarios",
    ],
    protectionDetails: [
      "VR5 armored construction",
      "Lexus reliability",
      "Multi-terrain select",
      "Crawl control",
      "Mark Levinson audio",
    ],
    availability: ["mexico-city", "guadalajara"],
    pricing: {
      daily: 1700,
      weekly: 10200,
    },
    featured: false,
  },
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find((v) => v.slug === slug);
}

export function getFeaturedVehicles(): Vehicle[] {
  return vehicles.filter((v) => v.featured);
}

export function getVehiclesByCity(citySlug: string): Vehicle[] {
  return vehicles.filter((v) => v.availability.includes(citySlug as Vehicle["availability"][number]));
}

export function getVehiclesByCategory(category: Vehicle["category"]): Vehicle[] {
  return vehicles.filter((v) => v.category === category);
}

export function getVehiclesByArmorLevel(level: Vehicle["armorLevel"]): Vehicle[] {
  return vehicles.filter((v) => v.armorLevel === level);
}
