import Link from "next/link";
import { Calendar, MapPin, Trophy, Users, Clock, Shield } from "lucide-react";
import { worldCupPackages } from "@/data/services";
import { cities } from "@/data/cities";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import { WORLD_CUP_2026 } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 Experience",
  description:
    "Premium armored vehicle services for FIFA World Cup 2026 in Mexico. Secure transport across all host cities with tournament-specific packages.",
};

export default function WorldCupPage() {
  return (
    <div className="pt-20 min-h-screen bg-obsidian">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 30% 20%, rgba(201, 169, 98, 0.2) 0%, transparent 50%),
                radial-gradient(ellipse at 70% 80%, rgba(201, 169, 98, 0.15) 0%, transparent 50%)
              `,
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-xs tracking-[0.4em] text-champagne uppercase mb-6">
            Special Event Coverage
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-platinum mb-4">
            FIFA World Cup 2026
          </h1>
          <p className="text-3xl font-light text-champagne mb-8">Mexico</p>
          <p className="text-lg text-silver max-w-2xl mx-auto mb-12 leading-relaxed">
            Move through the tournament with absolute confidence. From group stage
            to final whistle, our dedicated World Cup fleet ensures secure,
            luxurious transport across all Mexican host cities.
          </p>

          {/* Event Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-champagne" />
              <span className="text-silver">
                {WORLD_CUP_2026.startDate} — {WORLD_CUP_2026.endDate}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-champagne" />
              <span className="text-silver">
                {WORLD_CUP_2026.mexicoCities.join(" · ")}
              </span>
            </div>
          </div>

          <Link href="/contact">
            <Button variant="primary" size="lg">
              Reserve Your Fleet Now
            </Button>
          </Link>
        </div>
      </section>

      {/* Host Cities */}
      <section className="py-20 bg-onyx">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
              Mexico Host Cities
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              Complete coverage across all Mexican venues with dedicated fleets
              and local expertise in each city.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cities.map((city) => (
              <div
                key={city.id}
                className="bg-graphite border border-slate/50 p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-onyx border border-champagne/30 flex items-center justify-center mx-auto mb-6">
                  <Trophy className="w-6 h-6 text-champagne" />
                </div>
                <h3 className="text-2xl font-light text-platinum mb-2">
                  {city.name}
                </h3>
                <p className="text-sm text-champagne mb-4">{city.stadium}</p>
                <p className="text-sm text-silver mb-6">{city.tagline}</p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate/30">
                  <div>
                    <p className="text-2xl font-light text-platinum">
                      {city.fleet.suv}
                    </p>
                    <p className="text-[10px] text-silver uppercase">SUVs</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-platinum">
                      {city.fleet.sedan}
                    </p>
                    <p className="text-[10px] text-silver uppercase">Sedans</p>
                  </div>
                  <div>
                    <p className="text-2xl font-light text-platinum">
                      {city.fleet.suv + city.fleet.sedan + city.fleet.performance}
                    </p>
                    <p className="text-[10px] text-silver uppercase">Total</p>
                  </div>
                </div>

                <Link
                  href={`/cities/${city.slug}`}
                  className="inline-block mt-6 text-sm text-champagne hover:text-champagne-light transition-colors"
                >
                  View City Fleet →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
              Tournament Packages
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              Tailored solutions for every level of World Cup engagement, from
              individual matches to complete tournament coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {worldCupPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-graphite border border-slate/50 p-6 flex flex-col"
              >
                <h3 className="text-lg font-light text-platinum mb-2">
                  {pkg.name}
                </h3>
                <p className="text-sm text-silver mb-6 flex-grow">
                  {pkg.description}
                </p>
                <div className="pt-4 border-t border-slate/30">
                  {pkg.priceFrom ? (
                    <p className="text-xl text-champagne">
                      from {formatCurrency(pkg.priceFrom)}
                    </p>
                  ) : (
                    <p className="text-sm text-champagne uppercase tracking-wider">
                      Custom Quote
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-onyx">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
              Tournament Services
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              Specialized capabilities designed for the unique demands of a global
              sporting event.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Multi-City Coordination",
                description:
                  "Seamless vehicle positioning across Mexico City, Guadalajara, and Monterrey as your itinerary evolves.",
              },
              {
                icon: Clock,
                title: "Match Day Logistics",
                description:
                  "Coordinated arrival and departure timing optimized for stadium security protocols and crowd management.",
              },
              {
                icon: Shield,
                title: "Enhanced Security",
                description:
                  "Heightened protection protocols appropriate for high-profile international events.",
              },
              {
                icon: Users,
                title: "Group Transport",
                description:
                  "Multi-vehicle convoy capability for corporate delegations, families, and security details.",
              },
              {
                icon: Trophy,
                title: "VIP Access Support",
                description:
                  "Coordination with venue VIP facilities, hospitality suites, and exclusive event areas.",
              },
              {
                icon: Calendar,
                title: "Flexible Scheduling",
                description:
                  "Adaptable service that adjusts to match results, schedule changes, and evolving plans.",
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-graphite border border-slate flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-5 h-5 text-champagne" />
                </div>
                <h3 className="text-lg font-light text-platinum mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-silver">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Early Booking */}
      <section className="py-20 border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-graphite border border-champagne/30 p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
                  Early Booking Benefits
                </h2>
                <h3 className="text-3xl font-light text-platinum mb-6">
                  Secure Your Fleet Now
                </h3>
                <p className="text-silver mb-8 leading-relaxed">
                  With limited armored vehicle availability in Mexico during the
                  World Cup, early reservation ensures access to our premium fleet
                  and preferred vehicle selection.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Priority access to flagship vehicles",
                    "Dedicated account manager assigned",
                    "Locked-in rates with no tournament surge",
                    "First selection of certified drivers",
                    "Guaranteed availability for your dates",
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3 text-sm text-silver">
                      <span className="w-1.5 h-1.5 bg-champagne rounded-full" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button variant="primary" size="lg">
                    Reserve Early
                  </Button>
                </Link>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                  <div className="w-64 h-64 rounded-full border border-champagne/20 flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full border border-champagne/30 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full border border-champagne/40 flex items-center justify-center">
                        <div className="text-center">
                          <p className="text-3xl font-light text-champagne">
                            2026
                          </p>
                          <p className="text-[10px] text-silver uppercase tracking-wider">
                            Book Now
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-graphite border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-platinum mb-4">
            Ready for the World Cup?
          </h2>
          <p className="text-silver mb-8 max-w-2xl mx-auto">
            Contact us to discuss your World Cup 2026 requirements. Our team
            specializes in high-profile event logistics.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Request World Cup Quote
              </Button>
            </Link>
            <Link href="/fleet">
              <Button variant="outline" size="lg">
                View Fleet
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
