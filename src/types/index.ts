// Vehicle Types
export type VehicleCategory = "SUV" | "Sedan" | "Performance";
export type ArmorLevel = "VR4" | "VR5" | "VR6" | "VR7";
export type ProtectionProfile = "Low Profile" | "Executive" | "High Risk";
export type CitySlug = "mexico-city" | "guadalajara" | "monterrey";

export interface VehicleImages {
  hero: string;
  gallery: string[];
}

export interface VehicleSpecs {
  engine: string;
  drivetrain: string;
  capacity: number;
  protection: string;
}

export interface VehiclePricing {
  daily: number;
  weekly: number;
}

export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  category: VehicleCategory;
  armorLevel: ArmorLevel;
  profile: ProtectionProfile;
  images: VehicleImages;
  specs: VehicleSpecs;
  character: string;
  idealFor: string[];
  protectionDetails: string[];
  availability: CitySlug[];
  pricing: VehiclePricing;
  featured: boolean;
}

// City Types
export interface CityFleet {
  suv: number;
  sedan: number;
  performance: number;
}

export interface City {
  id: string;
  slug: CitySlug;
  name: string;
  tagline: string;
  description: string;
  stadium: string;
  coverage: string[];
  fleet: CityFleet;
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: string;
}

// Form Types
export interface PrivateRequestForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization?: string;
  position?: string;
  city: CitySlug | "multiple";
  startDate: string;
  endDate: string;
  protectionLevel: "low-profile" | "executive" | "high-risk" | "unsure";
  numberOfVehicles: number;
  additionalServices: string[];
  specialRequirements?: string;
  confidentialityAcknowledged: boolean;
}

// Navigation Types
export interface NavLink {
  label: string;
  href: string;
}

// Pricing Types
export interface PricingTier {
  id: string;
  name: string;
  armorRange: string;
  priceFrom: number;
  description: string;
  features: string[];
}

export interface WorldCupPackage {
  id: string;
  name: string;
  priceFrom: number | null;
  description: string;
}
