import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { cities } from "@/data/cities";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cities Covered",
  description:
    "Armored vehicle services across all FIFA World Cup 2026 host cities in Mexico: Mexico City, Guadalajara, and Monterrey.",
};

export default function CitiesPage() {
  return (
    <div className="pt-20 min-h-screen bg-obsidian">
      {/* Hero */}
      <section className="py-20 border-b border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs tracking-[0.4em] text-champagne uppercase mb-4">
              Coverage
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-platinum mb-6">
              Host Cities
            </h1>
            <p className="text-lg text-silver leading-relaxed">
              Comprehensive armored vehicle coverage across all FIFA World Cup
              2026 host cities in Mexico. Local expertise, dedicated fleets, and
              seamless multi-city coordination.
            </p>
          </div>
        </div>
      </section>

      {/* Cities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {cities.map((city, index) => (
              <div
                key={city.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-dense" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center gap-2 text-champagne mb-4">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-wider">
                      {city.stadium}
                    </span>
                  </div>
                  <h2 className="text-4xl font-light text-platinum mb-2">
                    {city.name}
                  </h2>
                  <p className="text-lg text-champagne mb-6">{city.tagline}</p>
                  <p className="text-silver leading-relaxed mb-8">
                    {city.description}
                  </p>

                  {/* Fleet Summary */}
                  <div className="grid grid-cols-3 gap-6 mb-8">
                    <div>
                      <p className="text-3xl font-light text-platinum">
                        {city.fleet.suv}
                      </p>
                      <p className="text-xs text-silver uppercase tracking-wider">
                        SUVs Available
                      </p>
                    </div>
                    <div>
                      <p className="text-3xl font-light text-platinum">
                        {city.fleet.sedan}
                      </p>
                      <p className="text-xs text-silver uppercase tracking-wider">
                        Sedans Available
                      </p>
                    </div>
                    {city.fleet.performance > 0 && (
                      <div>
                        <p className="text-3xl font-light text-platinum">
                          {city.fleet.performance}
                        </p>
                        <p className="text-xs text-silver uppercase tracking-wider">
                          Performance
                        </p>
                      </div>
                    )}
                  </div>

                  <Link href={`/cities/${city.slug}`}>
                    <Button variant="outline">
                      View {city.name} Fleet
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Visual */}
                <div
                  className={`${
                    index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                  }`}
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate/10 via-graphite to-onyx border border-slate/50 relative overflow-hidden">
                    {/* Decorative city representation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 rounded-full border border-champagne/30 flex items-center justify-center mx-auto mb-4">
                          <MapPin className="w-8 h-8 text-champagne/50" />
                        </div>
                        <p className="text-silver/50 text-sm">{city.name}</p>
                      </div>
                    </div>
                    {/* Coverage areas */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-obsidian to-transparent p-6">
                      <p className="text-xs text-silver uppercase tracking-wider mb-2">
                        Coverage Areas
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {city.coverage.slice(0, 4).map((area) => (
                          <span
                            key={area}
                            className="text-xs text-silver bg-onyx/80 px-2 py-1"
                          >
                            {area}
                          </span>
                        ))}
                        {city.coverage.length > 4 && (
                          <span className="text-xs text-champagne">
                            +{city.coverage.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-City */}
      <section className="py-20 bg-onyx">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
              Multi-City Coordination
            </h2>
            <h3 className="text-3xl font-light text-platinum mb-6">
              Seamless Inter-City Movement
            </h3>
            <p className="text-silver max-w-2xl mx-auto">
              For itineraries spanning multiple host cities, we coordinate
              vehicle positioning, driver assignments, and logistics to ensure
              continuous protection throughout your journey.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Vehicle Positioning",
                description:
                  "Your selected vehicle awaits in each city, or accompanies you via secure transport between locations.",
              },
              {
                title: "Driver Continuity",
                description:
                  "Option for consistent driver assignment across cities or local specialists in each location.",
              },
              {
                title: "Unified Operations",
                description:
                  "Single point of contact through our operations center for all cities and requirements.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-graphite border border-slate/50 p-6 text-center"
              >
                <h4 className="text-lg font-light text-platinum mb-2">
                  {feature.title}
                </h4>
                <p className="text-sm text-silver">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-graphite border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-platinum mb-4">
            Planning a Multi-City Itinerary?
          </h2>
          <p className="text-silver mb-8 max-w-2xl mx-auto">
            Our team specializes in coordinating complex schedules across all
            Mexican World Cup host cities.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Request Multi-City Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
