import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Banknote,
  Check,
  Footprints,
  Home,
  Laptop,
  Minus,
  Plus,
  TrainFront,
  Users,
  Wallet,
  X,
} from "lucide-react";

import { neighbourhoodData } from "@/src/Neighbourhood";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  laptop: Laptop,
  wallet: Wallet,
  footprints: Footprints,
  users: Users,
  home: Home,
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return neighbourhoodData.map((neighbourhood) => ({
    slug: neighbourhood.slug,
  }));
}

export default async function NeighbourhoodDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const neighbourhood = neighbourhoodData.find((n) => n.slug === slug);

  if (!neighbourhood) {
    notFound();
  }

  return (
    <div className="bg-background text-foreground">
      {/* Area Hero */}
      <section className="dwellio-container pt-20 sm:pt-28 pb-[120px]">
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/7] rounded-xl overflow-hidden">
          <Image
            src={neighbourhood.image}
            alt={neighbourhood.imageAlt}
            fill
            priority
            sizes="(min-width: 640px) 88vw, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-12 lg:p-16 w-full max-w-3xl text-primary-foreground">
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-normal leading-[1.1] tracking-[-0.02em] mb-4 text-surface-container-lowest drop-shadow-md">
              {neighbourhood.name}
            </h1>
            <p className="font-sans text-base sm:text-lg text-surface-container-low max-w-xl mb-6 sm:mb-8 leading-relaxed opacity-90">
              {neighbourhood.description}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {neighbourhood.heroBadges.map((badge) => {
                const Icon = ICON_MAP[badge.icon] ?? null;
                return (
                  <span
                    key={badge.label}
                    className="dwellio-label inline-flex items-center gap-2 rounded-full border border-surface-container-lowest/30 bg-surface-container-lowest/20 px-4 py-2 text-surface-container-lowest backdrop-blur-md"
                  >
                    {Icon ? <Icon className="size-4" aria-hidden="true" /> : null}
                    {badge.label}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Story & Snapshot Bento */}
      <section className="dwellio-container pb-[120px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-[-0.01em] text-primary mb-6">
              {neighbourhood.editorialTitle}
            </h2>
            <div className="w-12 h-[2px] bg-secondary mb-8" />
            {neighbourhood.editorialParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className="font-sans text-base sm:text-lg leading-relaxed tracking-[0.01em] text-on-surface-variant mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg bg-surface-container p-6 flex flex-col justify-between hover:bg-surface-container-high transition-colors duration-300">
              <div className="mb-4">
                <Banknote
                  className="size-7 text-secondary mb-2"
                  aria-hidden="true"
                />
                <h3 className="dwellio-label text-on-surface-variant">
                  Average Rent
                </h3>
              </div>
              <div>
                <div className="flex justify-between items-end border-b border-outline-variant/30 pb-2 mb-2">
                  <span className="font-sans text-sm text-on-surface-variant">
                    PG
                  </span>
                  <span className="font-heading text-xl font-medium text-primary">
                    {neighbourhood.rentPG}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <span className="font-sans text-sm text-on-surface-variant">
                    1BHK
                  </span>
                  <span className="font-heading text-xl font-medium text-primary">
                    {neighbourhood.rent1BHK}
                  </span>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-surface-container p-6 flex flex-col justify-between hover:bg-surface-container-high transition-colors duration-300">
              <div className="mb-4">
                <Footprints
                  className="size-7 text-secondary mb-2"
                  aria-hidden="true"
                />
                <h3 className="dwellio-label text-on-surface-variant">
                  Walkability
                </h3>
              </div>
              <div>
                <span className="font-heading text-xl font-medium text-primary">
                  {neighbourhood.walkabilityRating}
                </span>
                <p className="font-sans text-sm text-on-surface-variant mt-2">
                  {neighbourhood.walkabilityDescription}
                </p>
              </div>
            </div>

            <div className="sm:col-span-2 rounded-lg bg-surface-container p-6 flex flex-col justify-between hover:bg-surface-container-high transition-colors duration-300">
              <div className="flex items-center gap-3 mb-4">
                <TrainFront
                  className="size-7 text-secondary"
                  aria-hidden="true"
                />
                <h3 className="dwellio-label text-on-surface-variant">
                  Commute
                </h3>
              </div>
              <div>
                <span className="font-heading text-xl font-medium text-primary">
                  {neighbourhood.commuteRating}
                </span>
                <p className="font-sans text-sm text-on-surface-variant mt-2">
                  {neighbourhood.commuteDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pros & Cons / Who Should Live Here */}
      <section className="dwellio-container pb-[120px]">
        <div className="rounded-xl bg-surface-container-low py-12 sm:py-16 px-6 sm:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-primary mb-8 border-b border-outline-variant/30 pb-4">
                The Reality Check
              </h3>
              <div className="space-y-6">
                {neighbourhood.pros.map((pro) => (
                  <div key={pro.title} className="flex items-start gap-4">
                    <Plus className="size-5 text-tertiary-fixed mt-0.5 shrink-0" aria-hidden="true" />
                    <div>
                      <h4 className="font-sans text-base font-semibold text-primary mb-1">
                        {pro.title}
                      </h4>
                      <p className="font-sans text-sm leading-relaxed text-on-surface-variant">
                        {pro.description}
                      </p>
                    </div>
                  </div>
                ))}
                <div className="pt-6 border-t border-outline-variant/30 mt-8 space-y-6">
                  {neighbourhood.cons.map((con) => (
                    <div key={con.title} className="flex items-start gap-4">
                      <Minus className="size-5 text-outline mt-0.5 shrink-0" aria-hidden="true" />
                      <div>
                        <h4 className="font-sans text-base font-semibold text-primary mb-1">
                          {con.title}
                        </h4>
                        <p className="font-sans text-sm leading-relaxed text-on-surface-variant">
                          {con.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-outline-variant/20 bg-surface p-6 sm:p-8 shadow-sm">
              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-primary mb-8">
                Is it for you?
              </h3>
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                  <Check className="size-5 text-tertiary-fixed shrink-0" aria-hidden="true" />
                  <h4 className="font-sans text-base font-semibold text-primary">
                    Ideal for
                  </h4>
                </div>
                <p className="font-sans text-sm leading-relaxed text-on-surface-variant pl-9 border-l-2 border-tertiary-fixed/30">
                  {neighbourhood.idealFor}
                </p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <X className="size-5 text-outline shrink-0" aria-hidden="true" />
                  <h4 className="font-sans text-base font-semibold text-primary">
                    Not ideal for
                  </h4>
                </div>
                <p className="font-sans text-sm leading-relaxed text-on-surface-variant pl-9 border-l-2 border-outline/30">
                  {neighbourhood.notIdealFor}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifestyle Highlights */}
      <section className="dwellio-container pb-[120px]">
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-[-0.01em] text-primary mb-10 sm:mb-12 text-center">
          Lifestyle Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {neighbourhood.highlights.map((highlight) => (
            <div key={highlight.title} className="group cursor-pointer">
              <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden mb-6">
                <Image
                  src={highlight.image}
                  alt={highlight.imageAlt}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h3 className="font-heading text-xl font-medium text-primary mb-2">
                {highlight.title}
              </h3>
              <p className="font-sans text-sm leading-relaxed text-on-surface-variant">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="dwellio-container pb-24 sm:pb-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.2] tracking-[-0.01em] text-primary mb-6">
            Ready to move?
          </h2>
          <p className="font-sans text-base sm:text-lg leading-relaxed tracking-[0.01em] text-on-surface-variant mb-10">
            Discover curated, premium homes nestled in the heart of{" "}
            {neighbourhood.name}.
          </p>
          <Link
            href={`/properties?neighbourhood=${neighbourhood.slug}`}
            className="inline-block dwellio-label text-primary-foreground bg-primary px-8 sm:px-10 py-4 rounded-full shadow-md hover:bg-primary-container transition-all duration-300 hover:-translate-y-1"
          >
            Explore homes in {neighbourhood.name}
          </Link>
        </div>
      </section>
    </div>
  );
}