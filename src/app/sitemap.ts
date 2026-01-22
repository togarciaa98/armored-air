import type { MetadataRoute } from "next";
import { vehicles } from "@/data/vehicles";
import { cities } from "@/data/cities";

const BASE_URL = "https://armored-air.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ["en", "es"];
  const currentDate = new Date();

  // Static pages
  const staticPages = [
    "",
    "/cities",
    "/fleet",
    "/services",
    "/pricing",
    "/contact",
    "/world-cup-2026",
    "/privacy",
    "/terms",
  ];

  const staticUrls = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${BASE_URL}/${locale}${page}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: page === "" ? 1 : 0.8,
    }))
  );

  // City pages
  const cityUrls = locales.flatMap((locale) =>
    cities.map((city) => ({
      url: `${BASE_URL}/${locale}/cities/${city.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  // Vehicle pages
  const vehicleUrls = locales.flatMap((locale) =>
    vehicles.map((vehicle) => ({
      url: `${BASE_URL}/${locale}/fleet/${vehicle.slug}`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    }))
  );

  return [...staticUrls, ...cityUrls, ...vehicleUrls];
}
