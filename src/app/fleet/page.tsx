"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { VehicleCard } from "@/components/fleet/VehicleCard";
import { vehicles } from "@/data/vehicles";
import type { VehicleCategory, ArmorLevel, CitySlug } from "@/types";

type FilterCategory = VehicleCategory | "all";
type FilterArmor = ArmorLevel | "all" | "VR4-VR5" | "VR6-VR7";
type FilterCity = CitySlug | "all";

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-xs uppercase tracking-wider transition-all duration-200 border ${
        active
          ? "bg-champagne text-obsidian border-champagne"
          : "bg-transparent text-silver border-slate hover:text-platinum hover:border-silver"
      }`}
    >
      {children}
    </button>
  );
}

export default function FleetPage() {
  const [categoryFilter, setCategoryFilter] = useState<FilterCategory>("all");
  const [armorFilter, setArmorFilter] = useState<FilterArmor>("all");
  const [cityFilter, setCityFilter] = useState<FilterCity>("all");

  const filteredVehicles = useMemo(() => {
    return vehicles.filter((vehicle) => {
      // Category filter
      if (categoryFilter !== "all" && vehicle.category !== categoryFilter) {
        return false;
      }

      // Armor level filter
      if (armorFilter !== "all") {
        if (armorFilter === "VR4-VR5") {
          if (vehicle.armorLevel !== "VR4" && vehicle.armorLevel !== "VR5") {
            return false;
          }
        } else if (armorFilter === "VR6-VR7") {
          if (vehicle.armorLevel !== "VR6" && vehicle.armorLevel !== "VR7") {
            return false;
          }
        } else if (vehicle.armorLevel !== armorFilter) {
          return false;
        }
      }

      // City filter
      if (cityFilter !== "all" && !vehicle.availability.includes(cityFilter)) {
        return false;
      }

      return true;
    });
  }, [categoryFilter, armorFilter, cityFilter]);

  return (
    <div className="pt-20 min-h-screen bg-obsidian">
      {/* Hero Section */}
      <section className="py-20 border-b border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block text-xs tracking-[0.4em] text-champagne uppercase mb-4">
              Armored Fleet
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-platinum mb-6">
              Complete Vehicle Collection
            </h1>
            <p className="text-lg text-silver leading-relaxed">
              Every vehicle in our fleet is certified to international protection
              standards, meticulously maintained, and available with professional
              security drivers. Select your level of protection.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-onyx border-b border-slate/30 sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            {/* Category Filter */}
            <div>
              <p className="text-xs text-silver uppercase tracking-wider mb-3">
                Category
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  active={categoryFilter === "all"}
                  onClick={() => setCategoryFilter("all")}
                >
                  All
                </FilterButton>
                <FilterButton
                  active={categoryFilter === "SUV"}
                  onClick={() => setCategoryFilter("SUV")}
                >
                  SUV
                </FilterButton>
                <FilterButton
                  active={categoryFilter === "Sedan"}
                  onClick={() => setCategoryFilter("Sedan")}
                >
                  Sedan
                </FilterButton>
                <FilterButton
                  active={categoryFilter === "Performance"}
                  onClick={() => setCategoryFilter("Performance")}
                >
                  Performance
                </FilterButton>
              </div>
            </div>

            {/* Armor Filter */}
            <div className="lg:ml-8">
              <p className="text-xs text-silver uppercase tracking-wider mb-3">
                Protection Level
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  active={armorFilter === "all"}
                  onClick={() => setArmorFilter("all")}
                >
                  All
                </FilterButton>
                <FilterButton
                  active={armorFilter === "VR4-VR5"}
                  onClick={() => setArmorFilter("VR4-VR5")}
                >
                  VR4-VR5
                </FilterButton>
                <FilterButton
                  active={armorFilter === "VR6-VR7"}
                  onClick={() => setArmorFilter("VR6-VR7")}
                >
                  VR6-VR7
                </FilterButton>
              </div>
            </div>

            {/* City Filter */}
            <div className="lg:ml-8">
              <p className="text-xs text-silver uppercase tracking-wider mb-3">
                City
              </p>
              <div className="flex flex-wrap gap-2">
                <FilterButton
                  active={cityFilter === "all"}
                  onClick={() => setCityFilter("all")}
                >
                  All Cities
                </FilterButton>
                <FilterButton
                  active={cityFilter === "mexico-city"}
                  onClick={() => setCityFilter("mexico-city")}
                >
                  Mexico City
                </FilterButton>
                <FilterButton
                  active={cityFilter === "guadalajara"}
                  onClick={() => setCityFilter("guadalajara")}
                >
                  Guadalajara
                </FilterButton>
                <FilterButton
                  active={cityFilter === "monterrey"}
                  onClick={() => setCityFilter("monterrey")}
                >
                  Monterrey
                </FilterButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Results count */}
          <div className="mb-8">
            <p className="text-sm text-silver">
              Showing{" "}
              <span className="text-platinum">{filteredVehicles.length}</span>{" "}
              {filteredVehicles.length === 1 ? "vehicle" : "vehicles"}
            </p>
          </div>

          {/* Grid */}
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle, index) => (
                <VehicleCard key={vehicle.id} vehicle={vehicle} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-silver">
                No vehicles match your current filters.
              </p>
              <button
                onClick={() => {
                  setCategoryFilter("all");
                  setArmorFilter("all");
                  setCityFilter("all");
                }}
                className="mt-4 text-champagne hover:text-champagne-light transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-onyx border-t border-slate/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-light text-platinum mb-4">
            Need assistance selecting the right vehicle?
          </h2>
          <p className="text-silver mb-8 max-w-2xl mx-auto">
            Our security consultants can help match your protection requirements
            with the ideal vehicle from our fleet.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium tracking-wider uppercase bg-champagne text-obsidian hover:bg-champagne-light transition-colors"
          >
            Request Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
