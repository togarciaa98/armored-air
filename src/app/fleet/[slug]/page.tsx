import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Shield, Users, Gauge, MapPin, Check } from "lucide-react";
import { vehicles, getVehicleBySlug } from "@/data/vehicles";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { formatCurrency, getCityName, getArmorDescription } from "@/lib/utils";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return vehicles.map((vehicle) => ({
    slug: vehicle.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    return {
      title: "Vehicle Not Found",
    };
  }

  return {
    title: `${vehicle.name} | ${vehicle.armorLevel} Armored`,
    description: `Rent the ${vehicle.name} with ${vehicle.armorLevel} protection. ${vehicle.character}`,
  };
}

export default async function VehicleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);

  if (!vehicle) {
    notFound();
  }

  return (
    <div className="pt-20 min-h-screen bg-obsidian">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <Link
          href="/fleet"
          className="inline-flex items-center text-sm text-silver hover:text-platinum transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Fleet
        </Link>
      </div>

      {/* Hero Image Placeholder */}
      <section className="relative">
        <div className="aspect-[21/9] max-h-[500px] bg-gradient-to-br from-slate/20 via-graphite to-onyx relative overflow-hidden">
          {/* Placeholder visual */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <svg
                viewBox="0 0 200 80"
                className="w-96 h-auto text-slate/30"
                fill="currentColor"
              >
                <ellipse cx="100" cy="65" rx="90" ry="12" opacity="0.3" />
                <path d="M30 50 Q40 25 70 20 L130 20 Q160 25 170 50 L170 55 Q170 60 165 60 L35 60 Q30 60 30 55 Z" />
                <circle cx="50" cy="60" r="12" />
                <circle cx="150" cy="60" r="12" />
                <rect x="60" y="28" width="30" height="15" rx="2" opacity="0.5" />
                <rect x="110" y="28" width="30" height="15" rx="2" opacity="0.5" />
              </svg>
              <p className="text-silver/50 text-sm mt-4">
                {vehicle.name}
              </p>
            </div>
          </div>
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent" />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Left Column - Main Info */}
            <div className="lg:col-span-2">
              {/* Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <Badge variant="gold" size="md">
                    {vehicle.armorLevel}
                  </Badge>
                  <Badge variant="default" size="md">
                    {vehicle.category}
                  </Badge>
                  <Badge variant="outline" size="md">
                    {vehicle.profile}
                  </Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-light text-platinum mb-4">
                  {vehicle.name}
                </h1>
                <p className="text-lg text-silver leading-relaxed">
                  {vehicle.character}
                </p>
              </div>

              {/* Quick Specs */}
              <div className="grid grid-cols-3 gap-6 py-8 border-y border-slate/30 mb-8">
                <div className="text-center">
                  <Gauge className="w-6 h-6 text-champagne mx-auto mb-2" />
                  <p className="text-sm text-platinum">{vehicle.specs.engine}</p>
                  <p className="text-xs text-silver mt-1">Engine</p>
                </div>
                <div className="text-center">
                  <Shield className="w-6 h-6 text-champagne mx-auto mb-2" />
                  <p className="text-sm text-platinum">{vehicle.specs.drivetrain}</p>
                  <p className="text-xs text-silver mt-1">Drivetrain</p>
                </div>
                <div className="text-center">
                  <Users className="w-6 h-6 text-champagne mx-auto mb-2" />
                  <p className="text-sm text-platinum">{vehicle.specs.capacity} Passengers</p>
                  <p className="text-xs text-silver mt-1">Capacity</p>
                </div>
              </div>

              {/* Protection Details */}
              <div className="mb-8">
                <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
                  Protection Details
                </h2>
                <p className="text-sm text-silver mb-4">
                  {getArmorDescription(vehicle.armorLevel)}
                </p>
                <ul className="space-y-3">
                  {vehicle.protectionDetails.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-platinum">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Ideal For */}
              <div className="mb-8">
                <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
                  Ideal For
                </h2>
                <ul className="space-y-3">
                  {vehicle.idealFor.map((use) => (
                    <li key={use} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-available flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-platinum">{use}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Gallery Placeholder */}
              <div>
                <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
                  Gallery
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {vehicle.images.gallery.map((_, index) => (
                    <div
                      key={index}
                      className="aspect-[4/3] bg-gradient-to-br from-slate/10 via-graphite to-onyx border border-slate/30"
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs text-silver/30">Image {index + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 bg-graphite border border-slate/50 p-6">
                <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-6">
                  Pricing
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-silver">Daily Rate</span>
                    <span className="text-xl text-platinum">
                      {formatCurrency(vehicle.pricing.daily)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-silver">Weekly Rate</span>
                    <span className="text-xl text-platinum">
                      {formatCurrency(vehicle.pricing.weekly)}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate/30 pt-6 mb-6">
                  <p className="text-xs text-silver mb-4">
                    World Cup 2026 packages available upon request
                  </p>
                </div>

                {/* Availability */}
                <div className="mb-6">
                  <h4 className="text-xs tracking-[0.2em] text-silver uppercase mb-3">
                    Available In
                  </h4>
                  <div className="space-y-2">
                    {vehicle.availability.map((city) => (
                      <div key={city} className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-available" />
                        <span className="text-sm text-platinum">
                          {getCityName(city)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href={`/contact?vehicle=${vehicle.slug}`} className="block">
                  <Button variant="primary" size="lg" className="w-full">
                    Request This Vehicle
                  </Button>
                </Link>

                <p className="text-[10px] text-silver text-center mt-4">
                  Rates vary by duration, city, and services. All quotes are
                  confidential.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
