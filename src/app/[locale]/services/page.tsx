import Link from "next/link";
import { Shield, Radio, Headset, Bell } from "lucide-react";
import { services } from "@/data/services";
import { Button } from "@/components/ui/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security & Concierge Services",
  description:
    "Comprehensive protection services including certified drivers, security coordination, concierge support, and 24/7 operations center.",
};

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  shield: Shield,
  radar: Radio,
  concierge: Bell,
  headset: Headset,
};

export default function ServicesPage() {
  return (
    <div className="pt-20 min-h-screen bg-obsidian">
      {/* Hero */}
      <section className="py-20 border-b border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs tracking-[0.4em] text-champagne uppercase mb-4">
              Services
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-platinum mb-6">
              Security & Concierge
            </h1>
            <p className="text-lg text-silver leading-relaxed">
              Beyond the vehicle, we provide comprehensive support that ensures
              every aspect of your journey is handled with precision and
              discretion. Our services are designed to integrate seamlessly with
              your existing security protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Shield;
              return (
                <div
                  key={service.id}
                  className="bg-graphite border border-slate/50 p-8"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-onyx border border-slate flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-champagne" />
                    </div>
                    <div>
                      <h3 className="text-xl font-light text-platinum mb-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-silver">{service.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-3 border-t border-slate/30 pt-6">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-silver"
                      >
                        <span className="w-1.5 h-1.5 bg-champagne rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-onyx">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
              How We Work
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              Our engagement process is designed for discretion and efficiency,
              ensuring your requirements are met with the utmost precision.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description:
                  "Confidential discussion of your security requirements, travel itinerary, and specific needs.",
              },
              {
                step: "02",
                title: "Security Assessment",
                description:
                  "Our team evaluates routes, venues, and potential considerations to recommend the optimal solution.",
              },
              {
                step: "03",
                title: "Fleet Assignment",
                description:
                  "Selection of appropriate vehicles and personnel matched to your protection profile.",
              },
              {
                step: "04",
                title: "Operational Execution",
                description:
                  "Seamless service delivery with real-time monitoring and 24/7 support throughout your engagement.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-champagne text-champagne text-sm mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-light text-platinum mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-silver">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
                World Cup 2026 Specialized Services
              </h2>
              <h3 className="text-3xl font-light text-platinum mb-6">
                Tournament-Ready Operations
              </h3>
              <p className="text-silver mb-8 leading-relaxed">
                For FIFA World Cup 2026, we offer enhanced services specifically
                designed for the unique demands of the tournament, including
                multi-city coordination, stadium logistics, and heightened
                security protocols.
              </p>
              <ul className="space-y-4">
                {[
                  "Pre-event route reconnaissance for all venues",
                  "Stadium arrival and departure coordination",
                  "Multi-city fleet positioning",
                  "VIP holding area access management",
                  "Integration with official event security",
                  "Emergency contingency planning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-silver">
                    <span className="w-1.5 h-1.5 bg-champagne rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-graphite border border-slate/50 p-8">
              <div className="aspect-video bg-gradient-to-br from-slate/10 via-graphite to-onyx flex items-center justify-center mb-6">
                <div className="text-center">
                  <p className="text-4xl font-light text-champagne">2026</p>
                  <p className="text-xs tracking-[0.2em] text-silver uppercase mt-2">
                    World Cup Ready
                  </p>
                </div>
              </div>
              <Link href="/world-cup-2026">
                <Button variant="outline" className="w-full">
                  Explore World Cup Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-graphite border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-platinum mb-4">
            Discuss Your Requirements
          </h2>
          <p className="text-silver mb-8 max-w-2xl mx-auto">
            Every engagement is unique. Contact us to discuss how we can tailor
            our services to your specific security and logistics needs.
          </p>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Request Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
