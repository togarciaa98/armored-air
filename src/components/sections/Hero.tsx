"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian/95 to-obsidian">
        {/* Placeholder for hero image - dark gradient with subtle pattern */}
        <div className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 50% 0%, rgba(201, 169, 98, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at 80% 50%, rgba(201, 169, 98, 0.08) 0%, transparent 40%),
                radial-gradient(ellipse at 20% 80%, rgba(201, 169, 98, 0.05) 0%, transparent 40%)
              `,
            }}
          />
        </div>
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Pre-headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs tracking-[0.4em] text-champagne uppercase mb-6">
              FIFA World Cup 2026 — Mexico
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-platinum mb-6"
          >
            Command Every Mile
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-silver font-light leading-relaxed max-w-2xl mx-auto mb-12"
          >
            Armored luxury vehicles for the world&apos;s most protected journeys.
            <br className="hidden md:block" />
            Security, discretion, and excellence—without compromise.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Request Private Quote
              </Button>
            </Link>
            <Link href="/fleet">
              <Button variant="outline" size="lg">
                Explore Fleet
              </Button>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 pt-10 border-t border-slate/30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-2xl font-light text-champagne">24/7</p>
                <p className="text-xs text-silver uppercase tracking-wider mt-1">
                  Secure Operations
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-light text-champagne">VR4-VR7</p>
                <p className="text-xs text-silver uppercase tracking-wider mt-1">
                  Protection Levels
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-light text-champagne">3</p>
                <p className="text-xs text-silver uppercase tracking-wider mt-1">
                  Host Cities
                </p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-light text-champagne">15+</p>
                <p className="text-xs text-silver uppercase tracking-wider mt-1">
                  Years Excellence
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-silver" />
        </motion.div>
      </motion.div>
    </section>
  );
}
