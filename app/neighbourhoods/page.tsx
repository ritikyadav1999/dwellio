import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

import { neighbourhoodData, heroImage } from "@/src/Neighbourhood";

export default function NeighbourhoodsPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative flex min-h-[700px] items-center overflow-hidden py-20 sm:min-h-[819px]">
        <Image
          src={heroImage}
          alt="Cinematic urban landscape view during golden hour."
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(253_248_248/0.4),rgb(253_248_248/0.2),rgb(253_248_248))]" />
        <div className="dwellio-container relative z-10 text-center">
          <h1 className="font-heading text-5xl font-normal leading-[1.1] text-primary sm:text-7xl">
            Explore Neighbourhoods
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-on-surface-variant sm:text-xl">
            Discover the vibe, lifestyle, and everyday experience of Bangalore&apos;s most popular areas.
          </p>
        </div>
      </section>

      <section className="py-[120px] bg-background">
        <div className="dwellio-container">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <MapPin className="mx-auto size-10 text-secondary" aria-hidden="true" />
            <h2 className="font-heading text-4xl font-normal leading-tight text-primary sm:text-5xl">
              More than just a location.
            </h2>
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Choosing an area is more than choosing a flat—it&apos;s about finding a rhythm that fits your lifestyle. Whether you seek the electric energy of a startup hub or the quiet canopy of old-city streets, Dwellio curates spaces that feel like home long before you turn the key.
            </p>
          </div>
        </div>
      </section>

      <section className="py-[60px] bg-surface-container-lowest">
        <div className="dwellio-container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {neighbourhoodData.map((neighbourhood) => (
              <Link
                key={neighbourhood.name}
                href={`/neighbourhoods/${neighbourhood.slug}`}
                className="group overflow-hidden rounded-xl border border-outline-variant/25 bg-surface-container-lowest dwellio-soft-shadow transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={neighbourhood.image}
                    alt={neighbourhood.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {neighbourhood.featured ? (
                    <span className="absolute right-4 top-4 rounded-full bg-tertiary-fixed px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-on-tertiary-fixed-variant shadow-sm">
                      Popular
                    </span>
                  ) : null}
                </div>

                <div className="p-8">
                  <h3 className="font-heading text-3xl font-normal text-primary">{neighbourhood.name}</h3>
                  <p className="mt-2 min-h-12 text-base leading-relaxed text-on-surface-variant">
                    {neighbourhood.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {neighbourhood.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-outline-variant/30 px-3 py-1 text-[11px] font-normal tracking-wide text-on-surface-variant"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}