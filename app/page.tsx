import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  Landmark,
  ShieldCheck,
  Users,
  WalletCards,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PropertyCard, featuredProperties } from "@/src/Homepage";

const trustMarkers = [
  { label: "Verified Properties", icon: BadgeCheck },
  { label: "Verified Owners", icon: ShieldCheck },
  { label: "Transparent Pricing", icon: WalletCards },
  { label: "Secure Agreements", icon: FileCheck2 },
  { label: "Zero Brokerage", icon: Landmark },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <CuratedCollections />
      <HostContactSection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative flex min-h-[760px] items-center justify-center overflow-hidden py-24 sm:min-h-[860px]">
      <Image
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPC1Uj5vGhXbPxDuofdnFUwZL0_AOOPUVyxEJZ30FgIOBUKPPR-nB3SAAWnsXjxxHiN2Won0RIQvx7fnqA3gIc2bsSXuGT5FbcMQonnEROkiBGaOtjJuvGgMTIXeag_UTI6DO8ANchvoLEheX7Wpoh2iT9DzsgKd9Lc16nnfyANzuwHeovL4zWGxV8PTLcT_9redVVGfgpev2FSoH5hcvz-2TP_CWVuohGNHLuH2dOiSiN7RTQY9AgZjer4SC1WIibfJTYRPuUPc0"
        alt="Expansive premium living room with soft warm natural light and minimalist cream furniture."
        fill
        priority
        sizes="100vw"
        className="scale-105 object-cover"
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgb(253_248_248/0.66),rgb(253_248_248/0.18)_36%,rgb(253_248_248/0.78))]" />

      <div className="dwellio-container relative z-10 text-center">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <h1 className="font-heading text-5xl font-normal leading-[1.08] text-primary sm:text-7xl lg:text-8xl">
            <span className="block">Redefining urban living</span>
            <span className="mt-3 block italic">in Bangalore</span>
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-primary/80 sm:text-xl">
            Curated, verified homes for the discerning professional. Experience a seamless
            transition into the city&apos;s most desirable neighborhoods.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-full px-8">
              <Link href="/home">Explore Verified Homes</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-12 rounded-full border-primary/30 px-8 hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link href="#host">Become a Host</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  return (
    <section id="about" className="bg-surface py-20 sm:py-28" aria-label="Dwellio trust standards">
      <div className="dwellio-container">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trustMarkers.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.label}
                size="sm"
                className="rounded-xl border border-outline-variant/25 bg-surface-container-lowest py-8 shadow-none transition-colors duration-300 hover:bg-surface-container-low"
              >
                <CardContent className="flex flex-col items-center gap-5 text-center">
                  <span className="flex size-16 items-center justify-center rounded-full bg-surface-container text-primary">
                    <Icon className="size-7" aria-hidden="true" />
                  </span>
                  <span className="dwellio-label max-w-28 text-primary">{item.label}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CuratedCollections() {
  return (
    <section id="collections" className="bg-surface-container-low py-24 sm:py-32">
      <div className="dwellio-container">
        <div className="flex flex-col justify-between gap-8 border-b border-outline-variant/30 pb-10 sm:flex-row sm:items-end">
          <div>
            <p className="dwellio-label mb-4 text-on-surface-variant">Exclusively verified</p>
            <h2 className="font-heading text-4xl font-normal leading-tight text-primary sm:text-6xl">
              Curated Collections
            </h2>
          </div>
          <Link
            href="/home"
            className="dwellio-label text-primary transition-colors duration-300 hover:text-on-surface-variant"
          >
            View All Collection
          </Link>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3 lg:gap-14">
          {featuredProperties.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={property}
              imagePriority={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function HostContactSection() {
  const hostBenefits = [
    {
      label: "Personally vetted residents",
      description:
        "Every tenant passes our hospitality-grade screening — identity, income, and lifestyle alignment.",
      icon: ShieldCheck,
    },
    {
      label: "White-glove operations",
      description:
        "From professional photography to maintenance coordination, your property is managed with care.",
      icon: Building2,
    },
    {
      label: "Curated onboarding",
      description:
        "A dedicated hospitality advisor ensures a seamless, premium transition for every new resident.",
      icon: Users,
    },
  ];

  return (
    <section
      id="host"
      className="relative border-t border-outline-variant/25 bg-primary-container py-24 overflow-hidden sm:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgb(255_255_255/0.04),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="dwellio-container relative z-10">
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="dwellio-label mb-6 text-on-primary-container/55">Become a host</p>
            <h2 className="font-heading text-4xl font-normal leading-tight text-on-primary sm:text-5xl lg:text-6xl">
              Share your residence with the city&apos;s most discerning residents.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-primary-container/70">
              Partner with Dwellio for a hospitality-led experience — vetted tenants, calmer
              operations, and a dedicated advisor to manage every detail.
            </p>

            <div className="mt-12 grid gap-8 sm:grid-cols-3">
              {hostBenefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <div key={benefit.label} className="flex flex-col gap-4">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-on-primary/10 text-on-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <span className="dwellio-label text-on-primary">{benefit.label}</span>
                      <p className="mt-2.5 text-sm leading-relaxed text-on-primary-container/55">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-full border-0 bg-on-primary px-8 text-primary transition-colors duration-300 hover:bg-on-primary/90"
              >
                <Link href="mailto:hello@dwellio.com">
                  Partner with Dwellio
                  <ArrowRight className="ml-2 size-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                alt="Architectural interior with premium finishes, warm ambient light, and curated furnishings."
                fill
                sizes="(min-width: 1024px) 38vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
            <div
              className="absolute -bottom-6 -left-6 hidden size-32 rounded-2xl border border-on-primary/8 bg-on-primary/[0.04] backdrop-blur-sm lg:block"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
