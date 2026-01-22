"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Clock, Award } from "lucide-react";
import { TRUST_INDICATORS } from "@/lib/constants";

const icons = {
  0: Shield,
  1: Award,
  2: Lock,
  3: Clock,
};

export function TrustIndicators() {
  return (
    <section className="py-20 bg-obsidian border-y border-slate/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TRUST_INDICATORS.map((indicator, index) => {
            const Icon = icons[index as keyof typeof icons];
            return (
              <motion.div
                key={indicator.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-graphite border border-slate/50 mb-4">
                  <Icon className="w-5 h-5 text-champagne" />
                </div>
                <h3 className="text-sm font-medium text-platinum uppercase tracking-wider">
                  {indicator.title}
                </h3>
                <p className="text-sm text-silver mt-2">{indicator.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
