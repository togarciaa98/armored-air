"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { cities } from "@/data/cities";

export function CitySelector() {
  const t = useTranslations('citySelector');

  return (
    <section className="py-24 bg-obsidian">
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
            {t('badge')}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-platinum mb-4">
            {t('title')}
          </h2>
          <p className="text-silver max-w-2xl mx-auto">
            {t('description')}
          </p>
        </motion.div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cities.map((city, index) => (
            <motion.div
              key={city.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/cities/${city.slug}`} className="group block">
                <article className="relative h-80 overflow-hidden bg-graphite border border-slate/50 transition-all duration-300 hover:border-champagne/30">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/80 to-transparent" />

                  {/* Decorative pattern */}
                  <div
                    className="absolute inset-0 opacity-5"
                    style={{
                      backgroundImage: `radial-gradient(circle at 50% 0%, rgba(201, 169, 98, 0.5) 0%, transparent 50%)`,
                    }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="flex items-center gap-2 text-champagne mb-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-wider">
                        {city.stadium}
                      </span>
                    </div>

                    <h3 className="text-2xl font-light text-platinum group-hover:text-champagne transition-colors">
                      {city.name}
                    </h3>
                    <p className="text-sm text-silver mt-1">{city.tagline}</p>

                    {/* Fleet summary */}
                    <div className="mt-4 pt-4 border-t border-slate/30 flex items-center justify-between">
                      <div className="flex gap-4">
                        <div>
                          <p className="text-lg text-champagne">{city.fleet.suv}</p>
                          <p className="text-[10px] text-silver uppercase">SUVs</p>
                        </div>
                        <div>
                          <p className="text-lg text-champagne">{city.fleet.sedan}</p>
                          <p className="text-[10px] text-silver uppercase">Sedans</p>
                        </div>
                        {city.fleet.performance > 0 && (
                          <div>
                            <p className="text-lg text-champagne">{city.fleet.performance}</p>
                            <p className="text-[10px] text-silver uppercase">Performance</p>
                          </div>
                        )}
                      </div>
                      <ArrowRight className="w-5 h-5 text-silver group-hover:text-champagne group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
