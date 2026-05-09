"use client";

import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { PropertyCard } from "./PropertyCard";
import type { PropertyCardData } from "./data";

type HomeFiltersProps = {
  properties: PropertyCardData[];
};

type FilterKey =
  | "area"
  | "bedrooms"
  | "furnishing"
  | "priceRange"
  | "propertyType"
  | "lifestyle"
  | "amenity"
  | "moveIn"
  | "commute";

type FilterState = Record<FilterKey, string>;

type FilterCategory = {
  key: FilterKey;
  title: string;
  helper: string;
  options: string[];
};

const defaultFilters: FilterState = {
  area: "All Areas",
  bedrooms: "Any Size",
  furnishing: "Any Finish",
  priceRange: "Any Budget",
  propertyType: "All Types",
  lifestyle: "Any Lifestyle",
  amenity: "Any Amenity",
  moveIn: "Any Timeline",
  commute: "Any Commute",
};

const priceRanges = [
  { label: defaultFilters.priceRange, min: 0, max: Infinity },
  { label: "Under INR 75k", min: 0, max: 75000 },
  { label: "INR 75k - 1L", min: 75000, max: 100000 },
  { label: "Above INR 1L", min: 100000, max: Infinity },
];

export function HomeFilters({ properties }: HomeFiltersProps) {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const categories = useMemo<FilterCategory[]>(() => {
    const unique = (values: string[]) => Array.from(new Set(values));

    return [
      {
        key: "area",
        title: "Area",
        helper: "Choose your city rhythm.",
        options: [defaultFilters.area, ...unique(properties.map((property) => property.area))],
      },
      {
        key: "bedrooms",
        title: "Bedrooms",
        helper: "Set the scale.",
        options: [
          defaultFilters.bedrooms,
          ...Array.from(new Set(properties.map((property) => property.bedrooms)))
            .sort((a, b) => a - b)
            .map((value) => `${value} BHK`),
        ],
      },
      {
        key: "furnishing",
        title: "Furnishing",
        helper: "Select move-in readiness.",
        options: [
          defaultFilters.furnishing,
          ...unique(properties.map((property) => property.furnishing)),
        ],
      },
      {
        key: "priceRange",
        title: "Price Range",
        helper: "Monthly comfort.",
        options: priceRanges.map((range) => range.label),
      },
      {
        key: "propertyType",
        title: "Property Type",
        helper: "Preferred residence format.",
        options: [
          defaultFilters.propertyType,
          ...unique(properties.map((property) => property.propertyType)),
        ],
      },
      {
        key: "lifestyle",
        title: "Lifestyle",
        helper: "How daily life should feel.",
        options: [
          defaultFilters.lifestyle,
          ...unique(properties.flatMap((property) => property.lifestyles)),
        ],
      },
      {
        key: "amenity",
        title: "Amenities",
        helper: "Small comforts that matter.",
        options: [
          defaultFilters.amenity,
          ...unique(properties.flatMap((property) => property.amenities)),
        ],
      },
      {
        key: "moveIn",
        title: "Move-In",
        helper: "Your preferred timing.",
        options: [
          defaultFilters.moveIn,
          ...unique(properties.map((property) => property.moveIn)),
        ],
      },
      {
        key: "commute",
        title: "Commute",
        helper: "Anchor around your routine.",
        options: [
          defaultFilters.commute,
          ...unique(properties.map((property) => property.commutePreference)),
        ],
      },
    ];
  }, [properties]);

  const filteredProperties = properties.filter((property) => {
    const selectedPriceRange = priceRanges.find(
      (range) => range.label === filters.priceRange
    );

    return (
      (filters.area === defaultFilters.area || property.area === filters.area) &&
      (filters.bedrooms === defaultFilters.bedrooms ||
        `${property.bedrooms} BHK` === filters.bedrooms) &&
      (filters.furnishing === defaultFilters.furnishing ||
        property.furnishing === filters.furnishing) &&
      (!selectedPriceRange ||
        (property.priceMonthly >= selectedPriceRange.min &&
          property.priceMonthly <= selectedPriceRange.max)) &&
      (filters.propertyType === defaultFilters.propertyType ||
        property.propertyType === filters.propertyType) &&
      (filters.lifestyle === defaultFilters.lifestyle ||
        property.lifestyles.includes(filters.lifestyle)) &&
      (filters.amenity === defaultFilters.amenity ||
        property.amenities.includes(filters.amenity)) &&
      (filters.moveIn === defaultFilters.moveIn || property.moveIn === filters.moveIn) &&
      (filters.commute === defaultFilters.commute ||
        property.commutePreference === filters.commute)
    );
  });

  const activeFilters = categories.filter(
    (category) => filters[category.key] !== defaultFilters[category.key]
  );

  const updateFilter = (key: FilterKey, value: string) => {
    setFilters((current) => ({ ...current, [key]: value }));
  };

  const clearFilter = (key: FilterKey) => {
    setFilters((current) => ({ ...current, [key]: defaultFilters[key] }));
  };

  const resetFilters = () => {
    setFilters(defaultFilters);
  };

  const primaryCategories = categories.slice(0, 3);
  const advancedCategories = categories.slice(3);

  return (
    <div className="flex flex-col gap-12">
      <section
        className="bg-surface-container-lowest px-5 py-7 shadow-sm ring-1 ring-outline-variant/20 sm:px-8 sm:py-9 lg:px-10"
        aria-label="Curated property filters"
      >
        <div className="grid gap-8 border-b border-outline-variant/20 pb-8 lg:grid-cols-[0.9fr_auto] lg:items-end">
          <div>
            <p className="dwellio-label mb-4 text-on-surface-variant">Curated Discovery</p>
            <h3 className="max-w-2xl font-heading text-3xl font-normal leading-tight text-primary sm:text-4xl">
              Refine the shortlist with quiet intention.
            </h3>
          </div>
          <RefineSearchSheet
            categories={advancedCategories}
            filters={filters}
            onChange={updateFilter}
            onReset={resetFilters}
          />
        </div>

        <div className="mt-9 grid gap-x-10 gap-y-9 lg:grid-cols-3">
          {primaryCategories.map((category) => (
            <FilterCategoryBlock
              key={category.key}
              category={category}
              value={filters[category.key]}
              onChange={(value) => updateFilter(category.key, value)}
            />
          ))}
        </div>

        {activeFilters.length ? (
          <div className="mt-9 flex flex-col gap-4 border-t border-outline-variant/20 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2.5">
              {activeFilters.map((category) => (
                <ActiveFilterChip
                  key={category.key}
                  label={filters[category.key]}
                  onClear={() => clearFilter(category.key)}
                />
              ))}
            </div>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="w-fit px-0 text-on-surface-variant hover:bg-transparent hover:text-primary"
              onClick={resetFilters}
            >
              Reset
            </Button>
          </div>
        ) : null}
      </section>

      <div className="flex items-center justify-between gap-4 border-b border-outline-variant/20 pb-5">
        <p className="dwellio-label text-on-surface-variant">
          {filteredProperties.length} curated {filteredProperties.length === 1 ? "home" : "homes"}
        </p>
      </div>

      <motion.div layout className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {filteredProperties.map((property, index) => (
          <motion.div
            key={property.id}
            layout
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <PropertyCard property={property} imagePriority={index === 0} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function FilterCategoryBlock({
  category,
  value,
  onChange,
}: {
  category: FilterCategory;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <p className="dwellio-label text-primary">{category.title}</p>
        <p className="mt-1.5 text-sm leading-relaxed text-on-surface-variant">
          {category.helper}
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        {category.options.map((option) => (
          <FilterChip
            key={option}
            label={option}
            active={value === option}
            onClick={() => onChange(option)}
          />
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileHover={{ y: -1, scale: 1.015 }}
      whileTap={{ scale: 0.99 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] transition-all duration-300",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-[0_10px_24px_rgb(28_27_27/0.12)]"
          : "border-outline-variant/40 bg-surface text-primary hover:border-primary/30 hover:bg-surface-container-low"
      )}
      onClick={onClick}
    >
      {label}
    </motion.button>
  );
}

function ActiveFilterChip({ label, onClear }: { label: string; onClear: () => void }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full bg-surface-container px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-primary transition-colors hover:bg-surface-container-high"
      onClick={onClear}
    >
      {label}
      <X className="size-3.5" aria-hidden="true" />
      <span className="sr-only">Remove {label}</span>
    </button>
  );
}

function RefineSearchSheet({
  categories,
  filters,
  onChange,
  onReset,
}: {
  categories: FilterCategory[];
  filters: FilterState;
  onChange: (key: FilterKey, value: string) => void;
  onReset: () => void;
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="h-11 w-fit rounded-full border-primary/20 bg-surface/70 px-5 hover:border-primary/35 hover:bg-surface-container-low"
        >
          <SlidersHorizontal className="size-4" aria-hidden="true" />
          Refine Search
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-y-auto bg-surface sm:max-w-xl" showCloseButton>
        <SheetHeader className="border-b border-outline-variant/25 pb-7">
          <SheetTitle className="font-heading text-3xl font-normal normal-case tracking-normal">
            Refine Search
          </SheetTitle>
          <SheetDescription>
            Add only the details that shape your daily comfort.
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col gap-10 p-8">
          {categories.map((category) => (
            <FilterCategoryBlock
              key={category.key}
              category={category}
              value={filters[category.key]}
              onChange={(value) => onChange(category.key, value)}
            />
          ))}
        </div>

        <SheetFooter className="border-t border-outline-variant/25">
          <Button type="button" variant="outline" className="rounded-full" onClick={onReset}>
            Clear Refinements
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
