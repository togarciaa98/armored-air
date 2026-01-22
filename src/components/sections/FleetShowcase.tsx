"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { VehicleCard } from "@/components/fleet/VehicleCard";
import { Button } from "@/components/ui/Button";
import { getFeaturedVehicles } from "@/data/vehicles";

export function FleetShowcase() {
  const featuredVehicles = getFeaturedVehicles();

  return (
    <section className="py-24 bg-onyx">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs tracking-[0.4em] text-champagne uppercase mb-4">
            Our Fleet
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-platinum mb-4">
            Armored Excellence
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            A curated collection of the world&apos;s finest armored vehicles, each certified
            to the highest protection standards and maintained to perfection.
          </p>
        </motion.div>

        {/* Featured Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredVehicles.map((vehicle, index) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link href="/fleet">
            <Button variant="outline" size="lg">
              View Complete Fleet
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
