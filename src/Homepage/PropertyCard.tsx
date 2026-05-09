"use client";

import Image from "next/image";
import Link from "next/link";
import { BadgeCheck, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { PropertyCardData } from "./data";

type PropertyCardProps = {
  property: PropertyCardData;
  className?: string;
  imagePriority?: boolean;
};

export function PropertyCard({
  property,
  className,
  imagePriority = false,
}: PropertyCardProps) {
  const content = (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group flex min-w-0 flex-col gap-4", className)}
    >
      <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container dwellio-soft-shadow">
        <Image
          src={property.image.src}
          alt={property.image.alt}
          fill
          priority={imagePriority}
          sizes="(min-width: 1024px) 29vw, (min-width: 768px) 44vw, 100vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
        />
        {property.verified ? <VerifiedBadge /> : null}
      </div>

      <div className="flex min-w-0 flex-col border-l border-outline-variant/40 py-1 pl-4">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="min-w-0 truncate font-heading text-2xl font-medium leading-tight text-primary sm:text-[1.625rem]">
            {property.title}
          </h2>
          <span className="dwellio-label flex shrink-0 items-center gap-1 text-primary">
            <Star className="size-3.5" aria-hidden="true" />
            {property.rating}
          </span>
        </div>
        <p className="mt-2 text-base leading-relaxed text-on-surface-variant">
          {property.details}
        </p>
        {property.commute ? (
          <p className="dwellio-label mt-4 flex items-center gap-2 text-on-surface-variant">
            <MapPin className="size-3.5" aria-hidden="true" />
            {property.commute}
          </p>
        ) : null}
        <p className="dwellio-label mt-5 text-primary">
          {property.price}{" "}
          {property.period ? (
            <span className="font-normal tracking-wider text-on-surface-variant">
              {property.period}
            </span>
          ) : null}
        </p>
      </div>
    </motion.article>
  );

  if (!property.href) {
    return content;
  }

  return (
    <Link href={property.href} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40">
      {content}
    </Link>
  );
}

function VerifiedBadge() {
  return (
    <Badge className="absolute right-4 top-4 rounded-full border border-white/60 bg-white/75 px-3 py-1.5 text-primary shadow-sm backdrop-blur-md">
      <BadgeCheck className="size-3.5" aria-hidden="true" />
      Verified
    </Badge>
  );
}
