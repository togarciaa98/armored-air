import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Shield, Clock, Check } from "lucide-react";
import { cities, getCityBySlug, getAllCitySlugs } from "@/data/cities";
import { getVehiclesByCity } from "@/data/vehicles";
import { VehicleCard } from "@/components/fleet/VehicleCard";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({
    city,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return {
      title: "City Not Found",
    };
  }

  return {
    title: `${city.name} | Armored Vehicles`,
    description: `Armored vehicle rental in ${city.name} for FIFA World Cup 2026. ${city.description}`,
  };
}

export default async function CityDetailPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const cityVehicles = getVehiclesByCity(citySlug);

  return (
    <div className="pt-20 min-h-screen bg-obsidian">
      {/* Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <Link
          href="/cities"
          className="inline-flex items-center text-sm text-silver hover:text-platinum transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Cities
        </Link>
      </div>

      {/* Hero */}
      <section className="py-16 border-b border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-champagne mb-4">
                <MapPin className="w-4 h-4" />
                <span className="text-xs uppercase tracking-wider">
                  {city.stadium}
                </span>
              </div>
              <h1 className="text-5xl font-light text-platinum mb-2">
                {city.name}
              </h1>
              <p className="text-xl text-champagne mb-6">{city.tagline}</p>
              <p className="text-silver leading-relaxed mb-8">
                {city.description}
              </p>

              {/* Fleet Summary */}
              <div className="flex gap-8">
                <div>
                  <p className="text-4xl font-light text-platinum">
                    {city.fleet.suv}
                  </p>
                  <p className="text-xs text-silver uppercase tracking-wider">
                    SUVs
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-light text-platinum">
                    {city.fleet.sedan}
                  </p>
                  <p className="text-xs text-silver uppercase tracking-wider">
                    Sedans
                  </p>
                </div>
                {city.fleet.performance > 0 && (
                  <div>
                    <p className="text-4xl font-light text-platinum">
                      {city.fleet.performance}
                    </p>
                    <p className="text-xs text-silver uppercase tracking-wider">
                      Performance
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Visual placeholder */}
            <div className="aspect-square bg-gradient-to-br from-slate/10 via-graphite to-onyx border border-slate/50 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 rounded-full border border-champagne/30 flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-12 h-12 text-champagne/50" />
                  </div>
                  <p className="text-2xl font-light text-silver/50">{city.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-16 bg-onyx">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-8">
            Coverage Areas
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {city.coverage.map((area) => (
              <div
                key={area}
                className="flex items-center gap-3 p-4 bg-graphite border border-slate/30"
              >
                <Check className="w-4 h-4 text-champagne flex-shrink-0" />
                <span className="text-sm text-platinum">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Vehicles */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
              Available Fleet
            </h2>
            <h3 className="text-3xl font-light text-platinum">
              Vehicles in {city.name}
            </h3>
          </div>

          {cityVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cityVehicles.map((vehicle, index) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-silver">
                Contact us for vehicle availability in {city.name}.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* City Services */}
      <section className="py-20 bg-onyx">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
              {city.name} Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-graphite border border-slate flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-5 h-5 text-champagne" />
              </div>
              <h3 className="text-lg font-light text-platinum mb-2">
                Airport Transfers
              </h3>
              <p className="text-sm text-silver">
                Secure pickup and drop-off at all {city.name} airports with
                meet-and-greet service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-graphite border border-slate flex items-center justify-center mx-auto mb-4">
                <Shield className="w-5 h-5 text-champagne" />
              </div>
              <h3 className="text-lg font-light text-platinum mb-2">
                Stadium Access
              </h3>
              <p className="text-sm text-silver">
                Coordinated arrival and departure for {city.stadium} with VIP
                routing.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-graphite border border-slate flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5 text-champagne" />
              </div>
              <h3 className="text-lg font-light text-platinum mb-2">
                24/7 Availability
              </h3>
              <p className="text-sm text-silver">
                Round-the-clock service with local operations support in{" "}
                {city.name}.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Cities */}
      <section className="py-16 border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-8 text-center">
            Other Host Cities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {cities
              .filter((c) => c.slug !== citySlug)
              .map((otherCity) => (
                <Link key={otherCity.id} href={`/cities/${otherCity.slug}`}>
                  <div className="bg-graphite border border-slate/50 p-6 flex items-center justify-between hover:border-champagne/30 transition-colors">
                    <div>
                      <h3 className="text-lg font-light text-platinum">
                        {otherCity.name}
                      </h3>
                      <p className="text-sm text-silver">{otherCity.tagline}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-champagne">
                        {otherCity.fleet.suv + otherCity.fleet.sedan} vehicles
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-graphite border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-platinum mb-4">
            Need a Vehicle in {city.name}?
          </h2>
          <p className="text-silver mb-8 max-w-2xl mx-auto">
            Contact us to discuss availability and arrange your secure transport
            in {city.name}.
          </p>
          <Link href={`/contact?city=${citySlug}`}>
            <Button variant="primary" size="lg">
              Request {city.name} Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
