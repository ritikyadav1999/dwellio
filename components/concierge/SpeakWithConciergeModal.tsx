"use client";

import Image from "next/image";
import type { ReactNode } from "react";
import { useState } from "react";
import {
  Flower2,
  Footprints,
  Laptop,
  Lock,
  PawPrint,
  Sparkles,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type SpeakWithConciergeModalProps = {
  trigger: ReactNode;
  source?: "concierge-page" | "property-detail" | "other";
};

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDoddqzJ_kFFrOI_gc2QJXI3cWmX0Z22PqSptzwp87nCLFOu8TR5oaOiGR5raI2UxAW7qVHQFP5jloPM5Jkkloq6tHR8leY-fUGqPO1YbOxMFsW_E7tTppUL_MsyDSBHDpEsOrXWtgpsxXiezWRpP1ccZCNOUPMfOoyo5dsopY-mvr8gw6KcmoVoHmI8faHNR6aib1qvN9PTPXibpCixpDM0kkPJAxB_7TQkCVd2LHpae6OkX88UVs8WygQ_GNRYKNuhppQDp5Cs5Y";

const ADVISOR_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBwUCjB2Jfbvyf0b85_v0nveK92EAv02mYeIckjWEeeRt25ifUZqpTMnutnMYFzC3ZZKxO60aG6W9A6p0coIF29qnLnYGjmbBX0nd1wFmHtF6_xuKyergnFf6wZAwUPeZoP_m-itCRmkocscUxaxquOWTALNgijB4wlYMa51_5FcGyhGEhWL-b76Tyyrj5_GUyoi-25pDR_Jb5o8zSCcAkwWrb05jEZ8soKdR6CLBPy9pTkRgS_SemiOqxJaQZ2mbWfJcJ9NhiB2K0";

const lifestyleChips: {
  id: string;
  label: string;
  icon: typeof Laptop;
  defaultSelected?: boolean;
}[] = [
  { id: "remote-worker", label: "Remote Worker", icon: Laptop },
  { id: "quiet-living", label: "Quiet Living", icon: Sparkles, defaultSelected: true },
  { id: "pet-friendly", label: "Pet Friendly", icon: PawPrint, defaultSelected: true },
  { id: "walkable", label: "Walkable Neighborhood", icon: Footprints },
  { id: "wellness", label: "Wellness Focused", icon: Flower2 },
];

export function SpeakWithConciergeModal({
  trigger,
  source = "other",
}: SpeakWithConciergeModalProps) {
  const [selectedLifestyle, setSelectedLifestyle] = useState<Set<string>>(() => {
    const initial = new Set<string>();
    lifestyleChips.forEach((c) => {
      if (c.defaultSelected) initial.add(c.id);
    });
    return initial;
  });

  function toggleLifestyle(id: string) {
    setSelectedLifestyle((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent
        showCloseButton
        className="grid !max-h-[min(86vh,calc(100vh-5rem))] w-full !max-w-[min(1120px,calc(100%-2rem))] gap-0 overflow-hidden !rounded-xl border border-outline-variant/40 bg-surface-container-lowest !p-0 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] !flex !flex-col lg:!flex-row lg:!items-stretch"
      >
        <DialogTitle className="sr-only">Speak with a Concierge</DialogTitle>
        <DialogDescription className="sr-only">
          Request concierge assistance with your relocation preferences.
        </DialogDescription>

        {/* Left: imagery + ethos (matches resource ~5/12) */}
        <div className="relative flex min-h-[260px] w-full flex-col justify-between bg-surface-container px-8 py-10 sm:px-10 sm:py-12 lg:min-h-0 lg:w-5/12 lg:max-w-none lg:px-10 lg:py-12">
          <Image
            src={HERO_IMAGE}
            alt=""
            fill
            className="object-cover opacity-80 mix-blend-multiply"
            sizes="(min-width: 1024px) 40vw, 100vw"
            aria-hidden
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-surface/20 to-surface/90" />

          <div className="relative z-10">
            <span className="dwellio-label mb-4 block text-primary">Concierge Service</span>
            <h2 className="font-heading text-3xl font-normal leading-[1.12] tracking-tight text-primary sm:text-4xl">
              A More
              <br />
              Thoughtful Way
              <br />
              <span className="italic font-light text-primary">to Relocate.</span>
            </h2>
          </div>

          <div className="relative z-10 mt-8 rounded-lg border border-outline-variant/40 bg-surface-container-lowest/85 p-5 backdrop-blur-md sm:p-6">
            <div className="flex items-center gap-3">
              <Image
                src={ADVISOR_IMAGE}
                alt="Eleanor Vance, Lead Relocation Advisor"
                width={56}
                height={56}
                className="size-14 rounded-full border-2 border-surface-container-lowest object-cover shadow-sm"
              />
              <div>
                <p className="text-sm font-semibold text-primary">Eleanor Vance</p>
                <p className="text-xs text-on-surface-variant">Lead Relocation Advisor</p>
              </div>
            </div>
            <p className="mt-3 text-xs italic leading-relaxed text-on-surface-variant sm:text-sm">
              &quot;We handle the logistics so you can focus on arriving. I look forward to designing
              your transition.&quot;
            </p>
          </div>
        </div>

        {/* Right: form (matches resource ~7/12) */}
        <div className="flex w-full flex-col justify-center bg-surface-container-lowest px-8 py-10 sm:px-10 sm:py-12 lg:w-7/12 lg:px-12 lg:py-14 xl:px-14 xl:py-16">
          <div className="mb-8 pr-10 lg:pr-12">
            <p className="text-base leading-relaxed text-primary">
              Your personal concierge is ready to curate your transition. Share a few details and we
              will reach out within 30 minutes.
            </p>
          </div>

          <form className="space-y-8" method="post" action="/api/concierge-inquiries">
            <input type="hidden" name="source" value={source} />
            <input
              type="hidden"
              name="lifestylePreferences"
              value={Array.from(selectedLifestyle).join(",")}
            />

            <div className="grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
              <MinimalField htmlFor="concierge-fullName" label="Full Name">
                <Input
                  id="concierge-fullName"
                  name="fullName"
                  required
                  placeholder="Jane Doe"
                  autoComplete="name"
                  className={minimalInputClassName}
                />
              </MinimalField>
              <MinimalField htmlFor="concierge-phone" label="Phone Number">
                <Input
                  id="concierge-phone"
                  name="phone"
                  required
                  type="tel"
                  autoComplete="tel"
                  placeholder="+91 98765 43210"
                  className={minimalInputClassName}
                />
              </MinimalField>
              <MinimalField htmlFor="concierge-workLocation" label="Work Location">
                <Input
                  id="concierge-workLocation"
                  name="workLocation"
                  placeholder="City or Neighborhood"
                  className={minimalInputClassName}
                />
              </MinimalField>
              <MinimalField htmlFor="concierge-budget" label="Monthly Budget">
                <Input
                  id="concierge-budget"
                  name="monthlyBudget"
                  placeholder="₹60,000 - ₹1,00,000"
                  className={minimalInputClassName}
                />
              </MinimalField>
              <MinimalField htmlFor="concierge-areas" label="Preferred Areas">
                <Input
                  id="concierge-areas"
                  name="preferredAreas"
                  placeholder="e.g., Indiranagar, Koramangala"
                  className={minimalInputClassName}
                />
              </MinimalField>
              <MinimalField htmlFor="concierge-timeline" label="Move-In Timeline">
                <Input
                  id="concierge-timeline"
                  name="moveInTimeline"
                  placeholder="Within 30 Days"
                  className={minimalInputClassName}
                />
              </MinimalField>
            </div>

            <div className="h-px w-full bg-outline-variant/30" />

            <div>
              <label className="dwellio-label mb-3 block text-primary">Lifestyle Preferences</label>
              <div className="flex flex-wrap gap-2">
                {lifestyleChips.map((chip) => {
                  const Icon = chip.icon;
                  const selected = selectedLifestyle.has(chip.id);
                  return (
                    <button
                      key={chip.id}
                      type="button"
                      onClick={() => toggleLifestyle(chip.id)}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs transition-colors duration-200 sm:text-[13px]",
                        selected
                          ? "border-tertiary-fixed bg-tertiary-fixed text-on-tertiary-fixed shadow-sm"
                          : "border-outline-variant/60 bg-transparent text-primary hover:border-primary"
                      )}
                    >
                      <Icon className="size-4 shrink-0 opacity-90 sm:size-[17px]" aria-hidden />
                      {chip.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 pt-1 sm:flex-row sm:items-center sm:gap-6">
              <Button
                type="submit"
                className="h-auto w-full rounded-sm px-7 py-3 text-sm font-medium normal-case tracking-normal shadow-[0_4px_14px_0_rgba(45,45,45,0.15)] transition-shadow hover:shadow-[0_6px_20px_rgba(45,45,45,0.23)] sm:w-auto"
              >
                Request Concierge Assistance
              </Button>
              <span className="flex items-center gap-2 text-xs text-on-surface-variant sm:text-sm">
                <Lock className="size-4 shrink-0" aria-hidden />
                Confidential &amp; Secure
              </span>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

const minimalInputClassName = cn(
  "h-auto rounded-none border-0 border-b border-outline-variant bg-transparent px-0 py-2.5 text-sm text-primary shadow-none sm:text-[15px]",
  "placeholder:text-on-surface-variant/55",
  "focus-visible:border-primary focus-visible:ring-0"
);

function MinimalField({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="dwellio-label mb-1 block text-primary"
      >
        {label}
      </label>
      {children}
    </div>
  );
}
