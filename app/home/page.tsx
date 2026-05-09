import Link from "next/link";

import { Button } from "@/components/ui/button";
import { HomeFilters, featuredProperties } from "@/src/Homepage";

export default function Homepage() {
  return (
    <>
      <section className="bg-surface py-20 sm:py-28">
        <div className="dwellio-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="dwellio-label mb-5 text-on-surface-variant">
              Verified homes for calm relocation
            </p>
            <h1 className="max-w-4xl font-heading text-5xl font-normal leading-tight text-primary sm:text-7xl">
              Find a residence that already feels considered.
            </h1>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-lg leading-relaxed text-on-surface-variant">
              Browse curated Bangalore homes with verified ownership, transparent terms,
              and hospitality-led support from shortlist to move-in.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-11 rounded-md px-7">
                <Link href="#verified-homes">View Homes</Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-md px-7">
                <Link href="/#collections">Curated Collections</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        id="verified-homes"
        className="bg-surface-container-low py-20 sm:py-28"
        aria-label="Verified homes"
      >
        <div className="dwellio-container">
          <div className="mb-12 flex flex-col justify-between gap-5 border-b border-outline-variant/30 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="dwellio-label mb-4 text-on-surface-variant">Available now</p>
              <h2 className="font-heading text-4xl font-normal text-primary sm:text-5xl">
                Verified Homes
              </h2>
            </div>
            <Link
              href="/#collections"
              className="dwellio-label text-primary transition-colors hover:text-on-surface-variant"
            >
              See curated collections
            </Link>
          </div>

          <HomeFilters properties={featuredProperties} />
        </div>
      </section>
    </>
  );
}
