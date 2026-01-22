import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));
}

export function getCityName(slug: string): string {
  const cities: Record<string, string> = {
    "mexico-city": "Mexico City",
    guadalajara: "Guadalajara",
    monterrey: "Monterrey",
  };
  return cities[slug] || slug;
}

export function getArmorDescription(level: string): string {
  const descriptions: Record<string, string> = {
    VR4: "Standard protection against handgun threats",
    VR5: "Enhanced protection against high-velocity handgun rounds",
    VR6: "Advanced protection against rifle threats",
    VR7: "Maximum protection against high-powered rifle rounds",
  };
  return descriptions[level] || "";
}

export function getProfileDescription(profile: string): string {
  const descriptions: Record<string, string> = {
    "Low Profile": "Discreet protection that blends seamlessly",
    Executive: "Enhanced security for high-value principals",
    "High Risk": "Maximum protection for elevated threat environments",
  };
  return descriptions[profile] || "";
}
