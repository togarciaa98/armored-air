import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { pricingTiers, worldCupPackages } from "@/data/services";
import { Button } from "@/components/ui/Button";
import { formatCurrency } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for armored vehicle rentals. From low-profile to high-risk protection levels, find the right option for your security needs.",
};

export default function PricingPage() {
  return (
    <div className="pt-20 min-h-screen bg-obsidian">
      {/* Hero */}
      <section className="py-20 border-b border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block text-xs tracking-[0.4em] text-champagne uppercase mb-4">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-platinum mb-6">
              Transparent Excellence
            </h1>
            <p className="text-lg text-silver leading-relaxed">
              Our rates reflect the uncompromising standards of protection and
              service that define every journey. Each tier includes professional
              drivers and 24/7 operational support.
            </p>
          </div>
        </div>
      </section>

      {/* Protection Tiers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
              Protection Tiers
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              Select the level of protection that matches your security requirements.
              All tiers include certified armored vehicles and trained drivers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div
                key={tier.id}
                className={`relative bg-graphite border p-8 flex flex-col ${
                  index === 1
                    ? "border-champagne/50 lg:-mt-4 lg:mb-4"
                    : "border-slate/50"
                }`}
              >
                {index === 1 && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-champagne text-obsidian text-[10px] uppercase tracking-wider px-3 py-1">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-xs text-champagne uppercase tracking-wider mb-2">
                    {tier.armorRange}
                  </p>
                  <h3 className="text-2xl font-light text-platinum mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-sm text-silver">{tier.description}</p>
                </div>

                <div className="mb-8">
                  <p className="text-3xl font-light text-platinum">
                    {formatCurrency(tier.priceFrom)}
                    <span className="text-sm text-silver">/day</span>
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-grow">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-silver">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    variant={index === 1 ? "primary" : "outline"}
                    className="w-full"
                  >
                    Request Quote
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* World Cup Packages */}
      <section className="py-20 bg-onyx">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
              World Cup 2026 Packages
            </h2>
            <p className="text-silver max-w-2xl mx-auto">
              Specialized packages designed for FIFA World Cup 2026 in Mexico.
              Secure your fleet early for priority access.
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
                <p className="text-sm text-silver mb-4 flex-grow">
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

          <div className="mt-12 text-center">
            <Link href="/world-cup-2026">
              <Button variant="outline" size="lg">
                Explore World Cup Packages
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-20 border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
                What&apos;s Included
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-silver">
                    Certified armored vehicle with full documentation
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-silver">
                    Professional security-trained driver
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-silver">
                    24/7 operations center support
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-silver">
                    Comprehensive insurance coverage
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-champagne flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-silver">
                    GPS tracking and monitoring
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs tracking-[0.2em] text-champagne uppercase mb-4">
                Additional Services
              </h3>
              <p className="text-sm text-silver mb-4">
                Rates vary depending on security level, city, duration, and
                specific services required. Additional charges may apply for:
              </p>
              <ul className="space-y-2 text-sm text-silver">
                <li>• Multi-vehicle convoys</li>
                <li>• Extended operational hours</li>
                <li>• Inter-city transfers</li>
                <li>• Security escort coordination</li>
                <li>• Airport meet and greet services</li>
                <li>• Special event logistics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-graphite border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm text-silver mb-2">
            All quotes are confidential and tailored to your specific requirements
          </p>
          <h2 className="text-2xl font-light text-platinum mb-6">
            Ready to discuss your security needs?
          </h2>
          <Link href="/contact">
            <Button variant="primary" size="lg">
              Request Private Quote
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
