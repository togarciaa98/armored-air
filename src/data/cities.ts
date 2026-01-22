import type { City } from "@/types";

export const cities: City[] = [
  {
    id: "1",
    slug: "mexico-city",
    name: "Mexico City",
    tagline: "The Capital of Power",
    description:
      "Mexico City demands vehicles that match its complexity and importance. As the economic and political heart of Mexico, the capital requires security solutions that understand its unique landscape—from the corporate towers of Santa Fe to the diplomatic corridors of Polanco.",
    stadium: "Estadio Azteca",
    coverage: [
      "Santa Fe business district",
      "Polanco",
      "Lomas de Chapultepec",
      "Reforma corridor",
      "AICM International Airport",
      "AIFA Felipe Ángeles Airport",
      "Estadio Azteca",
      "Historic Center",
      "Condesa & Roma",
    ],
    fleet: {
      suv: 8,
      sedan: 6,
      performance: 2,
    },
  },
  {
    id: "2",
    slug: "guadalajara",
    name: "Guadalajara",
    tagline: "Western Excellence",
    description:
      "Guadalajara's elegance meets world-class protection for discerning travelers. Mexico's second city combines traditional charm with modern sophistication, requiring security services that honor both.",
    stadium: "Estadio Akron",
    coverage: [
      "Zona Financiera",
      "Providencia",
      "Chapalita",
      "Andares area",
      "Guadalajara International Airport",
      "Estadio Akron",
      "Historic Center",
      "Tlaquepaque",
    ],
    fleet: {
      suv: 5,
      sedan: 4,
      performance: 0,
    },
  },
  {
    id: "3",
    slug: "monterrey",
    name: "Monterrey",
    tagline: "Northern Command",
    description:
      "Industrial power meets refined protection in Mexico's business capital. Monterrey's unique position as a commercial hub requires security services that understand corporate protection at the highest levels.",
    stadium: "Estadio BBVA",
    coverage: [
      "San Pedro Garza García",
      "Valle Oriente",
      "Zona Tec",
      "Cumbres",
      "Monterrey International Airport",
      "Estadio BBVA",
      "Downtown business district",
      "Santa Catarina",
    ],
    fleet: {
      suv: 6,
      sedan: 4,
      performance: 0,
    },
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}
