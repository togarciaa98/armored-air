"use client";

import { useTranslations } from 'next-intl';
import { motion } from "framer-motion";
import { Shield, Lock, Clock, Award } from "lucide-react";

const icons = [Shield, Award, Lock, Clock];

export function TrustIndicators() {
  const t = useTranslations('trustIndicators');

  const items = [
    { title: t('items.0.title'), description: t('items.0.description') },
    { title: t('items.1.title'), description: t('items.1.description') },
    { title: t('items.2.title'), description: t('items.2.description') },
    { title: t('items.3.title'), description: t('items.3.description') },
  ];

  return (
    <section className="py-20 bg-obsidian border-y border-slate/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((indicator, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
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
