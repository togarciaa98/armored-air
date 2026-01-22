"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { WORLD_CUP_2026 } from "@/lib/constants";

export function WorldCupBanner() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian via-graphite to-obsidian" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(ellipse at 30% 50%, rgba(201, 169, 98, 0.3) 0%, transparent 50%),
                           radial-gradient(ellipse at 70% 50%, rgba(201, 169, 98, 0.2) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs tracking-[0.4em] text-champagne uppercase mb-4">
              Special Event Coverage
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-platinum mb-6">
              FIFA World Cup 2026
              <br />
              <span className="text-champagne">Mexico</span>
            </h2>
            <p className="text-lg text-silver leading-relaxed mb-8">
              Move through the tournament with absolute confidence. From group stage
              to final whistle, our dedicated World Cup fleet ensures secure,
              luxurious transport across all host cities.
            </p>

            {/* Event details */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-champagne" />
                <div>
                  <p className="text-xs text-silver uppercase tracking-wider">
                    Tournament Dates
                  </p>
                  <p className="text-sm text-platinum">
                    {WORLD_CUP_2026.startDate} — {WORLD_CUP_2026.endDate}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-champagne" />
                <div>
                  <p className="text-xs text-silver uppercase tracking-wider">
                    Mexico Host Cities
                  </p>
                  <p className="text-sm text-platinum">
                    {WORLD_CUP_2026.mexicoCities.join(" · ")}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/world-cup-2026">
                <Button variant="primary" size="lg">
                  Explore Packages
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Reserve Early
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Visual element */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative aspect-square">
              {/* Decorative elements */}
              <div className="absolute inset-0 border border-champagne/20 rounded-full" />
              <div className="absolute inset-8 border border-champagne/15 rounded-full" />
              <div className="absolute inset-16 border border-champagne/10 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl font-light text-champagne">2026</p>
                  <p className="text-xs tracking-[0.3em] text-silver uppercase mt-2">
                    World Cup
                  </p>
                </div>
              </div>
              {/* City markers */}
              <div className="absolute top-1/4 right-0 transform translate-x-4">
                <div className="bg-graphite border border-slate px-3 py-2">
                  <p className="text-xs text-champagne">Mexico City</p>
                </div>
              </div>
              <div className="absolute bottom-1/4 left-0 transform -translate-x-4">
                <div className="bg-graphite border border-slate px-3 py-2">
                  <p className="text-xs text-champagne">Guadalajara</p>
                </div>
              </div>
              <div className="absolute bottom-8 right-1/4">
                <div className="bg-graphite border border-slate px-3 py-2">
                  <p className="text-xs text-champagne">Monterrey</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
