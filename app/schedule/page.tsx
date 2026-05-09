import Image from "next/image";
import type { ComponentProps } from "react";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  calendarDays,
  lifestyleFocus,
  moveInTimelines,
  scheduleProperty,
  timeSlots,
} from "@/src/Schedule";

const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

export default function SchedulePage() {
  return (
    <div className="bg-background text-foreground">
      <section className="dwellio-container py-12 sm:py-16">
        <div className="max-w-4xl">
          <h1 className="font-heading text-5xl font-normal leading-tight text-primary sm:text-6xl">
            Schedule a private visit at your convenience.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-on-surface-variant">
            Tailored tours designed around your timeline. Experience the architecture, the
            neighborhood, and the curated details of your future home.
          </p>
        </div>
      </section>

      <section className="dwellio-container grid gap-8 pb-24 lg:grid-cols-12 lg:items-start">
        <div className="lg:col-span-8">
          <Card className="rounded-xl border border-outline-variant/30 bg-surface-container-lowest py-0 shadow-sm">
          <CardContent className="space-y-9 p-6 sm:p-8 lg:p-12">
            <SchedulePicker />
            <VisitorForm />
            <LifestyleFocusPicker />
            <div className="flex flex-col gap-3 border-t border-outline-variant/25 pt-8 sm:flex-row">
              <Button className="h-12 flex-1 rounded-md font-heading text-lg normal-case tracking-normal">
                Confirm Visit
              </Button>
              <Button
                variant="outline"
                className="h-12 flex-1 rounded-md font-heading text-lg normal-case tracking-normal"
              >
                Speak with an Advisor
              </Button>
            </div>
          </CardContent>
          </Card>
        </div>

        <aside className="lg:col-span-4 lg:self-stretch">
          <Card className="rounded-xl border border-outline-variant/20 bg-surface-container-lowest py-0 shadow-sm lg:sticky lg:top-28">
            <div className="relative aspect-[16/10]">
              <Image
                src={scheduleProperty.image}
                alt={scheduleProperty.title}
                fill
                priority
                sizes="(min-width: 1024px) 32vw, 100vw"
                className="object-cover"
              />
              {scheduleProperty.verified ? (
                <Badge className="absolute right-4 top-4 rounded-full bg-tertiary-fixed px-3 py-1.5 text-on-tertiary-fixed">
                  <BadgeCheck className="size-3.5" aria-hidden="true" />
                  Verified
                </Badge>
              ) : null}
            </div>
            <CardContent className="space-y-5 p-5">
              <div className="grid gap-4 border-b border-outline-variant/25 pb-6 sm:grid-cols-[1fr_auto]">
                <div>
                  <h2 className="font-heading text-2xl font-normal text-primary">
                    {scheduleProperty.title}
                  </h2>
                  <p className="mt-1 text-on-surface-variant">{scheduleProperty.location}</p>
                </div>
                <div className="sm:text-right">
                  <p className="font-heading text-2xl font-normal text-primary">
                    {scheduleProperty.price}
                  </p>
                  <p className="dwellio-label mt-1 text-on-surface-variant">Per Month</p>
                </div>
              </div>

              <div className="space-y-3">
                <p className="dwellio-label flex items-center gap-2 text-on-surface-variant">
                  <ShieldCheck className="size-4 text-primary" aria-hidden="true" />
                  No Brokerage Fees
                </p>
                <p className="dwellio-label flex items-center gap-2 text-on-surface-variant">
                  <CreditCard className="size-4 text-primary" aria-hidden="true" />
                  Transparent Pricing Guarantee
                </p>
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>
    </div>
  );
}

function SchedulePicker() {
  return (
    <div>
      <p className="dwellio-label mb-4 text-on-surface-variant">Select Date & Time</p>
      <div className="overflow-hidden rounded-lg border border-outline-variant/50">
        <div className="flex items-center justify-between border-b border-outline-variant/30 bg-surface-container-low px-4 py-4">
          <h2 className="font-heading text-2xl font-normal text-primary">November 2024</h2>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon-xs" className="rounded-full">
              <ChevronLeft />
              <span className="sr-only">Previous month</span>
            </Button>
            <Button variant="ghost" size="icon-xs" className="rounded-full">
              <ChevronRight />
              <span className="sr-only">Next month</span>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-7 border-b border-outline-variant/20 py-4 text-center text-[11px] font-semibold uppercase tracking-[0.12em] text-on-surface-variant/70">
          {weekDays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 p-2 text-center">
          {calendarDays.map((day, index) => (
            <button
              key={`${day.label}-${index}`}
              type="button"
              className={cn(
                "rounded-lg py-4 transition-colors",
                day.muted && "text-outline-variant/60",
                !day.muted && !day.selected && "text-primary hover:bg-surface-container-low",
                day.selected && "bg-primary text-primary-foreground shadow-sm"
              )}
            >
              {day.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-5 flex gap-3 overflow-x-auto pb-2">
        {timeSlots.map((slot) => (
          <button
            key={slot.label}
            type="button"
            className={cn(
              "shrink-0 rounded-full border px-6 py-3 text-xs font-semibold uppercase tracking-[0.08em] transition-colors",
              slot.selected
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-outline-variant/60 text-on-surface-variant hover:border-primary hover:text-primary"
            )}
          >
            {slot.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function VisitorForm() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <FormField label="Full Name" placeholder="John Doe" />
      <FormField label="Phone Number" placeholder="+91 99999 00000" type="tel" />
      <FormField
        label="Email Address"
        placeholder="john.doe@example.com"
        type="email"
        className="md:col-span-2"
      />
      <div className="md:col-span-2">
        <p className="dwellio-label mb-2 text-on-surface-variant">Move-In Timeline</p>
        <select className="h-11 w-full border-0 border-b border-outline-variant bg-transparent text-base text-primary outline-none focus:border-primary">
          {moveInTimelines.map((timeline) => (
            <option key={timeline}>{timeline}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

function LifestyleFocusPicker() {
  return (
    <div>
      <p className="dwellio-label mb-4 text-on-surface-variant">Lifestyle Focus</p>
      <div className="flex flex-wrap gap-3">
        {lifestyleFocus.map((item) => (
          <button
            key={item.label}
            type="button"
            className={cn(
              "rounded-full border px-5 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-colors",
              item.selected
                ? "border-tertiary-fixed bg-tertiary-fixed text-on-tertiary-fixed"
                : "border-transparent bg-surface-container-high text-primary hover:border-primary/35"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function FormField({
  label,
  className,
  ...props
}: ComponentProps<typeof Input> & {
  label: string;
}) {
  return (
    <div className={className}>
      <p className="dwellio-label mb-2 text-on-surface-variant">{label}</p>
      <Input className="h-11 border-b-outline-variant text-base" {...props} />
    </div>
  );
}
