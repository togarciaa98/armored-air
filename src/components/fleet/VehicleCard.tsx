"use client";

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { Vehicle } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { formatCurrency, getCityName } from "@/lib/utils";

interface VehicleCardProps {
  vehicle: Vehicle;
  index?: number;
}

export function VehicleCard({ vehicle, index = 0 }: VehicleCardProps) {
  const t = useTranslations('fleet.vehicleCard');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/fleet/${vehicle.slug}`} className="group block">
        <article className="bg-graphite border border-slate/50 overflow-hidden transition-all duration-300 hover:border-slate hover:bg-graphite/80">
          {/* Image placeholder */}
          <div className="relative aspect-[16/10] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-slate/20 via-graphite to-onyx" />
            {/* Subtle car silhouette indicator */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <svg
                viewBox="0 0 100 40"
                className="w-48 h-auto text-silver"
                fill="currentColor"
              >
                <ellipse cx="50" cy="30" rx="45" ry="8" opacity="0.3" />
                <path d="M15 25 Q20 15 35 12 L65 12 Q80 15 85 25 L85 28 Q85 30 83 30 L17 30 Q15 30 15 28 Z" />
                <circle cx="25" cy="30" r="6" />
                <circle cx="75" cy="30" r="6" />
              </svg>
            </div>
            {/* Badges */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              <Badge variant="gold">{vehicle.armorLevel}</Badge>
              <Badge variant="default">{vehicle.category}</Badge>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-champagne/0 group-hover:bg-champagne/5 transition-colors duration-300" />
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-platinum group-hover:text-champagne transition-colors">
                  {vehicle.name}
                </h3>
                <p className="text-sm text-silver mt-1">{vehicle.profile} Protection</p>
              </div>
              <ArrowRight className="w-5 h-5 text-silver group-hover:text-champagne group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>

            {/* Specs */}
            <div className="mt-4 pt-4 border-t border-slate/30 grid grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-silver uppercase tracking-wider">Engine</p>
                <p className="text-sm text-platinum mt-1">{vehicle.specs.engine}</p>
              </div>
              <div>
                <p className="text-xs text-silver uppercase tracking-wider">Seats</p>
                <p className="text-sm text-platinum mt-1">{vehicle.specs.capacity}</p>
              </div>
              <div>
                <p className="text-xs text-silver uppercase tracking-wider">{t('from')}</p>
                <p className="text-sm text-champagne mt-1">
                  {formatCurrency(vehicle.pricing.daily)}{t('perDay')}
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="mt-4 pt-4 border-t border-slate/30">
              <p className="text-xs text-silver uppercase tracking-wider mb-2">
                Available in
              </p>
              <div className="flex flex-wrap gap-2">
                {vehicle.availability.map((city) => (
                  <span
                    key={city}
                    className="text-xs text-silver bg-onyx px-2 py-1 rounded-sm"
                  >
                    {getCityName(city)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}
